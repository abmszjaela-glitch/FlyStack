import LeadingCompany from "./LeadingCompany";
import OurServices from "./ServiceDashboard";
import TrustLable from "./TrustLable";
import AirlineSupportChatbot from "../ChatbotNoAI";
import heroBg from "../../assets/images/airplane-flying-clouds.jpg";

const Hero = () => {
  return (
    <div className="w-full text-[#0A1E2D] overflow-x-hidden">
      <section className="relative flex min-h-[85vh] w-full flex-col items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pb-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        {/* Light overlay — keeps text readable without hiding the image */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/25 via-[#e4f5f9]/20 to-[#d0e9f2]/45"
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full flex-col items-center">
        {/* Badge */}
        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/35 backdrop-blur-sm border border-white/50 shadow-sm">
          <div className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>
            <span className="relative h-2 w-2 rounded-full bg-green-600"></span>
          </div>
          <p className="text-sm md:text-base text-[#0A1E2D] font-semibold drop-shadow-sm">
            Trusted by 3,200+ airlines & travel agencies worldwide
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl text-center max-w-3xl mt-10 font-semibold leading-tight drop-shadow-sm">
          The Smarter hub for seamless airline operations
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#0A1E2D] font-semibold text-center max-w-2xl mt-4 drop-shadow-sm">
          Connect passengers, routes, bookings, and support in one powerful
          platform.
        </p>

        {/* Divider */}
        <div className="w-full max-w-3xl h-[2px] mt-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 max-w-4xl w-full text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1E2D] drop-shadow-sm">120+</h2>
            <p className="text-sm text-[#2E5470] font-medium">Airlines Connected</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1E2D] drop-shadow-sm">4.2M+</h2>
            <p className="text-sm text-[#2E5470] font-medium">Flights Processed</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1E2D] drop-shadow-sm">98.9%</h2>
            <p className="text-sm text-[#2E5470] font-medium">Uptime Reliability</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0A1E2D] drop-shadow-sm">50+</h2>
            <p className="text-sm text-[#2E5470] font-medium">Countries Served</p>
          </div>
        </div>

        <TrustLable />
        <LeadingCompany />
        </div>
      </section>

      <OurServices />
      <AirlineSupportChatbot />
    </div>
  );
};
export default Hero;
