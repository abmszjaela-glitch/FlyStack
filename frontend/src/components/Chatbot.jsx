import { useState, useRef, useEffect } from "react";
import {
  Send,
  X,
  Minus,
  Maximize2,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

const suggestedQuestions = [
  "✈️ Book a flight",
  "📦 Track cargo",
  "👥 Crew schedule",
  "📊 Revenue stats",
];

const SYSTEM_PROMPT = `You are FlyStack Assistant, a helpful AI for the FlyStack airline technology platform.
FlyStack has 12 core services: Flight Booking, Online Check-in, Cargo Booking, Revenue Manager,
Crew Scheduler, MRO Tracker, Miles & Rewards, Operations Dashboard, Flight Alerts,
Shipment Tracker, Travel Insurance, and API Marketplace.
Keep replies concise, friendly, and relevant to airline operations. Use emojis sparingly.`;

const KODEKLOUD_API_KEY = import.meta.env.VITE_KODEKLOUD_API_KEY;
const KODEKLOUD_URL = "https://api.ai.kodekloud.com/v1/chat/completions";

const getReply = async (msg, history) => {
  if (!KODEKLOUD_API_KEY)
    throw new Error("VITE_KODEKLOUD_API_KEY missing in .env");
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history
      .filter((m) => m.id !== 1)
      .map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })),
    { role: "user", content: msg },
  ];
  const res = await fetch(KODEKLOUD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KODEKLOUD_API_KEY}`,
    },
    body: JSON.stringify({ model: "claude-haiku-4-5-20251001", messages }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  const data = await res.json();
  return (
    data?.choices?.[0]?.message?.content?.trim() ||
    "Sorry, no response received. ✈️"
  );
};

const parseMarkdown = (text) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hey there 👋\nWelcome to FlyStack! I'm your AI co-pilot. How can I help you today?",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(null);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  useEffect(() => {
    if (open && !minimized)
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open, minimized]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    const cleanMsg = msg.replace(/^[\u{1F300}-\u{1F9FF}]\s*/u, "");
    if (!cleanMsg || typing) return;
    setInput("");
    setError(null);
    const userMsg = {
      id: Date.now(),
      from: "user",
      text: cleanMsg,
      time: new Date(),
    };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setTyping(true);
    try {
      const reply = await getReply(cleanMsg, updated);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: reply, time: new Date() },
      ]);
      if (!open) setUnread((u) => u + 1);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        from: "bot",
        text: "Hey there 👋\nWelcome to FlyStack! I'm your AI co-pilot. How can I help you today?",
        time: new Date(),
      },
    ]);
    setError(null);
  };

  const fmt = (d) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="font-sans">
      {/* ── POPUP ── */}
      {open && (
        <div
          className="fixed bottom-28 right-7 z-[9998] w-[390px] rounded-3xl overflow-hidden flex flex-col bg-white shadow-2xl border border-blue-200 origin-bottom-right animate-[popOpen_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
          style={{
            boxShadow:
              "0 2px 4px rgba(23,65,196,0.04), 0 8px 24px rgba(23,65,196,0.1), 0 32px 80px rgba(23,65,196,0.2)",
          }}
        >
          {/* Header */}
          <div
            className="relative overflow-hidden px-5 pt-[18px] pb-5"
            style={{
              background:
                "linear-gradient(135deg, #0e2fa8 0%, #1741c4 40%, #2d63d8 70%, #3b7de8 100%)",
            }}
          >
            {/* Animated cloud overlay */}
            <div
              className="absolute inset-0 animate-[clouds_6s_ease-in-out_infinite_alternate]"
              style={{
                background:
                  "radial-gradient(ellipse 120px 40px at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 80px 30px at 20% 70%, rgba(255,255,255,0.04) 0%, transparent 70%)",
              }}
            />
            {/* Grid lines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 flex items-center gap-3.5">
              {/* Plane icon */}
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

              {/* Title & status */}
              <div className="flex-1">
                <h4
                  className="text-white font-extrabold text-base tracking-tight mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  FlyStack Assistant
                </h4>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full bg-green-400 animate-[dotPulse_2s_infinite]"
                    style={{ boxShadow: "0 0 0 0 rgba(74,222,128,0.5)" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {typing ? "AI is thinking..." : "Online · Instant replies"}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-1.5 items-center">
                {[
                  {
                    icon: <RotateCcw size={12} />,
                    onClick: clearChat,
                    title: "Clear",
                  },
                  {
                    icon: minimized ? (
                      <Maximize2 size={12} />
                    ) : (
                      <Minus size={12} />
                    ),
                    onClick: () => setMinimized((m) => !m),
                  },
                  { icon: <X size={12} />, onClick: () => setOpen(false) },
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={btn.onClick}
                    title={btn.title}
                    className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {btn.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3.5 py-4 bg-[#f3f7ff] flex flex-col gap-3 max-h-[310px] min-h-[220px] scroll-smooth [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-blue-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-end gap-2 animate-[msgIn_0.3s_cubic-bezier(0.34,1.2,0.64,1)] ${m.from === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-[10px] flex-shrink-0 flex items-center justify-center text-[13px] ${
                        m.from === "bot"
                          ? "bg-gradient-to-br from-blue-700 to-blue-500"
                          : "bg-gradient-to-br from-violet-700 to-violet-400"
                      }`}
                      style={{
                        boxShadow:
                          m.from === "bot"
                            ? "0 3px 10px rgba(23,65,196,0.35)"
                            : "0 3px 10px rgba(109,40,217,0.35)",
                      }}
                    >
                      {m.from === "bot" ? "🤖" : "👤"}
                    </div>

                    <div>
                      {/* Bubble */}
                      <div
                        className={`relative max-w-[74%] px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                          m.from === "bot"
                            ? "bg-white text-[#0b1232] rounded-[18px] rounded-bl-[4px] border border-blue-100"
                            : "bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-[18px] rounded-br-[4px]"
                        }`}
                        style={
                          m.from === "bot"
                            ? {
                                boxShadow:
                                  "0 2px 12px rgba(23,65,196,0.08), 0 1px 3px rgba(0,0,0,0.04)",
                              }
                            : { boxShadow: "0 6px 20px rgba(23,65,196,0.4)" }
                        }
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(m.text),
                        }}
                      />
                      {/* Bot bubble tail */}
                      {m.from === "bot" && (
                        <span
                          className="absolute left-[-5px] bottom-2 w-2.5 h-2.5 bg-white border-l border-b border-blue-100 rotate-45"
                          style={{
                            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                          }}
                        />
                      )}
                      <div
                        className={`text-[9.5px] text-black/30 mt-1 px-1 ${m.from === "user" ? "text-right" : ""}`}
                      >
                        {fmt(m.time)}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <div className="flex items-end gap-2">
                    <div
                      className="w-7 h-7 rounded-[10px] flex-shrink-0 flex items-center justify-center text-[13px] bg-gradient-to-br from-blue-700 to-blue-500"
                      style={{ boxShadow: "0 3px 10px rgba(23,65,196,0.35)" }}
                    >
                      🤖
                    </div>
                    <div
                      className="bg-white rounded-[18px] rounded-bl-[4px] px-4 py-3 flex gap-1.5 items-center border border-blue-100"
                      style={{ boxShadow: "0 2px 12px rgba(23,65,196,0.08)" }}
                    >
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <span
                          key={i}
                          className="w-[7px] h-[7px] rounded-full bg-gradient-to-br from-blue-700 to-blue-500 animate-[typingDot_1.3s_ease_infinite]"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Error */}
              {error && (
                <div className="mx-3.5 mb-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-1.5">
                  ⚠️ {error}
                </div>
              )}

              {/* Suggestion chips */}
              <div className="px-3.5 pt-2.5 pb-2 flex gap-1.5 flex-wrap bg-[#eef3ff] border-t border-blue-100">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white text-blue-700 border border-blue-200 flex items-center gap-1 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:text-white hover:border-transparent hover:shadow-lg cursor-pointer"
                    style={{ boxShadow: "0 2px 6px rgba(23,65,196,0.08)" }}
                  >
                    {q} <ChevronRight size={10} />
                  </button>
                ))}
              </div>

              {/* Input footer */}
              <div className="px-3.5 pt-3 pb-3.5 bg-white border-t border-blue-50">
                <div className="flex items-center gap-2 bg-[#f0f5ff] rounded-[14px] px-3.5 py-2 border-[1.5px] border-blue-200 transition-all duration-200 focus-within:border-blue-500 focus-within:shadow-[0_0_0_4px_rgba(59,125,232,0.1)] focus-within:bg-white">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask your AI co-pilot..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 border-none bg-transparent outline-none text-[13.5px] text-[#0b1232] font-medium placeholder:text-black/30"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || typing}
                    className="w-9 h-9 rounded-[11px] flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 text-white transition-all duration-200 hover:scale-110 hover:-rotate-[5deg] disabled:opacity-35 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                    style={{ boxShadow: "0 4px 14px rgba(23,65,196,0.4)" }}
                  >
                    {typing ? (
                      <svg
                        className="animate-spin"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                    ) : (
                      <Send size={15} />
                    )}
                  </button>
                </div>
                <p className="text-center text-[10px] text-black/25 mt-2 tracking-wide">
                  Powered by{" "}
                  <span className="text-blue-500 font-semibold">
                    FlyStack AI
                  </span>{" "}
                  · Your intelligent aviation assistant
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── LAUNCHER BUTTON ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="FlyStack AI Assistant"
        className="fixed bottom-7 right-7 z-[9999] w-[68px] h-[68px] rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-[5deg] animate-[ring_2.5s_infinite] overflow-visible"
        style={{
          background: "linear-gradient(145deg, #1741c4, #3b7de8, #5a9cf5)",
          boxShadow: "0 10px 32px rgba(23,65,196,0.5)",
        }}
      >
        {open ? (
          <X size={24} color="white" />
        ) : (
          <div className="w-12 h-12 [perspective:120px] flex items-center justify-center">
            <div className="[transform-style:preserve-3d] animate-[plane3d_3s_ease-in-out_infinite]">
              <PlaneSVG3D size={40} />
            </div>
          </div>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-extrabold min-w-5 h-5 rounded-full px-1 flex items-center justify-center border-2 border-white animate-[badgePop_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
            {unread}
          </span>
        )}
      </button>

      {/* Keyframe animations (only what Tailwind can't do inline) */}
      <style>{`
        @keyframes popOpen {
          0%   { opacity:0; transform: scale(0.7) translateY(30px) rotateX(8deg); }
          100% { opacity:1; transform: scale(1) translateY(0) rotateX(0deg); }
        }
        @keyframes ring {
          0%   { box-shadow: 0 0 0 0 rgba(59,125,232,0.5), 0 10px 32px rgba(23,65,196,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(59,125,232,0), 0 10px 32px rgba(23,65,196,0.5); }
          100% { box-shadow: 0 0 0 0 rgba(59,125,232,0), 0 10px 32px rgba(23,65,196,0.5); }
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
        @keyframes typingDot {
          0%,60%,100% { transform:translateY(0) scale(1); opacity:0.4; }
          30%         { transform:translateY(-6px) scale(1.2); opacity:1; }
        }
        @keyframes badgePop {
          from { transform:scale(0) rotate(-45deg); }
          to   { transform:scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

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
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient
          id="pg3"
          x1="14"
          y1="30"
          x2="26"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient
          id="pg4"
          x1="4"
          y1="6"
          x2="12"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
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
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>
        <filter id="pShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2.5"
            floodColor="#1741c4"
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
        <ellipse cx="14" cy="19.5" rx="1.2" ry="1.5" fill="#334155" />
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
