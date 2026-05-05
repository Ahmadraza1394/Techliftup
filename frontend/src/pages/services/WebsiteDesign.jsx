import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaPalette,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaMobile,
  FaLightbulb,
  FaPencilRuler,
} from "react-icons/fa";

const WebsiteDesign = () => {
  return (
    <>
      <Helmet>
        <title>Website Design Services | TechLiftUp</title>
        <meta
          name="description"
          content="Modern, responsive, and user-friendly website designs. Create stunning digital experiences that captivate your audience and drive conversions."
        />
      </Helmet>
      <Header />

      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <FaPalette className="text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Creative Design
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Website Design Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Modern, responsive, and user-friendly website designs that create
              memorable digital experiences and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 inline-flex items-center justify-center gap-2"
              >
                Start Your Design <FaArrowRight />
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
              Why Great Design Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your digital presence with exceptional design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl" />,
                title: "User-Centric Design",
                desc: "We create intuitive interfaces focused on user experience, ensuring visitors easily navigate and engage with your content.",
              },
              {
                icon: <FaMobile className="text-4xl" />,
                title: "Mobile-First Approach",
                desc: "Designs optimized for mobile devices first, ensuring perfect display and functionality across all screen sizes.",
              },
              {
                icon: <FaLightbulb className="text-4xl" />,
                title: "Brand Identity",
                desc: "Custom designs that reflect your brand personality, values, and vision, creating a unique digital identity.",
              },
              {
                icon: <FaPencilRuler className="text-4xl" />,
                title: "Conversion Focused",
                desc: "Strategic design elements that guide users toward desired actions, maximizing conversions and ROI.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className="text-purple-500 mb-4">{benefit.icon}</div>
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
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to pixel-perfect execution
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description:
                  "We begin by understanding your brand, target audience, and business goals. Our team conducts comprehensive competitor analysis, user research, and market trends study to create designs that resonate with your audience and stand out in your industry.",
                highlights: [
                  "Brand analysis",
                  "Audience research",
                  "Competitor study",
                  "Market trends analysis",
                ],
              },
              {
                step: "02",
                title: "Wireframing & Prototyping",
                description:
                  "We create detailed wireframes and interactive prototypes to visualize the user journey and information architecture. This stage allows us to test functionality, gather feedback, and refine the user experience before moving to visual design.",
                highlights: [
                  "Information architecture",
                  "User flow mapping",
                  "Interactive prototypes",
                  "Usability testing",
                ],
              },
              {
                step: "03",
                title: "Visual Design & Branding",
                description:
                  "Our designers craft stunning visual designs that align with your brand identity. We develop color schemes, typography systems, custom graphics, and UI components that create a cohesive and memorable visual experience across all pages.",
                highlights: [
                  "Custom UI design",
                  "Color palette creation",
                  "Typography system",
                  "Icon & graphic design",
                ],
              },
              {
                step: "04",
                title: "Responsive Design Implementation",
                description:
                  "We ensure your design looks perfect on every device by creating responsive layouts for desktop, tablet, and mobile. Every element is carefully adapted to provide optimal viewing and interaction experience across all screen sizes.",
                highlights: [
                  "Mobile optimization",
                  "Tablet layouts",
                  "Desktop designs",
                  "Cross-device testing",
                ],
              },
              {
                step: "05",
                title: "Review & Refinement",
                description:
                  "Before final delivery, we conduct thorough design reviews, gather stakeholder feedback, and make necessary refinements. We ensure every pixel is perfect, all interactions are smooth, and the design meets your expectations and business objectives.",
                highlights: [
                  "Design review sessions",
                  "Feedback implementation",
                  "Quality assurance",
                  "Final optimization",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaPalette />,
                title: "UI/UX Design",
                features: [
                  "User interface design",
                  "User experience optimization",
                  "Interaction design",
                  "Accessibility standards",
                ],
              },
              {
                icon: <FaMobile />,
                title: "Responsive Design",
                features: [
                  "Mobile-first approach",
                  "Tablet optimization",
                  "Desktop layouts",
                  "Cross-browser compatibility",
                ],
              },
              {
                icon: <FaPencilRuler />,
                title: "Brand Design",
                features: [
                  "Logo design",
                  "Brand guidelines",
                  "Visual identity",
                  "Marketing materials",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-purple-500 mb-4">
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
                      <FaCheckCircle className="text-purple-500 flex-shrink-0" />
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

export default WebsiteDesign;
