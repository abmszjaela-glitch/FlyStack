import { Reveal } from "../../Utils/Utils.jsx";
import { flightCards } from "../../data/Data.jsx";

export default function FlightsSection() {
  return (
    <section
      id="flights"
      className="relative overflow-hidden border-t border-[rgba(74,157,189,0.18)] bg-white px-6 py-16 sm:px-8 lg:px-14 lg:py-24"
    >
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none
                     bg-[radial-gradient(circle,rgba(184,221,237,0.3)_0%,transparent_70%)] blur-[70px]"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none
                     bg-[radial-gradient(circle,rgba(220,187,135,0.15)_0%,transparent_70%)] blur-[60px]"
      />

      <Reveal className="mb-12 text-center lg:mb-16">
        <p className="text-[11px] uppercase tracking-[1.5px] text-[#4A9DBD] font-medium mb-4">
          Passenger Services
        </p>
        <h2 className="gloock font-light text-[clamp(36px,4vw,54px)] tracking-[-0.5px] text-[#0A1E2D] leading-[1.1]">
          Your journey,{" "}
          <em className="not-italic text-[#4A9DBD]">effortlessly.</em>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {flightCards.map((card, i) => {
          const Icon = card.Icon;
          return (
            <Reveal key={card.title} delay={i * 100}>
              <div
                id={card.id}
                className="relative scroll-mt-28 bg-[#F5F9FC] rounded-[22px] p-6 sm:p-8 lg:p-9 border border-[rgba(74,157,189,0.18)]
                             overflow-hidden group hover:-translate-y-1.5
                             hover:shadow-[0_8px_36px_rgba(13,45,68,0.12)] hover:border-[#7DC4E0]
                             transition-all duration-300 cursor-default h-full flex flex-col"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px]
                               bg-gradient-to-r from-[#7DC4E0] to-[#4A9DBD]
                               scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8DDED] to-[#7DC4E0]
                               flex items-center justify-center text-[26px] mb-6 text-[#0D2D44]"
                >
                  <Icon />
                </div>
                <p className="text-xl font-semibold text-[#0D2D44] mb-3">
                  {card.title}
                </p>
                <p className="text-sm leading-[1.8] text-[#2E5470] font-light flex-1">
                  {card.desc}
                </p>
                <div className="mt-7 pt-6 border-t border-[rgba(74,157,189,0.15)]">
                  <span
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4A9DBD]
                                   group-hover:text-[#0D2D44] transition-colors cursor-pointer"
                  >
                    {card.tag}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
