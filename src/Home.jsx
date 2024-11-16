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

const Home = () => {
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
