import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);
  const navigate = useNavigate()
  
  const LogOut= async(e)=>{
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className='flex items-center text-white justify-between h-18 bg-black px-6'>
        <p>Welcome, {userName}</p>
        <button className='px-5 py-2 items-center rounded-2xl cursor-pointer bg-black hover:bg-cyan-200 hover:text-black' onClick={LogOut}>Logout</button>
    </div>
  )
}

export default Navbar