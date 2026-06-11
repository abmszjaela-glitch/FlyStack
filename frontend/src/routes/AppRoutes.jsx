import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "../pages/LandingPage.jsx";
import SeatSelection from "../pages/User/SeatSelection.jsx";
import SearchFlightPage from "../pages/User/SearchFlight.jsx";
import AboutSection from "../pages/User/About.jsx";
import ContactSection from "../pages/User/Contact.jsx";
import Hub from "../pages/User/Hub.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";
import PageTransition from "../components/PageTransition.jsx";

export default function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const duration = isFirstLoad.current ? 1500 : 600;
    setLoading(true);
    const timer = window.setTimeout(() => {
      setLoading(false);
      isFirstLoad.current = false;
    }, duration);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="app-loading" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/Contact" element={<ContactSection />} />
            <Route
              path="/services/seat-selection"
              element={<SeatSelection />}
            />
            <Route path="/hub" element={<Hub />} />
            <Route
              path="/Flight/search-flight"
              element={<SearchFlightPage />}
            />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
}
