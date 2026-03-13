import { useState, useEffect } from "react";

const NAV_LINKS = ["Properties", "Services", "About", "Agents", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-stone-100 py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="#ffffff" />
            </svg>
          </div>
          <span className={`font-display text-xl font-light tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-stone-900" : "text-white"}`}>
            Aurum<span className="gold font-medium"> Estate</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className={`nav-link text-sm tracking-widest uppercase transition-colors duration-300 hover-gold ${scrolled ? "text-stone-600" : "text-white/90"}`}>
              {link}
            </a>
          ))}
        </div>

        

        {/* Hamburger */}
        <button className={`md:hidden transition-colors ${scrolled ? "text-stone-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-stone-600 hover-gold transition-colors">
              {link}
            </a>
          ))}
          
        </div>
      )}
    </nav>
  );
}
