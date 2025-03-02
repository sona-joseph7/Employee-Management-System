import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  
  const LogOut= async(e)=>{
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className='flex items-center text-white justify-between h-14 bg-cyan-600 px-6'>
        <p>Welcome, Admin</p>
        <button className='px-4 py-1 items-center rounded-2xl cursor-pointer bg-black hover:bg-cyan-200 hover:text-black' onClick={LogOut}>Logout</button>
    </div>
  )
}

export default Navbar