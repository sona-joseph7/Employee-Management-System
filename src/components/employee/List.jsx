// import React from 'react'
// import { Link } from 'react-router-dom'

// const List = () => {
//   return (
//     <div className='p-6'>
//         <div className='text-center'>
//         <h3 className='text-2xl font-bold'>Manage Employees</h3>
//         </div>
//         <div className='flex justify-between items-center'>
//             <input type="text" placeholder='Search by employee name...' className='px-4 py-0.5 border rounded-md'/>
//             <Link to="/admin-dashboard/add-employee" className='px-4 py-1 bg-cyan-600 rounded-lg text-white'>Add New Employee</Link>
//         </div>

//         {/* temporary */}
//         <div className='p-5'>
//         <table className='w-full text-sm text-left text-gray-500'>
//         <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
//           <tr>
//             <th className='px-6 py-3'>Sl No</th>
//             <th className='px-6 py-3'>Image</th>
//             <th className='px-6 py-3'>Name</th>
//             <th className='px-6 py-3'>DOB</th>
//             <th className='px-6 py-3'>Department</th>
//             <th className='px-6 py-3'>Action</th>
//           </tr>
//         </thead>

//       <tbody>
//         <tr className='bg-white border-b dark:bg-yellow-50'>
//           <td className='px-6 py-3'>1</td>
//           <td className='px-6 py-3'>
//             <img src="https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs=" style={{width:'50px'}} alt="" />
//           </td>
//           <td className='px-6 py-3'>Luna</td>
//           <td className='px-6 py-3'>07-11-2001</td>
//           <td className='px-6 py-3'>IT</td>
//           <td className='px-6 py-3'>
//             <button className='p-1 rounded-md me-2 text-white bg-blue-400 cursor-pointer'>View</button>
//             <button className='p-1 rounded-md me-2 text-white bg-green-400 cursor-pointer'>Edit</button>
//             <button className='p-1 rounded-md me-2 text-white bg-yellow-400 cursor-pointer'>Salary</button>
//             <button className='p-1 rounded-md me-2 text-white bg-red-400 cursor-pointer'>Leave</button>
//           </td>
//         </tr>
//         <tr className='bg-white border-b dark:bg-yellow-50'>
//           <td className='px-6 py-3'>2</td>
//           <td className='px-6 py-3'>
//             <img src="https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs=" style={{width:'50px'}} alt="" />
//           </td>
//           <td className='px-6 py-3'>Luna</td>
//           <td className='px-6 py-3'>07-11-2001</td>
//           <td className='px-6 py-3'>IT</td>
//           <td className='px-6 py-3'>
//             <button className='p-1 rounded-md me-2 text-white bg-blue-400 cursor-pointer'>View</button>
//             <button className='p-1 rounded-md me-2 text-white bg-green-400 cursor-pointer'>Edit</button>
//             <button className='p-1 rounded-md me-2 text-white bg-yellow-400 cursor-pointer'>Salary</button>
//             <button className='p-1 rounded-md me-2 text-white bg-red-400 cursor-pointer'>Leave</button>
//           </td>
//         </tr>
//         <tr className='bg-white border-b dark:bg-yellow-50'>
//           <td className='px-6 py-3'>3</td>
//           <td className='px-6 py-3'>
//             <img src="https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs=" style={{width:'50px'}} alt="" />
//           </td>
//           <td className='px-6 py-3'>Luna</td>
//           <td className='px-6 py-3'>07-11-2001</td>
//           <td className='px-6 py-3'>IT</td>
//           <td className='px-6 py-3'>
//             <button className='p-1 rounded-md me-2 text-white bg-blue-400 cursor-pointer'>View</button>
//             <button className='p-1 rounded-md me-2 text-white bg-green-400 cursor-pointer'>Edit</button>
//             <button className='p-1 rounded-md me-2 text-white bg-yellow-400 cursor-pointer'>Salary</button>
//             <button className='p-1 rounded-md me-2 text-white bg-red-400 cursor-pointer'>Leave</button>
//           </td>
//         </tr>

//       </tbody>
//     </table>
//         </div>
//     </div>
    
    

//   )
// }

// export default List

import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const employees = [
    {
      id: 1,
      name: 'Luna',
      dob: '07-11-2001',
      department: 'IT',
      image: 'https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs='
    },
    {
      id: 2,
      name: 'Nila',
      dob: '15-09-1999',
      department: 'Audit',
      image: 'https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs='
    },
    {
      id: 2,
      name: 'Mia',
      dob: '13-12-1997',
      department: 'HR',
      image: 'https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs='
    }
  ];

  return (
    <div className='p-6'>
      <div className='text-center mb-4'>
        <h3 className='text-2xl font-bold'>Manage Employees</h3>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <input type='text' placeholder='Search employees...' className='px-4 py-2 border rounded-md w-2/3' />
        <Link to='/admin-dashboard/add-employee' className='px-4 py-2 bg-cyan-600 rounded-lg text-white'>
          Add New Employee
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {employees.map(emp => (
          <div key={emp.id} className='bg-white shadow-lg p-4 rounded-lg text-center'>
            <img src={emp.image} alt={emp.name} className='w-24 h-24 rounded-full mx-auto mb-3' />
            <h4 className='text-lg font-semibold'>{emp.name}</h4>
            <p className='text-sm text-gray-600'>DOB: {emp.dob}</p>
            <p className='text-sm text-gray-600'>Department: {emp.department}</p>
            <div className='mt-3 space-x-2'>
              <button className='p-2 rounded-md text-white bg-blue-500'><i className='fa-solid fa-eye'></i>View</button>
              <button className='p-2 rounded-md text-white bg-green-500'><i className='fa-solid fa-pen'></i>Edit</button>
              <button className='p-2 rounded-md text-white bg-yellow-500'><i className='fa-solid fa-dollar-sign'>Salary</i></button>
              <button className='p-2 rounded-md text-white bg-red-500'><i className='fa-solid fa-plane'></i>Leave</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
