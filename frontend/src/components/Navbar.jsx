import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">
          <Link to="/">PizzaHaven</Link>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/menu" className="hover:underline">
            menu
          </Link>
          <Link to="/about" className="hover:underline">
            about us
          </Link>
          <Link to="/menu" className="hover:underline">
            order
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:border-red-500"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-600 cursor-pointer" />
          </div>

          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart
                className="text-gray-600 cursor-pointer"
                size={22}
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                3
              </span>
            </Link>
          </div>

          <Link
            to="/signin"
            className="border border-red-500 text-red-500 px-4 py-1 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
          >
            sign in
          </Link>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
          />
          <div className="mt-4 space-y-2 text-gray-600 font-medium">
            <Link to="/menu" className="block hover:underline">
              menu
            </Link>
            <Link to="/menu" className="block hover:underline">
              order
            </Link>
            <Link to="/about" className="block hover:underline">
              about us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
