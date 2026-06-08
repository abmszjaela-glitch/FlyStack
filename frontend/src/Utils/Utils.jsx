import { useEffect } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal.js";


export function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    document.body.classList.add("font-body");

    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatDrop {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-14px); }
      }
      @keyframes floatPill {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-8px); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .font-display { font-family: 'Cormorant Garamond', serif; }
      .font-body {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
      }
      .anim-drop    { animation: floatDrop 5s ease-in-out infinite; }
      .anim-pill1   { animation: floatPill 6s ease-in-out infinite; }
      .anim-pill2   { animation: floatPill 6s ease-in-out 2s infinite; }
      .anim-hero    { animation: fadeSlideUp 0.7s ease both; }

      .feat-card::before {
        content: '';
        position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, #7DC4E0, #4A9DBD);
        transform: scaleX(0); transform-origin: left;
        transition: transform 0.3s;
        border-radius: 18px 18px 0 0;
      }
      .feat-card:hover::before { transform: scaleX(1); }

      .service-card::before {
        content: '';
        position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, #dcbb87, #c9a96e);
        transform: scaleX(0); transform-origin: left;
        transition: transform 0.3s;
        border-radius: 18px 18px 0 0;
      }
      .service-card:hover::before { transform: scaleX(1); }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove("font-body");
      link.remove();
      style.remove();
    };
  }, []);
  return null;
}


export const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1 });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

/* ─── REVEAL WRAPPER COMPONENT ─── */
export function Reveal({ children, delay = 0, className = "" }) {
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
      {typeof children === "function" ? children(visible) : children}
    </div>
  );
}