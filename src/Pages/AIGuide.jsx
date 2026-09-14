import React, { useEffect, useRef, useState } from "react";
import "./AI.jsx";

const API_URL = (import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? "http://localhost:5000" : "")).replace(/\/$/, "");

export default function AIGuide() {
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("Select a state to begin.");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const historyRef = useRef([]);
  const recognitionRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/api/states`)
      .then((res) => {
        if (!res.ok) throw new Error("Could not load states");
        return res.json();
      })
      .then((data) => {
        setStates(data);
        setStatus("Choose a state and start exploring.");
      })
      .catch((err) => {
        console.error(err);
        setStatus("Could not connect to the Heritage server.");
      });
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onstart = () => {
      setListening(true);
      setStatus("Listening...");
    };
    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;
      setQuestion(spoken);
      setListening(false);
      askAI(spoken);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
      setStatus(`Voice error: ${event.error}`);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;

    return () => {
      try { recognition.stop(); } catch {}
      recognitionRef.current = null;
    };
  }, [state, language]);

  const cleanAnswer = (text) =>
    (text || "")
      .replace(/^#{1,6}\s*/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/^[-•]\s*/gm, "")
      .replace(/^---+$/gm, "")
      .replace(/[🌿✨🏛️🎉🌶️🪔🎭🎨]/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

  function speakAnswer(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const voices = window.speechSynthesis.getVoices();
    const voice = language === "hi"
      ? voices.find((v) => v.lang.toLowerCase() === "hi-in") ||
        voices.find((v) => v.lang.toLowerCase().startsWith("hi"))
      : voices.find((v) => v.lang.toLowerCase() === "en-in") ||
        voices.find((v) => v.lang.toLowerCase().startsWith("en"));

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = voice?.lang || (language === "hi" ? "hi-IN" : "en-IN");
    if (voice) speech.voice = voice;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.onstart = () => setStatus("Heritage AI is speaking...");
    speech.onend = () => setStatus("You can ask another question.");
    speech.onerror = () => setStatus("Voice playback failed.");
    window.speechSynthesis.speak(speech);
  }

  async function askAI(text) {
    if (!state) {
      setStatus("Please select a state first.");
      return;
    }
    if (!text.trim() || loading) {
      if (!text.trim()) setStatus("Please ask a question.");
      return;
    }

    const userMessage = text.trim();
    setMessages((prev) => [...prev, { sender: "You", text: userMessage, type: "user" }]);
    setQuestion("");
    setLoading(true);
    setStatus("Heritage AI is thinking...");

    try {
      const response = await fetch(`${API_URL}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          state,
          question: userMessage,
          language,
          history: historyRef.current,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AI request failed");

      const answer = cleanAnswer(data.answer);
      setMessages((prev) => [...prev, { sender: "Heritage AI", text: answer, type: "ai" }]);

      historyRef.current = [
        ...historyRef.current,
        { role: "user", content: userMessage },
        { role: "assistant", content: answer },
      ].slice(-12);

      setStatus("Heritage AI answered.");
      speakAnswer(answer);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "Heritage AI",
          text: "I couldn't connect to Heritage AI. Please check the backend and API URL.",
          type: "ai",
        },
      ]);
      setStatus(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleStateChange(value) {
    setState(value);
    historyRef.current = [];
    setMessages([]);
    if (!value) {
      setStatus("Select a state to begin.");
      return;
    }
    const selected = states.find((item) => item.id === value);
    setStatus(`${selected?.name || value} selected. Ask me anything.`);
  }

  function startListening() {
    if (!recognitionRef.current) {
      setStatus("Voice recognition is not supported in this browser.");
      return;
    }
    recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
    try { recognitionRef.current.start(); } catch (error) { console.log(error); }
  }

  function stopVoice() {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    setListening(false);
    setStatus("Voice stopped.");
  }

  return (
    <main className="ai-page">
      <div className="ai-container">
        <div className="ai-header">
          <span className="ai-label">HERITAGE AI</span>
          <h1>Explore India's heritage<br /><em>through conversation.</em></h1>
          <p>Choose a state and ask about its culture, food, clothing, crafts, traditions, music and stories.</p>
        </div>

        <div className="ai-controls">
          <select value={state} onChange={(e) => handleStateChange(e.target.value)}>
            <option value="">Select a state</option>
            {states.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        <div className="ai-chat" ref={chatRef}>
          {!messages.length && (
            <div className="ai-welcome">
              <h2>Welcome to Heritage AI</h2>
              <p>{state ? "Ask me anything about the selected state's heritage." : "Choose a state above to begin exploring."}</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div className={`ai-message ${message.type}`} key={`${message.type}-${index}`}>
              <div className="ai-message-name">{message.sender}</div>
              <div className="ai-message-content">{message.text}</div>
            </div>
          ))}

          {loading && (
            <div className="ai-message ai">
              <div className="ai-message-name">Heritage AI</div>
              <div className="ai-message-content">Thinking...</div>
            </div>
          )}
        </div>

        <div className="ai-input-row">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askAI(question);
              }
            }}
            placeholder={language === "hi" ? "विरासत के बारे में कुछ पूछें..." : "Ask something about the heritage..."}
          />
          <button className="ai-voice" onClick={startListening} disabled={listening || loading}>
            {listening ? "Listening" : "Voice"}
          </button>
          <button onClick={() => askAI(question)} disabled={loading}>Ask</button>
          <button className="ai-stop" onClick={stopVoice}>Stop</button>
        </div>

        <div className="ai-status">{status}</div>
      </div>
    </main>
  );
}
