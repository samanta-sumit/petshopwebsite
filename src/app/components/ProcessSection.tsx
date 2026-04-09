const steps = [
  {
    number: "01",
    emoji: "📞",
    title: "Reach Out to Us",
    description:
      "Give us a call, send a WhatsApp message, or fill out our short contact form. We'll get back to you within the hour — usually faster.",
  },
  {
    number: "02",
    emoji: "🤝",
    title: "Free Consultation",
    description:
      "We'll have a quick chat (or in-person visit) to understand your pet's specific needs, temperament and any health considerations.",
  },
  {
    number: "03",
    emoji: "🐾",
    title: "We Take Care of Everything",
    description:
      "Sit back and relax. We handle the rest — keeping you updated with photos and messages throughout the entire experience.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-28"
      style={{ background: "#FFFAF5" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#E87D3E",
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              color: "#3D2B1F",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}
          >
            Getting started is simple
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(232,125,62,0.25), transparent)",
            }}
          />
          <div
            className="hidden md:block absolute top-12 left-0 right-2/3 h-px ml-24"
            style={{ background: "rgba(232,125,62,0.15)" }}
          />
          <div
            className="hidden md:block absolute top-12 right-0 left-2/3 h-px mr-24"
            style={{ background: "rgba(232,125,62,0.15)" }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-start md:items-center md:text-center"
            >
              {/* Number badge */}
              <div className="flex items-center gap-4 md:flex-col md:gap-3 mb-5 md:mb-6">
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      i === 1
                        ? "#E87D3E"
                        : "rgba(232,125,62,0.10)",
                    boxShadow:
                      i === 1 ? "0 8px 28px rgba(232,125,62,0.4)" : "none",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{step.emoji}</span>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: i === 1 ? "#3D2B1F" : "#E87D3E",
                      color: "#fff",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#3D2B1F",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#7B6053",
                  lineHeight: 1.65,
                  maxWidth: "22rem",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-14 md:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "#3D2B1F",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 6px 24px rgba(61,43,31,0.22)",
            }}
          >
            Start the Process Today
          </a>
        </div>
      </div>
    </section>
  );
}
