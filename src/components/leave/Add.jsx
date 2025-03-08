
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../utils/api'


const Add = () => {
    const [leaveType, setLeaveType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!reason.trim()) {
          alert("Reason field cannot be empty!");
          return;
        }
      
        try {
          const user = JSON.parse(localStorage.getItem("user")); // Get employee details
          if (!user) {
            alert("User not logged in!");
            return;
          }
      
          const leaveData = {
            employeeId: user.employeeId,
            name: user.name,
            department: user.department,
            leaveType,
            startDate,
            endDate,
            reason,
            status: "Pending",
          };
      
          console.log("Submitting Leave Data:", leaveData); 
      
          const response = await api.post("/employee/leaves", leaveData);
      
          console.log("Leave Request Submitted:", response.data);
          alert("Leave request submitted successfully!");
          navigate("/employee-dashboard/leaves"); 
        } catch (error) {
          console.error("Error submitting leave request:", error);
          alert("Failed to submit leave request");
        }
      };
      
      

    
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-boldmb-6 '>Leave Request</h2>
        <form onSubmit={handleSubmit} action="">
            <div className='flex flex-col space-y-4'>
                <div>
                    <select name="leaveType" className='mt-1 p-2 block w-full border border-gray-300 rounded-md' value={leaveType} onChange={(e) => setLeaveType(e.target.value)} id="" required>
                        <option value="">Select Leave Type</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>From Date</label>
                    <input type="date" name='startDate' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>
                    </div>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>To Date</label>
                    <input type="date" name='endDate' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>
                </div>
            </div>

            <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Description</label>
                <textarea name="reason" placeholder='Reason' className=' w-full border border-gray-300' value={reason} onChange={(e) => setReason(e.target.value)} id=""></textarea>
            </div>
            </div>

            <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded'>Add Leave</button>
        </form>
    </div>
  )
}

export default Add