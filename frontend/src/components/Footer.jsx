import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  // FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { T } from "../context/LanguageContext";

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
          <div className="flex justify-center space-x-5 text-red-600">
            <a
              href="https://www.facebook.com/people/Techliftup-Pvt-Limited/61572675072301/"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/techliftup/"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/techliftup/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            {/* <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a> */}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <T>TechLiftUp Pvt Ltd.</T>
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              <T>U.S. Office</T>
            </h4>
            <p className="text-gray-600 text-sm">
              <T>1295 River Street, Boston, MA 02136</T>
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              <T>Mexico Office</T>
            </h4>
            <p className="text-gray-600 text-sm">
              <T>
                Bahia Xaak, D 301, Turquesa Tower, Puerto Aventuras, Quintana
                Roo, Mexico
              </T>
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-1">
              <T>KSA Office</T>
            </h4>
            <p className="text-gray-600 text-sm">
              <T>Riyadh, Saudia Arabia</T>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              <T>Pakistan Office</T>
            </h4>
            <p className="text-gray-600 text-sm">
              <T>Islamabad, Pakistan</T>
            </p>
          </div>
        </div>

        {/* Work Inquiries and Career */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <T>Work Inquiries</T>
          </h3>
          <p>
            <T>Interested in working with us?</T> <br />
            <a
              href="mailto:contact@techliftup.com"
              className="text-red-600 font-semibold"
            >
              <T>info@techliftup.com</T>
            </a>
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">
              <T>Career</T>
            </h3>
            <p>
              <T>Looking for a job opportunity?</T> <br />
              <a href="#" className="text-red-600 font-semibold">
                <T>See open positions</T>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
        <p>
          <T>
            {" "}
            {new Date().getFullYear()}, TechLiftUp Pvt Ltd. Made with passion
            by{" "}
          </T>
          <span className="text-red-600 font-semibold">TechLiftUp</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
