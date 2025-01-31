import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-red-500 mb-4 md:mb-0">
          <Link to="/">takePizza</Link>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-400 hover:text-white transition"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-400 hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to="#" className="text-white hover:text-red-500">
            <FaFacebookF size={20} />
          </Link>
          <Link to="#" className="text-white hover:text-red-500">
            <FaTwitter size={20} />
          </Link>
          <Link to="#" className="text-white hover:text-red-500">
            <FaInstagram size={20} />
          </Link>
        </div>

        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} takePizza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
