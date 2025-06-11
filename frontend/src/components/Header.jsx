import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="TechLiftUp Logo"
            className="ml-8 h-20 w-auto object-center"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center mr-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-lg"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-lg"
          >
            Services
          </Link>
          <Link
            to="/cases"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-lg"
          >
            Case Studies
          </Link>
          <Link
            to="/team"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-lg"
          >
            Our Team
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-sky-600 transition font-bold text-lg"
          >
            About Us
          </Link>
          <Link
            to="/#contact"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition font-bold text-lg"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none mr-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/cases"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/team"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              Our Team
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-sky-600 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/#contact"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition font-bold text-xl"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

Header.propTypes = {
  scrollToContact: PropTypes.func,
};

export default Header;
