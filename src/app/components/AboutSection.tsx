import { CheckCircle2 } from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1759148160997-b3dd8b7f3eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBsYXlpbmclMjB3aXRoJTIwZG9nJTIwcGFyayUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzc1NTg5MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  "Certified & experienced pet care professionals",
  "Fear-free, gentle handling — always",
  "Regular photo & video updates while you're away",
  "Strict hygiene and safety protocols",
  "Emergency vet on-call 24/7",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "#F5EDE3" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-30"
              style={{ background: "#E87D3E" }}
            />
            <div
              className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-20"
              style={{ background: "#7BB8D4" }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 12px 48px rgba(61,43,31,0.18)" }}
            >
              <img
                src={aboutImage}
                alt="Our team playing with a dog"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              {/* Overlay card */}
              <div
                className="absolute bottom-5 left-5 right-5 rounded-2xl px-5 py-4"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(61,43,31,0.12)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(232,125,62,0.12)" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🐾</span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        color: "#3D2B1F",
                        fontSize: "0.95rem",
                      }}
                    >
                      Trusted by 1,200+ families
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        color: "#7B6053",
                      }}
                    >
                      across the city since 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="mb-4 uppercase tracking-widest text-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: "#E87D3E",
              }}
            >
              Why Choose Us
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#3D2B1F",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              We treat every pet like they're our own
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#5A3E32",
                lineHeight: 1.7,
              }}
            >
              We started PawsomeCare because we believe every animal deserves to
              be treated with patience, warmth and genuine love — not just
              routine "service". Our team are all pet owners themselves.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#5A3E32",
                lineHeight: 1.7,
              }}
            >
              We've spent years building a place where pet owners can drop off
              their furry friends and actually{" "}
              <em>feel good</em> about it — no guilt, no worry.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-9">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#E87D3E" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.93rem",
                      color: "#3D2B1F",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#E87D3E",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 6px 24px rgba(232,125,62,0.35)",
              }}
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
