import { Heart, Award, Users, Shield } from "lucide-react";

const stats = [
  {
    icon: <Heart className="w-5 h-5" style={{ color: "#E87D3E" }} />,
    number: "1,200+",
    label: "Happy Pets",
  },
  {
    icon: <Award className="w-5 h-5" style={{ color: "#E87D3E" }} />,
    number: "5+ Years",
    label: "Experience",
  },
  {
    icon: <Users className="w-5 h-5" style={{ color: "#E87D3E" }} />,
    number: "98%",
    label: "Satisfaction Rate",
  },
  {
    icon: <Shield className="w-5 h-5" style={{ color: "#E87D3E" }} />,
    number: "Fully",
    label: "Licensed & Insured",
  },
];

export function TrustStrip() {
  return (
    <section
      style={{ background: "#3D2B1F" }}
      className="py-5 md:py-6"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x"
          style={{ "--tw-divide-opacity": "0.15", borderColor: "rgba(255,255,255,0.15)" } as React.CSSProperties}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 md:px-8 first:md:pl-0 last:md:pr-0 justify-center md:justify-start"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(232,125,62,0.15)" }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#FFFAF5",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,246,235,0.55)",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
