import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage.jsx";
import SeatSelection from "../pages/User/SeatSelection.jsx";
import SearchFlightPage from "../pages/User/SearchFlight.jsx";
import AboutSection from "../pages/User/About.jsx";
import ContactSection from "../pages/User/Contact.jsx";
import Hub from "../pages/User/Hub.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/Contact" element={<ContactSection />} />
      <Route path="/services/seat-selection" element={<SeatSelection />} />

      <Route path="/hub" element={<Hub/>} />
      <Route path="/Flight/search-flight" element={<SearchFlightPage />} />
    </Routes>
  );
}
