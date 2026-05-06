import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";

const SocialMediaManagement = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Management Services | TechLiftUp</title>
        <meta
          name="description"
          content="Grow your brand with strategic social media management. Professional content creation, community engagement, and data-driven strategies for all major platforms."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
              <FaBullhorn className="text-pink-400" />
              <span className="text-sm font-medium text-pink-300">
                Social Media Experts
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Social Media Management Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Grow your brand with strategic social media management. Build
              engaged communities, create compelling content, and drive real
              business results across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50 inline-flex items-center justify-center gap-2"
              >
                Boost Your Presence <FaArrowRight />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Social Media Management Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your audience where they spend their time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl" />,
                title: "Audience Growth",
                desc: "Build and nurture engaged communities across Facebook, Instagram, Twitter, LinkedIn, and more with targeted strategies.",
              },
              {
                icon: <FaRocket className="text-4xl" />,
                title: "Brand Awareness",
                desc: "Increase visibility and recognition with consistent, high-quality content that resonates with your target audience.",
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: "Data-Driven Results",
                desc: "Track engagement, reach, and conversions with detailed analytics to optimize your social media ROI.",
              },
              {
                icon: <FaCalendarAlt className="text-4xl" />,
                title: "Consistent Posting",
                desc: "Never miss a beat with strategic content calendars and scheduled posts that keep your brand top-of-mind.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-pink-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Social Media Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 5-step approach to social media success
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[34px] top-6 bottom-6 w-px bg-gradient-to-b from-pink-300 via-purple-300 to-pink-200"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Strategy & Audit",
                    icon: <FaChartLine className="text-pink-600" />,
                    description:
                      "We analyze your current social presence, identify opportunities, and develop a comprehensive strategy aligned with your business goals. This includes competitor analysis, audience research, and platform selection.",
                    chips: ["Audit", "ICP", "Competitors"],
                  },
                  {
                    step: "02",
                    title: "Content Planning",
                    icon: <FaCalendarAlt className="text-pink-600" />,
                    description:
                      "Our team creates detailed content calendars with a mix of promotional, educational, and engaging posts. We plan themes, campaigns, and seasonal content to keep your feed fresh and relevant.",
                    chips: ["Calendar", "Campaigns", "Themes"],
                  },
                  {
                    step: "03",
                    title: "Creative Production",
                    icon: <FaRocket className="text-pink-600" />,
                    description:
                      "We design eye-catching graphics, write compelling copy, and produce engaging videos tailored to each platform. Every piece of content is optimized for maximum engagement and brand consistency.",
                    chips: ["Design", "Copy", "Video"],
                  },
                  {
                    step: "04",
                    title: "Community Management",
                    icon: <FaUsers className="text-pink-600" />,
                    description:
                      "We actively monitor and respond to comments, messages, and mentions. Building relationships with your audience through timely, authentic interactions that strengthen brand loyalty.",
                    chips: ["Replies", "DMs", "Reputation"],
                  },
                  {
                    step: "05",
                    title: "Analytics & Optimization",
                    icon: <FaCheckCircle className="text-pink-600" />,
                    description:
                      "We track key metrics, analyze performance data, and provide detailed reports. Continuous optimization ensures your social media strategy evolves with your audience and delivers measurable ROI.",
                    chips: ["Reporting", "Iterate", "ROI"],
                  },
                ].map((item, index) => (
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
                            <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white text-xs font-extrabold grid place-items-center shadow-md">
                              {item.step}
                            </div>
                            <div className="text-2xl">{item.icon}</div>
                          </div>
                          <div className="md:hidden">
                            <h3 className="text-xl font-bold text-gray-900">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.chips.map((chip) => (
                                <span
                                  key={chip}
                                  className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-700 ring-1 ring-pink-100"
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
                                  {item.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {item.chips.map((chip) => (
                                    <span
                                      key={chip}
                                      className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-700 ring-1 ring-pink-100"
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
                                <div className="text-lg font-extrabold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                                  {item.step}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-4 md:mt-5">
                              {item.description}
                            </p>
                          </div>
                          <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
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

      {/* Platforms & Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Platforms We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management across all major platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <FaFacebookF className="text-4xl" />,
                name: "Facebook",
                color: "blue",
                desc: "Community building & advertising",
              },
              {
                icon: <FaInstagram className="text-4xl" />,
                name: "Instagram",
                color: "pink",
                desc: "Visual storytelling & engagement",
              },
              {
                icon: <FaTwitter className="text-4xl" />,
                name: "Twitter/X",
                color: "sky",
                desc: "Real-time updates & conversations",
              },
              {
                icon: <FaLinkedinIn className="text-4xl" />,
                name: "LinkedIn",
                color: "blue",
                desc: "B2B networking & thought leadership",
              },
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-${platform.color}-50 to-${platform.color}-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div
                  className={`text-${platform.color}-600 mb-4 flex justify-center`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm">{platform.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-6">
              What&apos;s Included in Our Service
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Custom content creation (graphics, copy)",
                "Strategic content calendar planning",

                "Community management & engagement",
                "Hashtag research and optimization",

                "Monthly analytics and performance reports",
                "Competitor monitoring and analysis",
                "Crisis management and reputation monitoring",
                "Platform-specific optimization",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-white flex-shrink-0 mt-1" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our social media management delivers measurable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                metric: "300%",
                label: "Average Engagement Increase",
                desc: "Within 6 months",
              },
              {
                metric: "50K+",
                label: "New Followers Generated",
                desc: "Across all platforms",
              },
              {
                metric: "85%",
                label: "Client Retention Rate",
                desc: "Long-term partnerships",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-pink-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Grow Your Social Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a social media strategy that drives real results
              for your business.
            </p>
            <Link
              to="/#contact"
              className="bg-white text-pink-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Get Started Today <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
