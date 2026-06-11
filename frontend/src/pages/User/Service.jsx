import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { serviceCards } from "../../data/Data.jsx";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── ServicesSection ── */
export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-[rgba(74,157,189,0.18)] bg-[#F5F9FC] px-6 py-16 sm:px-8 lg:px-14 lg:py-24"
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2
                     bg-[radial-gradient(circle,rgba(220,187,135,0.12)_0%,transparent_70%)] blur-[80px]"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#4A9DBD] font-medium mb-6">
              Add-On Services
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="gloock font-light text-[clamp(36px,4vw,54px)] tracking-[-0.5px]
                           text-[#0A1E2D] leading-[1.1] mb-7"
            >
              Travel your way,
              <br />
              <em className="not-italic text-[#4A9DBD]">every detail.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-8 max-w-[420px] text-sm font-light leading-[1.8] text-[#2E5470] sm:mb-10 sm:text-base">
              From selecting the perfect seat to breezing through check-in,
              FlyStack's suite of travel services ensures every aspect of your
              journey is seamless, comfortable, and tailored to you.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                         bg-[#0D2D44] text-white text-[14px] font-medium
                         shadow-[0_8px_28px_rgba(13,45,68,0.2)] hover:bg-[#1A4A6B]
                         hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Explore Services
            </button>
          </Reveal>
        </div>

        {/* Right: 2×2 cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {serviceCards.map((s, i) => {
            const Icon = s.Icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  id={s.id}
                  className="service-card relative scroll-mt-28 bg-white rounded-[18px] p-6 sm:p-7
             border border-[rgba(38,149,235,0.15)] overflow-hidden
             hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(0,55,127,0.12)]
             hover:border-[#2695EB] transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-[22px]
               bg-gradient-to-br from-[#EAF5FF] to-[#CFE8FF]
               text-[#00377F]"
                  >
                    <Icon />
                  </div>
                  <p className="text-base font-semibold text-[#0D2D44] mb-2">
                    {s.title}
                  </p>
                  <p className="text-sm leading-[1.75] text-[#2E5470] font-light">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
