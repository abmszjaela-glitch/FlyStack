import { FaPhone, FaEnvelope, FaHeadset } from "react-icons/fa6";
import { Reveal } from "../../Utils/Utils.jsx";


export default function ContactSection() {
  const channels = [
    {
      icon: <FaPhone />,
      label: "Phone Support",
      value: "+94 11 234 5678",
      sub: "Mon – Fri, 8 AM – 8 PM",
    },
    {
      icon: <FaEnvelope />,
      label: "Email Us",
      value: "support@flystack.app",
      sub: "We reply within 24 hours",
    },
    {
      icon: <FaHeadset />,
      label: "Live Chat",
      value: "Available in-app",
      sub: "24 / 7 real-time assistance",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-white border-t border-[rgba(74,157,189,0.18)] px-14 py-24 relative overflow-hidden"
    >
      {/* decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(184,221,237,0.25)_0%,transparent_70%)] blur-[70px]"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none
                   bg-[radial-gradient(circle,rgba(220,187,135,0.12)_0%,transparent_70%)] blur-[60px]"
      />

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* ── Left: intro + channels ── */}
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#4A9DBD] font-medium mb-6">
              Get In Touch
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="gloock font-light text-[clamp(36px,4vw,54px)] tracking-[-0.5px]
                         text-[#0A1E2D] leading-[1.1] mb-7"
            >
              We're here
              <br />
              <em className="not-italic text-[#4A9DBD]">to help.</em>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-base font-light leading-[1.8] text-[#2E5470] max-w-[420px] mb-10">
              Whether you have questions about bookings, flight schedules,
              baggage policies, or travel requirements, our dedicated support
              team is ready to provide prompt and reliable service. Reach out to
              us through phone, email, or our online support channels, and we'll
              ensure your journey remains smooth from start to finish.
            </p>
          </Reveal>

          {/* Contact channels */}
          <div className="flex flex-col gap-5">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <div className="flex items-center gap-5 group">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8DDED] to-[#7DC4E0]
                               flex items-center justify-center text-[18px] text-[#0D2D44]
                               group-hover:scale-105 transition-transform flex-shrink-0"
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.8px] text-[#6B98B8] mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-base font-semibold text-[#0D2D44]">{c.value}</p>
                    <p className="text-[12px] text-[#6B98B8]">{c.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Right: contact form ── */}
        <Reveal delay={160}>
          <div
            className="bg-[#F5F9FC] rounded-[24px] p-10 border border-[rgba(74,157,189,0.18)]
                       shadow-[0_8px_40px_rgba(13,45,68,0.07)]"
          >
            <p className="text-xl font-semibold text-[#0D2D44] mb-7">
              Send us a message
            </p>

            <div className="flex flex-col gap-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((pl) => (
                  <div key={pl}>
                    <label className="text-[11px] uppercase tracking-[0.8px] text-[#6B98B8] font-medium block mb-2">
                      {pl}
                    </label>
                    <input
                      type="text"
                      placeholder={pl}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(74,157,189,0.2)]
                                 bg-white text-[#0D2D44] text-sm placeholder-[#B8DDED]
                                 focus:outline-none focus:border-[#4A9DBD] focus:ring-1 focus:ring-[#4A9DBD]/30
                                 transition-all"
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.8px] text-[#6B98B8] font-medium block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(74,157,189,0.2)]
                             bg-white text-[#0D2D44] text-sm placeholder-[#B8DDED]
                             focus:outline-none focus:border-[#4A9DBD] focus:ring-1 focus:ring-[#4A9DBD]/30
                             transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.8px] text-[#6B98B8] font-medium block mb-2">
                  Subject
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(74,157,189,0.2)]
                             bg-white text-[#2E5470] text-sm
                             focus:outline-none focus:border-[#4A9DBD] focus:ring-1 focus:ring-[#4A9DBD]/30
                             transition-all appearance-none"
                >
                  <option>Booking Enquiry</option>
                  <option>Flight Status</option>
                  <option>Baggage Support</option>
                  <option>Technical Issue</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.8px] text-[#6B98B8] font-medium block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(74,157,189,0.2)]
                             bg-white text-[#0D2D44] text-sm placeholder-[#B8DDED]
                             focus:outline-none focus:border-[#4A9DBD] focus:ring-1 focus:ring-[#4A9DBD]/30
                             transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-xl bg-[#0D2D44] text-white text-[14px] font-medium
                           shadow-[0_8px_24px_rgba(13,45,68,0.2)] hover:bg-[#1A4A6B]
                           hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(13,45,68,0.25)]
                           transition-all"
              >
                Send Message →
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}