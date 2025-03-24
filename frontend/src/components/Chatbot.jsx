import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [step, setStep] = useState("askInfo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! May I have your name, please?" },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInfoSubmit = async () => {
    if (!name) {
      alert("Please provide your name.");
      return;
    }
    if (!email) {
      alert("Please provide your email.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");

    // Send a "start chat" message to the backend to trigger the lead notification
    try {
      const startChatMessage = [{ role: "user", content: "Start chat" }];
      await axios.post("http://localhost:5000/chat", {
        messages: startChatMessage,
        name,
        email,
      });
    } catch (error) {
      console.error("Error sending lead notification:", error);
      // Proceed to chat even if the lead notification fails
    }

    // Update messages and transition to chat stage
    setMessages([
      ...messages,
      {
        role: "assistant",
        content: `Nice to meet you, ${name}! How can I assist you today?`,
      },
    ]);
    setStep("chat");
  };

  const handleSubmit = async () => {
    if (!userMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(updatedMessages);
    setUserMessage("");
    setIsTyping(true);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        messages: updatedMessages.filter((msg) => msg.role !== "system"),
        name,
        email,
      });

      // Improved link handling - split by sentences first
      const sentences = response.data.reply.split(/(?<=\.|\?|\!)\s+/);
      const processedSentences = sentences.map((sentence) => {
        return sentence.replace(/(https?:\/\/[^\s]+)/g, (match) => {
          // Check if the URL is already wrapped in HTML
          if (match.includes("href=")) return match;
          // Remove trailing punctuation from URL
          const cleanUrl = match.replace(/[.,!?]$/, "");
          return `<a href="${cleanUrl}" target="_blank" class="text-blue-500 underline">${cleanUrl}</a>${match.slice(
            cleanUrl.length
          )}`;
        });
      });
      const replyContent = processedSentences.join(" ");

      setTimeout(() => {
        setMessages([
          ...updatedMessages,
          { role: "assistant", content: replyContent },
        ]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && step === "chat") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 animate-pulse"
        >
          <FaRobot size={24} />
        </button>
      )}

      {isChatbotOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg h-[500px] flex flex-col border border-gray-200 overflow-hidden transition-all duration-300 animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaRobot size={20} className="text-white" />
              <h2 className="text-lg font-semibold">TechLiftUp Assistant</h2>
            </div>
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } items-start`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mr-2 shadow-md mt-1">
                    <FaRobot size={14} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl shadow-md ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-100"
                  } transition-all duration-200 animate-fadeIn`}
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 shadow-md mt-1">
                    <FaUser size={14} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mr-2 shadow-md">
                  <FaRobot size={14} className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl shadow-md inline-flex space-x-1">
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg shadow-inner">
            {step === "askInfo" ? (
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className={`w-full p-3 pl-4 border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <button
                  onClick={handleInfoSubmit}
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
                >
                  Start Chatting
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 p-3 pl-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  onClick={handleSubmit}
                  className="p-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md"
                  disabled={!userMessage.trim()}
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
