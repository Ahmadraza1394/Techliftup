import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCheckCircle,
  FaCogs,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdEngineering, MdIntegrationInstructions } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { T } from "../context/LanguageContext";

const AboutUsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-sky-50 via-white to-amber-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-sky-100 to-amber-100 text-sky-700 px-6 py-3 rounded-full text-sm font-bold mb-8 tracking-wide shadow-lg border border-sky-200"
          >
            <HiOutlineSparkles className="inline mr-2" />
            <T>WHO WE ARE</T>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-sky-800 via-sky-600 to-amber-600 bg-clip-text text-transparent mb-8 leading-tight"
          >
            <T>
              Pioneering Growth Through Digital Innovation & Building Excellence
            </T>
          </motion.h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-sky-100 to-amber-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-200/50 hover:shadow-3xl transition-all duration-500 group">
              <img
                src="/assets/images/main-img.png"
                alt="TechLiftUp Team"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-sky-800 font-semibold text-sm md:text-base">
                    <T>Transforming businesses through innovation</T>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-800 to-amber-600 bg-clip-text text-transparent mb-6">
              <T>TechLiftUp is the global leader in digital transformation.</T>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <T>
                  At TechLiftUp, we don't just build software or engineer
                  buildings—we elevate businesses. For over 15 years, we've been
                  the force behind more than 500 success stories, empowering
                  small and medium businesses worldwide to scale smarter,
                  operate more efficiently, and achieve sustainable growth.{" "}
                </T>
              </p>
              <p>
                <T>
                  It's our unique blend of cutting-edge software development and
                  advanced building services engineering. Whether you need a
                  custom web platform, a robust mobile app, or a
                  state-of-the-art MEP (Mechanical, Electrical, Plumbing)
                  system, we deliver integrated solutions designed to
                  future-proof your business.{" "}
                </T>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-sky-500/5 via-white to-amber-500/5 rounded-3xl p-6 md:p-12 shadow-2xl border border-sky-200/30 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #0ea5e9 2px, transparent 2px)', backgroundSize: '50px 50px'}}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-sky-800 to-amber-600 bg-clip-text text-transparent mb-12 text-center">
              <T>Why Partner with TechLiftUp?</T>
            </h3>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-sky-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-sky-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">500+</span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Proven Track Record</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    Digital platforms and MEP engineering projects delivered—on
                    time, every time.
                  </T>
                </p>
              </div>

              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-amber-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MdIntegrationInstructions className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-sky-600 bg-clip-text text-transparent">
                    <T>End-to-End</T>
                  </span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Expertise</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    From vision to execution, we cover every detail so you can
                    focus on your business.
                  </T>
                </p>
              </div>

              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-sky-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-sky-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">
                    <T>Elite</T>
                  </span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Team</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    A passionate team of engineers, developers, and industry
                    experts obsessed with your results.
                  </T>
                </p>
              </div>

              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-amber-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BiSupport className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-sky-600 bg-clip-text text-transparent">
                    <T>Unmatched</T>
                  </span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Support</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    Get responsive, ongoing support that keeps your operations
                    seamless—digital or physical.
                  </T>
                </p>
              </div>

              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-sky-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-sky-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaCogs className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">
                    <T>Integrated</T>
                  </span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Solutions</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    Experience the power of unified software, digital, and
                    building services—all under one roof.
                  </T>
                </p>
              </div>

              <div className="group text-center bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-sky-100 hover:border-amber-300 hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MdEngineering className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-sky-600 bg-clip-text text-transparent">
                    <T>BIM & MEP</T>
                  </span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">
                  <T>Masters</T>
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  <T>
                    Leverage our expertise in Building Information Modeling and
                    MEP systems for efficiency and sustainability.
                  </T>
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-sky-500 to-amber-500 p-8 md:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-amber-600/20"></div>
                <div className="relative z-10">
                  <FaLightbulb className="text-4xl md:text-5xl mx-auto mb-6 animate-pulse" />
                  <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-4xl mx-auto">
                    <T>
                      You bring the vision. We bring the innovation, execution, and
                      support to make it a reality—every single time.
                    </T>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
