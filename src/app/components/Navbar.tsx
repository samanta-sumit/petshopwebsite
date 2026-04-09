import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,251,245,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(61,43,31,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#E87D3E" }}
          >
            <PawPrint className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-lg tracking-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              color: "#3D2B1F",
            }}
          >
            Pawsome<span style={{ color: "#E87D3E" }}>Care</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200 hover:opacity-70"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: scrolled ? "#3D2B1F" : "#fff",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.25)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "#E87D3E",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(232,125,62,0.35)",
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" style={{ color: "#3D2B1F" }} />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ color: scrolled ? "#3D2B1F" : "#fff" }}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-5 pt-2 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(255,251,245,0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base py-1 border-b"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "#3D2B1F",
                borderColor: "rgba(61,43,31,0.08)",
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-3 rounded-full text-sm text-white text-center"
            style={{
              background: "#E87D3E",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
