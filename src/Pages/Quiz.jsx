import React, { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      id: 2,
      question: "2 + 2 equals to?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: 3,
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Jupiter",
    },
    {
      id: 4,
      question: "Which animal is known as the king of the jungle?",
      options: ["Elephant", "Lion", "Tiger", "Bear"],
      answer: "Lion",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Assessment Complete!</h2>
          <p>
            Your score is {score} out of {questions.length}.
          </p>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Retry Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Admission Assessment Test</h2>
          <p>
            Question {currentQuestion + 1}/{questions.length}
          </p>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            className="btn-primary"
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
