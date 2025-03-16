import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion to solve the error

const logos = [
  "/assets/images/mlogo.png",
  // "/assets/images/cabosharkdivelogo.png",
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
  const [animationSpeed, setAnimationSpeed] = useState("100s"); // Increased duration for slower speed

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setAnimationSpeed("50s"); // Adjusted for slower speed
      } else if (window.innerWidth < 1024) {
        setAnimationSpeed("75s"); // Adjusted for slower speed
      } else {
        setAnimationSpeed("70s"); // Adjusted for slower speed
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Removed inView reference
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Trusted <span className="text-sky-500">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </motion.div>
      </div>
      <div className="logo-slider-container overflow-hidden">
        <div
          className="flex whitespace-nowrap logo-slider"
          style={{
            animation: `marquee ${animationSpeed} linear infinite`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex justify-center items-center mx-5 sm:mx-8 md:mx-12"
            >
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate logos for seamless looping */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="inline-flex justify-center items-center mx-5 sm:mx-8 md:mx-12"
            >
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center">
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
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}
      </style>
    </div>
  );
};

export default LogoSlider;
