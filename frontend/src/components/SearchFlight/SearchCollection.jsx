import { useState } from "react";
import {
  Plane,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Luggage,
  Wifi,
  Utensils,
  TrendingDown,
  ChevronDown,
} from "lucide-react";

const flights = [
  {
    id: 1,
    airline: "FlyStack Airways",
    flightNo: "FS 412",
    departure: "09:25",
    arrival: "17:40",
    duration: "11h 15m",
    stops: "1 Stop",
    stopCity: "DXB",
    price: 997865,
    tag: "Cheapest",
  },
  {
    id: 2,
    airline: "FlyStack Airways",
    flightNo: "FS 218",
    departure: "14:10",
    arrival: "22:05",
    duration: "10h 55m",
    stops: "Non-stop",
    stopCity: null,
    price: 1125200,
    tag: "Fastest",
  },
  {
    id: 3,
    airline: "FlyStack Airways",
    flightNo: "FS 670",
    departure: "22:30",
    arrival: "09:20+1",
    duration: "11h 50m",
    stops: "1 Stop",
    stopCity: "DOH",
    price: 1245000,
    tag: null,
  },
];

const cabins = ["Economy", "Premium Economy", "Business", "First"];
const sorts = [
  "Lowest Price",
  "Shortest Duration",
  "Earliest Departure",
  "Latest Departure",
];

const fmt = (n) =>
  "LKR " + n.toLocaleString("en-LK");

