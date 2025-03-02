import React from 'react'

const Add = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-boldmb-6 '>Request for Leave</h2>
        <form action="">
            <div className='flex flex-col space-y-4'>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>Leave Type</label>
                    <select name="leaveType" className='mt-1 p-2 block w-full border border-gray-300 rounded-md' id="" required>
                        <option value="">Select Department</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>From Date</label>
                    <input type="date" name='startDate' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                    </div>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700'>To Date</label>
                    <input type="date" name='endDate' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
            </div>

            <div>
                <label htmlFor="" className='block text-sm font-medium text-gray-700'>Description</label>
                <textarea name="reason" placeholder='Reason' className=' w-full border border-gray-300' id=""></textarea>
            </div>
            </div>

            <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded'>Add Leave</button>
        </form>
    </div>
  )
}

export default Add