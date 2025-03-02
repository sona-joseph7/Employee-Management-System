import React from 'react'

const Add = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add New Employee</h2>
        <form action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type="text" name="name" placeholder="Enter name here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>

                <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" name="email" placeholder="Enter email here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>


                <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Employee ID</label>
                <input type="text" name="employeeId" placeholder="Enter Employee ID..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>

                <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Date of Birth</label>
                <input type="date" name="dob" placeholder="Enter DOB here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>

                <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Gender</label>
                <select name="gender" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>


                <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Marital Status</label>
                <select name="maritalStatus" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
                </div>

                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Designation</label>
                    <input type="text" name="designation" placeholder="Enter desgination here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>


                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Department</label>
                    <select name="department" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                        <option value="">Select Department</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Salary</label>
                    <input type="number" name="salary" placeholder="Enter salary here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>


                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type="password" name="password" placeholder="*********" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
                </div>


                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Role</label>
                    <select name="role" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                        <option value="">Select Role</option>
                        <option value="">Admin</option>
                        <option value="">Employee</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Upload Image</label>
                    <input type="file" name='image' className='mt-1 p-2 block w-full border-gray-300 rounded-md' placeholder='Upload Image' accept='image/*'/>
                </div>
            </div>

            <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>Add Employee</button>



        </form>
    </div>
  )
}

export default Add