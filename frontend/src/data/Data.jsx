import {
  FaChartLine,
  FaMoneyBillWave,
  FaPlaneDeparture,
  FaRoute,
  FaBell,
  FaMagnifyingGlass,
  FaCircleInfo,
  FaEarthAsia,
  FaCouch,
  FaSuitcaseRolling,
  FaMobileScreen,
  FaPassport,
} from "react-icons/fa6";
export const features = [
  {
    Icon: FaPlaneDeparture,
    name: "Real-Time Flight Operations",
    desc: "Monitor live flight movements including departures, arrivals, delays, and gate updates in a centralized control system.",
  },
  {
    Icon: FaChartLine,
    name: "Advanced Performance Analytics",
    desc: "Gain insights into airline performance metrics including efficiency, fuel consumption, and operational KPIs.",
  },
  {
    Icon: FaMoneyBillWave,
    name: "Revenue & Fare Optimization",
    desc: "Manage dynamic pricing strategies, monitor revenue streams, and optimize profitability across all routes.",
  },
  {
    Icon: FaRoute,
    name: "Intelligent Route Optimization",
    desc: "Identify optimal flight paths to minimize fuel costs, reduce travel time, and improve scheduling efficiency.",
  },
  {
    Icon: FaBell,
    name: "Smart Operational Alerts",
    desc: "Receive real-time notifications for delays, weather disruptions, gate changes, and critical operational events.",
  },
];

export const steps = [
  {
    num: "1",
    title: "Initialize Airline Ecosystem",
    text: "Connect core systems including fleet management, airport integrations, crew data, and operational databases into FlyStack.",
  },
  {
    num: "2",
    title: "Enable Real-Time Flight Monitoring",
    text: "Track departures, arrivals, delays, gate changes, and live aircraft status through a unified operational dashboard.",
  },
  {
    num: "3",
    title: "Unlock Operational Intelligence",
    text: "Leverage analytics and predictive insights to optimize routes, fuel consumption, passenger load, and scheduling efficiency.",
  },
  {
    num: "4",
    title: "Maximize Profitability & Passenger Experience",
    text: "Improve revenue performance, reduce operational disruptions, and deliver a seamless end-to-end travel experience.",
  },
];


export const metrics = [
  { num: "1.2M+", label: "Flights Managed" },
  { num: "85K+", label: "Active Passengers Daily" },
  { num: "96%", label: "On-Time Performance Rate" },
  { num: "22%", label: "Operational Cost Reduction" },
];

export const flightCards = [
  {
    id: "search-flights",
    path: "/Flight/search-flight",
    Icon: FaMagnifyingGlass,
    title: "Search Flights",
    desc: "Find the perfect flight with FlyStack's intelligent flight search system. Passengers can easily search routes, compare schedules, explore fare options, and select the most convenient journey based on destination, travel dates, and preferences.",
    tag: "Book Now",
  },
  {
    id: "flight-status",
    Icon: FaCircleInfo,
    title: "Flight Status",
    desc: "Stay informed with real-time flight updates. The Flight Status service provides live information about departures, arrivals, delays, gate changes, and cancellations.",
    tag: "Track Flight",
  },
  {
    id: "route-network",
    Icon: FaEarthAsia,
    title: "Route Network",
    desc: "Explore our extensive route network connecting major cities and destinations around the world.",
    tag: "Explore Routes",
  },
];

/* ─── SERVICE CARDS ─── */
export const serviceCards = [
  {
    id: "seat-selection",
    path: "/services/seat-selection",
    Icon: FaCouch,
    title: "Seat Selection",
    desc: "Choose the seat that best suits your travel needs.",
  },
  {
    id: "baggage",
    Icon: FaSuitcaseRolling,
    title: "Baggage",
    desc: "Manage your baggage with ease through our convenient baggage services.",
  },
  {
    id: "online-check-in",
    Icon: FaMobileScreen,
    title: "Online Check-In",
    desc: "Save time at the airport with our secure online check-in service.",
  },
  {
    id: "visa-travel-guide",
    Icon: FaPassport,
    title: "Visa & Travel Guide",
    desc: "Travel confidently with access to up-to-date visa requirements and destination information.",
  },
];