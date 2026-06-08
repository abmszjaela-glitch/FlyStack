import LeadingCompany from "./LeadingCompany";
import OurServices from "./ServiceDashboard";
import TrustLable from "./TrustLable";
import AirlineSupportChatbot from "../ChatbotNoAI";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4f5f9] to-[#d0e9f2] text-[#0A1E2D] overflow-x-hidden min-h-screen">
      <section className="flex flex-col items-center px-4 pt-24 pb-10">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 mt-20 rounded-full bg-white/60 border border-white shadow-sm">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>
            <span className="relative h-2 w-2 rounded-full bg-green-600"></span>
          </div>
          <p className="text-sm text-gray-600">
            Trusted by 3,200+ airlines & travel agencies worldwide
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl text-center max-w-3xl mt-10 font-semibold leading-tight">
          The Smarter hub for seamless airline operations
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mt-4">
          Connect passengers, routes, bookings, and support in one powerful
          platform.
        </p>

        {/* Divider */}
        <div className="w-full max-w-3xl h-[2px] mt-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 max-w-4xl w-full text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">120+</h2>
            <p className="text-sm text-gray-500">Airlines Connected</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">4.2M+</h2>
            <p className="text-sm text-gray-500">Flights Processed</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">98.9%</h2>
            <p className="text-sm text-gray-500">Uptime Reliability</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">50+</h2>
            <p className="text-sm text-gray-500">Countries Served</p>
          </div>
        </div>

        <TrustLable />
        <LeadingCompany />
      </section>

      <OurServices />
      <AirlineSupportChatbot />
    </div>
  );
};
export default Hero;
