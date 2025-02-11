import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserThunk, getUserThunk } from "../Redux/thunks/AuthThunk";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReducer);

  const totalQuantity = cart?.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  let { userData } = useSelector((state) => state.userReducer);
  console.log(userData);
  if (userData == undefined || userData == null)
    userData = localStorage.getItem("name");

  console.log("User from NavBar", userData);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserThunk({ navigate }));
  };

  const handleGetUserData = () => {
    setDropdownOpen(!dropdownOpen);
    dispatch(getUserThunk());
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">
          <Link to="/">PizzaHaven</Link>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
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
                {totalQuantity}
              </span>
            </Link>
          </div>

          {/* <Link
            to="/signin"
            className="border border-red-500 text-red-500 px-4 py-1 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
          >
            sign in
          </Link> */}
          {userData ? (
            <div className="relative">
              <button
                onClick={() => handleGetUserData()}
                className="flex items-center space-x-2 border border-gray-300 px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition"
              >
                <FaUserCircle size={20} className="text-gray-600" />
                <span>{userData.slice(0, 2).toUpperCase()}</span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300 relative"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => handleLogout()}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="border border-red-500 text-red-500 px-4 py-1 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
            >
              Sign In
            </Link>
          )}

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
