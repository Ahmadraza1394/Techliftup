import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaWordpress,
  FaPlug,
  FaCheckCircle,
  FaArrowRight,
  FaShoppingCart,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

const WordpressDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>WordPress Development Services | TechLiftUp</title>
        <meta
          name="description"
          content="Custom WordPress websites for your business. Professional WordPress development with custom themes, plugins, and e-commerce solutions."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <FaWordpress className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                WordPress Experts
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              WordPress Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Custom WordPress websites for your business. Powerful, flexible,
              and easy-to-manage solutions built on the world&apos;s most
              popular CMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 inline-flex items-center justify-center gap-2"
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
              Why Choose WordPress?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The perfect platform for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaPaintBrush className="text-4xl" />,
                title: "Easy to Manage",
                desc: "User-friendly dashboard that allows you to update content, add pages, and manage your website without technical knowledge.",
              },
              {
                icon: <FaPlug className="text-4xl" />,
                title: "Highly Extensible",
                desc: "Access to thousands of plugins and themes to add any functionality you need, from e-commerce to booking systems.",
              },
              {
                icon: <FaRocket className="text-4xl" />,
                title: "SEO Friendly",
                desc: "Built-in SEO features and optimization tools that help your website rank higher in search engine results.",
              },
              {
                icon: <FaShoppingCart className="text-4xl" />,
                title: "E-Commerce Ready",
                desc: "Seamlessly integrate WooCommerce to create a powerful online store with complete e-commerce functionality.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="text-blue-500 mb-4">{benefit.icon}</div>
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
              Our WordPress Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to launch and beyond
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-300 via-cyan-300 to-blue-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Planning & Strategy",
                    icon: <FaWordpress className="text-blue-600" />,
                    description:
                      "We start by understanding your business requirements, target audience, and website goals. Our team analyzes your content structure, functionality needs, and creates a comprehensive WordPress strategy including site architecture, plugin selection, and custom feature requirements.",
                    highlights: [
                      "Requirements gathering",
                      "Site architecture planning",
                      "Plugin & theme selection",
                      "Content strategy",
                    ],
                  },
                  {
                    step: "02",
                    title: "Custom Theme Development",
                    icon: <FaPaintBrush className="text-blue-600" />,
                    description:
                      "Our designers and developers create custom WordPress themes tailored to your brand. We build responsive, SEO-optimized themes from scratch or customize premium themes to match your exact specifications, ensuring a unique and professional appearance.",
                    highlights: [
                      "Custom theme design",
                      "Responsive layouts",
                      "Brand integration",
                      "Performance optimization",
                    ],
                  },
                  {
                    step: "03",
                    title: "Plugin Development & Integration",
                    icon: <FaPlug className="text-blue-600" />,
                    description:
                      "We develop custom plugins for unique functionality or integrate and configure existing plugins to meet your needs. Whether it's e-commerce, membership systems, booking platforms, or custom forms, we ensure seamless integration with your WordPress site.",
                    highlights: [
                      "Custom plugin development",
                      "WooCommerce setup",
                      "Third-party integrations",
                      "API connections",
                    ],
                  },
                  {
                    step: "04",
                    title: "Content Migration & Setup",
                    icon: <FaShoppingCart className="text-blue-600" />,
                    description:
                      "If you're moving from another platform, we handle complete content migration ensuring no data loss. We set up your pages, posts, media library, and configure all settings for optimal performance. We also provide content organization and SEO optimization during migration.",
                    highlights: [
                      "Content migration",
                      "Media optimization",
                      "SEO preservation",
                      "Database optimization",
                    ],
                  },
                  {
                    step: "05",
                    title: "Training & Ongoing Support",
                    icon: <FaRocket className="text-blue-600" />,
                    description:
                      "We provide comprehensive training on managing your WordPress site, including content updates, plugin management, and basic troubleshooting. Post-launch, we offer ongoing maintenance, security updates, backups, and technical support to keep your site running smoothly.",
                    highlights: [
                      "Admin training",
                      "Documentation",
                      "Security updates",
                      "24/7 support",
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
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
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100"
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
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">
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
                                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
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
              WordPress Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WordPress services for every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaWordpress />,
                title: "Custom Websites",
                features: [
                  "Business websites",
                  "Portfolio sites",
                  "Blog platforms",
                  "Corporate websites",
                ],
              },
              {
                icon: <FaShoppingCart />,
                title: "E-Commerce Solutions",
                features: [
                  "WooCommerce stores",
                  "Payment integration",
                  "Inventory management",
                  "Order tracking",
                ],
              },
              {
                icon: <FaPlug />,
                title: "Custom Development",
                features: [
                  "Custom plugins",
                  "Theme customization",
                  "API integration",
                  "Performance optimization",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-blue-500 mb-4">
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
                      <FaCheckCircle className="text-blue-500 flex-shrink-0" />
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

export default WordpressDevelopment;
