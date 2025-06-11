import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";

import WhatsappButton from "./components/WhatsappButton";

const About = () => {
  return (
    <>
      <Header />
      <section className="about-section px-6 md:px-12 pt-24 bg-gray-50 text-gray-800">
        {/* About Us Section */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-6">About Us</h2>
          {/* <p className="text-2xl  font-semibold text-justify max-w-3xl leading-relaxed">
            TechLiftUp helps businesses grow by using advanced technology and
            smart building solutions. We focus on creating future success with
            innovative and precise ideas.
          </p> */}
          <p className="text-2xl mb-7 font-semibold text-justify max-w-3xl leading-relaxed">
            TechLiftUp is a legally registered and certified company, recognized
            by the relevant authorities. Our official registration reflects our
            commitment to professionalism, transparency, and excellence in every
            service we provide.
          </p>
          <Link
            to="/#contact"
            className="mt-14 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            Contact Us
          </Link>
        </div>
        {/* Digital Services Section */}
        <section className="bg-sky-500 py-10 mt-16 my-10 px-6 rounded-xl">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Right Side - Mission & Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold text-white mb-4">
                Our Mission and Vision
              </h2>
              <p className="text-2xl text-white leading-relaxed text-justify">
                At TechLiftUp, we make technology work for you—not the other way
                around. We cut through the complexity with smart, tailored
                solutions that fuel your growth. No jargon, no headaches—just
                real results that help you win and grow with us.
              </p>

              {/* <h2 className="text-5xl font-bold text-white mt-8 mb-4">
                Vision Statement
              </h2> */}
              <p className="text-2xl text-white leading-relaxed  text-justify">
                We believe success should be a win-win. That’s why we partner
                with businesses of all sizes to build confidence, unlock
                potential, and turn ideas into impact. No barriers, no
                limits—just honest collaboration that makes you say,
                <span className="italic">
                  "Why didn’t we do this sooner?"
                </span>{" "}
              </p>

              <p className="text-sm text-gray-200 mt-8">
                © {new Date().getFullYear()} TechLiftUp. All rights reserved.
              </p>
            </div>
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src="/assets/images/mission.jpg" // Replace with the actual image path
                alt="TechLiftUp Mission"
                className="w-full h-full max-w-md rounded-lg shadow-lg"
              />
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

      <CallToAction />
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default About;
