import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaMobile,
  FaApple,
  FaAndroid,
  FaCheckCircle,
  FaArrowRight,
  FaCloud,
  FaCode,
  FaUsers,
} from "react-icons/fa";

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development Services | TechLiftUp</title>
        <meta
          name="description"
          content="Custom mobile apps for iOS and Android. Professional app development services that bring your ideas to life with cutting-edge technology."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
              <FaMobile className="text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                Mobile Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Mobile App Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Custom mobile apps for iOS and Android. Transform your business
              with powerful, user-friendly mobile applications that engage and
              delight your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 inline-flex items-center justify-center gap-2"
              >
                Build Your App <FaArrowRight />
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
              Why Invest in Mobile Apps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach your customers wherever they are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl" />,
                title: "Wider Reach",
                desc: "Access billions of mobile users worldwide and expand your market reach with iOS and Android applications.",
              },
              {
                icon: <FaMobile className="text-4xl" />,
                title: "Better Engagement",
                desc: "Mobile apps provide direct communication channels through push notifications, increasing user engagement and retention.",
              },
              {
                icon: <FaCloud className="text-4xl" />,
                title: "Offline Access",
                desc: "Enable users to access key features and content even without internet connectivity for uninterrupted experience.",
              },
              {
                icon: <FaCode className="text-4xl" />,
                title: "Native Performance",
                desc: "Leverage device capabilities like camera, GPS, and sensors for powerful, feature-rich applications.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
              >
                <div className="text-indigo-500 mb-4">{benefit.icon}</div>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our App Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to App Store launch
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-300 via-purple-300 to-indigo-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Strategy",
                    icon: <FaUsers className="text-indigo-600" />,
                    description:
                      "We begin by understanding your app idea, target audience, and business objectives. Our team conducts market research, competitor analysis, and defines the app's core features and functionality. We create detailed user personas and map out the user journey to ensure your app meets real user needs.",
                    highlights: [
                      "Market research",
                      "Competitor analysis",
                      "Feature prioritization",
                      "User persona development",
                    ],
                  },
                  {
                    step: "02",
                    title: "UX/UI Design",
                    icon: <FaMobile className="text-indigo-600" />,
                    description:
                      "Our designers create intuitive, visually appealing interfaces that provide exceptional user experiences. We develop wireframes, interactive prototypes, and high-fidelity designs following platform-specific guidelines for iOS and Android. Every screen is crafted to ensure smooth navigation and engagement.",
                    highlights: [
                      "Wireframing & prototyping",
                      "UI/UX design",
                      "Platform-specific guidelines",
                      "Interactive mockups",
                    ],
                  },
                  {
                    step: "03",
                    title: "Native Development",
                    icon: <FaCode className="text-indigo-600" />,
                    description:
                      "Our expert developers build your app using native technologies (Swift for iOS, Kotlin for Android) or cross-platform frameworks like React Native and Flutter. We implement robust backend systems, integrate APIs, and ensure seamless synchronization across devices with cloud infrastructure.",
                    highlights: [
                      "Native iOS/Android development",
                      "Cross-platform solutions",
                      "Backend integration",
                      "Cloud services setup",
                    ],
                  },
                  {
                    step: "04",
                    title: "Testing & Quality Assurance",
                    icon: <FaAndroid className="text-indigo-600" />,
                    description:
                      "We conduct comprehensive testing across multiple devices and OS versions to ensure flawless performance. Our QA team performs functional testing, usability testing, performance optimization, and security audits. We fix bugs and optimize the app before launch.",
                    highlights: [
                      "Multi-device testing",
                      "Performance optimization",
                      "Security testing",
                      "Bug fixing",
                    ],
                  },
                  {
                    step: "05",
                    title: "Launch & Support",
                    icon: <FaApple className="text-indigo-600" />,
                    description:
                      "We handle the complete app store submission process, including preparing store listings, screenshots, and descriptions. Post-launch, we monitor app performance, gather user feedback, release updates, and provide ongoing maintenance to ensure your app stays current and competitive.",
                    highlights: [
                      "App Store submission",
                      "Launch support",
                      "Performance monitoring",
                      "Ongoing updates",
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
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
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
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
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
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
                                  <FaCheckCircle className="text-indigo-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
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
              App Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaApple />,
                title: "iOS Development",
                features: [
                  "Native Swift apps",
                  "iPhone & iPad apps",
                  "App Store optimization",
                  "iOS design guidelines",
                ],
              },
              {
                icon: <FaAndroid />,
                title: "Android Development",
                features: [
                  "Native Kotlin apps",
                  "Material Design",
                  "Google Play optimization",
                  "Multi-device support",
                ],
              },
              {
                icon: <FaMobile />,
                title: "Cross-Platform Apps",
                features: [
                  "React Native",
                  "Flutter development",
                  "Single codebase",
                  "Cost-effective solution",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-indigo-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <FaCheckCircle className="text-indigo-500 flex-shrink-0" />
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

export default AppDevelopment;
