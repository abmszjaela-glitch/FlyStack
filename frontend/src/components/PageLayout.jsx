import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PageLayout({ children, activeSection = "" }) {
  return (
    <div className="font-body flex min-h-screen flex-col overflow-x-hidden bg-[#F5F9FC] text-[#0A1E2D]">
      <Navbar activeSection={activeSection} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
