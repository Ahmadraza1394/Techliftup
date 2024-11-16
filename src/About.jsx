import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  FaBolt,
  FaBullhorn,
  FaCode,
  FaCogs,
  FaFireExtinguisher,
  FaMobileAlt,
  FaShower,
  FaTools,
  FaWater,
  FaWind,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <section className="about-section px-6 md:px-12 pt-24 bg-gray-50 text-gray-800">
        {/* About Us Section */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-6">About Us</h2>
          <p className="text-2xl font-semibold text-justify max-w-3xl leading-relaxed">
            TechLiftUp – Your trusted partner for innovative digital solutions.
            We excel at empowering businesses through cutting-edge technology
            and a commitment to excellence.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>
        {/* Digital Services Section */}
        <section className="digital-services-section bg-gray-100 py-16 px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Digital Services
          </h2>
          <p className="text-2xl text-gray-600 text-justify leading-relaxed mb-8">
            At TechLiftUp, we offer a wide range of digital services to help
            your business thrive in the digital age. Our expertise includes:
          </p>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaCode />,
                title: "Web Development",
                description: "Creating responsive and engaging websites.",
                bgColor: "text-sky-500",
              },
              {
                icon: <FaMobileAlt />,
                title: "App Development",
                description: "Building user-friendly mobile applications.",
                bgColor: "text-purple-500",
              },
              {
                icon: <FaBullhorn />,
                title: "Digital Marketing",
                description: "Strategies to enhance your online presence.",
                bgColor: "text-orange-500",
              },
              {
                icon: <FaCogs />,
                title: "And more",
                description:
                  "Tailored solutions to meet your unique business needs.",
                bgColor: "text-teal-500",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`text-4xl w-12 h-12 ${service.bgColor}  flex items-center justify-center rounded-full`}
                >
                  {service.icon}
                </div>
                <p className="text-2xl text-gray-700">
                  <span className="font-bold text-red-500">
                    {service.title}
                  </span>
                  : {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Building Services Section */}
        <section className="building-services-section bg-gray-200 py-16 px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Building Services MEP
          </h2>
          <p className="text-2xl text-gray-600 text-justify leading-relaxed mb-8">
            Our Building Services MEP (Mechanical, Electrical, and Plumbing)
            solutions are designed to ensure that your projects are equipped
            with the latest technology and comply with all safety standards. We
            provide comprehensive services from design to implementation,
            ensuring efficiency and sustainability in every project. Our
            services include:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-2xl text-gray-700 mb-8">
            {[
              {
                icon: <FaWater />,
                title: "Water Supply System",
                bgColor: "bg-sky-500",
              },
              {
                icon: <FaWind />,
                title: "Heating, Ventilation & Air Conditioning",
                bgColor: "bg-purple-500",
              },
              {
                icon: <FaFireExtinguisher />,
                title: "Fire Fighting System",
                bgColor: "bg-orange-500",
              },
              {
                icon: <FaBolt />,
                title: "Electrical and Low Current Systems",
                bgColor: "bg-teal-500",
              },
              {
                icon: <FaShower />,
                title: "Plumbing System",
                bgColor: "bg-green-500",
              },
              {
                icon: <FaTools />,
                title: "Specialized Services",
                bgColor: "bg-yellow-500",
              },
            ].map((service, index) => (
              <li
                key={index}
                className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4"
              >
                <div
                  className={`w-12 h-12 ${service.bgColor} text-white flex items-center justify-center rounded-full`}
                >
                  {service.icon}
                </div>
                <span className="font-bold text-red-500 text-center md:text-left">
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Content Section */}
        <section className="additional-section bg-gray-100 py-16 px-6 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Elevate Your Digital Strategy
            </h3>
            <p className="text-2xl text-gray-600 text-justify leading-relaxed mb-8">
              At TechLiftUp, we work closely with you to define clear goals,
              align your vision with market needs, and create innovative
              strategies that ensure your business stays ahead in the
              competitive digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🚀",
                  description:
                    "Comprehensive consulting to align your vision with market trends.",
                  bgColor: "bg-sky-500",
                },
                {
                  icon: "🎯",
                  description:
                    "Bespoke strategies to optimize performance and scalability.",
                  bgColor: "bg-red-500",
                },
                {
                  icon: "🔗",
                  description:
                    "Dynamic solutions that ensure seamless integration and transformation.",
                  bgColor: "bg-green-500",
                },
                {
                  icon: "🛠️",
                  description:
                    "Continuous support to address evolving business challenges.",
                  bgColor: "bg-yellow-500",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12  text-white flex items-center justify-center rounded-full text-2xl font-bold`}
                  >
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Query and Project Section */}
      <section className="text-center my-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Do you have any query?
        </h2>
        <button
          className="px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          onClick={() =>
            (window.location.href = "mailto:ahmadraza13941394@gmail.com")
          }
        >
          Send an Email →
        </button>
        <p className="text-2xl font-semibold text-gray-500 mt-6">Let's talk</p>
        <h3 className="text-4xl font-bold text-gray-900 mt-4">
          Got a project?
        </h3>
        <p className="text-2xl text-justify max-w-xl mx-auto mt-4 text-gray-600 leading-relaxed">
          We are a team of creatives enthusiastic about unique ideas, committed
          to helping businesses create an amazing identity. TechLiftUp
          specializes in crafting top-notch products to elevate your digital
          presence.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
