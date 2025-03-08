
import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="h-screen fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b bg-white shadow-lg border-r border-gray-700">
      {/* Sidebar Header */}
      <div className="bg-black text-white h-18 flex items-center justify-center shadow-md">
        <h3
          className="text-center tracking-wider"
          style={{ fontFamily: "Rock Salt", fontSize: "0.60rem", fontWeight: "bold" }}
        >
          EMPLOYEE MANAGEMENT SYSTEM
        </h3>
      </div>

      {/* Sidebar Navigation */}
      <div className="px-5 py-4 space-y-2">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
          end
        >
          <i className="fa-solid fa-gauge-high text-lg"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-user text-lg"></i>
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-building text-lg"></i>
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-calendar-days text-lg"></i>
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/salary/add"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-money-bill-1-wave text-lg"></i>
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/rewards"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-400" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-trophy text-lg"></i>
          <span>Rewards & Recognition</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
