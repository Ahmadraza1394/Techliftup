import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/images/mlogo.png",
  "/assets/images/mexicrazul.png",
  "/assets/images/sno.png",
  "/assets/images/cruisecarflylogo.jpeg",
  "/assets/images/logodvt.png",
  "/assets/images/stank.png",
  "/assets/images/electrosantos.png",
  "/assets/images/klan.png",
  "/assets/images/globalgardening.png",
  "/assets/images/sfo.png",
  "/assets/images/quickpet.png",
  "/assets/images/info.png",
  "/assets/images/sunsafe.png",
  "/assets/images/viste-logo.png",
  "/assets/images/launcher.jpg",
];

const LogoSlider = () => {
  const [animationSpeed, setAnimationSpeed] = useState("100s");
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setAnimationSpeed("50s");
      } else if (window.innerWidth < 1024) {
        setAnimationSpeed("75s");
      } else {
        setAnimationSpeed("70s");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Trusted By <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-500">Industry Leaders</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Partnering with forward-thinking companies to deliver exceptional digital solutions
          </p>
        </motion.div>
      </div>
      
      <div className="logo-slider-container overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap logo-slider"
          style={{
            animation: `marquee ${animationSpeed} linear infinite`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center mx-5 sm:mx-8 md:mx-12"
            >
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center bg-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="inline-flex justify-center items-center mx-5 sm:mx-8 md:mx-12"
            >
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center bg-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .logo-slider-container {
          width: 100%;
          position: relative;
        }
        
        .logo-slider {
          display: inline-block;
          will-change: transform;
        }
        
        .logo-slider > div {
          vertical-align: middle;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-blob {
          animation: blob-bounce 7s infinite ease;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes blob-bounce {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, 20px) scale(1.1);
          }
        }
      `}
      </style>
    </div>
  );
};

export default LogoSlider;
