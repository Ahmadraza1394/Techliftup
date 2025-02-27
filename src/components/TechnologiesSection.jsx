import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaAndroid,
  FaApple,
  FaCogs,
  FaBolt,
  FaWater,
} from "react-icons/fa";
import {
  SiJquery,
  SiTypescript,
  SiKotlin,
  SiFlutter,
  SiPhp,
  SiPython,
  SiMysql,
  SiMongodb,
  SiTableau,
  SiAutodesk,
} from "react-icons/si";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const tabs = [
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Building Services",
  ];

  const technologies = {
    Frontend: [
      {
        name: "React",
        icon: <FaReact className="text-4xl" />,
        app: "Used for dynamic web applications like Facebook & Airbnb.",
      },
      {
        name: "Angular",
        icon: <FaAngular className="text-4xl" />,
        app: "Great for enterprise applications like Gmail.",
      },
      {
        name: "Vue",
        icon: <FaVuejs className="text-4xl" />,
        app: "Lightweight & powerful, used in Alibaba & Behance.",
      },
      {
        name: "jQuery",
        icon: <SiJquery className="text-4xl" />,
        app: "Simplifies JavaScript for interactive web elements.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-4xl" />,
        app: "Ensures error-free coding in large projects.",
      },
    ],
    Mobile: [
      {
        name: "iOS",
        icon: <FaApple className="text-4xl" />,
        app: "Native iPhone app development for seamless performance.",
      },
      {
        name: "Android",
        icon: <FaAndroid className="text-4xl" />,
        app: "Powering apps like WhatsApp and Uber.",
      },
      {
        name: "Kotlin",
        icon: <SiKotlin className="text-4xl" />,
        app: "Google’s preferred language for Android apps.",
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-4xl" />,
        app: "One codebase for iOS & Android, used in Google Pay.",
      },
      {
        name: "Java",
        icon: <FaJava className="text-4xl" />,
        app: "Backend of leading mobile apps like Twitter & Spotify.",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl" />,
        app: "Used in Netflix & LinkedIn for fast performance.",
      },
      {
        name: "PHP / Laravel",
        icon: <SiPhp className="text-4xl" />,
        app: "Powers 78% of websites including Facebook.",
      },
      {
        name: "Python / Django",
        icon: <SiPython className="text-4xl" />,
        app: "Runs Instagram & YouTube’s backend.",
      },
      {
        name: "Java",
        icon: <FaJava className="text-4xl" />,
        app: "Supports enterprise software like banking applications.",
      },
    ],
    Database: [
      {
        name: "MySQL / PostgreSQL",
        icon: <SiMysql className="text-4xl" />,
        app: "Manages data for Uber & Netflix.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl" />,
        app: "NoSQL database used in e-commerce platforms.",
      },
      {
        name: "Tableau",
        icon: <SiTableau className="text-4xl" />,
        app: "Transforms raw data into actionable insights.",
      },
    ],
    "Building Services": [
      {
        name: "BIM",
        icon: <SiAutodesk className="text-4xl" />,
        app: "3D modeling for efficient building design.",
      },
      {
        name: "AutoCAD",
        icon: <SiAutodesk className="text-4xl" />,
        app: "Industry standard for architectural design.",
      },
      {
        name: "Mechanical Systems",
        icon: <FaCogs className="text-4xl" />,
        app: "Used in HVAC system planning.",
      },
      {
        name: "Electrical Design",
        icon: <FaBolt className="text-4xl" />,
        app: "Designs power distribution in smart buildings.",
      },
      {
        name: "Plumbing Systems",
        icon: <FaWater className="text-4xl" />,
        app: "Essential for water supply planning.",
      },
    ],
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-auto text-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-sky-500"
      >
        Technologies & Services
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm sm:text-lg font-semibold ${
              activeTab === tab ? "text-sky-500" : "text-gray-500"
            } hover:text-sky-500 transition relative`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Technology Icons */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 mt-6 sm:mt-8"
        >
          {technologies[activeTab]?.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-1 sm:space-y-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                {tech.icon}
              </div>
              <span className="text-base sm:text-lg font-medium text-gray-500 hover:text-red-500 transition-colors duration-300">
                {tech.name}
              </span>
              <p className="text-sm text-gray-400">{tech.app}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechnologiesSection;
