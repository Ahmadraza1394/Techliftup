import { motion } from "framer-motion";
import {
  FaRegClipboard,
  FaFileAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Requirement Analysis",
    icon: <FaRegClipboard />,
  },
  {
    id: 2,
    title: "Design Ideation",
    icon: <FaFileAlt />,
  },
  {
    id: 3,
    title: "Development Phase",
    icon: <FaLightbulb />,
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: <FaHandshake />,
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-16 px-4 md:px-14 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-500">
        How We Work
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-6 lg:space-x-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-sky-400 to-sky-700 text-white"
                  : "bg-gradient-to-r from-red-400 to-red-700 text-white"
              } text-4xl md:text-5xl`}
            >
              {step.icon}
            </div>
            <div className="text-gray-500 text-2xl font-bold">
              {String(step.id).padStart(2, "0")}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
              {step.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWorkSection;
