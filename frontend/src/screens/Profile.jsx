import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Orders from "../Orders/Orders";
//import UsersAddresses from "../UsersAdresses/UsersAddresses";
//import UserProfile from "./UserProfile";
import ProfileNavigation from "../components/ProfileNavigation";
import { Link,NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  FaUserCircle,
  FaHome,
  FaCreditCard,
  FaSignOutAlt,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import toLower from "./../../node_modules/lodash-es/toLower";
import UserProfileScreen from "./UserProfileScreen";
import Address from "../components/Address";
import Order from "../components/Order";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("orders");
  const navigate = useNavigate();
  // const handleNavigate = (path) => {
  //   setSelectedTab(path);
  //   navigate(`/profile/${path.toLowerCase()}`);
  // };
  //   return (
  //     <div className="lg:flex justify-between">
  //       <div className="sticky h-[80vh] lg:w-1/5 bg-gray-100 p-4 rounded-lg shadow-md">
  //         <ProfileNavigation />
  //       </div>
  //       <div className="hidden lg:block w-0.5 bg-gray-300 mx-4"></div>
  //       <div className="lg:w-4/5 p-4">
  //         <Routes>
  //           {/* <Route path="/" element={<UserProfile />} />
  //           <Route path="/orders" element={<Orders />} />
  //           <Route path="/address" element={<UsersAddresses />} /> */}
  //         </Routes>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    // <div className="flex h-screen bg-black text-white">
    //   {/* Sidebar */}
    //   <div className="w-1/4 bg-gray-900 p-6">
    //     <h2 className="text-2xl font-bold text-red-500 mb-6">pizzaHaven</h2>
    //     <nav className="space-y-4">
    //       <Link to="/orders" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded">
    //         <FaUserCircle size={20} />
    //         <span>Orders</span>
    //       </Link>
    //       <Link to="/address" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded">
    //         <FaHome size={20} />
    //         <span>Address</span>
    //       </Link>
    //       <Link to="/payments" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded">
    //         <FaCreditCard size={20} />
    //         <span>Payments</span>
    //       </Link>
    //       <Link to="/logout" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded">
    //         <FaSignOutAlt size={20} />
    //         <span>Logout</span>
    //       </Link>
    //     </nav>
    //   </div>

    //   {/* Main Content */}
    //   <div className="w-3/4 p-6">
    //     <h2 className="text-xl font-bold border-b border-gray-700 pb-2">My Profile</h2>
    //     <div className="mt-6 flex items-center space-x-4">
    //       <FaUserCircle size={50} className="text-gray-500" />
    //       <div>
    //         <h3 className="text-lg font-semibold">John Doe</h3>
    //         <p className="text-gray-400">johndoe@example.com</p>
    //       </div>
    //     </div>
    //     <div className="mt-6">
    //       <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Order History</h3>
    //       <div className="mt-4 space-y-4">
    //         <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
    //           <div>
    //             <h4 className="text-white">Biryani</h4>
    //             <p className="text-gray-400">₹489</p>
    //           </div>
    //           <span className="bg-red-500 text-white px-3 py-1 rounded">Delivered</span>
    //         </div>
    //         <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
    //           <div>
    //             <h4 className="text-white">Biryani</h4>
    //             <p className="text-gray-400">₹489</p>
    //           </div>
    //           <span className="bg-red-500 text-white px-3 py-1 rounded">Completed</span>
    //         </div>
    //         <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
    //           <div>
    //             <h4 className="text-white">Biryani</h4>
    //             <p className="text-gray-400">₹489</p>
    //           </div>
    //           <span className="bg-red-500 text-white px-3 py-1 rounded">Pending</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="flex h-screen bg-white text-gray-800">
    //   {/* Sidebar */}
    //   <div className="w-1/7 bg-orange-500 p-6 text-white flex flex-col space-y-4">
    //     <h2 className="text-2xl font-bold">User Profile</h2>

    //     {/* Navigation Tabs */}
    //     <NavLink
    //       to="/profile/orders"
    //       className={({ isActive }) =>
    //         `flex items-center space-x-3 p-3 rounded-md transition ${
    //           isActive ? "bg-orange-700" : "hover:bg-orange-600"
    //         }`
    //       }
    //     >
    //       <FaUserCircle />
    //       <span>Orders</span>
    //     </NavLink>

    //     <NavLink
    //       to="/profile/address"
    //       className={({ isActive }) =>
    //         `flex items-center space-x-3 p-3 rounded-md transition ${
    //           isActive ? "bg-orange-700" : "hover:bg-orange-600"
    //         }`
    //       }
    //     >
    //       <FaMapMarkerAlt />
    //       <span>Address</span>
    //     </NavLink>

    //     <NavLink
    //       to="/profile/user"
    //       className={({ isActive }) =>
    //         `flex items-center space-x-3 p-3 rounded-md transition ${
    //           isActive ? "bg-orange-700" : "hover:bg-orange-600"
    //         }`
    //       }
    //     >
    //       <FaCreditCard />
    //       <span>User</span>
    //     </NavLink>

    //     <button className="flex items-center space-x-3 p-3 rounded-md hover:bg-orange-600 transition">
    //       <FaSignOutAlt />
    //       <span>Logout</span>
    //     </button>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex flex-grow p-6 overflow-auto">
    //     <Routes>
    //       {/* Redirect /profile to /profile/orders */}
    //       {/* <Route path="/" element={<Navigate to="/profile/orders" />} /> */}
    //       <Route path="/orders" element={<Order />} />
    //       <Route path="/address" element={<Address />} />
    //       <Route path="/user" element={<UserProfileScreen />} />
    //     </Routes>
    //   </div>
    // </div>
    // <div className="flex h-screen bg-white text-gray-800">
    //   {/* Sidebar */}
    //   <div className="w-1/7 bg-orange-500 p-6 text-white flex flex-col space-y-4">
    //     <h2 className="text-2xl font-bold">User Profile</h2>

    //     {/* Navigation Tabs */}
    //     <button
    //       className={`flex items-center space-x-3 p-3 rounded-md transition ${
    //         location.pathname === "/profile/orders" ? "bg-orange-700" : "hover:bg-orange-600"
    //       }`}
    //       onClick={() => navigate("/profile/orders")}
    //     >
    //       <FaUser />
    //       <span>Orders</span>
    //     </button>

    //     <button
    //       className={`flex items-center space-x-3 p-3 rounded-md transition ${
    //         location.pathname === "/profile/address" ? "bg-orange-700" : "hover:bg-orange-600"
    //       }`}
    //       onClick={() => navigate("/profile/address")}
    //     >
    //       <FaMapMarkerAlt />
    //       <span>Address</span>
    //     </button>

    //     <button
    //       className={`flex items-center space-x-3 p-3 rounded-md transition ${
    //         location.pathname === "/profile/user" ? "bg-orange-700" : "hover:bg-orange-600"
    //       }`}
    //       onClick={() => navigate("/profile/user")}
    //     >
    //       <FaCreditCard />
    //       <span>User</span>
    //     </button>

    //     <button className="flex items-center space-x-3 p-3 rounded-md hover:bg-orange-600 transition">
    //       <FaSignOutAlt />
    //       <span>Logout</span>
    //     </button>
    //   </div>

    //   {/* Main Content (Only the component updates) */}
    //   <div className="flex flex-grow p-6 overflow-auto">
    //     <Routes>
    //       {/* <Route path="/" element={<Navigate to="/orders" />} /> */}
    //       <Route path="/orders" element={<Order />} />
    //       <Route path="/address" element={<Address />} />
    //       <Route path="/user" element={<UserProfileScreen />} />
    //     </Routes>
    //   </div>
    // </div>
    <div className="flex h-screen">
    {/* Sidebar Navigation */}
    <div className="sticky h-full w-1/5 bg-gray-100 shadow-md">
      <ProfileNavigation />
    </div>

    {/* Main Content */}
    <div className="h-full w-4/5 p-6 overflow-auto">
      <Routes>
        <Route path="/" element={<UserProfileScreen />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/address" element={<Address />} />
        <Route path="/user" element={<UserProfileScreen />} />
      </Routes>
    </div>
  </div>
  );
};

export default Profile;
