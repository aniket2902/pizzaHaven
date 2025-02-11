import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import AdminOrdersTable from "./AdminOrdersTable";
import OutletDashboard from "./OutletDashboard";
import { Menu } from "lucide-react";
import MenuItemTable from "./MenuItemTable";
import AddMenuForm from "./AddMenuForm";

const Admin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div
        className={`h-full bg-gray-100 shadow-md transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-1/5"
        }`}
      >
        <button
          className="p-2 m-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu size={20} />
        </button>
        <AdminNavigation isCollapsed={isCollapsed} />
      </div>

      {/* Main Content */}
      <div className="h-full flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/orders" element={<AdminOrdersTable />} />
          <Route path="/dashboard" element={<OutletDashboard />} />
          <Route path="/menu" element={<MenuItemTable />} />
          <Route path="/additem" element={<AddMenuForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
