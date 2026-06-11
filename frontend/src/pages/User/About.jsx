import { Reveal } from "../../Utils/Utils.jsx";

export default function AboutSection() {
  const pillars = [
    {
      icon: "✈️",
      title: "Smart Travel Solutions",
      desc: "Simplifying every stage of your journey with modern digital services and personalized travel tools.",
    },
    {
      icon: "📡",
      title: "Live Travel Insights",
      desc: "Get real-time flight updates, schedule changes, and important travel information when it matters most.",
    },
    {
      icon: "🛡️",
      title: "Passenger-Centered Service",
      desc: "Designed to provide a smooth, secure, and stress-free travel experience from booking to arrival.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0D2D44] px-6 py-16 sm:px-8 lg:px-14 lg:py-24"
    >
      {/* decorative circles */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(184,221,237,0.08)_0%,transparent_70%)]"
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(220,187,135,0.07)_0%,transparent_70%)]"
      />

      <div className="max-w-5xl mx-auto">
        {/* ── Heading + description ── */}
        <Reveal className="mb-12 text-center lg:mb-16">
          <p className="text-[11px] uppercase tracking-[1.5px] text-[#7DC4E0] font-medium mb-5">
            Who We Are
          </p>
          <h2
            className="gloock font-light text-[clamp(40px,5vw,62px)] tracking-[-0.5px]
                       text-white leading-[1.1] mb-8"
          >
            Built for the future
            <br />
            <em className="not-italic text-[#B8DDED]">of aviation.</em>
          </h2>
          <p className="mx-auto max-w-3xl text-sm font-light leading-[1.9] text-white/65 sm:text-lg">
            FlyStack is a modern airline service hub designed to make air travel
            simpler, faster, and more convenient. From flight search and online
            check-in to baggage services, travel information, and real-time
            flight updates, we bring essential travel services together in one
            easy-to-use platform. Our goal is to provide passengers with a
            seamless travel experience through reliable digital solutions, smart
            assistance, and customer-focused support.
          </p>
        </Reveal>

        {/* ── Pillars ── */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div
                className="bg-white/6 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-4xl block mb-5">{p.icon}</span>
                <p className="text-lg font-semibold text-white mb-3">
                  {p.title}
                </p>
                <p className="text-sm font-light leading-[1.8] text-white/55">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
