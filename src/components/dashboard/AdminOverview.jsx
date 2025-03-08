import React, { useEffect, useState } from 'react'
import SummaryCard from './SummaryCard'
import api from '../../utils/api'

const AdminOverview = () => {

  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);
  const [leaveCounts, setLeaveCounts] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch total employees
        const employeeRes = await api.get('employees/count');
        setTotalEmployees(employeeRes.data.count);

        // Fetch total departments
        const departmentRes = await api.get('/departments/count');
        setTotalDepartments(departmentRes.data.count);

         // Fetch leave data
         const leaveRes = await api.get('/admin/leaves'); 
         const leaves = leaveRes.data;
 
         // Calculate leave status counts
         const total = leaves.length;
         const approved = leaves.filter(leave => leave.status === 'Approved').length;
         const pending = leaves.filter(leave => leave.status === 'Pending').length;
         const rejected = leaves.filter(leave => leave.status === 'Rejected').length;
 
         setLeaveCounts({ total, approved, pending, rejected });

      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold text-center'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ms-44'>
            <SummaryCard icon={<i className="fa-solid fa-user"></i>} text="Total Employees" number={totalEmployees} color="bg-red-400"/>
            <SummaryCard icon={<i className="fa-solid fa-building"></i>} text="Total Departments" number={totalDepartments} color="bg-yellow-400"/>
        </div>

        <div className='mt-12'>
            <h4 className='text-center text-2xl font-bold'>Leave Details</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ms-44'>
            <SummaryCard icon={<i className="fa-solid fa-envelope"></i>} text="Leave applied" number={leaveCounts.total} color="bg-blue-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-smile"></i>} text="Leave approved" number={leaveCounts.approved} color="bg-green-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-meh"></i>} text="Leave pending" number={leaveCounts.pending} color="bg-yellow-400"/>
            <SummaryCard icon={<i className="fa-regular fa-face-sad-cry"></i>} text="Leave rejected" number={leaveCounts.rejected} color="bg-red-400"/>
            </div>
        </div>
    </div>
  )
}

export default AdminOverview