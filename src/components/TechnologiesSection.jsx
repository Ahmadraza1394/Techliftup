import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaAws,
  FaAndroid,
  FaApple,
  FaCloud,
  FaTools,
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
  SiGooglecloud,
  SiRedis,
  SiElasticsearch,
  SiTableau,
  SiAutodesk,
} from "react-icons/si";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = [
    "Frontend",
    "Mobile",
    "Backend",

    "Cloud",
    "DB",
    "Building Services",
  ];

  const technologies = {
    Frontend: [
      { name: "React", icon: <FaReact className="text-4xl" /> },
      { name: "Angular", icon: <FaAngular className="text-4xl" /> },
      { name: "Vue", icon: <FaVuejs className="text-4xl" /> },
      { name: "jQuery", icon: <SiJquery className="text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
    ],
    Mobile: [
      { name: "iOS", icon: <FaApple className="text-4xl" /> },
      { name: "Android", icon: <FaAndroid className="text-4xl" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-4xl" /> },
      { name: "Flutter", icon: <SiFlutter className="text-4xl" /> },
      { name: "Java", icon: <FaJava className="text-4xl" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-4xl" /> },
      { name: "PHP / Laravel", icon: <SiPhp className="text-4xl" /> },
      { name: "Python / Django", icon: <SiPython className="text-4xl" /> },
      { name: "Java", icon: <FaJava className="text-4xl" /> },
    ],

    Cloud: [
      { name: "AWS", icon: <FaAws className="text-4xl" /> },
      { name: "Azure", icon: <FaCloud className="text-4xl" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-4xl" /> },
      { name: "Redis", icon: <SiRedis className="text-4xl" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-4xl" /> },
    ],
    DB: [
      { name: "MySQL / PostgreSQL", icon: <SiMysql className="text-4xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
      { name: "Tableau", icon: <SiTableau className="text-4xl" /> },
    ],
    "Building Services": [
      { name: "BIM", icon: <SiAutodesk className="text-4xl" /> }, // BIM software-related
      { name: "AutoCAD", icon: <SiAutodesk className="text-4xl" /> }, // AutoCAD-specific
      { name: "Mechanical Systems", icon: <FaCogs className="text-4xl" /> }, // Mechanical systems
      { name: "Electrical Design", icon: <FaBolt className="text-4xl" /> }, // Electrical systems
      { name: "Plumbing Systems", icon: <FaWater className="text-4xl" /> }, // Plumbing systems
    ],
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-auto text-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-sky-500">
        Technologies & Services
      </h2>

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
              className="flex flex-col items-center space-y-1 sm:space-y-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
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
