import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

const DepartmentList = () => {
  return (
    <div className='p-5'>
        <div className='text-center'>
            <h3 className='text-2xl font-bold'>Manage Departments</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input type="text" placeholder='Search department name here...' className='px-4 py-0.5 border'/>
            <Link to="/admin-dashboard/add-department" className='px-4 py-1 bg-cyan-600 rounded-lg text-white'>Add New Department</Link>
        </div>


                {/* temporary */}
                <div className='p-5'>
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Department</th>
            <th className='px-6 py-3'>Action</th>
          </tr>
        </thead>

      <tbody>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>1</td>

          <td className='px-6 py-3'>IT</td>
          <td className='px-6 py-3'>

            <button className='p-1 rounded-md me-2 w-13 text-white bg-green-400 cursor-pointer'>Edit</button>
            <button className='p-1 rounded-md me-2 w-13 text-white bg-red-400 cursor-pointer'>Delete</button>
          </td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>2</td>

          <td className='px-6 py-3'>Testing</td>
          <td className='px-6 py-3'>

            <button className='p-1 rounded-md me-2 w-13 text-white bg-green-400 cursor-pointer'>Edit</button>
            <button className='p-1 rounded-md me-2 w-13 text-white bg-red-400 cursor-pointer'>Delete</button>
          </td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>3</td>

          <td className='px-6 py-3'>Development</td>
          <td className='px-6 py-3'>

            <button className='p-1 rounded-md me-2 w-13 text-white bg-green-400 cursor-pointer'>Edit</button>
            <button className='p-1 rounded-md me-2 w-13 text-white bg-red-400 cursor-pointer'>Delete</button>
          </td>
        </tr>

      </tbody>
    </table>
                </div>
    </div>
  )
}

export default DepartmentList



