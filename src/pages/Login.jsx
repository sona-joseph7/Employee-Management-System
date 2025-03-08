import api from "../utils/api"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending login request:", { email, password }); 
            const response = await api.post("/auth/login", { email, password });
    
            console.log("Login Response:", response.data); 

              
            if (response.data.message === "Login Successful") {
                alert("Login successful");

                   
                // Store token and role in localStorage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
    
                console.log("User Role:", response.data.role); 
                   // Extract user data from the response
                   const userData = {
                    name: response.data.user.name,
                    email: response.data.user.email,
                    role: response.data.user.role,
                    employeeId: response.data.user.employeeId,
                dob: response.data.user.dob,
                gender: response.data.user.gender,
                department: response.data.user.department,
                maritalStatus: response.data.user.maritalStatus,
                        
                    };
                    // Store user details in localStorage
                    localStorage.setItem('user', JSON.stringify(userData));
        
 
    
                // Redirect based on role
                if (response.data.role === "admin") {
                    navigate("/admin-dashboard");
                } else if (response.data.role === "employee") {
                    navigate("/employee-dashboard");
                } else {
                    console.log("Unknown role, staying on login page");
                    navigate("/login");
                }
            } else {
                console.log("Unexpected API response:", response.data);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert(err.response?.data?.message || "Invalid credentials");
        }
    };
    
  return (
    <div className='flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-cyan-600 to-teal-100 space-y-8'>
        <h2 className='text-4xl text-white font-bold' style={{fontFamily:"Rubik Vinyl"}}>Employee Management System</h2>
        <div className='border shadow-lg p-8 w-96 bg-white rounded-2xl'>
        <h2 className='text-3xl font-semibold mb-6 text-gray-800'>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            
            <div className='mb-6'>
                <label htmlFor="email" className='block text-gray-700'>Email</label>
                <input type="email" className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 transition duration-300' placeholder='Enter your Email...' name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-4'>
                <label htmlFor="password" className='block text-gray-700 '>Password</label>
                <input type="password" className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 transition duration-300' placeholder='*******' name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
            <div className='mb-4'>
            <button type='submit' className='w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 rounded-lg shadow-md hover:to-cyan-600 transition duration-300'>Login</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login