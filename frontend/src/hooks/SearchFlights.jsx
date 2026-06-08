import { useState } from "react";
import PageLayout from "../components/PageLayout.jsx";

const cabins = ["Economy", "Premium", "Business", "First"];

const DUMMY_RESULTS = {
  flight: "SQ322",
  date: "2026-06-15",
  cabin: "Business",
  aircraft: "Boeing 777-300ER",
  route: "Singapore (SIN) → London (LHR)",
  duration: "13h 45m",
  rows: [
    { row: "11", seats: "A, C, D, G", rating: "best", reason: "Extra legroom, direct aisle access, near galley" },
    { row: "12", seats: "A, K", rating: "best", reason: "Window seats with full privacy, no foot traffic" },
    { row: "14", seats: "D, G", rating: "good", reason: "Middle seats, good recline, near lavatory" },
    { row: "16", seats: "A, C, K", rating: "avoid", reason: "Near rear galley — noise & crew activity" },
    { row: "17", seats: "All", rating: "avoid", reason: "Misaligned windows, limited recline near exit" },
  ],
};

const ratingConfig = {
  best:  { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", label: "✦ Best" },
  good:  { color: "#ca8a04", bg: "#fefce8", border: "#fde68a", label: "◎ Good" },
  avoid: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca", label: "✕ Avoid" },
};

export default function SearchFlightPage() {
  const [flightCode, setFlightCode]     = useState("SQ322");
  const [date, setDate]                 = useState("2026-06-15");
  const [selectedCabin, setSelectedCabin] = useState("Business");
  const [results, setResults]           = useState(null);
  const [loading, setLoading]           = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = () => {
    if (!flightCode || !date) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => { setResults(DUMMY_RESULTS); setLoading(false); }, 1200);
  };

  const isReady = flightCode.trim() && date;

  const inputStyle = (id) => ({
    ...s.input,
    borderColor: focusedInput === id ? "#2695eb" : "#c7d2fe",
    boxShadow: focusedInput === id ? "0 0 0 3px rgba(38,149,235,0.15)" : "none",
  });

  return (
    <PageLayout activeSection="flights">
      <section
        className="min-h-full bg-[#F5F9FC] bg-gradient-to-br from-[#DAEEF8]/60 via-[#EDF6FB] to-[#C8E8F5]/40
                   px-5 pb-16 pt-24"
      >
      <div style={s.container}>

        {/* Header */}
        <header style={s.header}>
          <h1 style={s.title}>Find My Seat</h1>
          <p style={s.subtitle}>
            Enter your flight and cabin to see the best rows to sit in – and which rows to avoid.
          </p>
        </header>

        {/* Form card */}
        <div style={s.card}>
          <div style={s.row}>
            {/* Flight code */}
            <div style={s.field}>
              <label style={s.label}>Flight code</label>
              <input
                type="text"
                value={flightCode}
                onChange={(e) => setFlightCode(e.target.value.toUpperCase())}
                placeholder="BA283, TK1, SQ322..."
                style={inputStyle("flight")}
                onFocus={() => setFocusedInput("flight")}
                onBlur={() => setFocusedInput(null)}
              />
              <span style={s.hint}>Airline code + number (e.g., BA283, QR921, SQ317)</span>
            </div>

            {/* Departure date */}
            <div style={s.field}>
              <label style={s.label}>Departure date</label>
              <div style={s.dateWrapper}>
                <svg style={s.calIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ ...inputStyle("date"), paddingLeft: "48px", cursor: "pointer" }}
                  onFocus={() => setFocusedInput("date")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>
          </div>

          {/* Cabin */}
          <div style={s.cabinSection}>
            <label style={s.label}>Cabin</label>
            <div style={s.cabinRow}>
              {cabins.map((cabin) => (
                <button
                  key={cabin}
                  onClick={() => setSelectedCabin(cabin)}
                  style={{
                    ...s.cabinBtn,
                    ...(selectedCabin === cabin ? s.cabinBtnActive : {}),
                  }}
                >
                  {cabin}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isReady || loading}
            style={{ ...s.submitBtn, ...(isReady && !loading ? s.submitBtnReady : {}) }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <span style={s.spinner} /> Searching…
              </span>
            ) : "Find My Seat"}
          </button>
        </div>

        {/* Results */}
        {results && (
          <div style={{ ...s.card, animation: "fadeUp 0.3s ease both" }}>

            {/* Flight meta */}
            <div style={s.flightMeta}>
              <div style={s.metaLeft}>
                <span style={s.flightBadge}>{results.flight}</span>
                <div>
                  <div style={s.route}>{results.route}</div>
                  <div style={s.metaSub}>{results.aircraft} · {results.duration}</div>
                </div>
              </div>
              <div style={s.cabinTag}>{results.cabin}</div>
            </div>

            {/* Legend */}
            <div style={s.legend}>
              {Object.entries(ratingConfig).map(([key, cfg]) => (
                <span key={key} style={{ ...s.legendItem, color: cfg.color }}>
                  {cfg.label}
                </span>
              ))}
            </div>

            {/* Rows */}
            <div style={s.rowList}>
              {results.rows.map((r) => {
                const cfg = ratingConfig[r.rating];
                return (
                  <div
                    key={r.row}
                    style={{ ...s.rowItem, backgroundColor: cfg.bg, borderColor: cfg.border }}
                    className="row-hl"
                  >
                    <div style={s.rowLeft}>
                      <span style={{ ...s.rowNumber, color: cfg.color }}>Row {r.row}</span>
                      <span style={s.rowSeats}>Seats {r.seats}</span>
                    </div>
                    <div style={s.rowRight}>
                      <span style={{ ...s.rowRatingBadge, color: cfg.color, border: `1px solid ${cfg.border}` }}>
                        {cfg.label}
                      </span>
                      <p style={s.rowReason}>{r.reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      </section>
    </PageLayout>
  );
}

/* ─── Styles aligned with index.css ──────────────────────────────────────── */
const s = {
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'DM Sans', sans-serif",
  },

  header: { textAlign: "center", marginBottom: "36px" },
  title: {
    fontFamily: "'Gloock', serif",        // .gloock class from index.css
    fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
    fontWeight: "400",
    color: "#0A1E2D",
    margin: "0 0 14px",
    letterSpacing: "-0.01em",
  },
  subtitle: {
    fontFamily: "'Epilogue', sans-serif", // .epilogue class from index.css
    fontSize: "1rem",
    color: "#4b5563",
    lineHeight: "1.65",
    maxWidth: "520px",
    margin: "0 auto",
    fontWeight: "400",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "36px",
    boxShadow: "0 4px 24px rgba(38,149,235,0.10)",  // blue-tinted shadow like card-lift
    marginBottom: "20px",
  },

  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" },
  field: { display: "flex", flexDirection: "column", gap: "8px" },

  label: {
    fontSize: "0.82rem",
    fontWeight: "600",
    color: "#1e1b4b",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  input: {
    width: "100%",
    padding: "13px 16px",
    fontSize: "0.95rem",
    border: "1.5px solid #c7d2fe",       // indigo-200 from scrollbar color
    borderRadius: "10px",
    outline: "none",
    color: "#1e1b4b",
    backgroundColor: "#f5f7ff",          // very light indigo tint
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
  },

  hint: { fontSize: "0.75rem", color: "#94a3b8", marginTop: "2px" },

  dateWrapper: { position: "relative", display: "flex", alignItems: "center" },
  calIcon: {
    position: "absolute", left: "14px",
    width: "17px", height: "17px",
    color: "#94a3b8", pointerEvents: "none", zIndex: 1,
  },

  cabinSection: { marginBottom: "24px" },
  cabinRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginTop: "10px" },
  cabinBtn: {
    padding: "12px 8px",
    fontSize: "0.88rem",
    fontWeight: "500",
    border: "1.5px solid #c7d2fe",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#f5f7ff",
    color: "#4338ca",
    transition: "all 0.15s",
    fontFamily: "'Poppins', sans-serif",
  },
  cabinBtnActive: {
    backgroundColor: "#2695eb",          // nav-active color from index.css
    borderColor: "#2695eb",
    color: "#fff",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(38,149,235,0.30)",
  },

  submitBtn: {
    width: "100%",
    padding: "16px",
    fontSize: "0.95rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    cursor: "not-allowed",
    backgroundColor: "#bfdbfe",          // muted blue
    color: "#fff",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    transition: "background-color 0.2s, box-shadow 0.2s",
    fontFamily: "'Poppins', sans-serif",
  },
  submitBtnReady: {
    backgroundColor: "#2695eb",          // nav-active color
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(38,149,235,0.35)",
  },

  spinner: {
    display: "inline-block",
    width: "16px", height: "16px",
    border: "2px solid rgba(255,255,255,0.4)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },

  // Results
  flightMeta: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginBottom: "20px", paddingBottom: "18px",
    borderBottom: "1px solid #e6eaff",
  },
  metaLeft: { display: "flex", alignItems: "center", gap: "16px" },
  flightBadge: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "#2695eb",
    padding: "10px 16px",
    borderRadius: "10px",
    letterSpacing: "0.06em",
    fontFamily: "'Epilogue', sans-serif",
  },
  route: { fontSize: "0.95rem", fontWeight: "600", color: "#1e1b4b", marginBottom: "3px" },
  metaSub: { fontSize: "0.78rem", color: "#94a3b8" },
  cabinTag: {
    fontSize: "0.78rem",
    fontWeight: "700",
    color: "#2695eb",
    border: "1.5px solid #c7d2fe",
    borderRadius: "8px",
    padding: "5px 12px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    backgroundColor: "#f0f4ff",
  },

  legend: { display: "flex", gap: "18px", marginBottom: "14px" },
  legendItem: { fontSize: "0.78rem", fontWeight: "600", letterSpacing: "0.03em" },

  rowList: { display: "flex", flexDirection: "column", gap: "9px" },
  rowItem: {
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1.5px solid",
    gap: "14px",
    transition: "background 0.15s",
  },
  rowLeft: { display: "flex", flexDirection: "column", gap: "4px", minWidth: "80px" },
  rowNumber: { fontSize: "0.95rem", fontWeight: "700" },
  rowSeats: { fontSize: "0.75rem", color: "#64748b" },
  rowRight: { flex: 1, display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-end" },
  rowRatingBadge: {
    fontSize: "0.72rem",
    fontWeight: "700",
    padding: "3px 9px",
    borderRadius: "6px",
    backgroundColor: "#fff",
    letterSpacing: "0.04em",
  },
  rowReason: { fontSize: "0.82rem", color: "#64748b", margin: 0, textAlign: "right", lineHeight: "1.45" },
};