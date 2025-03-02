import React from 'react'

const Add = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add Salary</h2>
        <form action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Department</label>
                    <select name="department" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                        <option value="">Select Department</option>
                    </select>
            </div>  

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Employee</label>
                    <select name="employeeId" className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required>
                        <option value="">Select Employee</option>
                    </select>
            </div>

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Basic Salary</label>
                    <input type="number" name="basicSalary" placeholder="Enterbasic salary..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
            </div>

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Allowances</label>
                    <input type="number" name="allowances" placeholder="Enter allowances here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
            </div>

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Deductions</label>
                    <input type="number" name="deductions" placeholder="Enter deductions here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
            </div>

            <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Pay Date</label>
                    <input type="date" name="payDate" placeholder="Enter PayDate here..." className='mt-1 p-2 block w-full border-gray-300 rounded-md' id="" required/>
            </div>
            </div>

            <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>Add Salary</button>



        </form>
    </div>
  )
}

export default Add