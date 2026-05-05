import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaChartLine,
  FaGoogle,
  FaCheckCircle,
  FaArrowRight,
  FaBullhorn,
  FaLink,
  FaFileAlt,
} from "react-icons/fa";

const SEOMarketing = () => {
  return (
    <>
      <Helmet>
        <title>SEO & Digital Marketing Services | TechLiftUp</title>
        <meta
          name="description"
          content="Boost rankings with SEO & digital marketing. Drive organic traffic, increase visibility, and grow your business with proven strategies."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <FaSearch className="text-green-400" />
              <span className="text-sm font-medium text-green-300">
                Digital Growth
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
              SEO & Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Boost rankings with SEO & digital marketing. Dominate search
              results, drive qualified traffic, and convert visitors into
              customers with data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 inline-flex items-center justify-center gap-2"
              >
                Grow Your Business <FaArrowRight />
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
              Why SEO & Marketing Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable growth through organic visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaGoogle className="text-4xl" />,
                title: "Higher Rankings",
                desc: "Dominate search results for keywords that matter to your business and attract qualified organic traffic.",
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: "Increased Traffic",
                desc: "Drive consistent, high-quality traffic to your website from users actively searching for your products or services.",
              },
              {
                icon: <FaBullhorn className="text-4xl" />,
                title: "Brand Visibility",
                desc: "Build brand authority and trust by appearing prominently in search results and across digital channels.",
              },
              {
                icon: <FaLink className="text-4xl" />,
                title: "Long-Term ROI",
                desc: "Achieve sustainable growth with strategies that deliver compounding returns over time, unlike paid ads.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="text-green-500 mb-4">{benefit.icon}</div>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our SEO & Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven strategies for measurable results
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-green-300 via-emerald-300 to-green-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "SEO Audit & Analysis",
                    icon: <FaSearch className="text-green-600" />,
                    description:
                      "We begin with a comprehensive audit of your website and digital presence. Our team analyzes your current rankings, identifies technical SEO issues, evaluates competitor strategies, and uncovers opportunities for improvement. We examine site structure, content quality, backlink profile, and user experience to create a baseline for growth.",
                    highlights: [
                      "Technical SEO audit",
                      "Competitor analysis",
                      "Keyword research",
                      "Performance baseline",
                    ],
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    icon: <FaChartLine className="text-green-600" />,
                    description:
                      "Based on audit findings, we develop a customized SEO and marketing strategy aligned with your business goals. We identify high-value keywords, create content plans, define link-building strategies, and establish KPIs. Our approach combines on-page optimization, technical SEO, content marketing, and off-page tactics.",
                    highlights: [
                      "Custom SEO strategy",
                      "Content roadmap",
                      "Link building plan",
                      "KPI definition",
                    ],
                  },
                  {
                    step: "03",
                    title: "On-Page Optimization",
                    icon: <FaFileAlt className="text-green-600" />,
                    description:
                      "We optimize every element of your website for search engines and users. This includes optimizing title tags, meta descriptions, headers, content, images, and internal linking. We improve site speed, mobile responsiveness, and user experience while ensuring all content is valuable, relevant, and keyword-optimized.",
                    highlights: [
                      "Content optimization",
                      "Technical improvements",
                      "Mobile optimization",
                      "UX enhancement",
                    ],
                  },
                  {
                    step: "04",
                    title: "Content Creation & Marketing",
                    icon: <FaBullhorn className="text-green-600" />,
                    description:
                      "Our content team creates high-quality, SEO-optimized content that attracts and engages your target audience. We develop blog posts, landing pages, infographics, and other content assets that rank well and drive conversions. Each piece is researched, written, and optimized to target specific keywords and user intent.",
                    highlights: [
                      "SEO content writing",
                      "Blog development",
                      "Landing page optimization",
                      "Content distribution",
                    ],
                  },
                  {
                    step: "05",
                    title: "Monitoring & Optimization",
                    icon: <FaLink className="text-green-600" />,
                    description:
                      "We continuously monitor your rankings, traffic, and conversions using advanced analytics tools. Our team provides detailed monthly reports showing progress toward goals. We constantly refine strategies based on performance data, algorithm updates, and emerging opportunities to ensure sustained growth and maximum ROI.",
                    highlights: [
                      "Performance tracking",
                      "Monthly reporting",
                      "Continuous optimization",
                      "ROI analysis",
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
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
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 ring-1 ring-green-100"
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
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700 ring-1 ring-green-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
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
                                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"></div>
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
              Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaSearch />,
                title: "SEO Services",
                features: [
                  "On-page optimization",
                  "Technical SEO",
                  "Link building",
                  "Local SEO",
                ],
              },
              {
                icon: <FaFileAlt />,
                title: "Content Marketing",
                features: [
                  "Blog writing",
                  "Content strategy",
                  "Copywriting",
                  "Content distribution",
                ],
              },
              {
                icon: <FaBullhorn />,
                title: "Digital Marketing",
                features: [
                  "PPC campaigns",
                  "Social media marketing",
                  "Conversion optimization",
                  "Analytics & reporting",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-green-500 mb-4">
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
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
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

export default SEOMarketing;
