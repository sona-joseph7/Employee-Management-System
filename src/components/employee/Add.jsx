import React, { useState } from 'react'
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        employeeId: "",
        dob: "",
        gender: "",
        maritalStatus: "",
        designation: "",
        department: "",
        salary: "",
        password: "",
        role: "",
        image:""
      });


      const navigate = useNavigate();

        // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employee", formData);
      alert("Employee added successfully!");
      navigate("/admin-dashboard/employees");
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee.");
    }
  };


  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add New Employee</h2>

<form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Enter name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
          <input type="text" name="employeeId" placeholder="Enter Employee ID" onChange={handleChange} required />
          <input type="date" name="dob" onChange={handleChange} required />
          <input type="text" name="designation" placeholder="Enter designation" onChange={handleChange} required />
          <input type="text" name="department" placeholder="Enter department" onChange={handleChange} required />
          <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select name="maritalStatus" onChange={handleChange} required>
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>

          <input type="number" name="salary" placeholder="Enter salary" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required />
          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
          <input type="file" name='image' className='mt-1 p-2 block w-full border-gray-300 rounded-md' placeholder='Upload Image' accept='image/*'/>

        </div>
        <button type="submit" className="w-full mt-6 bg-cyan-600 text-white font-bold py-2 px-4 rounded-md">
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default Add