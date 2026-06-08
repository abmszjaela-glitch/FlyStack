const Footer = () => {
  return (
    <div>
      <footer
        className="w-full bg-[#F5F9FC] border-t border-[rgba(74,157,189,0.18)]
                         px-4 sm:px-6 lg:px-14 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
      >
        <a href="/">
          <h1 className="text-2xl capitalize font-black">
            <span style={{ color: "#19232D" }}>Fly</span>
            <span style={{ color: "#4A9DBD" }}>Stack</span>
          </h1>
        </a>
        <div className="flex gap-7">
          {["Privacy", "Terms", "Contact", "Blog"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[12.5px] text-[#6B98B8] no-underline hover:text-[#0D2D44] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-[12.5px] text-[#6B98B8]">
          © 2026 FlyStack All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
