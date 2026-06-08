import Hero from '../../components/Hub Explore/Hero'
import PricingCard from '../../components/Hub Explore/PricingCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Hub = () => {
  return (
    <div className="font-body w-full min-h-screen overflow-x-hidden bg-[#F5F9FC] text-[#0A1E2D]">
      <Navbar />
      <Hero />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Hub
