import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Orders from "../Orders/Orders";
//import UsersAddresses from "../UsersAdresses/UsersAddresses";
//import UserProfile from "./UserProfile";
import ProfileNavigation from "../components/ProfileNavigation";
import { Link, NavLink } from "react-router-dom";
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
  return (
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
