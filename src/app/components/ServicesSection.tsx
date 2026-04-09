import { ArrowRight } from "lucide-react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1766947910763-5a9465ff3f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGJhdGglMjBjdXRlJTIwcHVwcHl8ZW58MXx8fHwxNzc1NTg5MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Grooming",
    tag: "Most Popular",
    description:
      "Full grooming sessions — bath, trim, blow-dry, nail clipping and more. We make your pup feel (and smell) their absolute best.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1720219956143-46c8071a84bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMG91dGRvb3JzJTIwcGFyayUyMG5hdHVyYWx8ZW58MXx8fHwxNzc1NTg5MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Training",
    tag: "New!",
    description:
      "Positive-reinforcement based training for puppies and adult dogs alike. From basic commands to leash manners — we've got it covered.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583675478723-795e608c178d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBib2FyZGluZyUyMGNvenklMjBkb2clMjBzbGVlcGluZyUyMGNvbWZvcnRhYmxlfGVufDF8fHx8MTc3NTU4OTA4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Boarding",
    tag: null,
    description:
      "Safe, cozy, home-like boarding for your pet while you're away. Daily updates, warm beds and plenty of cuddles guaranteed.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2clMjBjbGluaWMlMjBjYXJlfGVufDF8fHx8MTc3NTU4OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Vet Consultation",
    tag: null,
    description:
      "On-site vet consultations for routine check-ups, vaccinations and health concerns. Your pet's wellbeing, always our priority.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721211225775-17212fc54e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB3YWxrZXIlMjBtdWx0aXBsZSUyMGRvZ3MlMjBsZWFzaCUyMHN0cmVldHxlbnwxfHx8fDE3NzU1ODkwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Dog Walking",
    tag: null,
    description:
      "Daily walks by our trusted, trained handlers. GPS-tracked, photo-updated and always on schedule — rain or shine.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620669660917-087c9112f612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNhdCUyMGtpdHRlbiUyMGNvenklMjBob21lJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3NTU4OTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cat Care",
    tag: null,
    description:
      "Specialized care services for our feline friends — grooming, nutrition advice and health monitoring tailored just for cats.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: "#FFFAF5" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#E87D3E",
            }}
          >
            What We Offer
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
                maxWidth: "28rem",
              }}
            >
              Everything Your Pet Needs, in One Place
            </h2>
            <p
              className="max-w-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#7B6053",
                lineHeight: 1.65,
              }}
            >
              From a quick grooming session to overnight boarding — our team of
              certified professionals is always ready to help.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#fff",
                boxShadow: "0 2px 18px rgba(61,43,31,0.07)",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {service.tag && (
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-white"
                    style={{
                      background: "#E87D3E",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#3D2B1F",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#7B6053",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#E87D3E",
                    fontWeight: 600,
                  }}
                >
                  Book This <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
