import { Reveal } from "../../Utils/Utils.jsx";

export default function AboutSection() {
  const pillars = [
    {
      icon: "🚀",
      title: "Innovation First",
      desc: "We leverage cutting-edge technology to reimagine how airlines operate and how passengers experience air travel.",
    },
    {
      icon: "🌐",
      title: "Global Reach",
      desc: "Connecting major cities and destinations worldwide through a comprehensive, reliable airline network.",
    },
    {
      icon: "🤝",
      title: "Trusted Partnership",
      desc: "340+ airlines rely on FlyStack for operational intelligence, revenue optimization, and passenger satisfaction.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0D2D44] px-14 py-24 relative overflow-hidden"
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
        <Reveal className="text-center mb-16">
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
          <p className="text-lg font-light leading-[1.9] text-white/65 max-w-3xl mx-auto">
            FlyStack is a modern airline management and travel platform designed
            to simplify every aspect of air travel. Our mission is to deliver
            seamless flight booking, operational excellence, and exceptional
            customer experiences through innovative technology. By combining
            advanced aviation solutions with user-friendly design, FlyStack
            empowers travelers, airlines, and travel partners to connect more
            efficiently across the globe.
          </p>
        </Reveal>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-3 gap-6 mt-14">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div
                className="bg-white/6 backdrop-blur-sm rounded-2xl p-8 border border-white/10
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-4xl block mb-5">{p.icon}</span>
                <p className="text-lg font-semibold text-white mb-3">{p.title}</p>
                <p className="text-sm font-light leading-[1.8] text-white/55">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}