export default function SearchCollection() {
  const [cabin, setCabin] = useState("Economy");
  const [sort, setSort] = useState("Lowest Price");
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="min-h-screen font-[Poppins]"
      style={{ background: "#e6eaff" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* ── Page Header ── */}
        <div className="mb-8">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
            style={{ background: "#c7d2fe", color: "#2695eb" }}
          >
            Search Results
          </span>

          <h1
            className="text-3xl sm:text-4xl font-bold leading-tight mb-3"
            style={{ color: "#1a1f4e" }}
          >
            Choose Your{" "}
            <span style={{ color: "#2695eb" }}>Outbound Flight</span>
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#4b5fa6" }}>
            <Plane size={15} className="shrink-0" />
            <span>Colombo (CMB)</span>
            <span className="text-base" style={{ color: "#a5b4fc" }}>→</span>
            <span>Abidjan (ABJ)</span>
            <span
              className="ml-2 px-2 py-0.5 rounded-full text-xs"
              style={{ background: "#c7d2fe", color: "#3730a3" }}
            >
              1 Passenger · Economy
            </span>
          </div>
        </div>

        {/* ── Lowest Fare Banner ── */}
        <div
          className="rounded-2xl p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, #2695eb 0%, #3b5bdb 100%)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(255,255,255,0.18)" }}
            >
              <TrendingDown size={22} color="#fff" />
            </div>
            <div>
              <p className="text-blue-100 text-sm font-medium">
                Lowest total price · 1 passenger
              </p>
              <p className="text-white text-2xl font-bold tracking-tight">
                {fmt(997865)}
              </p>
            </div>
          </div>
          <p className="text-blue-200 text-xs max-w-xs leading-relaxed">
            Inclusive of airfare, taxes, airport fees and carrier charges.
          </p>
        </div>

        {/* ── Controls Card ── */}
        <div
          className="rounded-2xl p-5 sm:p-6 mb-6"
          style={{ background: "#fff", border: "1px solid #c7d2fe" }}
        >
          {/* Date Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-5" style={{ borderBottom: "1px solid #e6eaff" }}>
            <div>
              <p className="font-semibold text-base" style={{ color: "#1a1f4e" }}>
                Wednesday, 3 June 2026
              </p>
              <p className="text-sm mt-0.5" style={{ color: "#7c8db5" }}>
                4 flight options available
              </p>
            </div>

            <div className="flex gap-2">
              {[
                { icon: ArrowLeft, label: "Previous Day" },
                { icon: ArrowRight, label: "Next Day", right: true },
              ].map(({ icon: Icon, label, right }) => (
                <button
                  key={label}
                  className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150"
                  style={{
                    border: "1px solid #c7d2fe",
                    color: "#2695eb",
                    background: "#f0f4ff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#dde4ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f0f4ff";
                  }}
                >
                  {!right && <Icon size={15} />}
                  {label}
                  {right && <Icon size={15} />}
                </button>
              ))}
            </div>
          </div>

          {/* Cabin + Sort */}
          <div className="flex flex-col xl:flex-row gap-5 xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#7c8db5" }}>
                Show prices for
              </p>
              <div className="flex flex-wrap gap-2">
                {cabins.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCabin(c)}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150"
                    style={
                      cabin === c
                        ? {
                            background: "#2695eb",
                            color: "#fff",
                            border: "1px solid #2695eb",
                          }
                        : {
                            background: "#f0f4ff",
                            color: "#4b5fa6",
                            border: "1px solid #c7d2fe",
                          }
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#7c8db5" }}>
                Sort by
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-xl text-sm font-medium focus:outline-none"
                  style={{
                    background: "#f0f4ff",
                    border: "1px solid #c7d2fe",
                    color: "#1a1f4e",
                    minWidth: 200,
                  }}
                >
                  {sorts.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  color="#2695eb"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Flight Cards ── */}
        <div className="space-y-4">
          {flights.map((f) => {
            const isSelected = selected === f.id;
            return (
              <div
                key={f.id}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "#fff",
                  border: isSelected
                    ? "1.5px solid #2695eb"
                    : "1px solid #c7d2fe",
                  boxShadow: isSelected
                    ? "0 4px 24px rgba(38,149,235,0.13)"
                    : "none",
                }}
              >
                {/* Tag ribbon */}
                {f.tag && (
                  <div
                    className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold"
                    style={{
                      background: f.tag === "Cheapest" ? "#e6f7ee" : "#eef2ff",
                      color: f.tag === "Cheapest" ? "#15803d" : "#3b5bdb",
                      borderBottom: "1px solid #e6eaff",
                    }}
                  >
                    {f.tag === "Cheapest" ? (
                      <TrendingDown size={13} />
                    ) : (
                      <Clock3 size={13} />
                    )}
                    {f.tag} option
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col xl:flex-row xl:items-center gap-6">

                    {/* Left: Flight info */}
                    <div className="flex-1 min-w-0">
                      {/* Airline row */}
                      <div className="flex items-center gap-2 mb-5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: "#e6eaff" }}
                        >
                          <Plane size={15} color="#2695eb" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "#1a1f4e" }}>
                            {f.airline}
                          </p>
                          <p className="text-xs" style={{ color: "#7c8db5" }}>
                            {f.flightNo}
                          </p>
                        </div>
                      </div>

                      {/* Times + route */}
                      <div className="flex items-center gap-4 max-w-lg">
                        {/* Depart */}
                        <div className="shrink-0">
                          <p
                            className="text-3xl font-bold tabular-nums leading-none"
                            style={{ color: "#1a1f4e" }}
                          >
                            {f.departure}
                          </p>
                          <p className="text-xs mt-1 font-medium" style={{ color: "#7c8db5" }}>
                            CMB
                          </p>
                        </div>

                        {/* Line */}
                        <div className="flex-1 px-2">
                          <p className="text-center text-xs font-medium mb-1.5" style={{ color: "#7c8db5" }}>
                            {f.duration}
                          </p>
                          <div className="relative flex items-center">
                            <div
                              className="flex-1 h-px"
                              style={{ background: "#c7d2fe" }}
                            />
                            {f.stopCity ? (
                              <div className="mx-1 flex flex-col items-center gap-1 shrink-0">
                                <div
                                  className="w-2 h-2 rounded-full border-2"
                                  style={{
                                    background: "#fff",
                                    borderColor: "#2695eb",
                                  }}
                                />
                              </div>
                            ) : (
                              <div
                                className="mx-1 w-2 h-2 rounded-full shrink-0"
                                style={{ background: "#2695eb" }}
                              />
                            )}
                            <div
                              className="flex-1 h-px"
                              style={{ background: "#c7d2fe" }}
                            />
                          </div>
                          <p className="text-center text-xs mt-1.5 font-medium" style={{ color: f.stopCity ? "#e97316" : "#15803d" }}>
                            {f.stopCity ? `1 stop · ${f.stopCity}` : "Non-stop"}
                          </p>
                        </div>

                        {/* Arrive */}
                        <div className="shrink-0 text-right">
                          <p
                            className="text-3xl font-bold tabular-nums leading-none"
                            style={{ color: "#1a1f4e" }}
                          >
                            {f.arrival}
                          </p>
                          <p className="text-xs mt-1 font-medium" style={{ color: "#7c8db5" }}>
                            ABJ
                          </p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-3 mt-5">
                        {[
                          { icon: Luggage, label: "30 kg baggage" },
                          { icon: Wifi, label: "Wi-Fi" },
                          { icon: Utensils, label: "Meals included" },
                        ].map(({ icon: Icon, label }) => (
                          <div
                            key={label}
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
                            style={{ background: "#f0f4ff", color: "#4b5fa6" }}
                          >
                            <Icon size={13} />
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Price + CTA */}
                    <div
                      className="xl:w-56 shrink-0 rounded-xl p-5 flex flex-col gap-4"
                      style={{ background: "#f7f9ff", border: "1px solid #e6eaff" }}
                    >
                      <div>
                        <p className="text-xs font-medium" style={{ color: "#7c8db5" }}>
                          Total fare · per passenger
                        </p>
                        <p
                          className="text-2xl font-bold mt-1 leading-tight"
                          style={{ color: "#2695eb" }}
                        >
                          {fmt(f.price)}
                        </p>
                        <p className="text-xs mt-1" style={{ color: "#a5b4d6" }}>
                          Taxes &amp; fees included
                        </p>
                      </div>

                      <button
                        onClick={() => setSelected(f.id)}
                        className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                        style={
                          isSelected
                            ? {
                                background: "#1a73c8",
                                color: "#fff",
                                border: "none",
                              }
                            : {
                                background: "#2695eb",
                                color: "#fff",
                                border: "none",
                              }
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#1a73c8";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = isSelected
                            ? "#1a73c8"
                            : "#2695eb";
                        }}
                      >
                        {isSelected ? "✓ Selected" : "Select Flight"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        {selected && (
          <div
            className="mt-6 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{ background: "#fff", border: "1px solid #c7d2fe" }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1a1f4e" }}>
                Flight selected
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#7c8db5" }}>
                {flights.find((f) => f.id === selected)?.flightNo} ·{" "}
                {flights.find((f) => f.id === selected)?.departure} →{" "}
                {flights.find((f) => f.id === selected)?.arrival} ·{" "}
                {fmt(flights.find((f) => f.id === selected)?.price)}
              </p>
            </div>
            <button
              className="px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shrink-0"
              style={{ background: "#2695eb", color: "#fff" }}
            >
              Continue to Passenger Details
              <ArrowRight size={15} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}