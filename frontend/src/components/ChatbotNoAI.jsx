// Chatbot.jsx
import { useState, useRef, useEffect } from "react";
import { Minus, Maximize2, RotateCcw } from "lucide-react";
import chatbotData from "../data/chatbotData.js";

// ─── Google Fonts ────────────────────────────────────────────────────────────
// Add to your index.html or main CSS:
// @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Gloock&family=Poppins:wght@400;500;600&display=swap');

// ─── FlyStack Color Palette ──────────────────────────────────────────────────
// Navy              : #0D2D44
// Primary Blue      : #4A9DBD
// Mid Blue          : #2E5470
// Light Blue        : #7DC4E0
// Page BG           : #F5F9FC
// Sky               : #DAEEF8
// Text              : #0A1E2D

// ─── Helpers ────────────────────────────────────────────────────────────────

const parseMarkdown = (text) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");

const fmt = (d) =>
  d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ─── Close SVG ───────────────────────────────────────────────────────────────

function CloseSVG({ size = 24, color = "white" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      <path
        d="M8 8L16 16M16 8L8 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── PlaneSVG3D ──────────────────────────────────────────────────────────────

function PlaneSVG3D({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="pg1"
          x1="0"
          y1="0"
          x2="40"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#e2eaf8" />
          <stop offset="45%" stopColor="#f8faff" />
          <stop offset="100%" stopColor="#b0c4e8" />
        </linearGradient>
        <linearGradient
          id="pg2"
          x1="14"
          y1="4"
          x2="26"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4A9DBD" />
          <stop offset="100%" stopColor="#0D2D44" />
        </linearGradient>
        <linearGradient
          id="pg3"
          x1="14"
          y1="30"
          x2="26"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4A9DBD" />
          <stop offset="100%" stopColor="#0D2D44" />
        </linearGradient>
        <linearGradient
          id="pg4"
          x1="4"
          y1="6"
          x2="12"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4A9DBD" />
          <stop offset="100%" stopColor="#0D2D44" />
        </linearGradient>
        <linearGradient
          id="pg5"
          x1="6"
          y1="17"
          x2="18"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <radialGradient id="pg6" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#F5F9FC" />
          <stop offset="100%" stopColor="#4A9DBD" />
        </radialGradient>
        <filter id="pShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2.5"
            floodColor="#0D2D44"
            floodOpacity="0.3"
          />
        </filter>
      </defs>
      <g filter="url(#pShadow)">
        <ellipse cx="21" cy="17" rx="16" ry="6" fill="url(#pg1)" />
        <ellipse
          cx="20"
          cy="13.5"
          rx="12"
          ry="2.8"
          fill="rgba(255,255,255,0.42)"
        />
        <path
          d="M37 17 C40 16.3 40.5 17 40 17.6 C39.5 18.2 37 18 37 17Z"
          fill="#d1ddf5"
        />
        <path d="M6 17 C5 12 7.5 8 10 9 L11 17Z" fill="url(#pg4)" />
        <path
          d="M7 16 C6.5 12.5 8.5 9.5 10 10 L10.5 16Z"
          fill="rgba(255,255,255,0.22)"
        />
        <path d="M24 16 L13 4 L12 6.5 L22 17Z" fill="url(#pg2)" />
        <path d="M24 18 L13 30 L12 27.5 L22 17Z" fill="url(#pg3)" />
        <path
          d="M23 16.3 L15 6.8 L14.5 8 L21.5 17Z"
          fill="rgba(255,255,255,0.18)"
        />
        <path
          d="M9.5 16.5 L6 13 L5.5 14 L8.5 17Z"
          fill="url(#pg4)"
          opacity="0.85"
        />
        <path
          d="M9.5 17.5 L6 21 L5.5 20 L8.5 17Z"
          fill="url(#pg4)"
          opacity="0.85"
        />
        <ellipse cx="18" cy="19.5" rx="4" ry="1.8" fill="url(#pg5)" />
        <ellipse
          cx="18"
          cy="18.8"
          rx="2.8"
          ry="0.9"
          fill="rgba(255,255,255,0.18)"
        />
        <ellipse cx="14" cy="19.5" rx="1.2" ry="1.5" fill="#0A1E2D" />
        <circle cx="33" cy="15.5" r="1.4" fill="url(#pg6)" />
        <circle cx="29" cy="15.5" r="1.4" fill="url(#pg6)" />
        <circle cx="25" cy="15.5" r="1.4" fill="url(#pg6)" />
        <rect
          x="28"
          y="14.5"
          width="2.5"
          height="5"
          rx="0.8"
          fill="none"
          stroke="rgba(100,116,139,0.4)"
          strokeWidth="0.6"
        />
        <line
          x1="0"
          y1="14"
          x2="4.5"
          y2="14"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="17"
          x2="5"
          y2="17"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="20"
          x2="4.5"
          y2="20"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="11.5"
          x2="3.5"
          y2="11.5"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="22.5"
          x2="3.5"
          y2="22.5"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

// ─── ContactForm ──────────────────────────────────────────────────────────────

function ContactForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: "rgba(13,45,68,0.45)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative mx-4 w-[min(420px,calc(100vw-2rem))] rounded-3xl overflow-hidden animate-[popOpen_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
        style={{
          background: "#FFFFFF",
          boxShadow:
            "0 8px 48px rgba(13,45,68,0.25), 0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div
          className="relative px-6 pt-6 pb-5 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D2D44 0%, #4A9DBD 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2
                className="text-white text-xl font-black tracking-tight"
                style={{ fontFamily: "'Epilogue', sans-serif" }}
              >
                Contact Us
              </h2>
              <p
                className="text-sm mt-0.5"
                style={{
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                We'll get back to you within 24 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <CloseSVG size={20} color="white" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6" style={{ background: "#F5F9FC" }}>
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "linear-gradient(135deg, #0D2D44, #4A9DBD)",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-black text-[#0A1E2D] mb-2"
                style={{ fontFamily: "'Gloock', serif" }}
              >
                Message Sent!
              </h3>
              <p
                className="text-sm text-[#0A1E2D]/60"
              >
                Thank you for reaching out. Our team will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white cursor-pointer transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0D2D44, #4A9DBD)",
                  boxShadow: "0 4px 16px rgba(13,45,68,0.3)",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Full Name",
                  name: "name",
                  type: "text",
                  placeholder: "John Silva",
                },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  placeholder: "john@example.com",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label
                    className="block text-xs font-semibold mb-1.5 text-[#0D2D44]"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all border"
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid rgba(13,45,68,0.15)",
                      color: "#0A1E2D",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#4A9DBD")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(13,45,68,0.15)")
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs font-semibold mb-1.5 text-[#0D2D44]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all border resize-none"
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid rgba(13,45,68,0.15)",
                    color: "#0A1E2D",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#4A9DBD")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(13,45,68,0.15)")
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #0D2D44 0%, #4A9DBD 100%)",
                  boxShadow: "0 4px 20px rgba(13,45,68,0.35)",
                }}
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── ChatMessage ─────────────────────────────────────────────────────────────

function ChatMessage({ message, onOptionClick, isProcessing }) {
  const { from, text, options, time } = message;
  const isBot = from === "bot";

  return (
    <div
      className={`flex items-end gap-2 animate-[msgIn_0.3s_cubic-bezier(0.34,1.2,0.64,1)] ${
        isBot ? "" : "flex-row-reverse"
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-[10px] flex-shrink-0 flex items-center justify-center text-[13px]`}
        style={{
          background: isBot
            ? "linear-gradient(135deg, #0D2D44, #4A9DBD)"
            : "linear-gradient(135deg, #2E5470, #4A9DBD)",
          boxShadow: isBot
            ? "0 3px 10px rgba(13,45,68,0.35)"
            : "0 3px 10px rgba(10,30,45,0.3)",
        }}
      >
        {isBot ? "🌟" : "👤"}
      </div>

      {/* Bubble + options */}
      <div>
        <div
          className={`relative max-w-[min(280px,72vw)] px-3.5 py-2.5 text-[13.5px] leading-relaxed`}
          style={{
            ...(isBot
              ? {
                  background: "#FFFFFF",
                  color: "#0A1E2D",
                  borderRadius: "18px 18px 18px 4px",
                  border: "1px solid rgba(13,45,68,0.1)",
                  boxShadow:
                    "0 2px 12px rgba(13,45,68,0.08), 0 1px 3px rgba(0,0,0,0.04)",
                }
              : {
                  background:
                    "linear-gradient(135deg, #0D2D44 0%, #4A9DBD 100%)",
                  color: "#FFFFFF",
                  borderRadius: "18px 18px 4px 18px",
                  boxShadow: "0 6px 20px rgba(13,45,68,0.4)",
                }),
          }}
          dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}
        />

        {isBot && options && options.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-2">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onOptionClick(option.nextNode, option.label)}
                disabled={isProcessing}
                className="px-3 py-1.5 rounded-full text-[12.5px] font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "#F5F9FC",
                  color: "#0D2D44",
                  border: "1.5px solid rgba(13,45,68,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #0D2D44, #4A9DBD)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.border = "1.5px solid transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F5F9FC";
                  e.currentTarget.style.color = "#0D2D44";
                  e.currentTarget.style.border =
                    "1.5px solid rgba(13,45,68,0.15)";
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <div
          className={`text-[9.5px] mt-1 px-1 ${isBot ? "" : "text-right"}`}
          style={{
            color: "rgba(10,30,45,0.3)",
          }}
        >
          {fmt(time)}
        </div>
      </div>
    </div>
  );
}

// ─── ChatHeader ───────────────────────────────────────────────────────────────

function ChatHeader({ minimized, onClear, onToggleMinimize, onClose }) {
  return (
    <div
      className="relative overflow-hidden px-5 pt-[18px] pb-5"
      style={{
        background:
          "linear-gradient(135deg, #0D2D44 0%, #2E5470 45%, #4A9DBD 100%)",
      }}
    >
      {/* Ambient layers */}
      <div
        className="absolute inset-0 animate-[clouds_6s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(ellipse 120px 40px at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 80px 30px at 20% 70%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex items-center gap-3.5">
        {/* Icon */}
        <div
          className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 animate-[headPlane_4s_ease-in-out_infinite]"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            backdropFilter: "blur(10px)",
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <PlaneSVG3D />
        </div>

        {/* Title */}
        <div className="flex-1">
          <h4
            className="text-white font-black text-base tracking-tight mb-1"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            Airline Support Hub
          </h4>
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-green-400 animate-[dotPulse_2s_infinite]"
              style={{ boxShadow: "0 0 0 0 rgba(74,222,128,0.5)" }}
            />
            <span
              className="text-xs font-medium"
              style={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Online · Information Center
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-1.5 items-center">
          {[
            { icon: <RotateCcw size={12} />, title: "Clear", action: onClear },
            {
              icon: minimized ? <Maximize2 size={12} /> : <Minus size={12} />,
              title: minimized ? "Expand" : "Minimize",
              action: onToggleMinimize,
            },
            {
              icon: <CloseSVG size={16} color="white" />,
              title: "Close",
              action: onClose,
            },
          ].map(({ icon, title, action }) => (
            <button
              key={title}
              onClick={action}
              title={title}
              className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Chatbot (main) ───────────────────────────────────────────────────────────

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [unread, setUnread] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const bottomRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  const initializeChat = () => {
    if (hasInitialized.current || messages.length > 0) return;
    hasInitialized.current = true;
    const root = chatbotData["root"];
    setMessages([
      {
        id: Date.now(),
        from: "bot",
        text: root.question,
        options: root.options,
        time: new Date(),
      },
    ]);
  };

  const handleOpenChat = () => {
    setOpen(true);
    setUnread(0);
    setTimeout(initializeChat, 100);
  };

  const handleOptionClick = (nextNode, selectedLabel) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const userMsg = {
      id: Date.now(),
      from: "user",
      text: selectedLabel,
      time: new Date(),
    };

    const nodeData = chatbotData[nextNode];

    const botMsg = nodeData
      ? {
          id: Date.now() + 1,
          from: "bot",
          text:
            nodeData.answer ??
            nodeData.question ??
            "Please select an option from below.",
          options: nodeData.options ?? chatbotData["root"].options,
          time: new Date(),
        }
      : {
          id: Date.now() + 1,
          from: "bot",
          text: "Sorry, I encountered an error. Returning to main menu.",
          options: chatbotData["root"].options,
          time: new Date(),
        };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setTimeout(() => setIsProcessing(false), 300);
  };

  const clearChat = () => {
    hasInitialized.current = false;
    const root = chatbotData["root"];
    setMessages([
      {
        id: Date.now(),
        from: "bot",
        text: root.question,
        options: root.options,
        time: new Date(),
      },
    ]);
    hasInitialized.current = true;
  };

  return (
    <div >
      {/* ── Contact Form Modal ── */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}

      {/* ── Chat Window ── */}
      {open && (
        <div
          className="fixed bottom-24 left-4 right-4 z-[9998] w-auto rounded-3xl overflow-hidden flex flex-col origin-bottom-right animate-[popOpen_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards] sm:bottom-28 sm:left-auto sm:right-7 sm:w-[390px]"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(13,45,68,0.15)",
            boxShadow:
              "0 2px 4px rgba(13,45,68,0.04), 0 8px 24px rgba(13,45,68,0.1), 0 32px 80px rgba(13,45,68,0.2)",
          }}
        >
          <ChatHeader
            minimized={minimized}
            onClear={clearChat}
            onToggleMinimize={() => setMinimized((m) => !m)}
            onClose={() => setOpen(false)}
          />

          {!minimized && (
            <>
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto px-3.5 py-4 flex flex-col gap-3 max-h-[55vh] min-h-[220px] scroll-smooth sm:max-h-[430px] [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:rounded-full"
                style={{
                  background: "#F5F9FC",
                  scrollbarColor: "#4A9DBD transparent",
                }}
              >
                {messages.length === 0 ? (
                  <div
                    className="flex justify-center items-center h-full text-sm"
                    style={{
                      color: "rgba(10,30,45,0.4)",
                    }}
                  >
                    Click the button below to get help
                  </div>
                ) : (
                  messages.map((m) => (
                    <ChatMessage
                      key={m.id}
                      message={m}
                      onOptionClick={handleOptionClick}
                      isProcessing={isProcessing}
                    />
                  ))
                )}
                <div ref={bottomRef} />
              </div>

              {/* Footer with Contact Us button */}
              <div
                className="px-3.5 pt-3 pb-3.5 flex flex-col gap-2.5"
                style={{
                  background: "#FFFFFF",
                  borderTop: "1px solid rgba(13,45,68,0.07)",
                }}
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D2D44 0%, #4A9DBD 100%)",
                    boxShadow: "0 4px 16px rgba(13,45,68,0.3)",
                  }}
                >
                  ✉️ &nbsp;Contact Us
                </button>
                <p
                  className="text-center text-[10px] tracking-wide"
                  style={{
                    color: "rgba(10,30,45,0.25)",
                  }}
                >
                  ⚡ Information Hub · 24/7 Support · No booking required
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Floating Launcher ── */}
      <button
        onClick={open ? () => setOpen(false) : handleOpenChat}
        title="Airline Support Assistant"
        className="fixed bottom-5 right-5 z-[9999] w-14 h-14 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-[5deg] animate-[ring_2.5s_infinite] overflow-visible sm:bottom-7 sm:right-7 sm:h-[68px] sm:w-[68px]"
        style={{
          background: "linear-gradient(145deg, #0D2D44, #4A9DBD, #7DC4E0)",
          boxShadow: "0 10px 32px rgba(13,45,68,0.5)",
        }}
      >
        {open ? (
          <CloseSVG size={28} color="white" />
        ) : (
          <div className="w-12 h-12 [perspective:120px] flex items-center justify-center">
            <div className="[transform-style:preserve-3d] animate-[plane3d_3s_ease-in-out_infinite]">
              <PlaneSVG3D size={40} />
            </div>
          </div>
        )}

        {!open && unread > 0 && (
          <span
            className="absolute -top-0.5 -right-0.5 text-white text-[10px] font-extrabold min-w-5 h-5 rounded-full px-1 flex items-center justify-center border-2 border-white animate-[badgePop_0.4s_cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ background: "#DAEEF8", color: "#0A1E2D" }}
          >
            {unread}
          </span>
        )}
      </button>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes popOpen {
          0%   { opacity:0; transform: scale(0.7) translateY(30px) rotateX(8deg); }
          100% { opacity:1; transform: scale(1) translateY(0) rotateX(0deg); }
        }
        @keyframes ring {
          0%   { box-shadow: 0 0 0 0 rgba(74,157,189,0.5), 0 10px 32px rgba(13,45,68,0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(74,157,189,0), 0 10px 32px rgba(13,45,68,0.45); }
          100% { box-shadow: 0 0 0 0 rgba(74,157,189,0), 0 10px 32px rgba(13,45,68,0.45); }
        }
        @keyframes plane3d {
          0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          25%  { transform: rotateX(8deg) rotateY(-12deg) rotateZ(-4deg); }
          50%  { transform: rotateX(-6deg) rotateY(10deg) rotateZ(3deg); }
          75%  { transform: rotateX(10deg) rotateY(-6deg) rotateZ(-3deg); }
          100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        }
        @keyframes headPlane {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%     { transform: translateY(-3px) rotate(1deg); }
        }
        @keyframes dotPulse {
          0%  { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          70% { box-shadow: 0 0 0 7px rgba(74,222,128,0); }
          100%{ box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        @keyframes clouds {
          from { transform: translateX(-5px); }
          to   { transform: translateX(10px); }
        }
        @keyframes msgIn {
          from { opacity:0; transform: translateY(12px) scale(0.95); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }
        @keyframes badgePop {
          from { transform:scale(0) rotate(-45deg); }
          to   { transform:scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
