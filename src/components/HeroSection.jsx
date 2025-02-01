import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-gray-100 text-dark min-h-screen px-6 md:px-16 lg:px-20 pt-24 pb-10">
      {/* Right Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
          Elevate Your Business with{" "}
          <span className="text-sky-500">
            Smart Digital & Engineering Solutions
          </span>
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-gray-700 max-w-4xl">
          At TechLiftUp, we empower businesses through cutting-edge software
          development, specializing in web development and app development to
          drive digital transformation. Additionally, we excel in comprehensive
          building design services . We’re your trusted partner for growth and
          success
        </p>
        <div className="mt-6 flex space-x-4">
          <Link
            to="/about"
            className="bg-sky-500 text-white font-medium px-6 py-3 rounded-full hover:bg-sky-600 transition shadow-md"
          >
            Explore Services
          </Link>
          <a
            href="#contact"
            className="bg-gray-100 text-sky-500 font-medium px-6 py-3 rounded-full border border-sky-500 hover:bg-sky-500 hover:text-white transition shadow-md"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Left Side: Circular Image with Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl flex-shrink-0 mb-8 md:mb-0 mt-8 md:mr-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 z-10 rounded-full"></div>
        <img
          src="/assets/images/heroImg.jpg"
          alt="Team working on a project"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
