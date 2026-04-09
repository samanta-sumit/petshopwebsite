import { PawPrint, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#3D2B1F" }} className="py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#E87D3E" }}
              >
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#FFFAF5",
                }}
              >
                Pawsome<span style={{ color: "#E87D3E" }}>Care</span>
              </span>
            </a>
            <p
              className="mb-5 max-w-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.87rem",
                color: "rgba(255,246,235,0.55)",
                lineHeight: 1.7,
              }}
            >
              Professional pet care that feels like home. Grooming, boarding,
              training & vet consultations — all with love.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:opacity-80"
                  style={{
                    background: "rgba(255,246,235,0.08)",
                    color: "rgba(255,246,235,0.6)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#FFFAF5",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Grooming", "Training", "Boarding", "Vet Consultation", "Dog Walking", "Cat Care"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(255,246,235,0.5)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "rgba(255,246,235,0.85)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,246,235,0.5)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#FFFAF5",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#process" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,246,235,0.5)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgba(255,246,235,0.85)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,246,235,0.5)")
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,246,235,0.08)" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,246,235,0.35)",
            }}
          >
            © 2026 PawsomeCare. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,246,235,0.35)",
            }}
          >
            Made with ❤️ for every pet parent
          </p>
        </div>
      </div>
    </footer>
  );
}
