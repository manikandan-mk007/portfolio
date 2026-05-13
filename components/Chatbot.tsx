"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
  intent?: string;
  confidence?: number;
};

type ChatApiResponse = {
  success: boolean;
  reply: string;
  intent: string;
  confidence: number;
};

const suggestedQuestions = [
  "Who is Manikandan?",
  "What skills does he know?",
  "Tell me about Clinic Management System",
  "How can I contact him?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I’m Manikandan’s portfolio assistant. Ask me about his skills, projects, experience, resume, or contact details.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const API_URL =
    process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (customMessage?: string) => {
    const userMessage = customMessage || input.trim();

    if (!userMessage || isTyping) return;

    const newUserMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: userMessage,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Backend response failed");
      }

      const data: ChatApiResponse = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          data.reply ||
          "I’m not fully sure about that. You can ask about Manikandan’s skills, projects, experience, education, GitHub, resume, or contact details.",
        intent: data.intent,
        confidence: data.confidence,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Sorry, I cannot connect to the chatbot backend right now. Please make sure the FastAPI backend is running on http://127.0.0.1:8000.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Chat cleared. Ask me anything about Manikandan’s portfolio.",
      },
    ]);
  };

  return (
    <div className="portfolio-chatbot">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-brand">
              <div className="chatbot-logo-text">
                TM<span>.</span>
              </div>

              <div>
                <h3>
                    Portfolio <span>Assistant</span>
                </h3>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={clearChat}
                aria-label="Clear chat"
                title="Clear chat"
              >
                ↻
              </button>

              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                title="Close"
              >
                ×
              </button>
            </div>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-welcome-strip">
              <span className="chatbot-status-dot"></span>
              <span>Online · Powered by Manikandan’s portfolio data</span>
            </div>

            <div className="chatbot-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chatbot-message-row ${
                    message.sender === "user" ? "user" : "bot"
                  }`}
                >
                  <div className={`chatbot-message ${message.sender}`}>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="chatbot-message-row bot">
                  <div className="chatbot-message bot typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="chatbot-suggestions">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              placeholder="Ask about Manikandan..."
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`chatbot-floating-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open portfolio chatbot"
      >
        {isOpen ? (
          <span className="chatbot-close-symbol">×</span>
        ) : (
          <>
            <span className="chatbot-pulse"></span>
            <span className="chatbot-bot-icon">✦</span>
          </>
        )}
      </button>
    </div>
  );
}