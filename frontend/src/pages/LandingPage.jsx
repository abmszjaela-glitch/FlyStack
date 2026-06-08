import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Reveal, Counter } from "../Utils/Utils.jsx";
import { features, steps, metrics } from "../data/Data.jsx";
import Navbar from "../components/Navbar.jsx";
import FlightsSection from "./User/Flightselection.jsx";
import ServicesSection from "./User/Service.jsx";
import AboutSection from "./User/About.jsx";
import ContactSection from "./User/Contact.jsx";

import element2 from "../assets/element/element-2.png";
import Footer from "../components/Footer.jsx";
import AirlineSupportChatbot from "../components/ChatbotNoAI.jsx";

export default function Landing() {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const section = scrollTo === "seat-selection" ? "services" : scrollTo;
      window.setTimeout(() => setActiveSection(section), 0);
    }
    navigate(location.pathname, { replace: true, state: null });
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "monitor",
        "flights",
        "services",
        "about",
        "contact",
      ];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-body bg-[#F5F9FC] text-[#0A1E2D] overflow-x-hidden">
      <Navbar activeSection={activeSection} />

      <section
        id="home"
        className="min-h-screen grid grid-cols-2 pt-20 inset-0
                   bg-gradient-to-br from-[#DAEEF8]/60 via-[#EDF6FB] to-[#C8E8F5]/40"
      >
        <div className="relative overflow-hidden">
          <div
            className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full
                       bg-[radial-gradient(circle,rgba(184,221,237,0.45)_0%,transparent_70%)]
                       blur-[80px] pointer-events-none"
          />
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full
                       bg-[radial-gradient(circle,rgba(74,157,189,0.2)_0%,transparent_70%)]
                       blur-[60px] pointer-events-none"
          />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={element2}
              alt="3D Plane"
              className="w-full max-w-[1500px] object-contain drop-shadow-2xl anim-drop select-none pointer-events-none"
              style={{ filter: "drop-shadow(0 32px 48px rgba(13,45,68,0.18))" }}
            />
          </div>

          <div
            className="absolute top-[22%] left-[6%] z-20
                       bg-white/90 backdrop-blur-md rounded-2xl border border-white/90
                       shadow-[0_4px_24px_rgba(13,45,68,0.10)] p-4 anim-hero"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-[10.5px] uppercase tracking-[0.8px] text-[#6B98B8] mb-1">
              Today's Flights
            </p>
            <p className="text-[22px] font-semibold text-[#0D2D44]">
              128 Flights
            </p>
            <p className="text-[11px] text-[#2E5470] mt-0.5">
              ↑ 12% increase in operations
            </p>
          </div>

          <div
            className="absolute bottom-[20%] right-[5%] z-20
                       bg-white/90 backdrop-blur-md rounded-2xl border border-white/90
                       shadow-[0_4px_24px_rgba(13,45,68,0.10)] p-4 anim-hero"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-[10.5px] uppercase tracking-[0.8px] text-[#6B98B8] mb-1">
              Safety Index
            </p>
            <p className="text-[22px] font-semibold text-[#0D2D44]">9.7 / 10</p>
            <p className="text-[11px] text-[#2E5470] mt-0.5">
              Excellent — Fully compliant operations
            </p>
          </div>

          <div
            className="absolute top-[14%] right-[8%] z-20 flex items-center gap-1.5
                       bg-[#0D2D44] text-white rounded-full px-3.5 py-2 text-xs font-medium
                       shadow-[0_4px_16px_rgba(13,45,68,0.3)] anim-pill1"
          >
            <span className="w-2 h-2 rounded-full bg-[#4AE09D]" />
            Live Monitoring
          </div>
          <div
            className="absolute bottom-[20%] left-[5%] z-20 flex items-center gap-1.5
                       bg-[#0D2D44] text-white rounded-full px-3.5 py-2 text-xs font-medium
                       shadow-[0_4px_16px_rgba(13,45,68,0.3)] anim-pill2"
          >
            <span className="w-2 h-2 rounded-full bg-[#4AE09D]" />
            240 Points Earned
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-16 py-10">
          <div
            className="absolute bottom-20 left-[35%] w-64 h-64 rounded-full pointer-events-none
                       bg-[radial-gradient(circle,rgba(125,196,224,0.3)_0%,transparent_70%)] blur-[60px]"
          />

          <div
            className="flex items-center gap-2 mb-7 anim-hero"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-7 h-[1.5px] bg-[#4A9DBD]" />
            <span className="text-[11.5px] font-medium uppercase tracking-[1px] text-[#4A9DBD]">
              Smart Flight Management
            </span>
          </div>

          <p
            className="text-8xl gloock font-light leading-[1.05] tracking-[-1px] text-[#0A1E2D] mb-7 anim-hero"
            style={{ animationDelay: "0.2s" }}
          >
            Flight,
            <br />
            <em className="not-italic text-[#4A9DBD]">Optimized</em>
            <br />
            in Time.
          </p>

          <p
            className="text-base font-light leading-[1.75] text-[#2E5470] max-w-[420px] mb-11 anim-hero"
            style={{ animationDelay: "0.3s" }}
          >
            Monitor your flights in real time, track performance metrics,
            optimize routes, analyze operational efficiency, and improve
            passenger experience — all in one intelligent airline platform.
          </p>

          <div
            className="flex items-center gap-4 anim-hero"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              onClick={() => navigate("/hub")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl
                         bg-[#0D2D44] text-white text-[15px] font-medium no-underline
                         shadow-[0_8px_28px_rgba(13,45,68,0.25)] hover:bg-[#1A4A6B]
                         hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(13,45,68,0.3)]
                         transition-all cursor-pointer"
            >
              Make Your Trip
            </a>
            <a
              href="#monitor"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2E5470]
                         no-underline group hover:text-[#0D2D44] transition-colors"
            >
              See how it works
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="bg-white border-t border-[rgba(74,157,189,0.18)] px-14 py-20"
      >
        <Reveal className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[1.5px] text-[#4A9DBD] font-medium mb-4">
            Everything You Need
          </p>
          <h2 className="gloock font-light text-[clamp(36px,4vw,54px)] tracking-[-0.5px] text-[#0A1E2D] leading-[1.1]">
            Five tools. One{" "}
            <em className="not-italic text-[#4A9DBD]">mission.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-5 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <div
                className="feat-card relative bg-[#F5F9FC] rounded-[18px] p-7
                           border border-[rgba(74,157,189,0.18)] overflow-hidden
                           hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(13,45,68,0.10)]
                           hover:border-[#7DC4E0] transition-all duration-300 cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B8DDED] to-[#7DC4E0]
                             flex items-center justify-center text-[22px] mb-4"
                >
                  <f.Icon />
                </div>
                <p className="text-lg font-semibold text-[#0D2D44] mb-2">
                  {f.name}
                </p>
                <p className="text-sm leading-relaxed text-[#2E5470] font-light">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-[#0D2D44] grid grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 80}
            className={`px-10 py-14 text-center ${
              i < metrics.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            {(visible) => (
              <>
                <p className="gloock font-light text-[52px] text-[#B8DDED] leading-none tracking-[-1px] mb-2">
                  {visible && <Counter value={parseInt(m.num)} />}
                </p>
                <p className="text-xs uppercase tracking-[0.8px] text-white/55">
                  {m.label}
                </p>
              </>
            )}
          </Reveal>
        ))}
      </section>

      <section
        id="monitor"
        className="bg-[#F5F9FC] px-14 py-24 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none
                     bg-[radial-gradient(circle,rgba(184,221,237,0.35)_0%,transparent_70%)] blur-[70px]"
        />

        <div className="grid grid-cols-2 gap-24 items-center">
          {/* Left — steps */}
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[1.5px] text-[#4A9DBD] font-medium mb-6">
                How It Works
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="gloock font-light text-[clamp(36px,4vw,54px)] tracking-[-0.5px]
                           text-[#0A1E2D] leading-[1.1] mb-12"
              >
                Simple steps,
                <br />
                <em className="not-italic text-[#4A9DBD]">big impact.</em>
              </h2>
            </Reveal>

            <div className="flex flex-col">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 80}>
                  <div
                    className={`flex gap-6 py-7 items-start group ${
                      i < steps.length - 1
                        ? "border-b border-[rgba(74,157,189,0.18)]"
                        : ""
                    }`}
                  >
                    <div
                      className="w-11 h-11 flex-shrink-0 rounded-xl border-[1.5px] border-[#0D2D44]
                                 text-[#0D2D44] gloock text-xl font-semibold
                                 flex items-center justify-center
                                 group-hover:bg-[#0D2D44] group-hover:text-white transition-all"
                    >
                      {s.num}
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-[#0D2D44] mb-1.5">
                        {s.title}
                      </p>
                      <p className="text-base text-[#2E5470] leading-relaxed font-light">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — mock dashboard */}
          <Reveal delay={160}>
            <div className="relative z-10">
              <div
                className="absolute -inset-10 rounded-3xl pointer-events-none
                           bg-[radial-gradient(circle,rgba(125,196,224,0.3)_0%,transparent_70%)] blur-[60px]"
              />
              <div
                className="relative bg-white rounded-2xl shadow-[0_32px_80px_rgba(13,45,68,0.18)]
                           border border-[rgba(74,157,189,0.15)] overflow-hidden"
              >
                <div className="bg-[#0D2D44] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="text-white/40 text-[11px] tracking-wide">
                      flystack.app/dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 bg-[#4AE09D]/20 text-[#4AE09D] text-[10px] font-medium px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4AE09D] animate-pulse" />
                      Live
                    </span>
                    <span className="text-white/30 text-[11px]">
                      Jun 01, 2026
                    </span>
                  </div>
                </div>

                {/* dashboard body */}
                <div className="bg-[#F0F7FB] p-4 flex flex-col gap-3">
                  {/* KPI row */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {[
                      {
                        label: "Today's Flights",
                        value: "128",
                        delta: "↑ 12%",
                        good: true,
                        icon: "✈️",
                      },
                      {
                        label: "On-Time Rate",
                        value: "96%",
                        delta: "↑ 2%",
                        good: true,
                        icon: "⏱️",
                      },
                      {
                        label: "Revenue",
                        value: "$2.4M",
                        delta: "↑ 8%",
                        good: true,
                        icon: "💰",
                      },
                      {
                        label: "Alerts",
                        value: "3 Active",
                        delta: "↓ 5",
                        good: true,
                        icon: "🔔",
                      },
                    ].map((k) => (
                      <div
                        key={k.label}
                        className="bg-white rounded-xl p-3 border border-[rgba(74,157,189,0.12)]
                                   shadow-[0_2px_8px_rgba(13,45,68,0.05)]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[16px]">{k.icon}</span>
                          <span
                            className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                              k.good
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-red-50 text-red-500"
                            }`}
                          >
                            {k.delta}
                          </span>
                        </div>
                        <p className="text-[14px] font-bold text-[#0D2D44] leading-none">
                          {k.value}
                        </p>
                        <p className="text-[9px] text-[#6B98B8] mt-1 uppercase tracking-wide">
                          {k.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-5 gap-2.5">
                    {/* Bar chart */}
                    <div className="col-span-3 bg-white rounded-xl p-3.5 border border-[rgba(74,157,189,0.12)] shadow-[0_2px_8px_rgba(13,45,68,0.05)]">
                      <div className="flex items-center justify-between mb-2.5">
                        <div>
                          <p className="text-[11px] font-semibold text-[#0D2D44]">
                            Weekly Flights
                          </p>
                          <p className="text-[9px] text-[#6B98B8]">
                            Departures per day
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {["W", "M", "Y"].map((t) => (
                            <span
                              key={t}
                              className={`text-[9px] px-2 py-0.5 rounded cursor-pointer font-medium ${
                                t === "W"
                                  ? "bg-[#0D2D44] text-white"
                                  : "text-[#6B98B8] hover:bg-[#EDF6FB]"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <svg
                        viewBox="0 0 260 80"
                        className="w-full"
                        style={{ height: 80 }}
                      >
                        {[0, 26, 53, 80].map((y) => (
                          <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="260"
                            y2={y}
                            stroke="#E8F4FA"
                            strokeWidth="1"
                          />
                        ))}
                        {[
                          { x: 8, h: 48, day: "Mon" },
                          { x: 46, h: 62, day: "Tue" },
                          { x: 84, h: 38, day: "Wed" },
                          { x: 122, h: 72, day: "Thu" },
                          { x: 160, h: 32, day: "Fri" },
                          { x: 198, h: 55, day: "Sat" },
                          { x: 236, h: 44, day: "Sun", active: true },
                        ].map((b) => (
                          <g key={b.day}>
                            <rect
                              x={b.x}
                              y={80 - b.h}
                              width="18"
                              height={b.h}
                              rx="3"
                              fill={b.active ? "#0D2D44" : "#B8DDED"}
                              opacity={b.active ? 1 : 0.85}
                            />
                            <text
                              x={b.x + 9}
                              y="92"
                              textAnchor="middle"
                              fontSize="6.5"
                              fill="#6B98B8"
                            >
                              {b.day}
                            </text>
                          </g>
                        ))}
                        <polyline
                          points="17,32 55,18 93,42 131,8 169,48 207,25 245,36"
                          fill="none"
                          stroke="#4A9DBD"
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                          opacity="0.6"
                        />
                      </svg>
                    </div>

                    {/* Route performance */}
                    <div className="col-span-2 bg-white rounded-xl p-3.5 border border-[rgba(74,157,189,0.12)] shadow-[0_2px_8px_rgba(13,45,68,0.05)] flex flex-col gap-2.5">
                      <div>
                        <p className="text-[11px] font-semibold text-[#0D2D44]">
                          Route Performance
                        </p>
                        <p className="text-[9px] text-[#6B98B8]">Top routes</p>
                      </div>
                      {[
                        {
                          label: "CMB → DXB",
                          value: "98%",
                          fill: 98,
                          color: "#7DC4E0",
                        },
                        {
                          label: "CMB → SIN",
                          value: "94%",
                          fill: 94,
                          color: "#4AE09D",
                        },
                        {
                          label: "CMB → BKK",
                          value: "89%",
                          fill: 89,
                          color: "#4A9DBD",
                        },
                        {
                          label: "CMB → LHR",
                          value: "91%",
                          fill: 91,
                          color: "#B8DDED",
                        },
                      ].map((q) => (
                        <div key={q.label}>
                          <div className="flex justify-between mb-1">
                            <span className="text-[9.5px] text-[#2E5470] font-medium">
                              {q.label}
                            </span>
                            <span className="text-[9.5px] font-semibold text-[#0D2D44]">
                              {q.value}
                            </span>
                          </div>
                          <div className="h-1.5 bg-[#EDF6FB] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${q.fill}%`,
                                background: q.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Revenue */}
                    <div className="bg-white rounded-xl p-3.5 border border-[rgba(74,157,189,0.12)] shadow-[0_2px_8px_rgba(13,45,68,0.05)]">
                      <p className="text-[11px] font-semibold text-[#0D2D44] mb-0.5">
                        Revenue Today
                      </p>
                      <p className="text-[9px] text-[#6B98B8] mb-2.5">
                        June 01, 2026
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "Economy", amt: "$1.2M", w: "50%" },
                          { label: "Business", amt: "$0.8M", w: "33%" },
                          { label: "First Class", amt: "$0.4M", w: "17%" },
                        ].map((b) => (
                          <div key={b.label}>
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[9px] text-[#6B98B8]">
                                {b.label}
                              </span>
                              <span className="text-[9px] font-medium text-[#0D2D44]">
                                {b.amt}
                              </span>
                            </div>
                            <div className="h-1 bg-[#EDF6FB] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#7DC4E0] rounded-full"
                                style={{ width: b.w }}
                              />
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between pt-2 border-t border-[#EDF6FB]">
                          <span className="text-[10px] font-semibold text-[#0D2D44]">
                            Total
                          </span>
                          <span className="text-[10px] font-bold text-[#0D2D44]">
                            $2.4M
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Alerts */}
                    <div className="bg-white rounded-xl p-3.5 border border-[rgba(74,157,189,0.12)] shadow-[0_2px_8px_rgba(13,45,68,0.05)]">
                      <p className="text-[11px] font-semibold text-[#0D2D44] mb-2.5">
                        Operational Alerts
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {[
                          {
                            dot: "#4AE09D",
                            title: "All Systems Normal",
                            time: "2 min ago",
                            desc: "No critical issues detected",
                          },
                          {
                            dot: "#FEBC2E",
                            title: "Weather Hold — BKK",
                            time: "1 hr ago",
                            desc: "FS108 delayed 45 min",
                          },
                          {
                            dot: "#4AE09D",
                            title: "On-Time Milestone",
                            time: "Today",
                            desc: "96% OTP achieved this week",
                          },
                        ].map((a) => (
                          <div key={a.title} className="flex gap-2 items-start">
                            <span
                              className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                              style={{ background: a.dot }}
                            />
                            <div>
                              <p className="text-[10px] font-semibold text-[#0D2D44] leading-tight">
                                {a.title}
                              </p>
                              <p className="text-[9px] text-[#6B98B8]">
                                {a.time} · {a.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Flights */}
                    <div className="bg-gradient-to-br from-[#0D2D44] to-[#1A4A6B] rounded-xl p-3.5">
                      <p className="text-[11px] font-semibold text-white mb-0.5">
                        Live Flights
                      </p>
                      <p className="text-[9px] text-white/50 mb-2.5">
                        Currently airborne
                      </p>
                      <div className="text-center mb-2.5">
                        <p className="font-display font-light text-[34px] text-[#B8DDED] leading-none">
                          74
                        </p>
                        <p className="text-[8.5px] text-white/50 uppercase tracking-wide mt-1">
                          In the air now
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg h-1.5 mb-1">
                        <div
                          className="h-full bg-[#7DC4E0] rounded-lg"
                          style={{ width: "58%" }}
                        />
                      </div>
                      <p className="text-[8.5px] text-white/40 text-center mb-2.5">
                        58% of fleet active
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          {
                            emoji: "🛫",
                            label: "FS402 departed CMB on schedule",
                          },
                          {
                            emoji: "🛩️",
                            label: "FS108 delay: weather hold BKK",
                          },
                        ].map((r) => (
                          <div
                            key={r.label}
                            className="bg-white/10 rounded-lg px-2 py-1.5 text-center"
                          >
                            <p className="text-[13px]">{r.emoji}</p>
                            <p className="text-[8px] text-white/60 mt-0.5">
                              {r.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FlightsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />

      <section id="cta" className="bg-white px-14 py-24">
        <Reveal>
          <div
            className="relative bg-gradient-to-br from-[#0D2D44] to-[#1A4A6B]
                       rounded-[28px] px-20 py-20 text-center overflow-hidden"
          >
            <div
              className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none
                         bg-[radial-gradient(circle,rgba(184,221,237,0.12)_0%,transparent_70%)]"
            />
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#7DC4E0] font-medium mb-5">
              START YOUR FREE TRIAL
            </p>
            <h2
              className="gloock font-light leading-[1.1] tracking-[-0.5px] text-white mb-5
                         text-[clamp(40px,5vw,64px)]"
            >
              Ready for takeoff?
              <br />
              <em className="not-italic text-[#B8DDED]">Your runway awaits.</em>
            </h2>
            <p className="text-base text-white/55 font-light max-w-md mx-auto mb-11">
              Join 340+ airlines already running smarter operations with
              FlyStack. No long onboarding. No lock-in.
            </p>
            <div className="flex justify-center gap-3.5">
              <a
                onClick={() => navigate("/register")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl
                           bg-[#7DC4E0] text-[#0D2D44] text-[15px] font-semibold no-underline
                           hover:bg-[#B8DDED] hover:-translate-y-0.5 transition-all
                           shadow-[0_8px_28px_rgba(125,196,224,0.3)] cursor-pointer"
              >
                Get Started →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <AirlineSupportChatbot />
      <Footer />
    </div>
  );
}
