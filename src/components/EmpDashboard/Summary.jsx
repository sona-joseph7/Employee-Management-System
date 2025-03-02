// import React from 'react'
 
// const Summary = () => {
    
//   return (
//     <div className='p-6'>
//     <div className='rounded flex bg-white'>
//     <div className={`text-3xl flex justify-center items-center bg-cyan-600 text-white px-4`}>
//         {/*icon  */}
//         <i className="fa-solid fa-user"></i>
//     </div>
//     <div className='pl-4 py-1'>
//         <p className='text-lg font-semibold'>Welcome,</p>
//         <p className='text-xl font-bold'>EmployeeName</p>
//     </div>
// </div>
// </div>
//   )
// }

// export default Summary


import React from 'react'

const Summary = () => {
  return (
    <div className='p-6'>

      {/* Welcome Message */}
      <div className='bg-white shadow-md rounded-lg flex items-center p-4'>
        <div className='flex justify-center items-center bg-cyan-600 text-white p-4 rounded-full text-3xl'>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className='pl-4'>
          <p className='text-lg font-semibold text-gray-700'>Welcome,</p>
          <p className='text-2xl font-bold text-gray-900'>Employee Name</p>
        </div>
      </div>

      {/* Motivational Quote Section */}
      <div className='bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-center p-6 rounded-lg shadow-md mt-6'>
        <p className='italic'>"The only way to do great work is to love what you do." - Steve Jobs</p>
      </div>

    </div>
  )
}

export default Summary

