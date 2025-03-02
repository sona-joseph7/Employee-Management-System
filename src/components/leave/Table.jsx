import React from 'react'

const Table = () => {
  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Leaves</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input type="text" placeholder='Search by employee name...' className='px-4 py-0.5 border'/>

            <div className='space-x-3'>
            <button className='px-2 py-1 bg-yellow-400 text-white hover:bg-yellow-500 rounded-md'>Pending</button>
            <button className='px-2 py-1 bg-green-500 text-white hover:bg-green-600 rounded-md'>Approved</button>
            <button className='px-2 py-1 bg-red-500 text-white hover:bg-red-600 rounded-md'>Rejected</button>
            </div>

        </div>


{/* temporary */}
        <div className='p-5'>
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Emp ID</th>
            <th className='px-6 py-3'>Name</th>
            <th className='px-6 py-3'>Leave Type</th>
            <th className='px-6 py-3'>Department</th>
            <th className='px-6 py-3'>Days</th>
            <th className='px-6 py-3'>Status</th>
            <th className='px-6 py-3'>Action</th>
          </tr>
        </thead>

      <tbody>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>1</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>Luna</td>
          <td className='px-6 py-3'>Sick leave</td>
          <td className='px-6 py-3'>IT</td>
          <td className='px-6 py-3'>2</td>
          <td className='px-6 py-3'>Approved</td>
          <td className='px-6 py-3'>
            <button className='btn bg-blue-400 rounded p-1 text-white w-13'>View</button>
          </td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>2</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>Luna</td>
          <td className='px-6 py-3'>Sick leave</td>
          <td className='px-6 py-3'>IT</td>
          <td className='px-6 py-3'>2</td>
          <td className='px-6 py-3'>Approved</td>
          <td className='px-6 py-3'>
            <button className='btn bg-blue-400 rounded p-1 text-white w-13'>View</button>
          </td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>3</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>Luna</td>
          <td className='px-6 py-3'>Sick leave</td>
          <td className='px-6 py-3'>IT</td>
          <td className='px-6 py-3'>2</td>
          <td className='px-6 py-3'>Approved</td>
          <td className='px-6 py-3'>
            <button className='btn bg-blue-400 rounded p-1 text-white w-13'>View</button>
          </td>
        </tr>

      </tbody>
    </table>
        </div>
        
    </div>
  )
}

export default Table