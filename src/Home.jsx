import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import StatisticsSection from "./components/StatisticsSection";
import ContactForm from "./components/ContactForm";
import CallToAction from "./components/CallToAction";
import Whatsapp from "./components/Whatsapp";

const Home = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <FAQSection />
      <HowWeWorkSection />
      <StatisticsSection />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <CallToAction />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Home;
