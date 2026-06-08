import {
  Plane, QrCode, Package, TrendingUp,
  Users, Wrench, Star, LayoutDashboard,
  Bell, MapPin, Shield, Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  // Row 1 — Passenger & Booking
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "Search and book flights across all routes with real-time availability and best-fare guarantees.",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    category: "Passenger & Booking",
    cta: "Book Now",
  },
  {
    icon: QrCode,
    title: "Online Check-in",
    desc: "Web and mobile check-in with instant boarding pass generation and e-gate compatibility.",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    category: "Passenger & Booking",
    cta: "Check In",
  },
  {
    icon: Package,
    title: "Cargo Booking",
    desc: "Book air freight with instant quotes, weight and volume calculators, and route options.",
    color: "#C4A800",
    bg: "rgba(196,168,0,0.08)",
    category: "Cargo & Freight",
    cta: "Book Cargo",
  },
  {
    icon: TrendingUp,
    title: "Revenue Manager",
    desc: "Yield management, dynamic pricing rules, seat analytics, and fare class optimisation tools.",
    color: "#2BAD8B",
    bg: "rgba(43,173,139,0.08)",
    category: "Finance & Revenue",
    cta: "View Revenue",
  },

  // Row 2 — Operations & Loyalty
  {
    icon: Users,
    title: "Crew Scheduler",
    desc: "Pilot and cabin crew rosters, shift planning, fatigue management, and regulatory compliance.",
    color: "#E8623A",
    bg: "rgba(232,98,58,0.08)",
    category: "Airline Operations",
    cta: "View Roster",
  },
  {
    icon: Wrench,
    title: "MRO Tracker",
    desc: "Aircraft maintenance, repair, and overhaul logging with scheduled checks and defect tracking.",
    color: "#E8623A",
    bg: "rgba(232,98,58,0.08)",
    category: "Airline Operations",
    cta: "View MRO",
  },
  {
    icon: Star,
    title: "Miles & Rewards",
    desc: "Earn, redeem, and transfer frequent flyer miles across partner airlines and retail brands.",
    color: "#9B59D4",
    bg: "rgba(155,89,212,0.08)",
    category: "Loyalty & Experience",
    cta: "View Miles",
  },
  {
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    desc: "Live flight status board for operators with delay monitoring, gate assignments, and alerts.",
    color: "#E84393",
    bg: "rgba(232,67,147,0.08)",
    category: "Analytics & Reporting",
    cta: "Open Dashboard",
  },

  // Row 3 — Alerts, Tracking, Insurance, API
  {
    icon: Bell,
    title: "Flight Alerts",
    desc: "Real-time notifications for delays, gate changes, and cancellations sent directly to your device.",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.08)",
    category: "Passenger & Booking",
    cta: "Set Alerts",
  },
  {
    icon: MapPin,
    title: "Shipment Tracker",
    desc: "Live cargo tracking from origin to destination with milestone notifications and proof of delivery.",
    color: "#C4A800",
    bg: "rgba(196,168,0,0.08)",
    category: "Cargo & Freight",
    cta: "Track Shipment",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    desc: "Instant cover quotes bundled with booking — medical, cancellation, delay, and lost baggage.",
    color: "#9B59D4",
    bg: "rgba(155,89,212,0.08)",
    category: "Loyalty & Experience",
    cta: "Get Cover",
  },
  {
    icon: Code2,
    title: "API Marketplace",
    desc: "Connect third-party tools to FlyStack — NDC, GDS, payment gateways, and more.",
    color: "#3AACCC",
    bg: "rgba(58,172,204,0.08)",
    category: "B2B & Agency",
    cta: "Explore APIs",
  },
];

export default function FlyStackServices() {
  return (
    <section className="flex flex-col items-center bg-[#F5F9FC] px-4 py-4 pb-20"> {/* Decorative blurs */}
      <div className="absolute top-20 -right-20 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none" style={{ background: "#4F8EF7", filter: "blur(100px)" }} />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none" style={{ background: "#E8623A", filter: "blur(90px)" }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(79,142,247,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2 mb-5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full"
            style={{ background: "rgba(79,142,247,0.08)", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.1)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#E8623A" }} />
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight" style={{ color: "#1E1E3F" }}>
            FlyStack Services
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #4F8EF7, #E8623A)" }} />
          <p className="mt-5 text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(30,30,63,0.5)" }}>
            The complete airline technology platform — from passenger booking to cargo operations, revenue management to B2B agency tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                style={{
                  background: "#fff",
                  borderColor: "rgba(139,127,212,0.08)",
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-[3rem] opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
                  style={{ background: s.color }}
                />

                {/* Category badge */}
                <span
                  className="self-start text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-md mb-4"
                  style={{ background: s.bg, color: s.color, border: `1px solid ${s.color}20` }}
                >
                  {s.category}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: s.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: s.color }} strokeWidth={1.8} />
                </div>

                {/* Animated line */}
                <div
                  className="h-0.5 w-0 group-hover:w-10 rounded-full mb-5 transition-all duration-400"
                  style={{ background: s.color }}
                />

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: "#1E1E3F" }}>
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "rgba(30,30,63,0.5)" }}>
                  {s.desc}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: s.color }}>
                  <span>{s.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}