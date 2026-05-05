import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Link } from "react-router-dom";
import CallToAction from "./components/CallToAction";

// import WhatsappButton from "./components/WhatsappButton";
import { T } from "./context/LanguageContext";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          About TechLiftUp | Leading Digital Marketing Agency in USA | Our Story
          & Mission
        </title>
        <meta
          name="description"
          content="Learn about TechLiftUp - a premier digital marketing and web development agency serving USA businesses. Discover our mission, expert team, and commitment to driving business growth through innovative digital solutions."
        />
        <meta
          name="keywords"
          content="about TechLiftUp, digital marketing agency USA, web development company, our team, company mission, business growth experts, USA digital agency"
        />
        <meta
          property="og:title"
          content="About TechLiftUp | Digital Marketing Experts in USA"
        />
        <meta
          property="og:description"
          content="Meet the team behind TechLiftUp - your trusted partner for digital marketing and web development in the USA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techliftup.com/about" />
        <link rel="canonical" href="https://www.techliftup.com/about" />
      </Helmet>
      <Header />
      <section className="about-section px-6 md:px-12 pt-24 bg-gray-50 text-gray-800">
        {/* About Us Section */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-6">
            <T>About Us</T>
          </h2>
          {/* <p className="text-2xl  font-semibold text-justify max-w-3xl leading-relaxed">
            TechLiftUp helps businesses grow by using advanced technology and
            smart building solutions. We focus on creating future success with
            innovative and precise ideas.
          </p> */}
          <p className="text-2xl mb-7 font-semibold text-justify max-w-3xl leading-relaxed">
            <T>
              TechLiftUp is a legally registered and certified company,
              recognized by the relevant authorities. Our official registration
              reflects our commitment to professionalism, transparency, and
              excellence in every service we provide.
            </T>
          </p>
          <Link
            to="/#contact"
            className="mt-14 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            <T>Contact Us</T>
          </Link>
        </div>
        {/* Digital Services Section */}
        <section className="bg-sky-500 py-10 mt-16 my-10 px-6 rounded-xl">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Right Side - Mission & Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-bold text-white mb-4">
                <T>Our Mission and Vision</T>
              </h2>
              <p className="text-2xl text-white leading-relaxed text-justify">
                <T>
                  At TechLiftUp, we make technology work for you—not the other
                  way around. We cut through the complexity with smart, tailored
                  solutions that fuel your growth. No jargon, no headaches—just
                  real results that help you win and grow with us.
                </T>
              </p>

              {/* <h2 className="text-5xl font-bold text-white mt-8 mb-4">
                Vision Statement
              </h2> */}
              <p className="text-2xl text-white leading-relaxed  text-justify">
                <T>
                  We believe success should be a win-win. That’s why we partner
                  with businesses of all sizes to build confidence, unlock
                  potential, and turn ideas into impact. No barriers, no
                  limits—just honest collaboration that makes you say,
                </T>
                <span className="italic">
                  <T>"Why didn’t we do this sooner?"</T>
                </span>{" "}
              </p>

              <p className="text-sm text-gray-200 mt-8">
                <T>
                  {" "}
                  {new Date().getFullYear()} TechLiftUp. All rights reserved.
                </T>
              </p>
            </div>
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src="/assets/images/mission.jpg"
                alt="TechLiftUp Mission - Empowering USA businesses with innovative digital marketing solutions and web development services"
                title="Our Mission - Digital Transformation for Businesses"
                className="w-full h-full max-w-md rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </section>

      {/* Query and Project Section */}
      <section className="text-center my-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          <T>Do you have any query?</T>
        </h2>
        <button
          className="px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          onClick={() =>
            (window.location.href = "mailto:ahmadraza13941394@gmail.com")
          }
        >
          <T>Send an Email →</T>
        </button>
        <p className="text-2xl font-semibold text-gray-500 mt-6">
          <T>Let's talk</T>
        </p>
        <h3 className="text-4xl font-bold text-gray-900 mt-4">
          <T>Got a project?</T>
        </h3>
        <p className="text-2xl text-justify max-w-xl mx-auto mt-4 text-gray-600 leading-relaxed">
          <T>
            We are a team of creatives enthusiastic about unique ideas,
            committed to helping businesses create an amazing identity.
            TechLiftUp specializes in crafting top-notch products to elevate
            your digital presence.
          </T>
        </p>
      </section>

      <CallToAction />
      {/* <WhatsappButton /> */}
      <Footer />
    </div>
  );
};

export default About;
