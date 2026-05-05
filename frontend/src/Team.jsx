import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";
// import WhatsappButton from "./components/WhatsappButton";
import { T } from "./context/LanguageContext";

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          Our Expert Team | TechLiftUp Digital Marketing Professionals | USA
          Agency
        </title>
        <meta
          name="description"
          content="Meet the TechLiftUp team - experienced digital marketing experts, web developers, and business strategists dedicated to growing USA businesses. Learn about our CEO, CTO, developers, and marketing specialists."
        />
        <meta
          name="keywords"
          content="TechLiftUp team, digital marketing experts USA, web development team, CEO Muhammad Sabir, CTO Ahmad Raza, marketing professionals, business development managers"
        />
        <meta
          property="og:title"
          content="Meet Our Expert Team | TechLiftUp USA"
        />
        <meta
          property="og:description"
          content="Get to know the talented professionals behind TechLiftUp's success in digital marketing and web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techliftup.com/team" />
        <link rel="canonical" href="https://www.techliftup.com/team" />
      </Helmet>
      <Header />
      <section className="team-section bg-gray-50 px-6 md:px-12 py-16 pt-28">
        {/* Team Header */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-red-500">
            <T>Team Members</T>
          </h2>
          <p className="text-2xl mb-8 text-justify max-w-3xl font-semibold text-gray-700 leading-relaxed">
            <T>
              At TechLiftUp, we combine innovation and expertise to deliver
              cutting-edge solutions in software development, app creation,
              digital marketing, and MEP design. With over 15+ years of
              experience, we empower businesses with sustainable and efficient
              outcomes, tailored to their unique needs.
            </T>
          </p>

          <Link
            to="/#contact"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            <T>Contact Us</T>
          </Link>
        </div>

        <hr className="my-10  " />

        {/* Team Members Section */}
        <div className="text-center">
          <h4 className="text-center font-serif ">
            <T>Our Team</T>
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-500 mb-8 my-8">
            <T>Meet the Experts Behind TechLiftUp</T>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/sabir.jpeg"
                  alt="Muhammad Sabir - CEO & Founder of TechLiftUp Digital Marketing Agency USA"
                  title="Muhammad Sabir - Chief Executive Officer"
                  className="w-full h-full object-cover object-top shadow-black shadow-sm"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Muhammad Sabir
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Building Services Engineering Design Consultant</T>
              </p>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/ahmadimg1.png"
                  alt="Ahmad Raza - CTO & Co-Founder, Web Development Expert at TechLiftUp USA"
                  title="Ahmad Raza - Chief Technology Officer"
                  className="w-full h-full object-cover object-contain transform rotate-2 brightness-100"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Ahmad Raza
              </h3>
              <p className="text-gray-500 text-lg">
                <T>CEO & Founder</T>
              </p>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/qadeer.png"
                  alt="Qadeer Ahmad - Lead Developer & Technical Architect at TechLiftUp"
                  title="Qadeer Ahmad - Lead Developer"
                  className="w-full h-full object-cover object-contain shadow-dark shadow-md"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Qadeer Ahmad
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Co Founder & IT Head</T>
              </p>
            </div>

            {/* <!-- Team Member 4 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/saul.png"
                  alt="Saul Chac - Business Development Manager at TechLiftUp Digital Agency"
                  title="Saul Chac - Business Development Manager"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Saul Chac
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Business Development Manager</T>
              </p>
            </div>

            {/* <!-- Team Member 5 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/mounie.jpeg"
                  alt="Mounie Célestin - Project Manager & Client Success Lead at TechLiftUp"
                  title="Mounie Célestin - Project Manager"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Mounie Célestin
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Strategic and Growth Partner</T>
              </p>
            </div>

            {/* <!-- Team Member 6 --> */}
            <div className="text-center">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/images/junior.png"
                  alt="Junior Buissereth - Marketing & Media Specialist at TechLiftUp USA"
                  title="Junior Buissereth - Marketing & Media"
                  className="w-full h-full object-cover object-scale-down scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">
                Junior Buissereth
              </h3>
              <p className="text-gray-500 text-lg">
                <T>Marketing & Media</T>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      {/* <WhatsappButton /> */}
      <Footer />
    </div>
  );
};

export default Team;
