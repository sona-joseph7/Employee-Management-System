import api from '../../utils/api';
import React, { useEffect, useState } from 'react'

const Table = () => {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]); 
  const [filterStatus, setFilterStatus] = useState("All"); 
  const [selectedLeave, setSelectedLeave] = useState(null); 

    
    useEffect(() => {
      const fetchLeaves = async () => {
        try {
          const response = await api.get("/admin/leaves");
          setLeaves(response.data);
          setFilteredLeaves(response.data);
        } catch (error) {
          console.error("Error fetching leaves:", error);
        }
      };
      fetchLeaves();
    }, []); 

    // filter leaves based on status
    const filterLeaves = (status) => {
      setFilterStatus(status);
      if (status === "All") {
        setFilteredLeaves(leaves);
      } else {
        setFilteredLeaves(leaves.filter((leave) => leave.status === status));
      }
    };

      // update leave status (Approve/Reject)
  const handleUpdateStatus = async (id, status) => {
    try {
      await api.put(`/admin/leaves/${id}`, { status });

      const updatedLeaves = leaves.map((leave) =>
        leave._id === id ? { ...leave, status } : leave
      );

      setLeaves(updatedLeaves);
      setFilteredLeaves(updatedLeaves.filter((leave) => filterStatus === "All" || leave.status === filterStatus));
      setSelectedLeave(null); 
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };


  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold mb-4'>Manage Leaves</h3>
        </div>
        <div className='flex justify-center items-center mb-4 space-x-3'>

            <button onClick={() => filterLeaves("Pending")} className={`px-2 py-1 rounded-md ${filterStatus === "Pending" ? "bg-yellow-500" : "bg-yellow-400"} text-white`}>Pending</button>
           <button onClick={() => filterLeaves("Approved")} className={`px-2 py-1 rounded-md ${filterStatus === "Approved" ? "bg-green-600" : "bg-green-500"} text-white`}>Approved</button>
            <button onClick={() => filterLeaves("Rejected")} className={`px-2 py-1 rounded-md ${filterStatus === "Rejected" ? "bg-red-600" : "bg-red-500"} text-white`}>Rejected</button>
            <button onClick={() => filterLeaves("All")} className={`px-2 py-1 rounded-md ${filterStatus === "All" ? "bg-gray-600" : "bg-gray-500"} text-white`}>All</button>
            </div>

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
            {filteredLeaves.map((leave, index) => (
              <tr key={leave._id} className='bg-white border-b dark:bg-yellow-50'>
                <td className='px-6 py-3'>{index + 1}</td>
                <td className='px-6 py-3'>{leave.employeeId}</td>
                <td className='px-6 py-3'>{leave.name}</td>
                <td className='px-6 py-3'>{leave.leaveType}</td>
                <td className='px-6 py-3'>{leave.department}</td>
                <td className='px-6 py-3'>{leave.days}</td>
                <td className={`px-6 py-3 ${leave.status === 'Approved' ? 'text-green-600' : leave.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {leave.status}
                </td>
                <td className='px-6 py-3'>
                  {leave.status === "Pending" ? (
                    <button onClick={() => setSelectedLeave(leave)} className='bg-blue-500 text-white px-3 py-1 rounded'>
                      Review Leave Request
                    </button>
                  ) : (
                    <span className={`px-3 py-1 rounded text-white ${leave.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {leave.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
    </table>
        </div>

             {/* MODAL */}
      {selectedLeave && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Leave Request Details</h2>
            <p><strong>Name:</strong> {selectedLeave.name}</p>
            <p><strong>Department:</strong> {selectedLeave.department}</p>
            <p><strong>Leave Type:</strong> {selectedLeave.leaveType}</p>
            <p><strong>From:</strong> {selectedLeave.startDate}</p>
            <p><strong>To:</strong> {selectedLeave.endDate}</p>
            <p><strong>Reason:</strong> {selectedLeave.reason}</p>
            <div className="flex justify-end mt-4 space-x-4">
              <button onClick={() => handleUpdateStatus(selectedLeave._id, "Approved")} className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>
              <button onClick={() => handleUpdateStatus(selectedLeave._id, "Rejected")} className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
              <button onClick={() => setSelectedLeave(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )} 
        
    </div>
  )
}

export default Table