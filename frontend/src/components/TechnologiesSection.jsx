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
        icon: <FaReact className="text-sky-700 text-4xl" />,
      },
      {
        name: "Angular",
        icon: <FaAngular className="text-red-600 text-4xl" />,
      },
      {
        name: "Vue",
        icon: <FaVuejs className="text-green-600 text-4xl" />,
      },
      {
        name: "jQuery",
        icon: <SiJquery className="text-blue-400 text-4xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 text-4xl" />,
      },
    ],
    Mobile: [
      {
        name: "iOS",
        icon: <FaApple className="text-gray-800 text-4xl" />,
      },
      {
        name: "Android",
        icon: <FaAndroid className="text-green-600 text-4xl" />,
      },
      {
        name: "Kotlin",
        icon: <SiKotlin className="text teal-600 text-4xl" />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-blue-400 text-4xl" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-red-600 text-4xl" />,
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />,
      },
      {
        name: "PHP / Laravel",
        icon: <SiPhp className="text-purple-600 text-4xl" />,
      },
      {
        name: "Python / Django",
        icon: <SiPython className="text-yellow-400 text-4xl" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-red-600 text-4xl" />,
      },
    ],
    Database: [
      {
        name: "MySQL / PostgreSQL",
        icon: <SiMysql className="text-blue-600 text-4xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-4xl" />,
      },
      {
        name: "Tableau",
        icon: <SiTableau className="text-blue-600 text-4xl" />,
      },
    ],
    "Building Services": [
      {
        name: "BIM",
        icon: <SiAutodesk className="text-red-600 text-4xl" />,
      },
      {
        name: "AutoCAD",
        icon: <SiAutodesk className="text-red-600 text-4xl" />,
      },
      {
        name: "Mechanical Systems",
        icon: <FaCogs className="text-gray-600 text-4xl" />,
      },
      {
        name: "Electrical Design",
        icon: <FaBolt className="text-yellow-500 text-4xl" />,
      },
      {
        name: "Plumbing Systems",
        icon: <FaWater className="text-blue-600 text-4xl" />,
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
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechnologiesSection;
