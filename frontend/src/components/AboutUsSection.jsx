import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTrophy,
  FaProjectDiagram,
  FaHeadset,
  FaUsers,
  FaClipboard,
  FaTools,
} from "react-icons/fa";

const AboutUsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Heading and Description */}
      <div className="max-w-6xl mx-auto mb-12 text-center md:text-left relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-red-500 font-semibold mb-2 uppercase"
        >
          Who We Are
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Bringing Innovation in Software and Building Services Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-300 leading-relaxed text-lg md:text-xl"
        >
          TechLiftUp combines expertise in software development and building
          services engineering to deliver end-to-end solutions for businesses
          worldwide. From crafting innovative digital platforms to designing
          state-of-the-art mechanical, electrical, and plumbing (MEP) systems,
          we empower growth and sustainability.
          <br />
          <br />
          Our team comprises skilled professionals passionate about delivering
          value, maintaining quality, and building lasting relationships. We
          emphasize innovation, strategic collaboration, and client satisfaction
          across every project we undertake.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 relative z-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaTrophy className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">15+ Years of Expertise</h3>
          <p className="text-gray-300">
            Decades of experience in delivering exceptional digital and
            engineering solutions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaProjectDiagram className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">
            500+ Projects Delivered
          </h3>
          <p className="text-gray-300">
            Delivered over 500+ successful projects in digital platforms and MEP
            engineering design.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaHeadset className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
          <p className="text-gray-300">
            Dedicated support to ensure seamless operations for digital and
            engineering projects.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaUsers className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Skilled Professionals</h3>
          <p className="text-gray-300">
            A team of experienced engineers and software developers dedicated to
            achieving excellence.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaClipboard className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Integrated Solutions</h3>
          <p className="text-gray-300">
            Unified digital and building solutions tailored to your unique
            business needs.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition duration-300"
        >
          <FaTools className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">BIM & MEP Expertise</h3>
          <p className="text-gray-300">
            Expertise in Building Information Modeling (BIM) and MEP systems for
            efficient building solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
