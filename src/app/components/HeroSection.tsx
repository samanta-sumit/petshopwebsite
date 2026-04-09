import { ArrowRight, Phone } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1548439739-0cf616cef1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBvd25lciUyMGh1ZyUyMHdhcm0lMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzc1NTg5MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Happy dog with owner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay — warm, not cold */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,16,8,0.72) 0%, rgba(61,43,31,0.45) 55%, rgba(232,125,62,0.18) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-center min-h-screen pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-7"
            style={{
              background: "rgba(232,125,62,0.22)",
              border: "1px solid rgba(232,125,62,0.45)",
              color: "#FDDBB8",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#E87D3E" }}
            />
            Now accepting new clients · Spring 2026
          </div>

          {/* Headline */}
          <h1
            className="mb-5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              lineHeight: 1.13,
              color: "#FFFAF5",
              letterSpacing: "-0.02em",
            }}
          >
            Your Pet Deserves
            <br />
            <span style={{ color: "#F5A673" }}>More Than Just Care —</span>
            <br />
            They Deserve{" "}
            <span
              style={{
                color: "#F5A673",
                fontStyle: "italic",
              }}
            >
              love.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 max-w-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: "rgba(255,246,235,0.85)",
              lineHeight: 1.65,
            }}
          >
            Professional grooming, training, boarding & vet consultations — all
            under one roof. Because your furry family member deserves the very
            best.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#E87D3E",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 6px 24px rgba(232,125,62,0.45)",
              }}
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:bg-white/20 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.35)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                backdropFilter: "blur(8px)",
              }}
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <div
          className="w-px h-12 animate-bounce"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}
