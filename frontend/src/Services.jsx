import { motion } from "framer-motion";
import {
  FaCode,
  FaDesktop,
  FaTools,
  FaBuffer,
  FaMobile,
  FaBullhorn,
  FaEnvelope,
  FaGraduationCap,
  FaBuilding,
  FaProjectDiagram,
  FaFire,
  FaPlug,
  FaWater,
  FaMagento,
} from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import { useState } from "react";

import WhatsappButton from "./components/WhatsappButton";
import CallToAction from "./components/CallToAction";
import { T } from "./context/LanguageContext";

// const approaches = [
//   {
//     title: "Strategic Planning",
//     description:
//       "We begin by understanding your brand’s ethos, values, and aspirations. Our team delves deep into audience analysis, identifying their behaviors, preferences, and where they congregate online.",
//     image: "/assets/images/testimonialImg.jpg",
//   },
//   {
//     title: "Content Strategy",
//     description:
//       "Our content strategy ensures your brand voice remains consistent and impactful. We craft engaging narratives that captivate audiences and drive meaningful interactions.",
//     image: "/assets/images/testimonialImg.jpg",
//   },
//   {
//     title: "Engagement",
//     description:
//       "Building strong relationships with your audience through interactive content and real-time communication, fostering trust and loyalty.",
//     image: "/assets/images/testimonialImg.jpg",
//   },
//   {
//     title: "Building",
//     description:
//       "From launching campaigns to brand expansion, we create sustainable growth strategies that enhance your digital presence effectively.",
//     image: "/assets/images/main-img.png",
//   },
// ];
const approaches = [
  {
    title: "Requirement Analysis",
    description:
      "We start by deeply understanding your business goals, target audience, and technical needs. Through collaborative workshops and stakeholder interviews, we define clear objectives for your web/app development, design, or digital marketing project.",
    image: "/assets/images/requirements.jpg",
  },
  {
    title: "Custom Design ",
    description:
      "Our design team crafts intuitive UI/UX interfaces and software architecture blueprints. For digital marketing, we develop brand-aligned visual strategies. Interactive prototypes ensure alignment with your vision before development begins.",
    image: "/assets/images/design.png",
  },
  {
    title: "Agile Development Process",
    description:
      "Using iterative sprints, we build scalable web/app solutions with modern frameworks (React, Node.js, Flutter). For digital marketing, we implement data-driven campaigns. Regular demos keep you involved at every milestone.",
    image: "/assets/images/agile.png",
  },
  {
    title: "Quality Assurance ",
    description:
      "We conduct rigorous testing (functional, performance, security) for software projects. For marketing campaigns, we A/B test creatives and optimize ROI. Continuous feedback loops ensure pixel-perfect delivery across all services.",
    image: "/assets/images/quality.png",
  },
  {
    title: "Deployment & Support",
    description:
      "We handle seamless software deployment with DevOps pipelines and provide post-launch maintenance. For digital marketing, we monitor metrics and refine strategies. Our ongoing support ensures long-term scalability and success.",
    image: "/assets/images/support.png",
  },
];
const services = [
  {
    icon: <FaTools />,
    title: "AI Automation & AI Chatbot",
    desc: "Ensure your business runs smoothly with AI automation and chatbots.",
  },
  {
    icon: <FaCode />,
    title: "Website Development",
    desc: "Robust and scalable web development solutions.",
  },
  {
    icon: <FaDesktop />,
    title: "Website Design ",
    desc: "Modern, responsive, and user-friendly website designs.",
  },
  {
    icon: <FaBuffer />,
    title: "Wordpress Website Development",
    desc: " Custom WordPress websites for your business.",
  },
  {
    icon: <FaMobile />,
    title: "App Development",
    desc: "Custom mobile apps for iOS and Android.",
  },
  {
    icon: <FaMagento />,
    title: "App Management & Maintenance",
    desc: "Regular updates and performance optimization.",
  },
  {
    icon: <FaBullhorn />,
    title: "SEO & Marketing",
    desc: "Boost rankings with SEO & digital marketing.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Marketing",
    desc: "Engaging email campaigns to grow your business.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Training & Consultancy",
    desc: "Professional guidance and training services.",
  },
  {
    icon: <FaBuilding />,
    title: "Building Services",
    desc: "Comprehensive building design and engineering.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "BIM Modeling",
    desc: "Building Information Modeling for efficiency.",
  },
  {
    icon: <FaWater />,
    title: "Water Supply System",
    desc: "Effective water distribution solutions.",
  },
  {
    icon: <FaPlug />,
    title: "Electrical & Low Current Systems",
    desc: "Safe and efficient electrical solutions.",
  },
  {
    icon: <FaFire />,
    title: "Fire Fighting System",
    desc: "Advanced fire safety and protection systems.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "HVAC Systems",
    desc: "Heating, Ventilation, and Air Conditioning solutions.",
  },
  {
    icon: <FaTools />,
    title: "Plumbing System",
    desc: "Reliable plumbing installation and maintenance.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Header />
      {/* <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          <T>Our Services</T>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sky-100 p-6 rounded-2xl shadow-md flex flex-col items-start"
            >
              <div className="text-sky-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                <T>{service.title}</T>
              </h3>
              <p className="text-gray-700">
                <T>{service.desc}</T>
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="team-section bg-gray-50 px-6 md:px-12 pt-32">
        {/* Team Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
            <T>Our Services</T>
          </h2>
          <p className="text-2xl mb-6 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            <T>
              At TechLiftUp, we don’t just deliver services—we create value that
              transforms businesses. Whether you’re shaping your digital presence
              or engineering cutting-edge infrastructure, our solutions are
              designed to drive growth, efficiency, and long-term success.
            </T>
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            <T>Contact Us</T>
          </Link>
        </motion.div>
        <hr className="bg-gray-50 text-gray-50" />
      </section>
      {/* Our Services */}
      <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 lg:px-16">
        <h2 className="text-center text-4xl font-bold mb-12 text-sky-500">
          <T>Our Services</T>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }} // Added hover animation
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-sky-500 rounded-3xl p-5 shadow flex flex-col items-start"
            >
              <div className="text-red-500 bg-gray-100 rounded-2xl p-3 text-5xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-4xl text-gray-100 font-semibold mb-3">
                <T>{service.title}</T>
              </h3>
              <p className="text-gray-50 text-2xl">
                <T>{service.desc}</T>
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Our Approach */}
      <section className="bg-gray-100 px-2 pt-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center my-4 mb-10 text-sky-500">
          <T>Our Approach</T>
        </h2>
        <div className="bg-sky-500 text-white p-2 sm:p-8 py-12 sm:py-12 rounded-2xl max-w-6xl mx-auto relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-red-500 rounded-br-md"></div>
          <div className="absolute bottom-0 right-0 w-52 h-24 bg-cyan-800 rounded-tl-lg"></div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 relative z-10">
            {approaches.map((approach, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(index);
                  // Trigger smooth animation effect using CSS classes
                  const contentSection =
                    document.getElementById("approach-content");
                  contentSection.classList.add("fade-out");

                  setTimeout(() => {
                    contentSection.classList.remove("fade-out");
                    contentSection.classList.add("fade-in");
                  }, 900); // Duration of the fade-out effect

                  setTimeout(() => {
                    contentSection.classList.remove("fade-in");
                  }, 1900); // Duration of the fade-in effect
                }}
                className={`px-3 sm:px-4 py-1 sm:py-2 my-3 rounded-full text-lg sm:text-2xl ${
                  selected === index
                    ? "bg-white text-[#0F3D45] font-bold"
                    : "bg-transparent border border-white"
                }`}
              >
                <T>{approach.title}</T>
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div
            id="approach-content"
            className="mt-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 relative z-10 transition-opacity duration-300"
          >
            {/* Image */}
            <img
              src={approaches[selected].image}
              alt={approaches[selected].title}
              className="w-full lg:w-1/2 h-64 sm:h-80 object-top rounded-2xl shadow-lg"
            />

            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl py-3 sm:py-5 font-bold">
                <T>{approaches[selected].title}</T>
              </h2>
              <p className="mt-2 sm:mt-4 text-lg sm:text-2xl md:text-3xl text-gray-200">
                <T>{approaches[selected].description}</T>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-sky-500 mb-8">
          <T>What Sets Us Apart</T>
        </h2>

        <div className="space-y-6">
          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-72 flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/assets/images/heroImg.jpg')" }}
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-3xl sm:text-5xl font-bold">
                <T>Data-Insights</T>
              </h3>
              <p className="text-base sm:text-2xl mt-2">
                <T>
                  Numbers tell stories too. We leverage analytics to understand
                  what works and what needs refinement. Our data-driven approach
                  ensures that every strategy is optimized for maximum impact.
                </T>
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-72 flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/assets/images/img1.jpg')" }}
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-3xl sm:text-5xl font-bold">
                <T>Strategic Thinking</T>
              </h3>
              <p className="text-base sm:text-2xl mt-2">
                <T>
                  We craft custom strategies that align with your brand’s goals,
                  ensuring measurable success and long-term growth.
                </T>
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-72 flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/assets/images/img2.jpg')" }}
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-3xl sm:text-5xl font-bold">
                <T>Creative Execution</T>
              </h3>
              <p className="text-base sm:text-2xl mt-2">
                <T>
                  Our creative team designs compelling campaigns that engage
                  audiences, build trust, and drive real conversions.
                </T>
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-72 flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/assets/images/img3.jpg')" }}
          >
            <div className="bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center p-6">
              <h3 className="text-3xl sm:text-5xl font-bold">
                <T>Sustainable Growth</T>
              </h3>
              <p className="text-base sm:text-2xl mt-2">
                <T>
                  We focus on long-term impact, helping businesses scale
                  efficiently while maintaining a strong brand presence.
                </T>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <WhatsappButton />

      <Footer />
    </>
  );
}
