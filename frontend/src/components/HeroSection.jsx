import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative scroll-smooth bg-gradient-to-br from-sky-500 via-sky-500 to-sky-500 text-white min-h-screen px-6 md:px-16 lg:px-20 pt-24 pb-10 flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 to-sky-400 opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div 
            className="absolute bottom-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
            style={{animation: "morph 12s ease-in-out infinite"}}
          ></div>
          <div 
            className="absolute -bottom-20 left-1/3 w-64 h-64 bg-sky-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
            style={{animation: "morph 15s ease-in-out infinite 2s"}}
          ></div>
        </div>
        <style>{`
          @keyframes morph {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translateY(0) scale(1); }
            25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translateY(-15px) scale(1.05); }
            50% { border-radius: 50% 60% 30% 40% / 40% 30% 70% 60%; transform: translateY(0) scale(1.1); }
            75% { border-radius: 40% 60% 70% 30% / 60% 40% 30% 70%; transform: translateY(15px) scale(1.05); }
          }
          @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5)); }
            50% { filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.7)); }
          }
          .animate-blob {
            animation: morph 10s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 4s ease-in-out infinite;
          }
        `}</style>
      </div>
      
      <div className="container mx-auto relative z-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center bg-sky-50/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-sky-50/20 shadow-lg shadow-sky-500/20"
          >
            <span className="text-sky-50 font-medium">Transforming Ideas into Digital Reality</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Elevate Your Business with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-200 ">
              Smart Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-sky-100 max-w-4xl mx-auto"
          >
         At TechLiftUp, we empower businesses through cutting-edge software development, specializing in web and app development,SEO, AI Automation, AI Chatbot, AI Email Automation to drive digital transformation. Additionally, we excel in comprehensive building design services.       </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8"
          >
            <Link
              to="/services"
              className="group flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-lg border-2 border-white/70 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-12 relative w-full max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-amber-400/20 rounded-3xl blur-xl transform -rotate-1"></div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
