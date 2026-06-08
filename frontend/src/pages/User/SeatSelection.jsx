import { Link } from "react-router-dom";
import { FaCouch } from "react-icons/fa6";
import PageLayout from "../../components/PageLayout.jsx";

export default function SeatSelection() {
  return (
    <PageLayout activeSection="services">
      <section
        className="min-h-full border-t border-[rgba(74,157,189,0.18)] bg-[#F5F9FC]
                   bg-gradient-to-br from-[#DAEEF8]/60 via-[#EDF6FB] to-[#C8E8F5]/40 px-14 py-24 pt-28"
      >
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#2E5470]
                       no-underline hover:text-[#0D2D44] transition-colors"
          >
            ← Back to home
          </Link>

          <div
            id="seat-selection"
            className="service-card relative scroll-mt-28 rounded-[18px] border border-[rgba(74,157,189,0.15)]
                       bg-white p-7 overflow-hidden"
          >
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-[22px]
                         bg-gradient-to-br from-[#fdf3e3] to-[#f5e0b5] text-[#c9a96e]"
            >
              <FaCouch />
            </div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[1.5px] text-[#dcbb87]">
              Add-On Services
            </p>
            <h1
              className="gloock mb-7 text-[clamp(36px,4vw,54px)] font-light leading-[1.1] tracking-[-0.5px]
                         text-[#0A1E2D]"
            >
              Seat Selection
            </h1>
            <p className="max-w-[420px] text-base font-light leading-[1.8] text-[#2E5470]">
              Choose the seat that best suits your travel needs.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
