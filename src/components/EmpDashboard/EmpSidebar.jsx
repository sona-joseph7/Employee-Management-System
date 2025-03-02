// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const EmpSidebar = () => {
//   return (
//     <div className='bg-gray-950 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
//         <div className='bg-cyan-600 h-12 flex items-center justify-center'>
//             <h3 className='text-center' style={{fontFamily:'Rock Salt',fontSize:'0.8rem',fontWeight:'bold'}}>EMPLOYEE MANAGEMENT SYSTEM</h3>
//         </div>
//         <div className='px-4'>

//         <NavLink to="/employee-dashboard" className={({isActive})=> `${isActive ? "bg-cyan-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`} end>
//         <i className="fa-solid fa-gauge-high"></i><span>Dashboard</span><br />
//         </NavLink>

//         <NavLink to="/employee-dashboard/profile" className={({isActive})=> `${isActive ? "bg-cyan-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
//         <i className="fa-solid fa-user"></i><span>My Profile</span><br />
//         </NavLink>
//         <NavLink to="/employee-dashboard/leaves" className={({isActive})=> `${isActive ? "bg-cyan-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
//         <i className="fa-solid fa-building"></i><span>Leaves</span><br />
//         </NavLink>
//         <NavLink to="/employee-dashboard/salary" className={({isActive})=> `${isActive ? "bg-cyan-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
//         <i className="fa-solid fa-calendar-days"></i><span>Salary</span><br />
//         </NavLink>


//         <NavLink to="/employee-dashboard/setting" className= {({isActive})=> `${isActive ? "bg-cyan-600" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
//         <i className="fa-solid fa-gear"></i><span>Settings</span>
//         </NavLink>
//         </div>
//     </div>
//   )
// }

// export default EmpSidebar


import React from "react";
import { NavLink } from "react-router-dom";
//  from-gray-900 to-gray-800 text-white

const EmpSidebar = () => {
  return (
    <div className="h-screen fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b bg-white shadow-lg border-r border-gray-700">
      {/* Sidebar Header */}
      <div className="bg-cyan-600 h-14 flex items-center justify-center shadow-md">
        <h3
          className="text-center tracking-wider"
          style={{ fontFamily: "Rock Salt", fontSize: "0.85rem", fontWeight: "bold" }}
        >
          EMPLOYEE MANAGEMENT SYSTEM
        </h3>
      </div>

      {/* Sidebar Navigation */}
      <div className="px-5 py-4 space-y-2">
        <NavLink
          to="/employee-dashboard"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-600" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
          end
        >
          <i className="fa-solid fa-gauge-high text-lg"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/employee-dashboard/profile"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-600" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-user text-lg"></i>
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/employee-dashboard/leaves"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-600" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-building text-lg"></i>
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to="/employee-dashboard/salary"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-600" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-calendar-days text-lg"></i>
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/employee-dashboard/setting"
          className={({ isActive }) =>
            `${isActive ? "bg-cyan-600" : "hover:bg-cyan-100"} flex items-center space-x-3 py-3 px-4 rounded-lg transition-all`
          }
        >
          <i className="fa-solid fa-gear text-lg"></i>
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default EmpSidebar;
