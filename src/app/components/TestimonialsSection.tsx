import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Brooklyn, NY",
    petName: "Biscuit",
    petType: "Golden Retriever",
    avatar:
      "https://images.unsplash.com/photo-1761055923367-ea32773bb5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwZXQlMjBvd25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTU4OTA5Nnww&ixlib=rb-4.1.0&q=80&w=400",
    review:
      "Honestly the best decision I ever made for Biscuit. He comes home wagging his tail like crazy every single time — which tells you everything. The grooming is incredible and the staff genuinely remembers little things about him.",
    stars: 5,
    service: "Grooming",
  },
  {
    name: "James T.",
    location: "Austin, TX",
    petName: "Mochi",
    petType: "Shiba Inu",
    avatar:
      "https://images.unsplash.com/photo-1752090660908-6523cd11604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aXRoJTIwZG9nJTIwdGVzdGltb25pYWwlMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1ODkwOTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    review:
      "I was super nervous about leaving Mochi for a whole week but they sent me daily photos and voice notes. One of the photos was him cuddled up with a staff member watching TV. I honestly felt a bit jealous haha.",
    stars: 5,
    service: "Boarding",
  },
  {
    name: "Priya K.",
    location: "Chicago, IL",
    petName: "Luna",
    petType: "Tabby Cat",
    avatar: null,
    initials: "PK",
    review:
      "Luna is a rescue and pretty anxious around new people. They were SO patient with her — never rushed, never forced. After three visits she started purring the moment we walked in. That's not nothing. That's trust.",
    stars: 5,
    service: "Cat Care",
  },
  {
    name: "Marcus W.",
    location: "Seattle, WA",
    petName: "Zeus",
    petType: "German Shepherd",
    avatar: null,
    initials: "MW",
    review:
      "Zeus had some reactivity issues and I'd tried two trainers before PawsomeCare. Within 4 sessions there was a noticeable difference. The trainer here actually explained the *why* behind everything which I appreciated a lot.",
    stars: 5,
    service: "Training",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-current"
          style={{ color: "#F5A013" }}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28"
      style={{ background: "#F5EDE3" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#E87D3E",
            }}
          >
            Happy Families
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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
              Real words from real pet parents
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1761055923367-ea32773bb5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
                  "https://images.unsplash.com/photo-1752090660908-6523cd11604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="reviewer"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white"
                  />
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs text-white"
                  style={{ background: "#E87D3E", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  +2
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" style={{ color: "#F5A013" }} />
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      fontSize: "0.95rem",
                    }}
                  >
                    4.9 / 5.0
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#7B6053",
                  }}
                >
                  from 200+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 md:p-7 relative"
              style={{
                background: "#fff",
                boxShadow: "0 2px 20px rgba(61,43,31,0.07)",
              }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-5 right-6 w-8 h-8 opacity-10"
                style={{ color: "#E87D3E" }}
              />

              {/* Stars + service */}
              <div className="flex items-center justify-between mb-4">
                <StarRating count={t.stars} />
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(232,125,62,0.1)",
                    color: "#E87D3E",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {t.service}
                </span>
              </div>

              {/* Review */}
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.93rem",
                  color: "#4A3226",
                  lineHeight: 1.7,
                }}
              >
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm text-white flex-shrink-0"
                    style={{
                      background: "#8B6355",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#3D2B1F",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#7B6053",
                    }}
                  >
                    Owner of {t.petName} the {t.petType} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
