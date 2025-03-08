import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import api from '../../utils/api'

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await api.get("/departments");
        setDepartments(res.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?")) return;
    try {
      await api.delete(`/departments/${id}`);
      setDepartments(departments.filter((dept) => dept._id !== id));
      alert("Department deleted successfully!");
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("Failed to delete department.");
    }
  };
  return (
    <div className='p-5'>
        <div className='text-center'>
            <h3 className='text-2xl font-bold'>Manage Departments</h3>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <Link to="/admin-dashboard/add-department" className='px-4 py-2 bg-cyan-600 rounded-lg text-white '>Add New Department</Link>
        </div>


                {/* temporary */}
                <div className='p-5'>
        <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-green-300 border border-gray-200'>
          <tr>
            <th className='px-6 py-3'>Sl No</th>
            <th className='px-6 py-3'>Department</th>
            <th className='px-6 py-3'>Action</th>
          </tr>
        </thead>

      <tbody>
                    {departments.map((dept, index) => (
              <tr key={dept._id} className="bg-white border-b dark:bg-yellow-50">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{dept.name}</td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => handleDelete(dept._id)}
                    className="p-1 rounded-md me-2 w-13 text-white bg-red-400 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

      </tbody>
    </table>
                </div>
    </div>
  )
}

export default DepartmentList



