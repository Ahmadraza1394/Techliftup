import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaEnvelopeOpenText,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaCrosshairs,
  FaBullhorn,
} from "react-icons/fa";

const ColdEmailCampaign = () => {
  return (
    <>
      <Helmet>
        <title>Cold Email Campaign Services | TechLiftUp</title>
        <meta
          name="description"
          content="Generate leads with personalized cold email campaigns. Professional email outreach strategies that convert prospects into customers."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <FaEnvelopeOpenText className="text-red-400" />
              <span className="text-sm font-medium text-red-300">
                Lead Generation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent">
              Cold Email Campaign Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Generate leads with personalized cold email campaigns. Reach
              decision-makers directly and convert prospects into paying
              customers with strategic email outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/50 inline-flex items-center justify-center gap-2"
              >
                Start Campaign <FaArrowRight />
              </Link>
              <a
                href="#how-we-work"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Our Strategy
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
              Why Cold Email Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct access to decision-makers at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCrosshairs className="text-4xl" />,
                title: "Targeted Outreach",
                desc: "Reach specific decision-makers in your ideal customer profile with personalized messages that resonate.",
              },
              {
                icon: <FaRocket className="text-4xl" />,
                title: "Scalable Growth",
                desc: "Generate consistent leads at scale without the high costs of traditional advertising or sales teams.",
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: "Measurable Results",
                desc: "Track open rates, reply rates, and conversions with detailed analytics to optimize your campaigns.",
              },
              {
                icon: <FaBullhorn className="text-4xl" />,
                title: "High ROI",
                desc: "Cost-effective lead generation with proven strategies that deliver qualified prospects to your sales pipeline.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="text-red-500 mb-4">{benefit.icon}</div>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Cold Email Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic campaigns that convert
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-red-300 via-orange-300 to-red-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Target Audience Research",
                    icon: <FaCrosshairs className="text-red-600" />,
                    description:
                      "We start by identifying your ideal customer profile and building targeted prospect lists. Our team conducts thorough research to find decision-makers in companies that match your criteria, ensuring we reach the right people with the right message at the right time.",
                    highlights: [
                      "ICP development",
                      "Prospect list building",
                      "Contact verification",
                      "Industry research",
                    ],
                  },
                  {
                    step: "02",
                    title: "Email Copywriting & Personalization",
                    icon: <FaEnvelopeOpenText className="text-red-600" />,
                    description:
                      "Our expert copywriters craft compelling email sequences that grab attention and drive responses. We personalize each message with relevant details about the prospect's company, industry challenges, and how your solution addresses their specific pain points.",
                    highlights: [
                      "Custom email sequences",
                      "Personalization strategy",
                      "A/B testing variants",
                      "Value proposition crafting",
                    ],
                  },
                  {
                    step: "03",
                    title: "Technical Setup & Deliverability",
                    icon: <FaChartLine className="text-red-600" />,
                    description:
                      "We configure email infrastructure to ensure maximum deliverability and inbox placement. This includes domain authentication, email warming, sender reputation management, and compliance with anti-spam regulations to protect your brand and ensure messages reach inboxes.",
                    highlights: [
                      "Domain setup & warming",
                      "SPF/DKIM/DMARC configuration",
                      "Deliverability optimization",
                      "Compliance management",
                    ],
                  },
                  {
                    step: "04",
                    title: "Campaign Launch & Monitoring",
                    icon: <FaRocket className="text-red-600" />,
                    description:
                      "We launch your campaigns with careful monitoring of key metrics including open rates, reply rates, and bounce rates. Our team continuously optimizes send times, subject lines, and message content based on real-time performance data to maximize engagement.",
                    highlights: [
                      "Campaign deployment",
                      "Real-time monitoring",
                      "Performance tracking",
                      "Quick optimization",
                    ],
                  },
                  {
                    step: "05",
                    title: "Lead Management & Reporting",
                    icon: <FaBullhorn className="text-red-600" />,
                    description:
                      "We manage incoming responses, qualify leads, and deliver them to your sales team. You receive detailed reports showing campaign performance, lead quality, and ROI. We continuously refine strategies based on data to improve results over time.",
                    highlights: [
                      "Response management",
                      "Lead qualification",
                      "Detailed reporting",
                      "Continuous optimization",
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-orange-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
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
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-700 ring-1 ring-red-100"
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
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-700 ring-1 ring-red-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent">
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
                                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
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
              Campaign Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cold email solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaUsers />,
                title: "B2B Lead Generation",
                features: [
                  "Decision-maker outreach",
                  "Enterprise targeting",
                  "Multi-touch sequences",
                  "Sales-qualified leads",
                ],
              },
              {
                icon: <FaEnvelopeOpenText />,
                title: "Email Copywriting",
                features: [
                  "Personalized messaging",
                  "A/B tested content",
                  "Follow-up sequences",
                  "Conversion optimization",
                ],
              },
              {
                icon: <FaChartLine />,
                title: "Campaign Management",
                features: [
                  "Performance tracking",
                  "List management",
                  "Response handling",
                  "ROI reporting",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-red-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <FaCheckCircle className="text-red-500 flex-shrink-0" />
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

export default ColdEmailCampaign;
