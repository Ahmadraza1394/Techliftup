import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaUsers,
  FaChartBar,
  FaCheckCircle,
  FaArrowRight,
  FaPaperPlane,
  FaHeart,
  FaBullseye,
} from "react-icons/fa";

const EmailMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Email Marketing Services | TechLiftUp</title>
        <meta
          name="description"
          content="Engaging email campaigns to grow your business. Build relationships, nurture leads, and drive sales with strategic email marketing."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <FaEnvelope className="text-amber-400" />
              <span className="text-sm font-medium text-amber-300">
                Customer Engagement
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-200 bg-clip-text text-transparent">
              Email Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Engaging email campaigns to grow your business. Build lasting
              relationships, nurture leads, and drive consistent sales with
              personalized email marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/50 inline-flex items-center justify-center gap-2"
              >
                Start Campaign <FaArrowRight />
              </Link>
              <a
                href="#how-we-work"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Our Approach
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
              Why Email Marketing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct communication that drives results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaBullseye className="text-4xl" />,
                title: "High ROI",
                desc: "Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the most cost-effective channels.",
              },
              {
                icon: <FaUsers className="text-4xl" />,
                title: "Direct Access",
                desc: "Reach customers directly in their inbox with personalized messages that build relationships and drive action.",
              },
              {
                icon: <FaHeart className="text-4xl" />,
                title: "Customer Loyalty",
                desc: "Nurture relationships with valuable content, exclusive offers, and personalized communication that builds brand loyalty.",
              },
              {
                icon: <FaChartBar className="text-4xl" />,
                title: "Measurable Results",
                desc: "Track opens, clicks, conversions, and revenue with detailed analytics to optimize campaign performance.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                <div className="text-amber-500 mb-4">{benefit.icon}</div>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-amber-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Email Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic campaigns that convert subscribers into customers
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-amber-300 via-yellow-300 to-amber-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Strategy & Planning",
                    icon: <FaBullseye className="text-amber-600" />,
                    description:
                      "We start by understanding your business goals, target audience, and current email marketing efforts. Our team develops a comprehensive email strategy including campaign types, content themes, segmentation approach, and automation workflows. We define clear objectives and KPIs to measure success.",
                    highlights: [
                      "Audience segmentation",
                      "Campaign strategy",
                      "Goal setting",
                      "Content planning",
                    ],
                  },
                  {
                    step: "02",
                    title: "List Building & Management",
                    icon: <FaUsers className="text-amber-600" />,
                    description:
                      "We help you grow and maintain a healthy email list through ethical list-building strategies. This includes creating lead magnets, optimizing signup forms, implementing double opt-in processes, and maintaining list hygiene. We ensure compliance with email regulations like GDPR and CAN-SPAM.",
                    highlights: [
                      "Lead magnet creation",
                      "Signup optimization",
                      "List segmentation",
                      "Compliance management",
                    ],
                  },
                  {
                    step: "03",
                    title: "Email Design & Copywriting",
                    icon: <FaEnvelope className="text-amber-600" />,
                    description:
                      "Our creative team designs beautiful, mobile-responsive email templates that align with your brand. We craft compelling copy that engages readers and drives action. Each email is optimized for deliverability, readability, and conversions with clear calls-to-action and persuasive messaging.",
                    highlights: [
                      "Custom email templates",
                      "Compelling copywriting",
                      "Mobile optimization",
                      "A/B testing",
                    ],
                  },
                  {
                    step: "04",
                    title: "Automation & Workflows",
                    icon: <FaPaperPlane className="text-amber-600" />,
                    description:
                      "We set up automated email sequences that nurture leads and engage customers at the right time. This includes welcome series, abandoned cart emails, post-purchase follow-ups, re-engagement campaigns, and personalized drip sequences. Automation ensures consistent communication without manual effort.",
                    highlights: [
                      "Welcome sequences",
                      "Abandoned cart recovery",
                      "Drip campaigns",
                      "Behavioral triggers",
                    ],
                  },
                  {
                    step: "05",
                    title: "Analytics & Optimization",
                    icon: <FaChartBar className="text-amber-600" />,
                    description:
                      "We continuously monitor campaign performance using advanced analytics. Our team tracks open rates, click-through rates, conversions, and revenue generated. We conduct A/B tests on subject lines, content, and send times to optimize results. You receive detailed reports showing ROI and actionable insights.",
                    highlights: [
                      "Performance tracking",
                      "A/B testing",
                      "Conversion optimization",
                      "Detailed reporting",
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
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
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-100"
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
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent">
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
                                  <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"></div>
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
              Email Campaign Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive email marketing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaPaperPlane />,
                title: "Newsletter Campaigns",
                features: [
                  "Regular updates",
                  "Content distribution",
                  "Brand awareness",
                  "Engagement building",
                ],
              },
              {
                icon: <FaUsers />,
                title: "Lead Nurturing",
                features: [
                  "Welcome series",
                  "Educational content",
                  "Drip campaigns",
                  "Lead scoring",
                ],
              },
              {
                icon: <FaChartBar />,
                title: "Promotional Campaigns",
                features: [
                  "Product launches",
                  "Special offers",
                  "Seasonal campaigns",
                  "Event promotions",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-amber-500 mb-4">
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
                      <FaCheckCircle className="text-amber-500 flex-shrink-0" />
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

export default EmailMarketing;
