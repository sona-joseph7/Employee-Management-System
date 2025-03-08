
import React, { useEffect, useState } from 'react'

const Summary = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);
  
  return (
    <div className='p-6'>

      {/* Welcome Message */}
      <div className='bg-white shadow-md rounded-lg flex items-center p-4'>
        <div className='flex justify-center items-center bg-cyan-600 text-white p-4 rounded-full text-3xl'>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className='pl-4'>
          <p className='text-lg font-semibold text-gray-700'>Welcome,</p>
          <p className='text-2xl font-bold text-gray-900'>{userName}</p>
        </div>
      </div>

      {/* Motivational Quote Section */}
      <div className='bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-center p-6 rounded-lg shadow-md mt-6'>
        <p className='italic'>"The only way to do great work is to love what you do." - Steve Jobs</p>
      </div>

    </div>
  )
}

export default Summary

