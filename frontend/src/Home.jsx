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

import WhatsappButton from "./components/WhatsappButton";
import CallToAction from "./components/CallToAction";
import LogoSlider from "./components/LogoSlider";
import OurProcess from "./components/OurProcess";
import Chatbot from "./components/Chatbot";

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
      <Chatbot />
      <LogoSlider />
      <AboutUsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <FAQSection />
      <HowWeWorkSection />
      <StatisticsSection />
      <OurProcess />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <CallToAction />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Home;
