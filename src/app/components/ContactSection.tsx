import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "#FFFAF5" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p
            className="mb-3 uppercase tracking-widest text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#E87D3E",
            }}
          >
            Get in Touch
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
            We'd love to hear from you
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#7B6053",
              maxWidth: "30rem",
              lineHeight: 1.65,
            }}
          >
            Drop us a message, call, or send a WhatsApp — whatever's easiest
            for you. We typically respond within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact Cards */}
            {[
              {
                icon: <Phone className="w-5 h-5" style={{ color: "#E87D3E" }} />,
                label: "Call Us",
                value: "+1 (555) 123-4567",
                sub: "Mon–Sat, 8am–7pm",
                href: "tel:+15551234567",
              },
              {
                icon: <Mail className="w-5 h-5" style={{ color: "#E87D3E" }} />,
                label: "Email",
                value: "hello@pawsomecare.com",
                sub: "We reply within a few hours",
                href: "mailto:hello@pawsomecare.com",
              },
              {
                icon: <MapPin className="w-5 h-5" style={{ color: "#E87D3E" }} />,
                label: "Visit Us",
                value: "84 Maple Grove Ave",
                sub: "Brooklyn, NY 11215",
                href: "#",
              },
              {
                icon: <Clock className="w-5 h-5" style={{ color: "#E87D3E" }} />,
                label: "Hours",
                value: "Mon–Sat: 8am – 7pm",
                sub: "Sunday: 10am – 4pm",
                href: null,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ background: "#F5EDE3" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(232,125,62,0.12)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#7B6053",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#3D2B1F",
                        display: "block",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#3D2B1F",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#7B6053",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-2xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#25D366",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-7 md:p-10"
              style={{
                background: "#fff",
                boxShadow: "0 4px 32px rgba(61,43,31,0.08)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(232,125,62,0.1)" }}
                  >
                    <CheckCircle2
                      className="w-8 h-8"
                      style={{ color: "#E87D3E" }}
                    />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#3D2B1F",
                    }}
                  >
                    Got it! We'll be in touch soon 🐾
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "#7B6053",
                      lineHeight: 1.65,
                      maxWidth: "22rem",
                    }}
                  >
                    Thanks for reaching out. One of our team members will
                    contact you within 30 minutes during business hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#3D2B1F",
                    }}
                  >
                    Send us a message
                  </h3>
                  <p
                    className="mb-8"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#7B6053",
                    }}
                  >
                    Tell us a bit about your pet and what you need — we'll
                    take it from there.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.83rem",
                            fontWeight: 600,
                            color: "#3D2B1F",
                            display: "block",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="e.g. Sarah Miller"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                          style={{
                            background: "#F5EDE3",
                            border: "1.5px solid transparent",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.93rem",
                            color: "#3D2B1F",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#E87D3E";
                            e.target.style.background = "#fff";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "transparent";
                            e.target.style.background = "#F5EDE3";
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.83rem",
                            fontWeight: 600,
                            color: "#3D2B1F",
                            display: "block",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200"
                          style={{
                            background: "#F5EDE3",
                            border: "1.5px solid transparent",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.93rem",
                            color: "#3D2B1F",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#E87D3E";
                            e.target.style.background = "#fff";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "transparent";
                            e.target.style.background = "#F5EDE3";
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.83rem",
                          fontWeight: 600,
                          color: "#3D2B1F",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Tell us about your pet
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="e.g. I have a 2-year-old Labrador named Max. Looking for grooming + occasional boarding..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "#F5EDE3",
                          border: "1.5px solid transparent",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.93rem",
                          color: "#3D2B1F",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#E87D3E";
                          e.target.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "transparent";
                          e.target.style.background = "#F5EDE3";
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{
                        background: "#E87D3E",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        boxShadow: "0 6px 24px rgba(232,125,62,0.35)",
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
