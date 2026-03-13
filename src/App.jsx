import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertiesSection from "./components/PropertiesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import AgentsSection from "./components/AgentsSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <PropertiesSection />

      {/* Marquee Band */}
      <div className="bg-stone-900 text-amber-400 py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-flex">
          {[
            "Luxury Residences","·","Exceptional Service","·",
            "Global Portfolio","·","Private Consultation","·",
            "Trusted Since 1987","·","Luxury Residences","·",
            "Exceptional Service","·","Global Portfolio","·",
          ].map((t, i) => (
            <span key={i} className="font-display text-lg font-semibold tracking-widest mr-8 uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>

      <AboutSection />
      <ServicesSection />
      <AgentsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
