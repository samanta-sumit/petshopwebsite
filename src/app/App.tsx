import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustStrip } from "./components/TrustStrip";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Inter', sans-serif", scrollBehavior: "smooth" }}
    >
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}