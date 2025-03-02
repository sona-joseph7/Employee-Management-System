import React from 'react'


const AddDepartment = () => {
  return (
 
        
        <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
                <h2 className='text-2xl font-bold mb-6'>Add New Department</h2>
                <form action="">
                    <div>
                        <label htmlFor="deptname" className='text-sm font-medium text-gray-700'>Department Name</label>
                        <input type="text" name='deptname' className="mt-1 w-full p-2 border border-cyan-300 rounded-md" required placeholder='Enter Department Name Here...'/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                        <textarea name="description" placeholder='Description' className='mt-1 w-full p-2 border border-cyan-300 rounded-md' id="" rows="4"></textarea>
                    </div>
                    <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg'>Add Department</button>
                </form>
        </div>

  )
}

export default AddDepartment

