import api from "../../utils/api"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Add = () => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [payDate, setPayDate] = useState('');

  // Fetch departments from backend
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await api.get("/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  // Fetch employees when department changes
  useEffect(() => {
    if (selectedDepartment) {
      const fetchEmployees = async () => {
        try {
          const response = await api.get(`/employees/${selectedDepartment}`);
          setEmployees(response.data);
        } catch (error) {
          console.error("Error fetching employees:", error);
        }
      };
      fetchEmployees();
    }
  }, [selectedDepartment]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedEmployee || !selectedEmployeeId || !basicSalary || !payDate) {
        alert("Please fill in all required fields.");
        return;
      }

      const salaryData = {
        employeeId: selectedEmployeeId, 
        name: selectedEmployee,
        department: selectedDepartment,
        basicSalary: Number(basicSalary),
        allowance: Number(allowance),
        deduction: Number(deduction),
        payDate,
      };
      console.log("Salary Data Sent:", salaryData);

      await api.post("/salary", salaryData);
      alert("Salary added successfully!");
      setSelectedDepartment('');
      setSelectedEmployee('');
      setSelectedEmployeeId('');
      setBasicSalary('');
      setAllowance(0);
      setDeduction(0);
      setPayDate('');
    } catch (error) {
      console.error("Error adding salary:", error);
      alert("Failed to add salary");
    }
  };

  return (
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mb-5'>Manage Employee Salary</h3>
      </div>
      <div className='flex justify-center items-center mb-4'>
        <Link to="/admin-dashboard/salary" className='px-4 py-2 bg-cyan-600 rounded-lg text-white'>Salary History</Link>
      </div>
      <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add Salary</h2>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            {/* Department Selection */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>Department</label>
              <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} 
                name="department" className='mt-1 p-2 block w-full border-gray-300 rounded-md' required>
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept._id} value={dept.name}>{dept.name}</option>
                ))}
              </select>
            </div>  

            {/* Employee Name Selection */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>Employee</label>
              <select value={selectedEmployee} 
                onChange={(e) => {
                  const employee = employees.find(emp => emp._id === e.target.value);
                  if (employee) {
                    setSelectedEmployee(employee._id); 
                    setSelectedEmployeeId(employee.employeeId); 
                  }
                }} 
                name="employeeId" className='mt-1 p-2 block w-full border-gray-300 rounded-md' required>
                <option value="">Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp._id} value={emp._id}>
                    {emp.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Employee ID Display */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>Employee ID</label>
              <input type="text" value={selectedEmployeeId} readOnly 
                className='mt-1 p-2 block w-full border-gray-300 rounded-md bg-gray-100' />
            </div>

            {/* Basic Salary */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>Basic Salary</label>
              <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} 
                name="basicSalary" placeholder="Enter basic salary..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' required />
            </div>

            {/* Pay Date */}
            <div>
              <label className='block text-sm font-medium text-gray-700'>Pay Date</label>
              <input type="date" value={payDate} onChange={(e) => setPayDate(e.target.value)} 
                name="payDate" className='mt-1 p-2 block w-full border-gray-300 rounded-md' required />
            </div>

          </div>

          <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>
            Add Salary
          </button>

        </form>
      </div>
    </div>
  )
}

export default Add;
