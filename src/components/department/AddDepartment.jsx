import React, { useState } from 'react'
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom'


const AddDepartment = () => {
    const [deptName, setDeptName] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await api.post("/departments", { name: deptName });
        alert("Department added successfully!");
        navigate("/admin-dashboard/departments");
      } catch (error) {
        console.error("Error adding department:", error);
        alert("Failed to add department.");
      }
    };
  return (
 
        
        <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
                <h2 className='text-2xl font-bold mb-6'>Add New Department</h2>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="deptname" className='text-sm font-medium text-gray-700'>Department Name</label>
                        <input type="text" name='deptname' value={deptName} onChange={(e)=>setDeptName(e.target.value)} className="mt-1 w-full p-2 border border-cyan-300 rounded-md" required placeholder='Enter Department Name Here...'/>
                    </div>
                    <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg'>Add Department</button>
                </form>
        </div>

  )
}

export default AddDepartment

