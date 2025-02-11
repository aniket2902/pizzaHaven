import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { logout } from "../redux/authSlice";
import {
  FaUser,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaPizzaSlice,
} from "react-icons/fa";

const menuItems = [
  {
    title: "DashBoard",
    icon: <FaShoppingBag />,
    path: "/admin/outlets/dashboard",
  },
  // {
  //   title: "Address",
  //   icon: <FaMapMarkerAlt />,
  //   path: "/admin/outlets/address",
  // },
  // { title: "User", icon: <FaUser />, path: "/profile/user" },
  {
    title: "Orders",
    icon: <FaShoppingBag />,
    path: "admin/outlets/orders",
  },
  {
    title: "Menu",
    icon: <FaPizzaSlice />,
    path: "admin/outlets/menu",
  },
];
const AdminNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    navigate(`/admin/outlets/${item.title.toLowerCase()}`);
  };

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="h-80 mt-12 mb-3 p-6 flex flex-col space-y-6 text-gray-700 bg-gray-100 shadow-md">
      {menuItems.map((item) => (
        <div
          key={item.title}
          className="flex items-center space-x-4 p-3 cursor-pointer  hover:bg-red-500 hover:text-white rounded-md"
          onClick={() => handleNavigate(item)}
        >
          {item.icon}
          <span>{item.title}</span>
        </div>
      ))}

      {/* Logout Button */}
      <div
        className="flex items-center space-x-4 p-3 cursor-pointer hover:bg-red-500 hover:text-white rounded-md"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default AdminNavigation;
