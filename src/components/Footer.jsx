import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="TechLiftUp Logo"
              className=" ml-8 h-20 w-auto object-center"
            />{" "}
            {/* Adjust height as needed */}
          </Link>
          <div className="flex space-x-4 text-red-600">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">TechLiftUp Pvt Ltd.</h3>
          <div>
            <h4 className="font-semibold">KSA Office</h4>
            <p>
              Islabia Riyadh,
              <br />
              11564 Riyadh, Saudia Arabia
            </p>
          </div>{" "}
          <div className="mb-4">
            <h4 className="font-semibold">Pakistan Office</h4>
            <p>
              New City Phase 2
              <br />
              47000 Islamabad, Pakistan
            </p>
          </div>
        </div>

        {/* Work Inquiries and Career */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Work Inquiries</h3>
          <p>
            Interested in working with us? <br />
            <a
              href="mailto:contact@techliftup.com"
              className="text-red-600 font-semibold"
            >
              info@techliftup.com
            </a>
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Career</h3>
            <p>
              Looking for a job opportunity? <br />
              <a href="#" className="text-red-600 font-semibold">
                See open positions
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
        <p>
          © 2024, TechLiftUp Pvt Ltd. Made with passion by{" "}
          <span className="text-red-600 font-semibold">TechLiftUp</span>
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-600 hover:text-red-600">
            Privacy & Cookie Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-gray-600 hover:text-red-600">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;