import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const List = () => {

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employee");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

    // Function to remove an employee
    const handleRemoveEmployee = async (employeeId) => {
      if (!window.confirm("Are you sure you want to delete this employee?")) {
        return;
      }
  
      try {
        await api.delete(`/employee/${employeeId}`);
        setEmployees(employees.filter(emp => emp._id !== employeeId));
        alert("Employee removed successfully!");
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("Failed to remove employee.");
      }
    };


  // Function to filter employees based on search term
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle view button click
  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <div className='p-6'>
      <div className='text-center mb-4'>
        <h3 className='text-2xl font-bold'>Manage Employees</h3>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <input type='text' placeholder='Search employees...' className='px-4 py-2 border rounded-md w-2/3' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        <Link to='/admin-dashboard/add-employee' className='px-4 py-2 bg-cyan-600 rounded-lg text-white'>
          Add New Employee
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredEmployees.map(emp => (
          <div key={emp.id} className='bg-white shadow-lg p-4 rounded-lg text-center'>
            <img src='https://img.freepik.com/premium-psd/user-icematte_161669-211.jpg' alt={emp.name} className='w-24 h-24 rounded-full mx-auto mb-3' />
            <h4 className='text-lg font-semibold'>{emp.name}</h4>
            <p className='text-sm text-gray-600'>DOB: {emp.dob}</p>
            <p className='text-sm text-gray-600'>Department: {emp.department}</p>
            <div className='mt-3 space-x-2'>
              <button onClick={() => handleViewEmployee(emp)} className='p-2 rounded-md text-white bg-green-500'><i className='fa-solid fa-eye'></i>View</button>
              <button onClick={() => handleRemoveEmployee(emp._id)} className='p-2 rounded-md text-white bg-red-500'><i className='fa-solid fa-trash'></i>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for Employee Details */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Employee Details</h2>
            <p><strong>Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Employee ID:</strong> {selectedEmployee.employeeId}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Designation:</strong> {selectedEmployee.designation}</p>
            <p><strong>DOB:</strong> {selectedEmployee.dob}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
            <p><strong>Marital Status:</strong> {selectedEmployee.maritalStatus}</p>
            <p><strong>Salary:</strong> {selectedEmployee.salary}</p>

            <div className="flex justify-end mt-4">
              <button onClick={handleCloseModal} className="bg-gray-400 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default List;
