import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/images/logo.png";
// import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Translate menu items
  const homeText = useTranslation("Home");
  const servicesText = useTranslation("Services");
  const blogText = useTranslation("Blogs");
  const caseStudiesText = useTranslation("Case Studies");
  const teamText = useTranslation("Our Team");
  const aboutText = useTranslation("About Us");
  const contactText = useTranslation("Contact Us");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    {
      name: "AI Automation & AI Chatbot",
      link: "/services/ai-automation",
      color: "sky",
    },
    {
      name: "Website Development",
      link: "/services/website-development",
      color: "sky",
    },
    {
      name: "Social Media Management",
      link: "/services/social-media-management",
      color: "pink",
    },
    {
      name: "WordPress Development",
      link: "/services/wordpress-development",
      color: "blue",
    },
    {
      name: "App Development",
      link: "/services/app-development",
      color: "indigo",
    },
    {
      name: "Cold Email Campaign",
      link: "/services/cold-email-campaign",
      color: "red",
    },
    {
      name: "SEO & Marketing",
      link: "/services/seo-marketing",
      color: "green",
    },
    {
      name: "Email Marketing",
      link: "/services/email-marketing",
      color: "amber",
    },
  ];

  // Close dropdowns when clicking outside - Commented out (language switcher disabled)
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //     if (
  //       mobileDropdownRef.current &&
  //       !mobileDropdownRef.current.contains(event.target)
  //     ) {
  //       setIsMobileDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center py-2">
          <img
            src={logo}
            alt="TechLiftUp Logo"
            className="h-16 md:h-20 w-auto object-center"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {homeText}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link
              to="/services"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg inline-flex items-center gap-1"
            >
              {servicesText}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 py-3 z-50"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Our Services
                  </p>
                </div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className={`block px-4 py-3 hover:bg-${service.color}-50 transition-colors group/item`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-${service.color}-500 group-hover/item:scale-125 transition-transform`}
                      ></div>
                      <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900">
                        {service.name}
                      </span>
                    </div>
                  </Link>
                ))}
                <div className="px-4 py-2 border-t border-gray-100 mt-2">
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    View All Services
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link
            to="/cases"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {caseStudiesText}
          </Link>
          <Link
            to="/team"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {teamText}
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {aboutText}
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {blogText}
          </Link>
          <Link
            to="/#contact"
            className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition font-bold text-base xl:text-lg"
          >
            {contactText}
          </Link>

          {/* Language Switcher Dropdown - Desktop */}
          {/* <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-sky-600 transition font-bold flex items-center"
            >
              {language === "en" ? (
                <img
                  src="/assets/images/uk.png"
                  alt="English"
                  className="w-6 h-6 mr-1"
                />
              ) : (
                <img
                  src="/assets/images/spain.png"
                  alt="Spanish"
                  className="w-6 h-6 mr-1"
                />
              )}
              <span className="ml-1">{language === "en" ? "EN" : "ES"}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-2 z-50 min-w-[120px]">
                <button
                  onClick={() => {
                    toggleLanguage("en");
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="/assets/images/uk.png"
                    alt="English"
                    className="w-6 h-6 mr-2"
                  />
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    toggleLanguage("es");
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="/assets/images/spain.png"
                    alt="Spanish"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Español</span>
                </button>
              </div>
            )}
          </div> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Mobile Language Switcher Dropdown - Commented Out */}
          {/* <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="text-gray-800 hover:text-sky-600 transition font-bold flex items-center"
            >
              {language === "en" ? (
                <img
                  src="/assets/images/uk.png"
                  alt="English"
                  className="w-6 h-6"
                />
              ) : (
                <img
                  src="/assets/images/spain.png"
                  alt="Spanish"
                  className="w-6 h-6"
                />
              )}
            </button>
            {isMobileDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-2 z-50 min-w-[120px]">
                <button
                  onClick={() => {
                    toggleLanguage("en");
                    setIsMobileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="/assets/images/uk.png"
                    alt="English"
                    className="w-6 h-6 mr-2"
                  />
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    toggleLanguage("es");
                    setIsMobileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="/assets/images/spain.png"
                    alt="Spanish"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Español</span>
                </button>
              </div>
            )}
          </div> */}

          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-sky-600 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {homeText}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2 inline-flex items-center justify-center gap-2"
                >
                  {servicesText}
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-gray-50 py-2 px-4"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded transition"
                        onClick={toggleMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block py-2 px-4 text-sm font-semibold text-sky-600 hover:text-sky-700 mt-2 border-t border-gray-200 pt-3"
                      onClick={toggleMenu}
                    >
                      View All Services →
                    </Link>
                  </motion.div>
                )}
              </div>

              <Link
                to="/blog"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {blogText}
              </Link>
              <Link
                to="/cases"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {caseStudiesText}
              </Link>
              <Link
                to="/team"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {teamText}
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {aboutText}
              </Link>
              <Link
                to="/#contact"
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition font-bold text-xl w-4/5 text-center"
                onClick={toggleMenu}
              >
                {contactText}
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  scrollToContact: PropTypes.func,
};

export default Header;
