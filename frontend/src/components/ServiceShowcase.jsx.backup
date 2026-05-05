import { useState, useEffect } from "react";
import "./ServiceShowcase.css";

const ServiceShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeChat, setActiveChat] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [activeChats, setActiveChats] = useState(24);

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
          text: "Excellent! Your account has been upgraded to Pro. You now have access to all premium features. Enjoy! 🎉",
        },
      ],
    },
    {
      id: 2,
      av: "PS",
      color: "#059669",
      name: "Priya Sharma",
      msgs: [
        { from: "bot", text: "Hi Priya! How can I help you today?" },
        { from: "user", text: "Can you track my order #4892?" },
        { from: "bot", text: "Sure! Let me check that for you right away..." },
        {
          from: "bot",
          text: "Order #4892 — 3 items — is currently out for delivery. Estimated arrival: today between 3–5 PM. Your driver Kamran is 4 stops away. 📦",
        },
      ],
    },
  ];

  useEffect(() => {
    renderChat(activeChat);
  }, [activeChat]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChats(22 + Math.floor(Math.random() * 6));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderChat = (id) => {
    const convo = conversations[id];
    if (!convo) return;

    setChatMessages([]);
    convo.msgs.forEach((msg, i) => {
      setTimeout(() => {
        setChatMessages((prev) => [...prev, { ...msg, convo }]);
      }, i * 120);
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newMsg = {
      from: "user",
      text: chatInput,
      convo: conversations[activeChat],
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { from: "typing", convo: conversations[activeChat] },
      ]);

      setTimeout(() => {
        const replies = [
          "Thanks for reaching out! Let me check that for you right away.",
          "Great question! I can definitely help with that.",
          "I've got the information you need. Give me just a moment.",
          "I understand. Let me connect you with the right solution.",
          "Absolutely! Here's what I can do for you...",
        ];
        setChatMessages((prev) => {
          const filtered = prev.filter((m) => m.from !== "typing");
          return [
            ...filtered,
            {
              from: "bot",
              text: replies[Math.floor(Math.random() * replies.length)],
              convo: conversations[activeChat],
            },
          ];
        });
      }, 1400);
    }, 500);
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
          ✦ Design
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

      {/* AI CHATBOT PANEL */}
      {activeTab === 0 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "var(--service-blue)",
                  boxShadow: "0 0 12px rgba(14,165,233,.5)",
                }}
              >
                ⚡
              </div>
              <span className="service-brand-name">
                NexaBot — AI Chat Support
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
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="service-chat-av"
                        style={{ background: convo.color }}
                      >
                        {convo.av}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="service-chat-name">{convo.name}</div>
                        <div className="service-chat-preview">
                          {convo.msgs[1]?.text || convo.msgs[0]?.text}
                        </div>
                      </div>
                      {idx < 2 && <span className="service-live-dot"></span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-chat-main">
              <div className="service-chat-header">
                <div
                  className="service-chat-av"
                  style={{ background: conversations[activeChat].color }}
                >
                  {conversations[activeChat].av}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--service-text)",
                    }}
                  >
                    {conversations[activeChat].name}
                  </div>
                  <div
                    style={{ fontSize: "10px", color: "var(--service-green)" }}
                  >
                    ● Online now
                  </div>
                </div>
                <div
                  style={{ marginLeft: "auto", display: "flex", gap: "6px" }}
                >
                  <span className="service-badge service-badge-blue">
                    AI mode
                  </span>
                  <span className="service-badge service-badge-green">
                    Bot responding
                  </span>
                </div>
              </div>

              <div className="service-chat-messages">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems:
                        msg.from === "bot" || msg.from === "typing"
                          ? "flex-start"
                          : "flex-end",
                    }}
                  >
                    {msg.from === "bot" && (
                      <div className="service-bot-tag">⚡ NexaBot</div>
                    )}
                    {msg.from === "typing" ? (
                      <div className="service-msg service-msg-typing">
                        <div className="service-typing-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div
                          className={`service-msg ${msg.from === "bot" ? "service-msg-bot" : "service-msg-user"}`}
                        >
                          {msg.text}
                        </div>
                        <div className="service-msg-time">
                          {new Date().toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="service-chat-input-bar">
                <input
                  className="service-chat-inp"
                  placeholder="Type a message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  className="service-send-btn"
                  onClick={handleSendMessage}
                >
                  Send ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WEB DEV PANEL */}
      {activeTab === 1 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "#1E293B",
                  border: "1px solid var(--service-border2)",
                }}
              >
                &lt;/&gt;
              </div>
              <span className="service-brand-name">
                DevFlow — Web Development Dashboard
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
                    style={{ background: "#28CA41" }}
                  ></div>
                </div>
                <div className="service-url-bar">
                  https://alphacart.io — deploying v2.4.1...
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div
                  className="service-code-area"
                  style={{ borderRight: "1px solid #1F2937", padding: "10px" }}
                >
                  <div className="service-code-line">
                    <span className="service-kw">const</span>{" "}
                    <span className="service-fn">deploy</span> ={" "}
                    <span className="service-kw">async</span> () =&gt; {"{"}
                  </div>
                  <div
                    className="service-code-line"
                    style={{ paddingLeft: "12px" }}
                  >
                    <span className="service-kw">await</span>{" "}
                    <span className="service-fn">build</span>(
                    <span className="service-str">'production'</span>);
                  </div>
                  <div
                    className="service-code-line"
                    style={{ paddingLeft: "12px" }}
                  >
                    <span className="service-kw">const</span> app ={" "}
                    <span className="service-fn">express</span>();
                  </div>
                  <div
                    className="service-code-line"
                    style={{ paddingLeft: "12px" }}
                  >
                    app.<span className="service-fn">use</span>(
                    <span className="service-fn">cors</span>());
                  </div>
                  <div
                    className="service-code-line"
                    style={{ paddingLeft: "12px" }}
                  >
                    app.<span className="service-fn">listen</span>(
                    <span className="service-num">3000</span>);
                  </div>
                  <div className="service-code-line">{"}"}</div>
                </div>
                <div className="service-terminal">
                  <div>
                    <span className="service-t-prompt">▶</span>{" "}
                    <span className="service-t-cmd">npm run build:prod</span>
                  </div>
                  <div>
                    <span className="service-t-ok">✓</span>{" "}
                    <span className="service-t-out">JS: 124kb gzipped</span>
                  </div>
                  <div>
                    <span className="service-t-ok">✓</span>{" "}
                    <span className="service-t-out">CSS: 18kb gzipped</span>
                  </div>
                  <div>
                    <span className="service-t-prompt">▶</span>{" "}
                    <span className="service-t-cmd">vercel deploy --prod</span>
                  </div>
                  <div>
                    <span className="service-t-ok">✓</span>{" "}
                    <span
                      className="service-t-out"
                      style={{ color: "#10B981" }}
                    >
                      Live: alphacart.io ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESIGN PANEL */}
      {activeTab === 2 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "var(--service-purple)",
                  boxShadow: "0 0 12px rgba(139,92,246,.5)",
                }}
              >
                ✦
              </div>
              <span className="service-brand-name">
                PixelCraft — Website Design Studio
              </span>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="service-badge service-badge-purple">
                89 projects delivered
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
              <div className="service-laptop-screen">
                <div className="service-site-nav">
                  <div className="service-nav-logo">LuxHotel</div>
                  <div className="service-nav-links">
                    <span className="service-nav-link">Rooms</span>
                    <span className="service-nav-link">Dining</span>
                    <span className="service-nav-link">Spa</span>
                  </div>
                  <span className="service-nav-cta">Book Now</span>
                </div>
                <div className="service-hero-section">
                  <div className="service-hero-glow"></div>
                  <div className="service-hero-badge">
                    <span className="service-live-dot"></span> Award-winning
                    design 2025
                  </div>
                  <div className="service-hero-h1">
                    Experience <span>Pure Luxury</span>
                    <br />
                    Like Never Before
                  </div>
                  <div className="service-hero-sub">
                    Discover world-class hospitality. 5-star suites, private
                    pools, and unforgettable moments await.
                  </div>
                  <div className="service-hero-btns">
                    <button className="service-btn-primary">
                      Reserve a Suite
                    </button>
                    <button className="service-btn-ghost">
                      Virtual Tour →
                    </button>
                  </div>
                </div>
                <div className="service-features-row">
                  <div className="service-feat-card">
                    <div className="service-feat-icon">🏊</div>
                    <div className="service-feat-title">Infinity Pool</div>
                    <div className="service-feat-desc">
                      Panoramic ocean views
                    </div>
                  </div>
                  <div className="service-feat-card">
                    <div className="service-feat-icon">🍽</div>
                    <div className="service-feat-title">Fine Dining</div>
                    <div className="service-feat-desc">
                      Michelin-starred chefs
                    </div>
                  </div>
                  <div className="service-feat-card">
                    <div className="service-feat-icon">💆</div>
                    <div className="service-feat-title">Luxury Spa</div>
                    <div className="service-feat-desc">
                      World-class treatments
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-laptop-base"></div>
            </div>
          </div>
        </div>
      )}

      {/* APP DEV PANEL */}
      {activeTab === 3 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "var(--service-bg4)",
                  border: "1px solid var(--service-border2)",
                }}
              >
                📱
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
            {/* E-Commerce App */}
            <div className="service-phone">
              <div className="service-phone-notch"></div>
              <div className="service-phone-screen" style={{ background: 'linear-gradient(180deg, #0A0A0F 0%, #050508 100%)' }}>
                <div className="service-app-bar" style={{ background: 'linear-gradient(135deg,#0EA5E9,#0284C7)', padding: '12px 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div>
                      <div style={{ fontSize: '9px', color: 'rgba(255,255,255,.8)', fontWeight: 500 }}>Welcome back</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>ShopHub</div>
                    </div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>🔔</div>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>🛒</div>
                    </div>
                  </div>
                </div>
                <div className="service-app-body" style={{ padding: '8px' }}>
                  <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,.15), rgba(2,132,199,.1))', borderRadius: '10px', padding: '10px', marginBottom: '8px', border: '1px solid rgba(14,165,233,.2)' }}>
                    <div style={{ fontSize: '8px', color: 'var(--service-blue2)', fontWeight: 600, marginBottom: '4px' }}>🎉 FLASH SALE</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--service-text)' }}>Up to 50% Off</div>
                    <div style={{ fontSize: '8px', color: 'var(--service-text2)', marginTop: '2px' }}>Limited time offer</div>
                  </div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: 'var(--service-text)', marginBottom: '6px' }}>Popular Products</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                    <div style={{ background: 'var(--service-bg3)', borderRadius: '8px', padding: '6px', border: '1px solid var(--service-border)' }}>
                      <div style={{ width: '100%', height: '40px', background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)', borderRadius: '6px', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👟</div>
                      <div style={{ fontSize: '8px', fontWeight: 600, color: 'var(--service-text)' }}>Sneakers</div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--service-blue2)', marginTop: '2px' }}>$89.99</div>
              </div>
              <div className="service-phone-home"></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "9px",
                  color: "var(--service-text3)",
                }}
              >
                QuickBasket · 4.9★
              </div>
            </div>

            <div className="service-phone">
              <div className="service-phone-notch"></div>
              <div
                className="service-phone-screen"
                style={{ background: "#0A080F" }}
              >
                <div
                  className="service-app-bar"
                  style={{
                    background: "linear-gradient(135deg,#4C1D95,#7C3AED)",
                  }}
                >
                  <div>
                    <div
                      style={{ fontSize: "8px", color: "rgba(255,255,255,.7)" }}
                    >
                      Productivity
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      TaskNest Pro
                    </div>
                  </div>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                    }}
                  >
                    📋
                  </div>
                </div>
                <div className="service-app-body">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "5px",
                      marginBottom: "6px",
                    }}
                  >
                    <div className="service-app-metric">
                      <div className="service-app-metric-lbl">Tasks done</div>
                      <div
                        className="service-app-metric-val"
                        style={{ color: "var(--service-purple2)" }}
                      >
                        18/24
                      </div>
                    </div>
                    <div className="service-app-metric">
                      <div className="service-app-metric-lbl">Streak</div>
                      <div
                        className="service-app-metric-val"
                        style={{ color: "var(--service-yellow2)" }}
                      >
                        14 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-app-nav">
                  <div className="service-app-nav-item service-app-nav-act">
                    ✓<br />
                    Tasks
                  </div>
                  <div className="service-app-nav-item">
                    📊
                    <br />
                    Stats
                  </div>
                  <div className="service-app-nav-item">
                    📅
                    <br />
                    Calendar
                  </div>
                  <div className="service-app-nav-item">
                    ⚙<br />
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
                }}
              >
                TaskNest Pro · 4.7★
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GOOGLE ADS PANEL */}
      {activeTab === 4 && (
        <div className="service-panel">
          <div className="service-topbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="service-logo"
                style={{
                  background: "#1A1A2E",
                  border: "1px solid var(--service-border2)",
                  fontSize: "14px",
                }}
              >
                G
              </div>
              <span className="service-brand-name">
                Google Ads — Campaign Dashboard
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
                May 1–5, 2025
              </span>
              <div className="service-avatar" style={{ background: "#4285F4" }}>
                GS
              </div>
            </div>
          </div>

          <div className="service-ads-grid">
            <div className="service-ads-kpi service-ads-kpi-blue">
              <div className="service-akl">Impressions</div>
              <div className="service-akv">284,920</div>
              <div className="service-aks service-up">↑ 22% vs last period</div>
            </div>
            <div className="service-ads-kpi service-ads-kpi-green">
              <div className="service-akl">Clicks</div>
              <div className="service-akv">18,347</div>
              <div className="service-aks service-up">CTR 6.44% · ↑ 1.2%</div>
            </div>
            <div className="service-ads-kpi service-ads-kpi-yellow">
              <div className="service-akl">Conversions</div>
              <div className="service-akv">1,284</div>
              <div className="service-aks service-up">Rate 7.0% · ↑ 0.8%</div>
            </div>
            <div className="service-ads-kpi service-ads-kpi-red">
              <div className="service-akl">Ad spend</div>
              <div className="service-akv">$8,420</div>
              <div className="service-aks service-up">
                ROAS 5.7× · $47,994 rev
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-ct">
              <div
                className="service-ct-dot"
                style={{
                  background: "#EA4335",
                  boxShadow: "0 0 6px rgba(234,67,53,.5)",
                }}
              ></div>
              Active campaigns
            </div>
            <table className="service-campaign-table">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Status</th>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>CTR</th>
                  <th>Spend</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="service-cname">NexaBot — Search</td>
                  <td>
                    <span className="service-badge service-badge-green">
                      Active
                    </span>
                  </td>
                  <td>98,420</td>
                  <td>7,120</td>
                  <td style={{ color: "var(--service-green2)" }}>7.23%</td>
                  <td>$2,840</td>
                  <td
                    style={{ color: "var(--service-green2)", fontWeight: 600 }}
                  >
                    6.2×
                  </td>
                </tr>
                <tr>
                  <td className="service-cname">Web Design — Display</td>
                  <td>
                    <span className="service-badge service-badge-green">
                      Active
                    </span>
                  </td>
                  <td>142,000</td>
                  <td>6,840</td>
                  <td style={{ color: "var(--service-blue2)" }}>4.81%</td>
                  <td>$3,100</td>
                  <td
                    style={{ color: "var(--service-blue2)", fontWeight: 600 }}
                  >
                    5.1×
                  </td>
                </tr>
                <tr>
                  <td className="service-cname">App Dev — Performance</td>
                  <td>
                    <span className="service-badge service-badge-yellow">
                      Paused
                    </span>
                  </td>
                  <td>44,500</td>
                  <td>4,387</td>
                  <td style={{ color: "var(--service-yellow2)" }}>9.86%</td>
                  <td>$2,480</td>
                  <td
                    style={{ color: "var(--service-green2)", fontWeight: 600 }}
                  >
                    5.8×
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceShowcase;
