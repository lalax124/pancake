import React, { useState } from "react";
import "./HeritageGame.css";

const questions = [
  {
    question:
      "Which ancient university was one of the world's earliest centres of learning?",
    options: ["Nalanda", "Hampi", "Konark", "Sanchi"],
    answer: "Nalanda",
  },
  {
    question: "The Taj Mahal is located in which Indian state?",
    options: ["Rajasthan", "Uttar Pradesh", "Bihar", "Madhya Pradesh"],
    answer: "Uttar Pradesh",
  },
  {
    question: "Which monument is famous for its stone chariot?",
    options: ["Konark Sun Temple", "Red Fort", "Sanchi Stupa", "Qutub Minar"],
    answer: "Konark Sun Temple",
  },
  {
    question: "Hampi is mainly associated with which historical empire?",
    options: [
      "Maurya Empire",
      "Gupta Empire",
      "Vijayanagara Empire",
      "Mughal Empire",
    ],
    answer: "Vijayanagara Empire",
  },
  {
    question: "Which city is famous for the Golden Temple?",
    options: ["Patna", "Amritsar", "Jaipur", "Varanasi"],
    answer: "Amritsar",
  },
];

export default function HeritageGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      setScore((prev) => prev + 10);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelected(null);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="heritage-game">
        <div className="game-card result-card">
          <div className="trophy">🏆</div>

          <h1>Heritage Explorer!</h1>

          <p className="result-text">
            You completed the Heritage Challenge.
          </p>

          <div className="final-score">
            {score} / {questions.length * 10}
          </div>

          <p className="message">
            {score === 50
              ? "Amazing! You are a true Heritage Explorer! 🇮🇳"
              : score >= 30
              ? "Great job! Keep exploring India's heritage!"
              : "Good try! Explore more heritage and try again!"}
          </p>

          <button className="restart-btn" onClick={restartGame}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="heritage-game">
      <div className="game-card">

        {/* Header */}
        <div className="game-header">
          <div>
            <p className="small-title">HERITAGE CHALLENGE</p>
            <h1>Guess the Heritage</h1>
          </div>

          <div className="score">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-info">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question */}
        <div className="question-box">
          <div className="question-icon">🏛️</div>

          <h2>{question.question}</h2>
        </div>

        {/* Options */}
        <div className="options">
          {question.options.map((option, index) => {
            let className = "option";

            if (selected) {
              if (option === question.answer) {
                className += " correct";
              } else if (option === selected) {
                className += " wrong";
              }
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => handleAnswer(option)}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>

                {selected && option === question.answer && (
                  <span className="result-icon">✓</span>
                )}

                {selected &&
                  option === selected &&
                  option !== question.answer && (
                    <span className="result-icon">✕</span>
                  )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected && (
          <div
            className={
              selected === question.answer
                ? "feedback correct-feedback"
                : "feedback wrong-feedback"
            }
          >
            {selected === question.answer
              ? "✓ Correct! +10 points"
              : `✕ Not quite! The answer is ${question.answer}.`}
          </div>
        )}

        <p className="game-tip">
          💡 Explore India's heritage to discover more!
        </p>
      </div>
    </div>
  );
}