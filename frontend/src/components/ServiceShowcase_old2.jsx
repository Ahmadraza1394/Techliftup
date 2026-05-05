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
          ⚡ AI Chatbot
        </button>
        <button
          className={`service-tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          &lt;/&gt; Web Dev
        </button>
        <button
          className={`service-tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          🎨 Design
        </button>
        <button
          className={`service-tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          📱 App Dev
        </button>
        <button
          className={`service-tab ${activeTab === 4 ? "active" : ""}`}
          onClick={() => setActiveTab(4)}
        >
          📊 Google Ads
        </button>
      </div>

      {/* AI Chatbot Panel - NO DASHBOARD */}
      {activeTab === 0 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="service-logo">⚡</div>
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

      {/* Web Dev Panel - NO DASHBOARD */}
      {activeTab === 1 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{ background: "var(--service-blue)" }}
              >
                &lt;/&gt;
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
                🎨
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
                        fontSize: "14px",
                      }}
                    >
                      ✦
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
                        fontSize: "10px",
                      }}
                    >
                      🔔
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
                      Welcome back, John 👋
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
                        icon: "💰",
                      },
                      {
                        label: "Active Users",
                        value: "2,845",
                        change: "+12.5%",
                        color: "#10B981",
                        icon: "👥",
                      },
                      {
                        label: "Conversions",
                        value: "1,234",
                        change: "+8.2%",
                        color: "#0EA5E9",
                        icon: "📈",
                      },
                      {
                        label: "Avg. Session",
                        value: "4m 32s",
                        change: "+3.1%",
                        color: "#F59E0B",
                        icon: "⏱️",
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
                          <span style={{ fontSize: "12px" }}>{stat.icon}</span>
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
                            icon: "✅",
                            text: "Project completed",
                            time: "2m ago",
                            color: "#10B981",
                          },
                          {
                            icon: "📝",
                            text: "New task created",
                            time: "15m ago",
                            color: "#0EA5E9",
                          },
                          {
                            icon: "👤",
                            text: "User registered",
                            time: "1h ago",
                            color: "#8B5CF6",
                          },
                          {
                            icon: "💬",
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
                                fontSize: "9px",
                                flexShrink: 0,
                              }}
                            >
                              {activity.icon}
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

      {/* App Dev Panel - Minimalistic Design */}
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
                  <line x1="12" y1="18" x2="12" y2="18" />
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
            {/* E-Commerce App - ShopHub */}
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
                    background: "linear-gradient(135deg,#0EA5E9,#0284C7)",
                    padding: "12px 10px",
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
                          color: "rgba(255,255,255,.8)",
                          fontWeight: 500,
                        }}
                      >
                        Welcome back
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#fff",
                          marginTop: "2px",
                        }}
                      >
                        ShopHub
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                        }}
                      >
                        🔔
                      </div>
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                        }}
                      >
                        🛒
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: "8px" }}>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(14,165,233,.15), rgba(2,132,199,.1))",
                      borderRadius: "10px",
                      padding: "10px",
                      marginBottom: "8px",
                      border: "1px solid rgba(14,165,233,.2)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "8px",
                        color: "var(--service-blue2)",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      🎉 FLASH SALE
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--service-text)",
                      }}
                    >
                      Up to 50% Off
                    </div>
                    <div
                      style={{
                        fontSize: "8px",
                        color: "var(--service-text2)",
                        marginTop: "2px",
                      }}
                    >
                      Limited time offer
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      color: "var(--service-text)",
                      marginBottom: "6px",
                    }}
                  >
                    Popular Products
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "6px",
                    }}
                  >
                    {[
                      {
                        emoji: "👟",
                        name: "Sneakers",
                        price: "$89.99",
                        color: "#0EA5E9",
                      },
                      {
                        emoji: "⌚",
                        name: "Watch",
                        price: "$199",
                        color: "#8B5CF6",
                      },
                      {
                        emoji: "🎧",
                        name: "Headphones",
                        price: "$149",
                        color: "#10B981",
                      },
                      {
                        emoji: "👜",
                        name: "Bag",
                        price: "$79.99",
                        color: "#F59E0B",
                      },
                    ].map((product, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "var(--service-bg3)",
                          borderRadius: "8px",
                          padding: "6px",
                          border: "1px solid var(--service-border)",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "40px",
                            background: `linear-gradient(135deg, ${product.color}, ${product.color}99)`,
                            borderRadius: "6px",
                            marginBottom: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                          }}
                        >
                          {product.emoji}
                        </div>
                        <div
                          style={{
                            fontSize: "8px",
                            fontWeight: 600,
                            color: "var(--service-text)",
                          }}
                        >
                          {product.name}
                        </div>
                        <div
                          style={{
                            fontSize: "9px",
                            fontWeight: 700,
                            color: product.color,
                            marginTop: "2px",
                          }}
                        >
                          {product.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="service-app-nav"
                  style={{ background: "var(--service-bg2)" }}
                >
                  <div
                    className="service-app-nav-item service-app-nav-act"
                    style={{ fontSize: "8px" }}
                  >
                    🏠
                    <br />
                    Home
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    🔍
                    <br />
                    Search
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    ❤️
                    <br />
                    Wishlist
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    👤
                    <br />
                    Profile
                  </div>
                </div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                  fontWeight: 500,
                }}
              >
                ShopHub · E-Commerce
              </div>
            </div>

            {/* Fitness App - FitTrack Pro */}
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
                    background: "linear-gradient(135deg,#DC2626,#EF4444)",
                    padding: "12px 10px",
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
                          color: "rgba(255,255,255,.8)",
                          fontWeight: 500,
                        }}
                      >
                        Your Progress
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#fff",
                          marginTop: "2px",
                        }}
                      >
                        FitTrack Pro
                      </div>
                    </div>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                      }}
                    >
                      🔥
                    </div>
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: "8px" }}>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(220,38,38,.15), rgba(239,68,68,.1))",
                      borderRadius: "10px",
                      padding: "10px",
                      marginBottom: "8px",
                      border: "1px solid rgba(220,38,38,.2)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "8px",
                        color: "var(--service-red2)",
                        fontWeight: 600,
                        marginBottom: "3px",
                      }}
                    >
                      TODAY&apos;S GOAL
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--service-text)",
                        marginBottom: "2px",
                      }}
                    >
                      8,547
                    </div>
                    <div
                      style={{ fontSize: "8px", color: "var(--service-text2)" }}
                    >
                      / 10,000 steps
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        background: "var(--service-bg4)",
                        borderRadius: "2px",
                        marginTop: "6px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "85%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, #DC2626, #EF4444)",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      color: "var(--service-text)",
                      marginBottom: "6px",
                    }}
                  >
                    Quick Stats
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--service-bg3)",
                        borderRadius: "8px",
                        padding: "8px",
                        border: "1px solid var(--service-border)",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "14px", marginBottom: "2px" }}>
                        🏃
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "var(--service-blue2)",
                        }}
                      >
                        5.2 km
                      </div>
                      <div
                        style={{
                          fontSize: "7px",
                          color: "var(--service-text3)",
                          marginTop: "1px",
                        }}
                      >
                        Distance
                      </div>
                    </div>
                    <div
                      style={{
                        background: "var(--service-bg3)",
                        borderRadius: "8px",
                        padding: "8px",
                        border: "1px solid var(--service-border)",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "14px", marginBottom: "2px" }}>
                        ⏱️
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "var(--service-green2)",
                        }}
                      >
                        42 min
                      </div>
                      <div
                        style={{
                          fontSize: "7px",
                          color: "var(--service-text3)",
                          marginTop: "1px",
                        }}
                      >
                        Duration
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "var(--service-bg3)",
                      borderRadius: "8px",
                      padding: "8px",
                      border: "1px solid var(--service-border)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "8px",
                        color: "var(--service-text2)",
                        marginBottom: "4px",
                      }}
                    >
                      Weekly Progress
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "3px",
                        height: "30px",
                      }}
                    >
                      {[60, 75, 50, 90, 100, 40, 40].map((height, idx) => (
                        <div
                          key={idx}
                          style={{
                            flex: 1,
                            background:
                              idx === 4
                                ? "var(--service-blue)"
                                : "rgba(14,165,233,.3)",
                            borderRadius: "2px 2px 0 0",
                            height: `${height}%`,
                            boxShadow:
                              idx === 4
                                ? "0 0 8px rgba(14,165,233,.5)"
                                : "none",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="service-app-nav"
                  style={{ background: "var(--service-bg2)" }}
                >
                  <div
                    className="service-app-nav-item service-app-nav-act"
                    style={{ fontSize: "8px" }}
                  >
                    📊
                    <br />
                    Stats
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    🎯
                    <br />
                    Goals
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    🏆
                    <br />
                    Rewards
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    ⚙️
                    <br />
                    Settings
                  </div>
                </div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                  fontWeight: 500,
                }}
              >
                FitTrack Pro · Fitness
              </div>
            </div>

            {/* Food Delivery App - FoodHub */}
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
                    background: "linear-gradient(135deg,#10B981,#34D399)",
                    padding: "12px 10px",
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
                          color: "rgba(255,255,255,.8)",
                          fontWeight: 500,
                        }}
                      >
                        Deliver to
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#fff",
                          marginTop: "2px",
                        }}
                      >
                        📍 Home - 123 Main St
                      </div>
                    </div>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                      }}
                    >
                      🛒
                    </div>
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: "8px" }}>
                  <div
                    style={{
                      background: "var(--service-bg3)",
                      borderRadius: "8px",
                      padding: "8px",
                      marginBottom: "8px",
                      border: "1px solid var(--service-border)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div style={{ fontSize: "12px" }}>🔍</div>
                    <div
                      style={{ fontSize: "9px", color: "var(--service-text3)" }}
                    >
                      Search for food...
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      color: "var(--service-text)",
                      marginBottom: "6px",
                    }}
                  >
                    Popular Near You
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {[
                      {
                        emoji: "🍕",
                        name: "Pizza Palace",
                        cuisine: "Italian • 2.5 km",
                        rating: "4.8",
                        time: "25-30 min",
                        color: "#F59E0B",
                      },
                      {
                        emoji: "🍔",
                        name: "Burger Bistro",
                        cuisine: "American • 1.8 km",
                        rating: "4.6",
                        time: "20-25 min",
                        color: "#DC2626",
                      },
                      {
                        emoji: "🍜",
                        name: "Noodle House",
                        cuisine: "Asian • 3.2 km",
                        rating: "4.9",
                        time: "30-35 min",
                        color: "#8B5CF6",
                      },
                    ].map((restaurant, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "var(--service-bg3)",
                          borderRadius: "8px",
                          padding: "8px",
                          border: "1px solid var(--service-border)",
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            background: `linear-gradient(135deg, ${restaurant.color}, ${restaurant.color}99)`,
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            flexShrink: 0,
                          }}
                        >
                          {restaurant.emoji}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: "9px",
                              fontWeight: 600,
                              color: "var(--service-text)",
                            }}
                          >
                            {restaurant.name}
                          </div>
                          <div
                            style={{
                              fontSize: "7px",
                              color: "var(--service-text3)",
                              marginTop: "1px",
                            }}
                          >
                            {restaurant.cuisine}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              marginTop: "3px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "7px",
                                color: "var(--service-yellow2)",
                              }}
                            >
                              ⭐ {restaurant.rating}
                            </div>
                            <div
                              style={{
                                fontSize: "7px",
                                color: "var(--service-text3)",
                              }}
                            >
                              • {restaurant.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="service-app-nav"
                  style={{ background: "var(--service-bg2)" }}
                >
                  <div
                    className="service-app-nav-item service-app-nav-act"
                    style={{ fontSize: "8px" }}
                  >
                    🏠
                    <br />
                    Home
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    🔍
                    <br />
                    Browse
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    📦
                    <br />
                    Orders
                  </div>
                  <div
                    className="service-app-nav-item"
                    style={{ fontSize: "8px" }}
                  >
                    👤
                    <br />
                    Account
                  </div>
                </div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                  fontWeight: 500,
                }}
              >
                FoodHub · Delivery
              </div>
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
                📊
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
