import React from 'react'

const View = () => {
  return (
    <div className='overflow-x-auto p-5'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Salary History</h2>
      </div>
      <div className='flex justify-end my-3'>
        <input type="text" placeholder='Search by employee ID' className='border px-2 rounded-md py-0.5 border-gray-300'/>
      </div>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Emp ID</th>
            <th className='px-6 py-3'>Salary</th>
            <th className='px-6 py-3'>Allowance</th>
            <th className='px-6 py-3'>Deduction</th>
            <th className='px-6 py-3'>Total</th>
            <th className='px-6 py-3'>Pay Date</th>
          </tr>
        </thead>

      <tbody>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>1</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>40000</td>
          <td className='px-6 py-3'>2000</td>
          <td className='px-6 py-3'>5000</td>
          <td className='px-6 py-3'>47000</td>
          <td className='px-6 py-3'>17-02-2025</td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>2</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>40000</td>
          <td className='px-6 py-3'>2000</td>
          <td className='px-6 py-3'>5000</td>
          <td className='px-6 py-3'>47000</td>
          <td className='px-6 py-3'>17-02-2025</td>
        </tr>
        <tr className='bg-white border-b dark:bg-yellow-50'>
          <td className='px-6 py-3'>3</td>
          <td className='px-6 py-3'>456</td>
          <td className='px-6 py-3'>40000</td>
          <td className='px-6 py-3'>2000</td>
          <td className='px-6 py-3'>5000</td>
          <td className='px-6 py-3'>47000</td>
          <td className='px-6 py-3'>17-02-2025</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default View