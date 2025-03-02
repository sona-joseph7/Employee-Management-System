import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // navigate('/admin-dashboard')
        try{
            const response = await axios.post("http://localhost:3000/login",{email,password})
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            console.log(response);
            if (response.data.role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/employee-dashboard");
            }
            
        }catch(err){
            console.log(err);
            
        }
    }


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
                <input type="password" className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 transition duration-300' placeholder='*******' name="" id="" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-checkbox rounded' />
                    <span className='ml-2 text-gray-700'>Remember me</span>
                </label>
                <a href="#" className='text-cyan-600 hover:text-cyan-800 transition duration-300'>Forgot password?</a>
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