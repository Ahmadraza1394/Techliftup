import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/images/logo.png"; // Adjust path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="TechLiftUp Logo"
            className=" ml-8 h-20 w-auto object-center"
          />{" "}
          {/* Adjust height as needed */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-sky-600 transition font-bold"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-800 hover:text-sky-600 transition font-bold"
          >
            Our Portfolio
          </Link>
          <Link
            to="/team"
            className="text-gray-800 hover:text-sky-600 transition font-bold"
          >
            Our Team
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-sky-600 transition font-bold"
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className="text-gray-800 hover:text-sky-600 transition font-bold"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition font-bold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none mr-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-sky-600 transition font-bold"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-800 hover:text-sky-600 transition font-bold"
              onClick={toggleMenu}
            >
              Our Portfolio
            </Link>
            <Link
              to="/team"
              className="text-gray-800 hover:text-sky-600 transition font-bold"
              onClick={toggleMenu}
            >
              Our Team
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-sky-600 transition font-bold"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/blogs"
              className="text-gray-800 hover:text-sky-600 transition font-bold"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition font-bold"
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

export default Header;
