import api from '../../utils/api';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      try {
        const response = await api.get(`/employee/leaves/${user.employeeId}`);
        // const data = await response.json();
        // setLeaves(data);
        setLeaves(response.data);
      } catch (error) {
        console.error("Error fetching leaves:", error);
      }
    };

    fetchLeaves();
  }, []);


  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold mb-4'>Manage Leaves</h3>
        </div>
        <div className='flex justify-center items-center '>
            <Link to="/employee-dashboard/add-leave" className='px-4 py-2 bg-cyan-600 rounded-lg text-white'>Request for New Leave</Link>
        </div>
        <div className='p-5'>
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-green-300 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Name</th>
            <th className='px-6 py-3'>Leave Type</th>
            <th className='px-6 py-3'>Days</th>
            <th className='px-6 py-3'>Status</th>
          </tr>
        </thead>

      <tbody>
      {leaves.map((leave, index) => (
              <tr key={leave.id} className='bg-white border-b'>
                <td className='px-6 py-3'>{index + 1}</td>
                <td className='px-6 py-3'>{leave.name}</td>
                <td className='px-6 py-3'>{leave.leaveType}</td>
                <td className='px-6 py-3'>{leave.days}</td>
                <td className={`px-6 py-3 ${leave.status === "Approved" ? "text-green-600" : leave.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                  {leave.status}
                </td>
              </tr>
            ))}
      </tbody>
    </table>
      </div>
    </div>
    
  )
}

export default List