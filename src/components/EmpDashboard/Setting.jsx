import React from 'react'

const Setting = () => {
  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6'>Change Password</h2>
        <p className='text-red-500'>error</p>
        <form action="">
            <div>
                <label htmlFor="" className='text-sm font-medium text-gray-700'>Old Password</label>
                <input type="password" name='oldPassword' placeholder='Change Password' className='mt-1 w-full p-2 border border-gray-300 rounded-md' required/>
            </div>
            <div>
            <label htmlFor="" className='text-sm font-medium text-gray-700'>New Password</label>
            <input type="password" name='newPassword' placeholder='New Password' className='mt-1 w-full p-2 border border-gray-300 rounded-md' required/> 
            </div>
            <div>
            <label htmlFor="" className='text-sm font-medium text-gray-700'>Confirm Password</label>
            <input type="password" name='confirmPassword' placeholder='Confirm Password' className='mt-1 w-full p-2 border border-gray-300 rounded-md' required/> 
            </div>

            <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>Change Password</button>
        </form>
    </div>
  )
}

export default Setting