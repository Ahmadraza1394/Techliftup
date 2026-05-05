import { useState, useEffect } from "react";
import "./ServiceShowcase.css";

const ServiceShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeChat, setActiveChat] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [activeChats] = useState(24);

  const conversations = [
    {
      id: 0,
      av: "SM",
      color: "#0369A1",
      name: "Sara Mitchell",
      msgs: [
        {
          from: "bot",
          text: "Hi Sara! I'm NexaBot, your AI assistant. How can I help you today?",
        },
        { from: "user", text: "Hi! I forgot my password and can't log in." },
        {
          from: "bot",
          text: "No worries! I can help you reset it right away. Could you confirm the email address on your account?",
        },
        { from: "user", text: "It's sara.mitchell@gmail.com" },
        {
          from: "bot",
          text: "Perfect! I've sent a password reset link to sara.mitchell@gmail.com. Please check your inbox — it should arrive within 2 minutes. Is there anything else I can help with?",
        },
      ],
    },
    {
      id: 1,
      av: "JT",
      color: "#7C3AED",
      name: "James Thornton",
      msgs: [
        {
          from: "bot",
          text: "Hello James! Welcome back. How can I assist you today?",
        },
        { from: "user", text: "I'd like to upgrade to the Pro plan please." },
        {
          from: "bot",
          text: "Great choice! The Pro plan gives you unlimited AI conversations, priority support, and advanced analytics. Would you like to upgrade now for $49/month?",
        },
        { from: "user", text: "Yes, that works!" },
        {
          from: "bot",
          text: "Awesome! I've started your upgrade. You'll receive a confirmation email shortly and your Pro features will be active immediately. Enjoy!",
        },
      ],
    },
    {
      id: 2,
      av: "PS",
      color: "#059669",
      name: "Priya Sharma",
      msgs: [
        {
          from: "bot",
          text: "Hi Priya! I'm here to help. What can I do for you?",
        },
        {
          from: "user",
          text: "Can you explain how the analytics dashboard works?",
        },
        {
          from: "bot",
          text: "Of course! The analytics dashboard shows real-time insights: conversation volume, user satisfaction scores, response times, and AI accuracy. You can filter by date range and export reports. Would you like a quick video tutorial?",
        },
        { from: "user", text: "Yes please, that would be helpful!" },
        {
          from: "bot",
          text: "Perfect! I've sent a 3-minute tutorial video to your email. It covers all the key features. Feel free to ask if you have questions after watching!",
        },
      ],
    },
  ];

  const renderChat = () => {
    const convo = conversations[activeChat];
    setChatMessages(convo.msgs);
  };

  useEffect(() => {
    renderChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChat]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages([
      ...chatMessages,
      { from: "user", text: chatInput },
      {
        from: "bot",
        text: "Thanks for your message! Our AI is processing your request...",
      },
    ]);
    setChatInput("");
  };

  return (
    <div className="service-showcase-page">
      <div className="service-tabs">
        <button
          className={`service-tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          AI Chatbot
        </button>
        <button
          className={`service-tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Web Dev
        </button>
        <button
          className={`service-tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Design
        </button>
        <button
          className={`service-tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          App Dev
        </button>
        <button
          className={`service-tab ${activeTab === 4 ? "active" : ""}`}
          onClick={() => setActiveTab(4)}
        >
          Google Ads
        </button>
      </div>

      {/* AI Chatbot Panel */}
      {activeTab === 0 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="service-logo">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="service-brand-name">
                NexaBot — AI Customer Support
              </span>
              <span
                className="service-badge service-badge-green"
                style={{ marginLeft: "8px" }}
              >
                <span
                  className="service-live-dot"
                  style={{ marginRight: "4px" }}
                ></span>
                Live
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "10px", color: "var(--service-text3)" }}>
                3 agents online
              </span>
              <div className="service-avatar">AK</div>
            </div>
          </div>

          <div className="service-chat-wrap">
            <div className="service-chat-sidebar">
              <div className="service-chat-sb-head">
                Conversations{" "}
                <span className="service-badge service-badge-blue">
                  {activeChats}
                </span>
              </div>
              <div className="service-chat-list">
                {conversations.map((convo, idx) => (
                  <div
                    key={convo.id}
                    className={`service-chat-item ${activeChat === idx ? "active" : ""}`}
                    onClick={() => setActiveChat(idx)}
                  >
                    <div
                      className="service-chat-item-av"
                      style={{ background: convo.color }}
                    >
                      {convo.av}
                    </div>
                    <div className="service-chat-item-info">
                      <div className="service-chat-item-name">{convo.name}</div>
                      <div className="service-chat-item-preview">
                        {convo.msgs[convo.msgs.length - 1].text.substring(
                          0,
                          30,
                        )}
                        ...
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-chat-main">
              <div className="service-chat-header">
                <div
                  className="service-chat-header-av"
                  style={{ background: conversations[activeChat].color }}
                >
                  {conversations[activeChat].av}
                </div>
                <div>
                  <div className="service-chat-header-name">
                    {conversations[activeChat].name}
                  </div>
                  <div className="service-chat-header-status">
                    <span
                      className="service-live-dot"
                      style={{ marginRight: "4px" }}
                    ></span>
                    Online
                  </div>
                </div>
              </div>

              <div className="service-chat-messages">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`service-msg ${msg.from === "bot" ? "service-msg-bot" : "service-msg-user"}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="service-chat-input-wrap">
                <input
                  type="text"
                  className="service-chat-input"
                  placeholder="Type a message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <button className="service-chat-send" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Web Dev Panel */}
      {activeTab === 1 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{ background: "var(--service-blue)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="service-brand-name">
                DevStack — Full-Stack Development
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="service-badge service-badge-green">
                <span
                  className="service-live-dot"
                  style={{ marginRight: "4px" }}
                ></span>
                3 deployments live
              </span>
              <div className="service-avatar">RK</div>
            </div>
          </div>

          <div className="service-monitor-wrap">
            <div className="service-monitor-screen">
              <div className="service-browser-bar">
                <div className="service-browser-dots">
                  <div
                    className="service-bdot"
                    style={{ background: "#FF5F57" }}
                  ></div>
                  <div
                    className="service-bdot"
                    style={{ background: "#FFBD2E" }}
                  ></div>
                  <div
                    className="service-bdot"
                    style={{ background: "#28CA42" }}
                  ></div>
                </div>
                <div className="service-url-bar">localhost:3000/dashboard</div>
              </div>

              <div className="service-code-area">
                <div>
                  <span style={{ color: "var(--service-purple2)" }}>
                    import
                  </span>{" "}
                  <span style={{ color: "var(--service-text)" }}>React</span>{" "}
                  <span style={{ color: "var(--service-purple2)" }}>from</span>{" "}
                  <span style={{ color: "var(--service-green2)" }}>
                    'react'
                  </span>
                  ;
                </div>
                <div>
                  <span style={{ color: "var(--service-purple2)" }}>
                    import
                  </span>{" "}
                  <span style={{ color: "var(--service-text)" }}>
                    {"{ useState }"}
                  </span>{" "}
                  <span style={{ color: "var(--service-purple2)" }}>from</span>{" "}
                  <span style={{ color: "var(--service-green2)" }}>
                    'react'
                  </span>
                  ;
                </div>
                <div></div>
                <div>
                  <span style={{ color: "var(--service-purple2)" }}>const</span>{" "}
                  <span style={{ color: "var(--service-blue2)" }}>
                    Dashboard
                  </span>{" "}
                  = () =&gt; {"{"}
                </div>
                <div>
                  {" "}
                  <span style={{ color: "var(--service-purple2)" }}>
                    const
                  </span>{" "}
                  [<span style={{ color: "var(--service-text)" }}>data</span>,{" "}
                  <span style={{ color: "var(--service-text)" }}>setData</span>]
                  ={" "}
                  <span style={{ color: "var(--service-blue2)" }}>
                    useState
                  </span>
                  ([]);
                </div>
                <div></div>
                <div>
                  {" "}
                  <span style={{ color: "var(--service-purple2)" }}>
                    return
                  </span>{" "}
                  (
                </div>
                <div>
                  {" "}
                  &lt;<span style={{ color: "var(--service-blue2)" }}>
                    div
                  </span>{" "}
                  <span style={{ color: "var(--service-text)" }}>
                    className
                  </span>
                  =
                  <span style={{ color: "var(--service-green2)" }}>
                    "dashboard"
                  </span>
                  &gt;
                </div>
                <div>
                  {" "}
                  &lt;<span style={{ color: "var(--service-blue2)" }}>h1</span>
                  &gt;Analytics Dashboard&lt;/
                  <span style={{ color: "var(--service-blue2)" }}>h1</span>&gt;
                </div>
                <div>
                  {" "}
                  &lt;/
                  <span style={{ color: "var(--service-blue2)" }}>div</span>&gt;
                </div>
                <div> );</div>
                <div>{"}"};</div>
              </div>

              <div className="service-terminal">
                <div>
                  <span style={{ color: "var(--service-green2)" }}>$</span> npm
                  run dev
                </div>
                <div style={{ color: "var(--service-text3)" }}>
                  {" "}
                  VITE v5.0.8 ready in 342 ms
                </div>
                <div style={{ color: "var(--service-text3)" }}>
                  {" "}
                  ➜ Local:{" "}
                  <span style={{ color: "var(--service-blue2)" }}>
                    http://localhost:3000/
                  </span>
                </div>
                <div style={{ color: "var(--service-green2)" }}>
                  {" "}
                  ✓ Build successful!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Panel - Modern Minimalistic SaaS Dashboard */}
      {activeTab === 2 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{ background: "var(--service-purple)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <span className="service-brand-name">
                PixelForge — UI/UX Design Studio
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="service-badge service-badge-purple">
                Modern Design
              </span>
              <div
                className="service-avatar"
                style={{ background: "var(--service-purple)" }}
              >
                NF
              </div>
            </div>
          </div>

          <div className="service-laptop-container">
            <div className="service-laptop-frame">
              <div
                className="service-laptop-screen"
                style={{ background: "#FAFBFC" }}
              >
                {/* Modern SaaS Dashboard Header */}
                <div
                  style={{
                    background: "#fff",
                    borderBottom: "1px solid #E5E7EB",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#8B5CF6",
                          padding: "4px 0",
                          borderBottom: "2px solid #8B5CF6",
                        }}
                      >
                        Dashboard
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#6B7280",
                          padding: "4px 0",
                        }}
                      >
                        Analytics
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#6B7280",
                          padding: "4px 0",
                        }}
                      >
                        Projects
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#6B7280",
                          padding: "4px 0",
                        }}
                      >
                        Team
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#F3F4F6",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "9px",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      JD
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: "16px" }}>
                  {/* Welcome Section */}
                  <div style={{ marginBottom: "16px" }}>
                    <h1
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: "4px",
                      }}
                    >
                      Welcome back, John
                    </h1>
                    <p style={{ fontSize: "10px", color: "#6B7280" }}>
                      Here&apos;s what&apos;s happening with your projects
                      today.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    {[
                      {
                        label: "Total Revenue",
                        value: "$45,231",
                        change: "+20.1%",
                        color: "#8B5CF6",
                      },
                      {
                        label: "Active Users",
                        value: "2,845",
                        change: "+12.5%",
                        color: "#10B981",
                      },
                      {
                        label: "Conversions",
                        value: "1,234",
                        change: "+8.2%",
                        color: "#0EA5E9",
                      },
                      {
                        label: "Avg. Session",
                        value: "4m 32s",
                        change: "+3.1%",
                        color: "#F59E0B",
                      },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#fff",
                          border: "1px solid #E5E7EB",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "6px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "9px",
                              color: "#6B7280",
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </span>
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              background: `${stat.color}15`,
                              borderRadius: "4px",
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: "4px",
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            fontWeight: 600,
                            color: stat.color,
                          }}
                        >
                          {stat.change} from last month
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart and Activity Section */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                      gap: "10px",
                    }}
                  >
                    {/* Revenue Chart */}
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #E5E7EB",
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              color: "#111827",
                              marginBottom: "2px",
                            }}
                          >
                            Revenue Overview
                          </h3>
                          <p style={{ fontSize: "8px", color: "#6B7280" }}>
                            Monthly performance
                          </p>
                        </div>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <button
                            style={{
                              padding: "3px 8px",
                              fontSize: "8px",
                              fontWeight: 500,
                              color: "#fff",
                              background: "#8B5CF6",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            Month
                          </button>
                          <button
                            style={{
                              padding: "3px 8px",
                              fontSize: "8px",
                              fontWeight: 500,
                              color: "#6B7280",
                              background: "#F3F4F6",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            Year
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                          height: "60px",
                        }}
                      >
                        {[45, 52, 48, 65, 58, 72, 68, 80, 75, 88, 85, 92].map(
                          (height, idx) => (
                            <div
                              key={idx}
                              style={{
                                flex: 1,
                                background:
                                  idx === 11
                                    ? "linear-gradient(180deg, #8B5CF6, #A78BFA)"
                                    : "linear-gradient(180deg, #E0E7FF, #C7D2FE)",
                                borderRadius: "3px 3px 0 0",
                                height: `${height}%`,
                                transition: "all 0.3s",
                              }}
                            ></div>
                          ),
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "6px",
                        }}
                      >
                        {[
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ].map((month, idx) => (
                          <span
                            key={idx}
                            style={{ fontSize: "7px", color: "#9CA3AF" }}
                          >
                            {month}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #E5E7EB",
                        borderRadius: "10px",
                        padding: "12px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#111827",
                          marginBottom: "10px",
                        }}
                      >
                        Recent Activity
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {[
                          {
                            text: "Project completed",
                            time: "2m ago",
                            color: "#10B981",
                          },
                          {
                            text: "New task created",
                            time: "15m ago",
                            color: "#0EA5E9",
                          },
                          {
                            text: "User registered",
                            time: "1h ago",
                            color: "#8B5CF6",
                          },
                          {
                            text: "New comment",
                            time: "3h ago",
                            color: "#F59E0B",
                          },
                        ].map((activity, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                background: `${activity.color}15`,
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <div
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  background: activity.color,
                                  borderRadius: "50%",
                                }}
                              ></div>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontSize: "9px",
                                  fontWeight: 500,
                                  color: "#111827",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {activity.text}
                              </div>
                              <div
                                style={{ fontSize: "7px", color: "#9CA3AF" }}
                              >
                                {activity.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-laptop-base"></div>
            </div>
          </div>
        </div>
      )}

      {/* App Dev Panel - Minimalistic Design, NO EMOJIS */}
      {activeTab === 3 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  border: "none",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line
                    x1="12"
                    y1="18"
                    x2="12.01"
                    y2="18"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="service-brand-name">
                AppForge — Mobile App Development
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="service-badge service-badge-blue">
                iOS & Android
              </span>
              <span className="service-badge service-badge-green">
                1.2M+ downloads
              </span>
              <div className="service-avatar">LM</div>
            </div>
          </div>

          <div className="service-phones-row">
            {/* E-Commerce App - Stunning Dark Theme */}
            <div className="service-phone">
              <div className="service-phone-notch"></div>
              <div
                className="service-phone-screen"
                style={{
                  background:
                    "linear-gradient(180deg, #0A0A0F 0%, #050508 100%)",
                }}
              >
                <div
                  className="service-app-bar"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "14px 12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "9px",
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        Welcome back
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "2px",
                        }}
                      >
                        ShopHub
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth="2"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        </svg>
                      </div>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth="2"
                        >
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        padding: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                          fontWeight: 500,
                        }}
                      >
                        Orders
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                        }}
                      >
                        284
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "6px",
                        }}
                      >
                        Today
                      </div>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        background:
                          "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(14,165,233,0.05) 100%)",
                        border: "1px solid rgba(14,165,233,0.2)",
                        borderRadius: "12px",
                        padding: "10px",
                        boxShadow: "0 2px 8px rgba(14,165,233,0.15)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                          fontWeight: 500,
                        }}
                      >
                        Revenue
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                        }}
                      >
                        $4.8k
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(14,165,233,1)",
                          marginTop: "6px",
                          fontWeight: 600,
                        }}
                      >
                        +18% WoW
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "14px",
                      padding: "12px",
                      marginBottom: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                        }}
                      >
                        Sales Overview
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        Last 7 days
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "72px 1fr",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "999px",
                          background:
                            "conic-gradient(#0EA5E9 0 72%, rgba(255,255,255,0.10) 72% 100%)",
                          display: "grid",
                          placeItems: "center",
                          marginTop: "-6px",
                          boxShadow: "0 0 20px rgba(14,165,233,0.3)",
                        }}
                      >
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "999px",
                            background: "rgba(6,10,20,0.85)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              lineHeight: 1,
                            }}
                          >
                            72%
                          </div>
                          <div
                            style={{
                              fontSize: "8px",
                              color: "rgba(255,255,255,0.55)",
                              marginTop: "4px",
                            }}
                          >
                            Target
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "100%" }}>
                        <svg
                          width="100%"
                          height="44"
                          viewBox="0 0 120 44"
                          preserveAspectRatio="none"
                          style={{ display: "block" }}
                        >
                          <polyline
                            points="0,34 12,30 24,32 36,24 48,22 60,18 72,20 84,14 96,16 108,10 120,12"
                            fill="none"
                            stroke="rgba(14,165,233,0.9)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <polyline
                            points="0,34 12,30 24,32 36,24 48,22 60,18 72,20 84,14 96,16 108,10 120,12 120,44 0,44"
                            fill="rgba(14,165,233,0.10)"
                            stroke="none"
                          />
                        </svg>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "8px",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: "10px",
                              padding: "8px",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "8px",
                                color: "rgba(255,255,255,0.6)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                fontWeight: 500,
                              }}
                            >
                              Conversion
                            </div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginTop: "4px",
                              }}
                            >
                              3.4%
                            </div>
                          </div>
                          <div
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: "10px",
                              padding: "8px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "8px",
                                color: "rgba(255,255,255,0.55)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              Avg. Cart
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginTop: "4px",
                              }}
                            >
                              $68
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "10px",
                      }}
                    >
                      Inventory Health
                    </div>
                    {[
                      {
                        label: "Best sellers",
                        val: 82,
                        color: "rgba(14,165,233,0.9)",
                      },
                      {
                        label: "Low stock",
                        val: 26,
                        color: "rgba(245,158,11,0.9)",
                      },
                      {
                        label: "Out of stock",
                        val: 8,
                        color: "rgba(239,68,68,0.9)",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "72px 1fr 28px",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "8px",
                            color: "rgba(255,255,255,0.55)",
                          }}
                        >
                          {row.label}
                        </div>
                        <div
                          style={{
                            height: "6px",
                            background: "rgba(255,255,255,0.10)",
                            borderRadius: "999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${row.val}%`,
                              height: "100%",
                              background: row.color,
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            color: "rgba(255,255,255,0.65)",
                            textAlign: "right",
                          }}
                        >
                          {row.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="service-app-nav"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="service-app-nav-item service-app-nav-act"
                    style={{ fontSize: "8px", color: "#0EA5E9" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    <div>Home</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                    <div>Search</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <div>Wishlist</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <div>Profile</div>
                  </div>
                </div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "6px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                  fontWeight: 500,
                }}
              >
                ShopHub · E-Commerce
              </div>
            </div>

            {/* Fitness App - Dark Theme */}
            <div className="service-phone">
              <div className="service-phone-notch"></div>
              <div
                className="service-phone-screen"
                style={{
                  background:
                    "linear-gradient(180deg, #0F0A0F 0%, #050305 100%)",
                }}
              >
                <div
                  className="service-app-bar"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "14px 12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "9px",
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        Performance
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "2px",
                        }}
                      >
                        FitTrack Pro
                      </div>
                    </div>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "999px",
                          background: "rgba(239,68,68,0.95)",
                          boxShadow: "0 0 14px rgba(239,68,68,0.35)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 12px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    Dashboard
                  </div>
                  <div
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.55)" }}
                  >
                    Today
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: "12px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(239,68,68,0.05) 100%)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: "12px",
                        padding: "10px",
                        boxShadow: "0 2px 8px rgba(239,68,68,0.15)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Energy
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "6px",
                        }}
                      >
                        642
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(239,68,68,1)",
                          marginTop: "6px",
                          fontWeight: 600,
                        }}
                      >
                        kcal
                      </div>
                    </div>
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.05) 100%)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        borderRadius: "12px",
                        padding: "10px",
                        boxShadow: "0 2px 8px rgba(16,185,129,0.15)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Recovery
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "6px",
                        }}
                      >
                        86%
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(16,185,129,1)",
                          marginTop: "6px",
                          fontWeight: 600,
                        }}
                      >
                        Ready
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "14px",
                      padding: "12px",
                      marginBottom: "10px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                        }}
                      >
                        Training Load
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        This week
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "72px 1fr",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "999px",
                          background:
                            "conic-gradient(#10B981 0 78%, rgba(255,255,255,0.10) 78% 100%)",
                          display: "grid",
                          placeItems: "center",
                          marginTop: "-6px",
                          boxShadow: "0 0 20px rgba(16,185,129,0.3)",
                        }}
                      >
                        <div
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "999px",
                            background: "rgba(10,4,6,0.85)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              lineHeight: 1,
                            }}
                          >
                            64%
                          </div>
                          <div
                            style={{
                              fontSize: "8px",
                              color: "rgba(255,255,255,0.55)",
                              marginTop: "4px",
                            }}
                          >
                            Load
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          width="100%"
                          height="44"
                          viewBox="0 0 120 44"
                          preserveAspectRatio="none"
                          style={{ display: "block" }}
                        >
                          <polyline
                            points="0,30 12,32 24,26 36,22 48,24 60,18 72,16 84,20 96,12 108,14 120,10"
                            fill="none"
                            stroke="rgba(239,68,68,0.9)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <polyline
                            points="0,30 12,32 24,26 36,22 48,24 60,18 72,16 84,20 96,12 108,14 120,10 120,44 0,44"
                            fill="rgba(239,68,68,0.10)"
                            stroke="none"
                          />
                        </svg>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "8px",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: "10px",
                              padding: "8px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "8px",
                                color: "rgba(255,255,255,0.55)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              Steps
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginTop: "4px",
                              }}
                            >
                              8,547
                            </div>
                          </div>
                          <div
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: "10px",
                              padding: "8px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "8px",
                                color: "rgba(255,255,255,0.55)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              Sleep
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginTop: "4px",
                              }}
                            >
                              7h 18m
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        marginBottom: "10px",
                      }}
                    >
                      Recovery Breakdown
                    </div>
                    {[
                      {
                        label: "Cardio",
                        val: 48,
                        color: "rgba(239,68,68,0.9)",
                      },
                      {
                        label: "Strength",
                        val: 62,
                        color: "rgba(14,165,233,0.9)",
                      },
                      {
                        label: "Mobility",
                        val: 34,
                        color: "rgba(16,185,129,0.9)",
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "60px 1fr 28px",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "8px",
                            color: "rgba(255,255,255,0.55)",
                          }}
                        >
                          {row.label}
                        </div>
                        <div
                          style={{
                            height: "6px",
                            background: "rgba(255,255,255,0.10)",
                            borderRadius: "999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${row.val}%`,
                              height: "100%",
                              background: row.color,
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            color: "rgba(255,255,255,0.65)",
                            textAlign: "right",
                          }}
                        >
                          {row.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="service-app-nav"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="service-app-nav-item service-app-nav-act"
                    style={{ fontSize: "8px", color: "#DC2626" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    <div>Stats</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <div>Goals</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    </svg>
                    <div>Rewards</div>
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ marginBottom: "2px" }}
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                    </svg>
                    <div>Settings</div>
                  </div>
                </div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "6px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                  fontWeight: 500,
                }}
              >
                FitTrack Pro · Fitness
              </div>
            </div>

            {/* Food Delivery App - Dark Theme (Pizza/Burger) */}
            <div className="service-phone">
              <div className="service-phone-notch"></div>
              <div
                className="service-phone-screen"
                style={{
                  background:
                    "linear-gradient(180deg, #0A0F0A 0%, #050805 100%)",
                }}
              >
                <div
                  className="service-app-bar"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    padding: "14px 12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "9px",
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        Delivery
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginTop: "2px",
                        }}
                      >
                        Home • 123 Main St
                      </div>
                    </div>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "999px",
                          background: "rgba(16,185,129,0.95)",
                          boxShadow: "0 0 14px rgba(16,185,129,0.35)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "10px 12px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    Ops
                  </div>
                  <div
                    style={{ fontSize: "8px", color: "rgba(255,255,255,0.55)" }}
                  >
                    Live
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    padding: "12px",
                    marginBottom: "10px",
                    marginLeft: "12px",
                    marginRight: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                      }}
                    >
                      Order Flow
                    </div>
                    <div
                      style={{
                        fontSize: "8px",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      Live
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "72px 1fr",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "999px",
                        background:
                          "conic-gradient(#10B981 0 78%, rgba(255,255,255,0.10) 78% 100%)",
                        display: "grid",
                        placeItems: "center",
                        marginTop: "-6px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "999px",
                          background: "rgba(6,12,8,0.85)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1,
                          }}
                        >
                          78%
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            color: "rgba(255,255,255,0.55)",
                            marginTop: "4px",
                          }}
                        >
                          On-time
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        width="100%"
                        height="44"
                        viewBox="0 0 120 44"
                        preserveAspectRatio="none"
                        style={{ display: "block" }}
                      >
                        <polyline
                          points="0,26 12,24 24,28 36,22 48,20 60,18 72,22 84,16 96,18 108,14 120,16"
                          fill="none"
                          stroke="rgba(16,185,129,0.9)"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                        <polyline
                          points="0,26 12,24 24,28 36,22 48,20 60,18 72,22 84,16 96,18 108,14 120,16 120,44 0,44"
                          fill="rgba(16,185,129,0.10)"
                          stroke="none"
                        />
                      </svg>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "8px",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "8px",
                              color: "rgba(255,255,255,0.6)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              fontWeight: 500,
                            }}
                          >
                            Prep
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              marginTop: "4px",
                            }}
                          >
                            11m
                          </div>
                        </div>
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "8px",
                              color: "rgba(255,255,255,0.6)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              fontWeight: 500,
                            }}
                          >
                            Delivery
                          </div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              marginTop: "4px",
                            }}
                          >
                            13m
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    Demand Index
                  </div>
                  {[
                    {
                      label: "Pizza",
                      val: 74,
                      color: "rgba(245,158,11,0.9)",
                    },
                    {
                      label: "Burgers",
                      val: 58,
                      color: "rgba(239,68,68,0.9)",
                    },
                    {
                      label: "Sides",
                      val: 36,
                      color: "rgba(139,92,246,0.9)",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "54px 1fr 28px",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {row.label}
                      </div>
                      <div
                        style={{
                          height: "6px",
                          background: "rgba(255,255,255,0.10)",
                          borderRadius: "999px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${row.val}%`,
                            height: "100%",
                            background: row.color,
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "rgba(255,255,255,0.65)",
                          textAlign: "right",
                        }}
                      >
                        {row.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="service-app-nav"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="service-app-nav-item service-app-nav-act"
                  style={{ fontSize: "8px", color: "#10B981" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "2px" }}
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  <div>Home</div>
                </div>
                <div
                  className="service-app-nav-item"
                  style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "2px" }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <div>Browse</div>
                </div>
                <div
                  className="service-app-nav-item"
                  style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "2px" }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>Orders</div>
                </div>
                <div
                  className="service-app-nav-item"
                  style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "2px" }}
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <div>Account</div>
                </div>
              </div>
            </div>
            <div className="service-phone-home"></div>
            <div
              style={{
                textAlign: "center",
                marginTop: "6px",
                fontSize: "9px",
                color: "var(--service-text3)",
                fontWeight: 500,
              }}
            >
              FoodHub · Delivery
            </div>
          </div>
        </div>
      )}

      {/* Google Ads Panel - KEEP DASHBOARD */}
      {activeTab === 4 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{ background: "var(--service-yellow)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <span className="service-brand-name">
                AdBoost — Google Ads Management
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="service-badge service-badge-green">
                <span
                  className="service-live-dot"
                  style={{ marginRight: "4px" }}
                ></span>
                12 campaigns active
              </span>
              <div
                className="service-avatar"
                style={{ background: "var(--service-yellow)" }}
              >
                MR
              </div>
            </div>
          </div>

          <div className="service-ads-grid">
            <div className="service-ads-kpi">
              <div className="service-akl">Total spend</div>
              <div
                className="service-akv"
                style={{ color: "var(--service-blue2)" }}
              >
                $24,891
              </div>
              <div className="service-aks service-up">↑ 18% vs last month</div>
            </div>
            <div className="service-ads-kpi">
              <div className="service-akl">Conversions</div>
              <div
                className="service-akv"
                style={{ color: "var(--service-green2)" }}
              >
                1,847
              </div>
              <div className="service-aks service-up">↑ 24% increase</div>
            </div>
            <div className="service-ads-kpi">
              <div className="service-akl">Avg CPC</div>
              <div className="service-akv">$1.34</div>
              <div className="service-aks service-down">↓ 12% optimized</div>
            </div>
            <div className="service-ads-kpi">
              <div className="service-akl">ROAS</div>
              <div
                className="service-akv"
                style={{ color: "var(--service-purple2)" }}
              >
                4.8x
              </div>
              <div className="service-aks service-up">Above target</div>
            </div>
          </div>

          <table className="service-campaign-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Clicks</th>
                <th>Conv.</th>
                <th>Spend</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="service-cname">Summer Sale 2025</div>
                </td>
                <td>
                  <span className="service-badge service-badge-green">
                    Active
                  </span>
                </td>
                <td>12,847</td>
                <td>584</td>
                <td>$6,240</td>
                <td style={{ color: "var(--service-green2)", fontWeight: 600 }}>
                  5.2x
                </td>
              </tr>
              <tr>
                <td>
                  <div className="service-cname">Brand Awareness</div>
                </td>
                <td>
                  <span className="service-badge service-badge-blue">
                    Running
                  </span>
                </td>
                <td>8,392</td>
                <td>412</td>
                <td>$4,180</td>
                <td style={{ color: "var(--service-green2)", fontWeight: 600 }}>
                  4.9x
                </td>
              </tr>
              <tr>
                <td>
                  <div className="service-cname">Product Launch</div>
                </td>
                <td>
                  <span className="service-badge service-badge-yellow">
                    Review
                  </span>
                </td>
                <td>5,621</td>
                <td>298</td>
                <td>$3,890</td>
                <td style={{ color: "var(--service-blue2)", fontWeight: 600 }}>
                  4.3x
                </td>
              </tr>
              <tr>
                <td>
                  <div className="service-cname">Retargeting Q2</div>
                </td>
                <td>
                  <span className="service-badge service-badge-green">
                    Active
                  </span>
                </td>
                <td>9,184</td>
                <td>553</td>
                <td>$5,581</td>
                <td style={{ color: "var(--service-green2)", fontWeight: 600 }}>
                  5.1x
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiceShowcase;
