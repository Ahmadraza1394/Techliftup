import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaServer,
  FaMobile,
  FaSearch,
} from "react-icons/fa";

const WebsiteDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Website Development Services | TechLiftUp</title>
        <meta
          name="description"
          content="Robust and scalable web development solutions. Build powerful, secure, and high-performance websites with TechLiftUp's expert development team."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 rounded-full px-4 py-2 mb-6">
              <FaCode className="text-sky-400" />
              <span className="text-sm font-medium text-sky-300">
                Professional Development
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-sky-200 to-blue-200 bg-clip-text text-transparent">
              Website Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Robust and scalable web development solutions that power your
              digital presence with cutting-edge technology and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-sky-500/50 inline-flex items-center justify-center gap-2"
              >
                Start Your Project <FaArrowRight />
              </Link>
              <a
                href="#how-we-work"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Our Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions built for performance and scalability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-4xl" />,
                title: "High Performance",
                desc: "Lightning-fast websites optimized for speed with advanced caching, CDN integration, and efficient code architecture.",
              },
              {
                icon: <FaShieldAlt className="text-4xl" />,
                title: "Secure & Reliable",
                desc: "Enterprise-level security with SSL, data encryption, regular security audits, and protection against vulnerabilities.",
              },
              {
                icon: <FaMobile className="text-4xl" />,
                title: "Fully Responsive",
                desc: "Perfect display on all devices with mobile-first design approach ensuring seamless user experience everywhere.",
              },
              {
                icon: <FaSearch className="text-4xl" />,
                title: "SEO Optimized",
                desc: "Built with SEO best practices, clean code structure, fast loading times, and search engine friendly architecture.",
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

      <section
        id="how-we-work"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building exceptional websites
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-sky-300 via-blue-300 to-sky-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Requirements & Planning",
                    icon: <FaSearch className="text-sky-600" />,
                    description:
                      "We start with in-depth consultation to understand your business objectives, target audience, and technical requirements. Our team conducts comprehensive market research, competitor analysis, and creates detailed project specifications with clear timelines and deliverables.",
                    highlights: [
                      "Business goal analysis",
                      "Technical requirement gathering",
                      "Project roadmap creation",
                      "Technology stack selection",
                    ],
                  },
                  {
                    step: "02",
                    title: "Architecture & Design",
                    icon: <FaServer className="text-sky-600" />,
                    description:
                      "Our architects design scalable system architecture and database structures. We create wireframes, define API endpoints, plan integrations, and establish the technical foundation that ensures your website can grow with your business needs.",
                    highlights: [
                      "System architecture design",
                      "Database schema planning",
                      "API design & documentation",
                      "Scalability planning",
                    ],
                  },
                  {
                    step: "03",
                    title: "Development & Integration",
                    icon: <FaCode className="text-sky-600" />,
                    description:
                      "Using modern frameworks like React, Node.js, and Next.js, our developers build robust, maintainable code. We implement responsive designs, integrate third-party services, develop custom features, and ensure clean, well-documented code following industry best practices.",
                    highlights: [
                      "Frontend development (React/Next.js)",
                      "Backend development (Node.js/Express)",
                      "API integration",
                      "Custom feature development",
                    ],
                  },
                  {
                    step: "04",
                    title: "Testing & Quality Assurance",
                    icon: <FaShieldAlt className="text-sky-600" />,
                    description:
                      "Rigorous testing ensures flawless performance across all scenarios. We conduct functional testing, performance optimization, security audits, cross-browser compatibility checks, and mobile responsiveness testing to deliver a bug-free product.",
                    highlights: [
                      "Automated testing",
                      "Performance optimization",
                      "Security testing",
                      "Cross-browser validation",
                    ],
                  },
                  {
                    step: "05",
                    title: "Deployment & Maintenance",
                    icon: <FaRocket className="text-sky-600" />,
                    description:
                      "We handle seamless deployment with zero downtime using modern DevOps practices. Post-launch, we provide continuous monitoring, regular updates, performance optimization, security patches, and dedicated support to ensure your website runs smoothly.",
                    highlights: [
                      "CI/CD pipeline setup",
                      "Cloud deployment",
                      "Performance monitoring",
                      "Ongoing support & updates",
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tech stack for powerful web solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaCode />,
                title: "Frontend Technologies",
                features: [
                  "React.js & Next.js",
                  "Vue.js & Nuxt.js",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                icon: <FaServer />,
                title: "Backend Technologies",
                features: [
                  "Node.js & Express",
                  "Python & Django",
                  "PHP & Laravel",
                  "RESTful & GraphQL APIs",
                ],
              },
              {
                icon: <FaShieldAlt />,
                title: "DevOps & Deployment",
                features: [
                  "AWS & Azure Cloud",
                  "Docker & Kubernetes",
                  "CI/CD Pipelines",
                  "SSL & Security",
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

export default WebsiteDevelopment;
