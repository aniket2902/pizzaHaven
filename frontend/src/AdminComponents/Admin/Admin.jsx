import React from "react";
import AdminNavigation from "./AdminNavigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminOrders from "./AdminOrders";
import OutletDashboard from "./OutletDashboard";
const Admin = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="sticky h-full w-1/5 bg-gray-100 shadow-md">
        <AdminNavigation />
      </div>

      {/* Main Content */}
      <div className="h-full w-4/5 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<AdminOrders />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/dashboard" element={<OutletDashboard />} />
          {/* <Route path="/address" element={<AdminOrders />} />
        <Route path="/user" element={<AdminOrders />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
