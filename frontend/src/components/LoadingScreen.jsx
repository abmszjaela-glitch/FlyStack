import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #e8f6fb 0%, #cee9f4 100%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {/* Ambient circles */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-[#4A9DBD]/10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full border border-[#4A9DBD]/10 pointer-events-none" />

      {/* Branding mark */}
      <div className="absolute top-5 left-6 flex items-center gap-2 opacity-50">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#2E5470">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        <span className="text-[11px] font-medium tracking-[.12em] uppercase text-[#2E5470]">FlyStack</span>
      </div>

      {/* Spinner */}
      <div className="relative w-16 h-16 flex items-center justify-center mb-8">
        {/* Static ring */}
        <span className="absolute inset-0 rounded-full border-[1.5px] border-[#4A9DBD]/20" />
        {/* Pulse ring */}
        <span className="absolute -inset-1.5 rounded-full border border-[#4A9DBD]/10 animate-[pulse-ring_2.4s_ease-in-out_infinite]" />
        {/* Outer spin */}
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#4A9DBD] animate-spin" />
        {/* Inner counter-spin */}
        <span className="absolute inset-1 rounded-full border-[1.5px] border-transparent border-t-[#4A9DBD]/40 animate-[spin_1.4s_linear_infinite_reverse]" />
        {/* Icon */}
        <svg
          width="22" height="22" viewBox="0 0 24 24" fill="none"
          className="relative z-10 text-[#4A9DBD] animate-[float_2.2s_ease-in-out_infinite]"
        >
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="w-44 h-[3px] rounded-full bg-[#4A9DBD]/15 overflow-hidden mb-6 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#4A9DBD] to-transparent animate-[load-bar_1.8s_ease-in-out_infinite]" />
      </div>

      {/* Text */}
      <motion.p
        className="text-[11px] font-medium tracking-[.22em] uppercase text-[#2E5470] mb-1"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Loading
      </motion.p>
      <motion.p
        className="text-[12px] text-[#2E5470]/50 animate-[shimmer_2s_ease-in-out_infinite]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Preparing your hub&hellip;
      </motion.p>

      {/* Dot indicators */}
      <div className="absolute bottom-5 flex gap-1.5">
        {[0, 0.2, 0.4].map((delay, i) => (
          <span
            key={i}
            className="w-[5px] h-[5px] rounded-full bg-[#4A9DBD]/70 animate-[shimmer_1.4s_ease-in-out_infinite]"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
}