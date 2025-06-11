import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import WhatsappButton from "./components/WhatsappButton";

const cases = [
  {
    id: 1,
    title: "Cabo Shark Dive",
    description: "Tour operator website for Cabo Shark Dive.",
    image: "/assets/images/cabosharkdive.png", // Add your image path here
    details:
      " Cabo Shark Dive is a tour operator website that offers shark diving and snorkeling tours in Los Cabos.",
    link: "/cases/cabo-shark-dive", // Route to individual case
  },
  {
    id: 2,
    title: "CruiseCarFly",
    description:
      " Affiliate Landing Page to sell cruises, cars, and flights services.",
    image: "/assets/images/cruisecarfly.png", // Add your image path here
    details:
      " CruiseCarFly is an affiliate landing page for deals on cruises, car rentals, and flights.",
    link: "/cases/cruise-car-fly", // Corrected route to individual case
  },
  {
    id: 3,
    title: "Brand Wave Digital",
    description: "Digital Marketing Agency",
    image: "/assets/images/brandwavedigital.png", // Add your image path here
    details:
      "Brand Wave Digital is a digital marketing agency that helps businesses grow.",
    link: "/cases/brand-wave-digital", // Corrected route to individual case
  },
  {
    id: 4,
    title: "Visteai AI Asistant",
    description: "Viste Ai Automate Check-ins, Check-outs ",
    image: "/assets/images/visteai.png", // Add your image path here
    details:
      " Viste Ai Asistant Website that automate guest message and Automate Check-ins, Check-outs &",
    link: "/cases/visteai", // Corrected route to individual case
  },
  {
    id: 5,
    title: "Sonneto AI ",
    description: "Sonneto AI is a Music Streaming Platform that uses AI to provide personalized music recommendations to users.",
    image: "/assets/images/sonnetoai.png", // Add your image path here
    details:
      "Sonneto AI is a Music Streaming Platform that uses AI to provide personalized music recommendations to users.",
    link: "/cases/sonnetoai", // Corrected route to individual case
  },
  {
    id: 6,
    title: "Electro Santos ",
    description: "Electro Santos Provides Electric Products and services ",
    image: "/assets/images/electrosanto.png", // Add your image path here
    details:
      "Electro Santos Provides Electric Products and services",
    link: "/cases/electrosanto", // Corrected route to individual case
  },
  {
    id: 7,
    title: "Passion Farm ",
    description: "Passion Form is Ecommerce Store that sell organic products to customers ",
    image: "/assets/images/passionfarm.png", // Add your image path here
    details:
      "Passion Form is ecommerce Store that sell organic products to customers",
    link: "/cases/passionfarm", // Corrected route to individual case
  },
  {
    id: 7,
    title: "Clean Water ",
    description: "Clean Water provides Water Treatment and purification services   ",
    image: "/assets/images/cleanwater.png", // Add your image path here
    details:
      "Clean Water provides Water Treatment and purification services",
    link: "/cases/cleanwater", // Corrected route to individual case
  },
];

const Cases = () => {
  return (
    <>
      <Header />
      {/* <div
        className="relative w-full pt-32 h-0 mb-2"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://player.vimeo.com/video/1051829084?autoplay=1&loop=1&background=1"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Video Title"
        ></iframe>
      </div> */}
      <section className="team-section bg-gray-50 px-6 md:px-12 pt-32">
        {/* Team Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
            Our Cases
          </h2>
          <p className="text-2xl mb-6 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            Every case is unique, and TechLiftUp takes pride in crafting
            solutions tailored to your business needs. From software development
            to building MEP engineering platforms, our versatile approach
            ensures the highest quality and measurable results.
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            Contact Us
          </Link>
        </motion.div>
        <hr className="bg-gray-50 text-gray-50" />
      </section>

      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent  bg-sky-500">Our Success Stories</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: caseItem.id * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl group transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {caseItem.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{caseItem.description}</p>
                <Link
                  to={caseItem.link}
                  className="inline-flex items-center px-4 py-2 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition-colors duration-300 mt-auto"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CallToAction />
      <WhatsappButton />
      <Footer />
    </>
  );
};
export default Cases;
