import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">
          <Link to="/">takePizza</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-red-500">
            Home
          </Link>
          <Link to="/menu" className="text-gray-800 hover:text-red-500">
            Menu
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-red-500">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-red-500">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-800 hover:text-red-500">
            <FaShoppingCart size={20} />
          </Link>
          <button className="text-gray-800 hover:text-red-500">
            <FaSearch size={20} />
          </button>
          <button
            className="text-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
