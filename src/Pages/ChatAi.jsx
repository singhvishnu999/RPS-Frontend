import React, { useState, useRef } from "react";
import "./ChatAi.css";
import { HiArrowSmUp } from "react-icons/hi";
import axios from "axios";

const ChatAi = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const inputRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState({
    req: "",
    res: "",
  });

  const handleAiResponse = async (e) => {
    e.preventDefault();
    if (!prompt.req.trim()) return;

    try {
        setLoading(true);
        const response = await axios.post(`${backendUrl}/chatAi`, prompt);
        setLoading(false);
        
      const aiResponse = response.data.response;
      setHistory((prev) => [
        ...prev,
        { question: prompt.req, answer: aiResponse },
      ]);
      setPrompt({ req: "", res: "" });
      inputRef.current?.focus();
    } catch (error) {
      console.error("AI error:", error);
      setPrompt((prev) => ({
        ...prev,
        res: "Sorry, something went wrong. Try again.",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrompt({ ...prompt, [name]: value });
  };

  return (
    <div className="chat-ai">
      {loading && <div className="spinner"></div>}
      {prompt.res && <p className="response">{prompt.res}</p>}

      <div className="chat-history">
        {history.map((item, index) => (
          <div key={index} className="chat-entry">
            <p className="question">
               <strong>{item.question}</strong>
            </p>
            <p className="answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleAiResponse} id="prompt">
        <input
          type="text"
          name="req"
          ref={inputRef}
          value={prompt.req}
          onChange={handleChange}
          placeholder="Ask anything"
          autoComplete="off"
        />
        <button type="submit">
          <HiArrowSmUp />
        </button>
      </form>
    </div>
  );
};

export default ChatAi;
