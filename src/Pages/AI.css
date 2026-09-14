import React, { useState, useEffect, useRef } from 'react';
import './AIPage.css';

const API_URL = "http://localhost:5000";

const AIPage = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [language, setLanguage] = useState('en');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [statusText, setStatusText] = useState('Select a state to begin.');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const chatBoxRef = useRef(null);
  const recognitionRef = useRef(null);

  // Load States on mount
  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await fetch(`${API_URL}/api/states`);
        if (!response.ok) throw new Error("Failed to fetch states");
        const data = await response.json();
        setStates(data);
        setStatusText("Choose a state and start exploring.");
      } catch (error) {
        console.error("Error fetching states:", error);
        setStatusText("Could not connect to the Heritage server.");
      }
    }
    fetchStates();
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setStatusText("Listening... Speak now.");
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setQuestion(spokenText);
        setStatusText("I heard you. Asking Heritage AI...");
        handleAskAI(spokenText);
      };

      recognition.onerror = (event) => {
        console.error("Voice error:", event.error);
        setStatusText("Voice error: " + event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Auto-scroll chat box when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Clean Markdown & Emojis from AI output
  const cleanAnswer = (text) => {
    if (!text) return "";
    return text
      .replace(/^#{1,6}\s*/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/^[-•]\s*/gm, "")
      .replace(/^---+$/gm, "")
      .replace(/[🌿✨🏛️🎉🌶️🪔🎭🎨]/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  };

  // Text-to-Speech Output
  const speakAnswer = (text, lang) => {
    if (!("speechSynthesis" in window)) {
      setStatusText("Voice is not supported.");
      return;
    }

    window.speechSynthesis.cancel();
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = null;

    if (lang === "hi") {
      selectedVoice = voices.find(v => v.lang.toLowerCase() === "hi-in") || 
                      voices.find(v => v.lang.toLowerCase().startsWith("hi"));
    } else {
      selectedVoice = voices.find(v => v.lang.toLowerCase() === "en-in") || 
                      voices.find(v => v.lang.toLowerCase().startsWith("en"));
    }

    if (lang === "hi" && !selectedVoice) {
      setStatusText("No Hindi voice is installed in your browser.");
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      speech.voice = selectedVoice;
      speech.lang = selectedVoice.lang;
    }
    speech.rate = 0.9;
    speech.pitch = 1;

    speech.onstart = () => setStatusText("Heritage AI is speaking...");
    speech.onend = () => setStatusText("You can ask another question.");
    speech.onerror = () => setStatusText("Voice playback failed.");

    window.speechSynthesis.speak(speech);
  };

  // Handle Asking AI
  const handleAskAI = async (queryToAsk) => {
    const currentQuestion = queryToAsk || question;

    if (!selectedState) {
      setStatusText("Please select a state first.");
      return;
    }

    if (!currentQuestion.trim()) {
      setStatusText("Please ask a question.");
      return;
    }

    // Add user message to UI
    setMessages((prev) => [...prev, { sender: "You", text: currentQuestion, type: "user" }]);
    setQuestion('');
    setStatusText("Heritage AI is thinking...");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          state: selectedState,
          question: currentQuestion,
          language: language,
          history: conversationHistory
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AI request failed");

      const answer = cleanAnswer(data.answer);

      // Add AI response to UI
      setMessages((prev) => [...prev, { sender: "Heritage AI", text: answer, type: "ai" }]);

      // Update history (max 12 entries)
      setConversationHistory((prev) => {
        const updated = [
          ...prev,
          { role: "user", content: currentQuestion },
          { role: "assistant", content: answer }
        ];
        return updated.slice(-12);
      });

      setStatusText("Heritage AI answered.");
      speakAnswer(answer, language);

    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "Error",
          text: "I couldn't connect to Heritage AI. Please make sure the Node.js server is running.",
          type: "ai"
        }
      ]);
      setStatusText("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Voice Input Trigger
  const handleVoiceClick = () => {
    if (!recognitionRef.current) {
      setStatusText("Voice recognition is not supported in this browser.");
      return;
    }

    recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error(error);
    }
  };

  // Stop Speech Output
  const handleStopSpeech = () => {
    window.speechSynthesis.cancel();
    setStatusText("Voice stopped.");
  };

  // Handle State Selector Change
  const handleStateChange = (e) => {
    const val = e.target.value;
    setSelectedState(val);
    setConversationHistory([]);
    setMessages([]);

    const stateObj = states.find(s => String(s.id) === String(val));
    const stateName = stateObj ? stateObj.name : '';

    if (!val) {
      setStatusText("Select a state to begin.");
    } else {
      setStatusText(`${stateName} selected. Ask me anything.`);
    }
  };

  // Handle Key Down (Enter to Send)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskAI();
    }
  };

  const selectedStateObj = states.find(s => String(s.id) === String(selectedState));

  return (
    <div className="heritage-ai-container">
      <div className="header">
        <h1>Heritage AI</h1>
        <p>Explore India's culture through conversation</p>
      </div>

      <div className="controls">
        <select id="stateSelect" value={selectedState} onChange={handleStateChange}>
          <option value="">Select a state</option>
          {states.map((st) => (
            <option key={st.id} value={st.id}>
              {st.name}
            </option>
          ))}
        </select>

        <select id="languageSelect" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      <div className="chat-box" ref={chatBoxRef}>
        {messages.length === 0 ? (
          <div className="welcome">
            <h2>{selectedStateObj ? selectedStateObj.name : "Welcome to Heritage AI"}</h2>
            <p>
              {selectedStateObj
                ? `Ask me about the culture, food, clothing, crafts, traditions, places, music or stories of ${selectedStateObj.name}.`
                : "Choose a state and ask me anything about its culture, food, clothing, crafts, traditions, places and stories."}
            </p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <div className="message-name">{msg.sender}</div>
              <div className="message-content">{msg.text}</div>
            </div>
          ))
        )}
      </div>

      <div className="input-area">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={language === "hi" ? "विरासत के बारे में कुछ पूछें..." : "Ask something about the heritage..."}
        />

        <button onClick={handleVoiceClick} className="voice-btn" type="button">
          {isListening ? "Listening" : "🎤"}
        </button>

        <button onClick={() => handleAskAI()} disabled={loading} type="button">
          Ask
        </button>

        <button onClick={handleStopSpeech} className="stop-btn" type="button">
          Stop
        </button>
      </div>

      <div className="status">{statusText}</div>
    </div>
  );
};

export default AIPage;
