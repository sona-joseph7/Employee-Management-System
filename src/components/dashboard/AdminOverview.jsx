import React from 'react'
import SummaryCard from './SummaryCard'

const AdminOverview = () => {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ms-22'>
            <SummaryCard icon={<i className="fa-solid fa-user"></i>} text="Total Employees" number={77} color="bg-red-400"/>
            <SummaryCard icon={<i className="fa-solid fa-building"></i>} text="Total Departments" number={7} color="bg-yellow-400"/>
            <SummaryCard icon={<i className="fa-solid fa-money-bill-1-wave"></i>} text="Montly Salary" number="₹20000" color="bg-green-400"/>
        </div>

        <div className='mt-12'>
            <h4 className='text-center text-2xl font-bold'>Leave Details</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ms-44'>
            <SummaryCard icon={<i className="fa-solid fa-envelope"></i>} text="Leave applied" number={15} color="bg-blue-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-smile"></i>} text="Leave approved" number={7} color="bg-green-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-meh"></i>} text="Leave pending" number={5} color="bg-yellow-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-sad-cry"></i>} text="Leave rejected" number={3} color="bg-red-400"/>
            </div>
        </div>
    </div>
  )
}

export default AdminOverview