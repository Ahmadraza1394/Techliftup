import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/images/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Translate menu items
  const homeText = useTranslation("Home");
  const servicesText = useTranslation("Services");
  const caseStudiesText = useTranslation("Case Studies");
  const teamText = useTranslation("Our Team");
  const aboutText = useTranslation("About Us");
  const contactText = useTranslation("Contact Us");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link
            to="/services"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-base xl:text-lg"
          >
            {servicesText}
          </Link>
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
            to="/#contact"
            className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition font-bold text-base xl:text-lg"
          >
            {contactText}
          </Link>
          
          {/* Language Switcher Dropdown - Desktop */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-sky-600 transition font-bold flex items-center"
            >
              {language === 'en' ? 
                <img src="/assets/images/uk.png" alt="English" className="w-6 h-6 mr-1" /> : 
                <img src="/assets/images/spain.png" alt="Spanish" className="w-6 h-6 mr-1" />
              }
              <span className="ml-1">{language === 'en' ? 'EN' : 'ES'}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-2 z-50 min-w-[120px]">
                <button 
                  onClick={() => {
                    toggleLanguage('en');
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img src="/assets/images/uk.png" alt="English" className="w-6 h-6 mr-2" />
                  <span>English</span>
                </button>
                <button 
                  onClick={() => {
                    toggleLanguage('es');
                    setIsDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img src="/assets/images/spain.png" alt="Spanish" className="w-6 h-6 mr-2" />
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button and Language Switcher */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Mobile Language Switcher Dropdown */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="text-gray-800 hover:text-sky-600 transition font-bold flex items-center"
            >
              {language === 'en' ? 
                <img src="/assets/images/uk.png" alt="English" className="w-6 h-6" /> : 
                <img src="/assets/images/spain.png" alt="Spanish" className="w-6 h-6" />
              }
            </button>
            {isMobileDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md py-2 z-50 min-w-[120px]">
                <button 
                  onClick={() => {
                    toggleLanguage('en');
                    setIsMobileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img src="/assets/images/uk.png" alt="English" className="w-6 h-6 mr-2" />
                  <span>English</span>
                </button>
                <button 
                  onClick={() => {
                    toggleLanguage('es');
                    setIsMobileDropdownOpen(false);
                  }}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img src="/assets/images/spain.png" alt="Spanish" className="w-6 h-6 mr-2" />
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-sky-600 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
              <Link
                to="/services"
                className="text-gray-800 hover:text-sky-600 transition font-bold text-xl w-full text-center py-2"
                onClick={toggleMenu}
              >
                {servicesText}
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
