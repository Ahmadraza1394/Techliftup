import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaCog,
  FaUsers,
} from "react-icons/fa";

const AIAutomation = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation & AI Chatbot Services | TechLiftUp</title>
        <meta
          name="description"
          content="Transform your business with intelligent AI automation and chatbot solutions. Streamline operations, enhance customer service, and boost efficiency with TechLiftUp's AI services."
        />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 rounded-full px-4 py-2 mb-6">
              <FaRobot className="text-sky-400" />
              <span className="text-sm font-medium text-sky-300">
                AI-Powered Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-sky-200 to-blue-200 bg-clip-text text-transparent">
              AI Automation & Chatbot Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ensure your business runs smoothly with intelligent AI automation
              and chatbots that work 24/7 to enhance customer experience and
              streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-sky-500/50 inline-flex items-center justify-center gap-2"
              >
                Get Started <FaArrowRight />
              </Link>
              <a
                href="#how-we-work"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose AI Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaClock className="text-4xl" />,
                title: "24/7 Availability",
                desc: "AI chatbots work round the clock, ensuring your customers always get instant responses, even outside business hours.",
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: "Increased Efficiency",
                desc: "Automate repetitive tasks and free up your team to focus on high-value activities that drive growth.",
              },
              {
                icon: <FaUsers className="text-4xl" />,
                title: "Better Customer Experience",
                desc: "Provide instant, personalized responses to customer queries, improving satisfaction and loyalty.",
              },
              {
                icon: <FaCog className="text-4xl" />,
                title: "Cost Reduction",
                desc: "Reduce operational costs by automating routine processes and minimizing the need for large support teams.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100"
              >
                <div className="text-sky-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Deliver AI Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured process that moves from discovery to deployment—fast,
              reliable, and measurable.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-sky-300 via-blue-300 to-sky-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Analysis",
                    icon: <FaLightbulb className="text-sky-600" />,
                    description:
                      "We begin by understanding your business processes, pain points, and automation opportunities. Our team conducts thorough analysis of your current workflows, customer interactions, and operational bottlenecks to identify where AI can deliver maximum impact.",
                    highlights: [
                      "Business process mapping",
                      "Pain point identification",
                      "ROI assessment",
                      "Use case prioritization",
                    ],
                  },
                  {
                    step: "02",
                    title: "Strategy & Planning",
                    icon: <FaChartLine className="text-sky-600" />,
                    description:
                      "Based on our findings, we develop a comprehensive AI automation strategy tailored to your needs. We design conversation flows for chatbots, map automation workflows, and create a detailed implementation roadmap with clear milestones and success metrics.",
                    highlights: [
                      "Custom AI strategy",
                      "Conversation design",
                      "Workflow automation mapping",
                      "Success metrics definition",
                    ],
                  },
                  {
                    step: "03",
                    title: "Development & Training",
                    icon: <FaCog className="text-sky-600" />,
                    description:
                      "Our expert team builds and trains your AI solutions using cutting-edge technologies. We develop intelligent chatbots with natural language processing, create automation workflows, and integrate AI seamlessly with your existing systems and databases.",
                    highlights: [
                      "AI chatbot development",
                      "NLP training",
                      "System integration",
                      "Custom automation scripts",
                    ],
                  },
                  {
                    step: "04",
                    title: "Testing & Optimization",
                    icon: <FaClock className="text-sky-600" />,
                    description:
                      "Before launch, we rigorously test all AI systems to ensure accuracy and reliability. We conduct extensive conversation testing, validate automation workflows, optimize response accuracy, and fine-tune the AI based on real-world scenarios.",
                    highlights: [
                      "Quality assurance testing",
                      "Accuracy optimization",
                      "Performance tuning",
                      "Edge case handling",
                    ],
                  },
                  {
                    step: "05",
                    title: "Deployment & Support",
                    icon: <FaUsers className="text-sky-600" />,
                    description:
                      "We handle the complete deployment of your AI solutions with minimal disruption. Post-launch, we provide comprehensive training for your team, continuous monitoring of AI performance, regular updates to improve accuracy, and ongoing support to ensure long-term success.",
                    highlights: [
                      "Seamless deployment",
                      "Team training",
                      "24/7 monitoring",
                      "Continuous improvement",
                    ],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative"
                  >
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                      <div className="md:w-[84px] flex-shrink-0">
                        <div className="flex md:flex-col items-center md:items-start gap-3">
                          <div className="w-16 h-16 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center relative">
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
                              {phase.step}
                            </div>
                            <div className="text-2xl">{phase.icon}</div>
                          </div>
                          <div className="md:hidden">
                            <h3 className="text-xl font-bold text-gray-900">
                              {phase.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {phase.highlights.slice(0, 3).map((chip) => (
                                <span
                                  key={chip}
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-black/5 overflow-hidden">
                          <div className="px-6 py-5 md:px-8 md:py-6">
                            <div className="hidden md:flex items-start justify-between gap-6">
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                  {phase.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {phase.highlights.slice(0, 3).map((chip) => (
                                    <span
                                      key={chip}
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                                    >
                                      {chip}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="hidden lg:block min-w-[140px] text-right">
                                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                                  Step
                                </div>
                                <div className="text-lg font-extrabold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                                  {phase.step}
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mt-4 md:mt-5">
                              {phase.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3 mt-5">
                              {phase.highlights.map((highlight) => (
                                <div
                                  key={highlight}
                                  className="flex items-center gap-2 text-sm text-gray-700"
                                >
                                  <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI automation services for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaRobot />,
                title: "AI Chatbots",
                features: [
                  "Customer support automation",
                  "Lead qualification",
                  "FAQ handling",
                  "Multi-language support",
                ],
              },
              {
                icon: <FaCog />,
                title: "Process Automation",
                features: [
                  "Workflow automation",
                  "Data entry automation",
                  "Report generation",
                  "Email automation",
                ],
              },
              {
                icon: <FaLightbulb />,
                title: "Intelligent Analytics",
                features: [
                  "Predictive analytics",
                  "Customer insights",
                  "Performance tracking",
                  "Smart recommendations",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-sky-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-sky-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <FaCheckCircle className="text-sky-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </>
  );
};

export default AIAutomation;
