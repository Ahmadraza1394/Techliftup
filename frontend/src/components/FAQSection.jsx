import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { T } from "../context/LanguageContext";

const faqs = [
  {
    question: "What makes TechLiftUp stand out?",
    answer:
      "TechLiftUp integrates expertise in both digital solutions and building services design, offering a unique combination of technical and engineering excellence.",
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Absolutely! Our team tailors every solution to your specific business needs, ensuring scalability and effectiveness.",
  },
  {
    question: "Are your services cost-effective?",
    answer:
      "Yes, we prioritize delivering high-quality solutions while maintaining competitive pricing to maximize your return on investment.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team consists of seasoned developers, engineers, and designers with extensive expertise in their respective fields.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support throughout your project lifecycle, from initial consultation to post-delivery maintenance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "TechLiftUp serves a diverse range of industries, including technology startups, e-commerce, and building services engineering.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-start">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h3 className="text-red-500 text-xl font-semibold mb-2">
          <T>Frequently Asked Questions</T>
        </h3>
        <h2 className="text-5xl font-extrabold mb-8 leading-tight">
          <T>Why Choose </T><span className="text-red-500">TechLiftUp</span><T> for Your Business</T>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <T>Explore some of the most common questions about our services, expertise, and approach to helping businesses succeed.</T>
        </p>
      </div>

      {/* Right FAQ Section */}
      <div className="md:w-1/2 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left text-lg font-bold text-gray-800 hover:text-red-500 focus:outline-none"
            >
              <span className="flex items-center">
                {expandedIndex === index ? (
                  <FaMinus className="text-gray-500 mr-2" />
                ) : (
                  <FaPlus className="text-red-500 mr-2" />
                )}
                <T>{faq.question}</T>
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: expandedIndex === index ? "auto" : 0 }}
              className="overflow-hidden"
            >
              {expandedIndex === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600 leading-relaxed text-lg"
                >
                  <T>{faq.answer}</T>
                </motion.p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
