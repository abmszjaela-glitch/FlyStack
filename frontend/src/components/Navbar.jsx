import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const LANDING_LINKS = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Services", href: "flights" },
  { label: "About Us", href: "about" },
  { label: "Contact", href: "contact" },
];

function scrollToAnchor(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}

/** Home / section nav: route change when not on landing, scroll when already on / */
function useLandingSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (sectionId) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
        return;
      }
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      scrollToAnchor(sectionId);
    },
    [location.pathname, navigate],
  );

  const goHome = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollToAnchor("home");
  }, [location.pathname, navigate]);

  return { goToSection, goHome };
}

function LandingNavLink({ sectionId, label, isActive, onNavigate }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onNavigate(sectionId)}
        className={`relative inline-block cursor-pointer border-0 bg-transparent p-0 text-[13px] uppercase tracking-wide text-[#2E5470]
          no-underline hover:text-[#0D2D44] transition-colors ${
            isActive
              ? "font-medium text-[#0D2D44]"
              : "font-light after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-[#4A9DBD] after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
          }`}
      >
        {label}
      </button>
    </li>
  );
}

export default function Navbar({
  variant = "landing",
  activeSection = "home",
  onToggle,
  onSearch,
  notifs = [],
}) {
  const { goToSection, goHome } = useLandingSectionNav();

  /* ── shared state ── */
  const [scrolled, setScrolled] = useState(false);
  const [profOpen, setProfOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [search, setSearch] = useState("");

  const profRef = useRef(null);
  const notifRef = useRef(null);

  const unread = notifs?.filter((n) => !n?.read)?.length || 0;

  /* ── scroll listener (landing only) ── */
  useEffect(() => {
    if (variant !== "landing") return;
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [variant]);

  useEffect(() => {
    const h = (e) => {
      if (profRef.current && !profRef.current.contains(e.target))
        setProfOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target))
        setShowNotif(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  if (variant === "landing") {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all ${
          scrolled
            ? "bg-[rgba(245,249,252,0.85)] backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          className="cursor-pointer border-0 bg-transparent p-0"
        >
          <h1 className="text-2xl capitalize font-semibold">
            <span style={{ color: "#19232D" }}>Fly</span>
            <span style={{ color: "#4A9DBD" }}>Stack</span>
          </h1>
        </button>

        {/* Centered nav links */}
        <ul
          className={`absolute left-1/2 -translate-x-1/2 flex gap-10 list-none m-0 overflow-visible px-10 py-4 rounded-full ${
            scrolled
              ? "bg-transparent"
              : "bg-[rgba(245,249,252,0.85)] backdrop-blur-md border border-[rgba(74,157,189,0.18)] shadow-lg shadow-black/5"
          }`}
        >
          {LANDING_LINKS.map(({ label, href, mega }) =>
            mega ? (
              <NavMegaMenu
                key={href}
                label={label}
                sectionId={href}
                items={mega}
                isActive={activeSection === href}
                accent={href === "services" ? "gold" : "blue"}
                onNavigateToSection={goToSection}
              />
            ) : (
              <LandingNavLink
                key={label}
                sectionId={href}
                label={label}
                isActive={activeSection === href}
                onNavigate={goToSection}
              />
            ),
          )}
        </ul>

        {/* Right: auth actions */}
        <div className="flex items-center gap-2.5"></div>
      </nav>
    );
  }

  return (
    <>
      <header className="h-16 bg-white border-b border-[#E6EAFF] flex items-center px-6 gap-3 sticky top-0 z-40 flex-shrink-0">
        {/* Sidebar toggle */}
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-[#00377F] transition-colors p-2 rounded-lg hover:bg-[#E6EAFF]"
          aria-label="Toggle sidebar"
        >
          {/* Hamburger icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 4.5h14M2 9h14M2 13.5h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Search */}
        <div className="flex items-center gap-2 bg-[#E6EAFF]/70 border border-[#E6EAFF] rounded-xl px-3 h-9 w-56 focus-within:border-[#2695EB] focus-within:bg-white transition-colors">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onSearch?.(e.target.value);
            }}
            placeholder="Search task"
            className="bg-transparent outline-none text-sm text-[#1C1C1C] placeholder-gray-400 w-full"
          />
          <kbd className="text-[10px] text-gray-400 bg-white border border-[#E6EAFF] px-1.5 py-0.5 rounded font-mono flex-shrink-0">
            ⌘F
          </kbd>
        </div>

        <div className="flex-1" />

        {/* Notification bell */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => {
              setShowNotif((p) => !p);
              setProfOpen(false);
            }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors relative ${
              showNotif
                ? "bg-[#E6EAFF] text-[#2695EB]"
                : "text-gray-400 hover:bg-[#E6EAFF] hover:text-[#2695EB]"
            }`}
            aria-label="Notifications"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {unread > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            )}
          </button>

          {/* Notification panel */}
          {showNotif && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                width: 300,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 12px 40px rgba(0,55,127,0.14)",
                border: "1px solid #E6EAFF",
                overflow: "hidden",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid #E6EAFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: "#1C1C1C" }}
                >
                  Notifications
                </span>
                {unread > 0 && (
                  <span
                    style={{
                      fontSize: 11,
                      background: "#EEF2FF",
                      color: "#2695EB",
                      borderRadius: 99,
                      padding: "2px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {unread} new
                  </span>
                )}
              </div>
              {notifs.length === 0 ? (
                <p
                  style={{
                    padding: "20px 16px",
                    textAlign: "center",
                    fontSize: 13,
                    color: "#9CA3AF",
                  }}
                >
                  No notifications
                </p>
              ) : (
                notifs.slice(0, 6).map((n, i) => (
                  <div
                    key={n.id ?? i}
                    style={{
                      padding: "11px 16px",
                      borderBottom: "1px solid #F3F4F6",
                      background: n.read ? "transparent" : "#F5F8FF",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    {!n.read && (
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "#2695EB",
                          flexShrink: 0,
                          marginTop: 5,
                        }}
                      />
                    )}
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: n.read ? 400 : 600,
                          color: "#1C1C1C",
                          marginBottom: 2,
                        }}
                      >
                        {n.title ?? n.message}
                      </p>
                      {n.time && (
                        <p style={{ fontSize: 11, color: "#9CA3AF" }}>
                          {n.time}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Profile chip */}
        <div ref={profRef} className="relative">
          <button
            onClick={() => {
              setProfOpen((p) => !p);
              setShowNotif(false);
            }}
            className={`flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl transition-colors ${
              profOpen ? "bg-[#E6EAFF]" : "hover:bg-[#E6EAFF]"
            }`}
          >
            <Avatar size={32} />
            <div className="text-left leading-tight">
              <p className="text-sm font-medium text-[#1C1C1C]">Guest</p>
              <p className="text-[11px] text-gray-400" />
            </div>
            <ChevronIcon />
          </button>
        </div>
      </header>
    </>
  );
}

function NavMegaMenu({
  label,
  sectionId,
  isActive = "blue",
  onNavigateToSection,
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  }, [clearCloseTimer]);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const handleViewAll = () => {
    onNavigateToSection(sectionId);
    setOpen(false);
  };

  return (
    <li
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => onNavigateToSection(sectionId)}
        className={`relative inline-flex items-center gap-1 cursor-pointer border-0 bg-transparent p-0 text-[13px] uppercase tracking-wide text-[#2E5470]
          no-underline hover:text-[#0D2D44] transition-colors ${
            isActive || open
              ? "font-medium text-[#0D2D44]"
              : "font-light after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-[#4A9DBD] after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100"
          }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-[60] pt-3 -translate-x-1/2">
          <div
            className="min-w-[220px] rounded-2xl border border-[rgba(74,157,189,0.2)]
                       bg-white shadow-[0_16px_48px_rgba(13,45,68,0.14)]"
            role="menu"
          >
            <div className="border-t border-[rgba(74,157,189,0.12)] px-4 py-2">
              <button
                type="button"
                onClick={handleViewAll}
                className="cursor-pointer text-[11px] font-medium text-[#4A9DBD] hover:text-[#0D2D44] transition-colors"
              >
                View all {label.toLowerCase()} →
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

function Avatar({ size = 34 }) {
  const initials = "U";

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        overflow: "hidden",
        background: "linear-gradient(135deg,#00377F,#2695EB)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: Math.round(size * 0.38),
        fontWeight: 700,
      }}
    >
      {initials}
    </div>
  );
}

/** Tiny chevron SVG */
function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9CA3AF"
      strokeWidth="2.5"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
