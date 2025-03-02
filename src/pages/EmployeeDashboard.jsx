// import React from 'react'
// import EmpSidebar from '../components/EmpDashboard/EmpSidebar'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/dashboard/Navbar'

// const EmployeeDashboard = () => {
//   return (
//     <div className='flex'>
//     <EmpSidebar/>
//     <div className='flex-1 ml-64 bg-gray-100 h-screen'>
//       <Navbar/>
//       <Outlet/>
//     </div>
   
//   </div>
//   )
// }

// export default EmployeeDashboard

import React from 'react'
import EmpSidebar from '../components/EmpDashboard/EmpSidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/dashboard/Navbar'

const EmployeeDashboard = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar - Hidden on Small Screens */}
      <div className='hidden md:block w-64'>
        <EmpSidebar />
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        <Navbar />
        <div className='p-4 md:p-6 flex flex-col gap-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
