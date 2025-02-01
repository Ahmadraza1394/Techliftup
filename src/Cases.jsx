import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import Whatsapp from "./components/Whatsapp";

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

      <section className="py-14 px-8 bg-gray-50 text-gray-800">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Cases</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects showcasing our expertise in
            delivering exceptional solutions.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: caseItem.id * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-3xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {caseItem.title}
                </h2>
                <p className="text-gray-600 mt-2">{caseItem.description}</p>
                <Link
                  to={caseItem.link}
                  className="mt-4 inline-block text-sky-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CallToAction />
      <Whatsapp />
      <Footer />
    </>
  );
};
export default Cases;
