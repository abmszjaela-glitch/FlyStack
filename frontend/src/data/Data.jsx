import {
  FaMobileScreenButton,
  FaHeadset,
  FaPlaneDeparture,
  FaBell,
  FaMagnifyingGlass,
  FaCouch,
  FaSuitcaseRolling,
  FaMobileScreen,
  FaPassport,
} from "react-icons/fa6";
export const features = [
  {
    Icon: FaPlaneDeparture,
    name: "Easy Flight Booking",
    desc: "Find the best flights and complete your reservation in just a few clicks.",
  },
  {
    Icon: FaMobileScreenButton,
    name: "Digital Check-In",
    desc: "Check in from anywhere and access your boarding pass instantly.",
  },
  {
    Icon: FaSuitcaseRolling,
    name: "Baggage Management",
    desc: "Manage baggage allowances, purchase extras, and track your luggage.",
  },
  {
    Icon: FaBell,
    name: "Flight Alerts",
    desc: "Receive real-time notifications for delays, gate changes, and boarding updates.",
  },
  {
    Icon: FaHeadset,
    name: "24/7 Customer Support",
    desc: "Get assistance anytime for bookings, refunds, baggage, and travel inquiries.",
  },
];

export const steps = [
  {
    num: "1",
    title: "Search Flights",
    text: "Find available flights, compare schedules, and choose the best option for your journey.",
  },
  {
    num: "2",
    title: "Book & Manage Trips",
    text: "Complete your booking securely and manage your travel details from one convenient location.",
  },
  {
    num: "3",
    title: "Track Flight & Baggage",
    text: "Stay informed with real-time flight updates and baggage tracking throughout your trip.",
  },
  {
    num: "4",
    title: "Get Support Anytime",
    text: "Use our smart chatbot and customer support services to resolve travel-related questions quickly.",
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
    desc: "Find and compare available flights, schedules, and fares for your next journey.",
    tag: "Search Now",
  },
  {
    id: "baggage-services",
    path: "/Services/baggage",
    Icon: FaSuitcaseRolling,
    title: "Baggage Services",
    desc: "Track baggage, view baggage allowances, and access support for lost or delayed luggage.",
    tag: "Manage Baggage",
  },
  {
    id: "customer-support",
    path: "/Support",
    Icon: FaHeadset,
    title: "24/7 Support",
    desc: "Get instant assistance through our support center and AI-powered chatbot for travel-related inquiries.",
    tag: "Get Help",
  },
];
/* ─── SERVICE CARDS ─── */
export const serviceCards = [
  {
    id: "seat-selection",
    path: "/services/seat-selection",
    Icon: FaCouch,
    title: "Seat Selection",
    desc: "Reserve your favorite seat and customize your journey for maximum comfort.",
  },
  {
    id: "baggage-services",
    path: "/services/baggage",
    Icon: FaSuitcaseRolling,
    title: "Baggage Management",
    desc: "View baggage allowances, track luggage status, and receive baggage support instantly.",
  },
  {
    id: "online-check-in",
    path: "/services/online-check-in",
    Icon: FaMobileScreen,
    title: "Online Check-In",
    desc: "Check in securely from anywhere and receive your digital boarding pass in minutes.",
  },
  {
    id: "travel-assistance",
    path: "/services/travel-assistance",
    Icon: FaPassport,
    title: "Travel Assistance",
    desc: "Get visa guidance, travel requirements, destination updates, and passenger support.",
  },
];
