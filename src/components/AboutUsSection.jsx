import { motion } from "framer-motion";
import {
  FaTrophy,
  FaProjectDiagram,
  FaHeadset,
  FaUsers,
  FaClipboard,
  FaTools,
} from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      {/* Heading and Description */}
      <div className="max-w-6xl mx-auto mb-12 text-center md:text-left">
        <h2 className="text-lg text-red-500 font-semibold mb-2 uppercase">
          Who We Are
        </h2>
        <h1 className="text-5xl md:text-5xl font-bold mb-6 sm:leading-loose ">
          Bringing Innovation in Software and Building Services Design
        </h1>
        <p className="text-gray-300 leading-relaxed text-xl">
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
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaTrophy className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">10+ Years of Expertise</h3>
          <p className="text-gray-400">
            Decades of experience in delivering exceptional digital and
            engineering solutions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaProjectDiagram className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">
            150+ Projects Delivered
          </h3>
          <p className="text-gray-400">
            Delivered over 150+ successful projects in digital platforms and MEP
            engineering design.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaHeadset className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
          <p className="text-gray-400">
            Dedicated support to ensure seamless operations for digital and
            engineering projects.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaUsers className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Skilled Professionals</h3>
          <p className="text-gray-400">
            A team of experienced engineers and software developers dedicated to
            achieving excellence.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaClipboard className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Integrated Solutions</h3>
          <p className="text-gray-400">
            Unified digital and building solutions tailored to your unique
            business needs.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300"
        >
          <FaTools className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">BIM & MEP Expertise</h3>
          <p className="text-gray-400">
            Expertise in Building Information Modeling (BIM) and MEP systems for
            efficient building solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
