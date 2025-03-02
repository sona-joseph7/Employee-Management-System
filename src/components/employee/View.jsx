import React from 'react'

const View = () => {
  return (
    <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-8 text-center'>Employee Details</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <img src="https://media.istockphoto.com/id/2096871292/vector/female-user-image-profile-picture-female-photo-set-profile-picture-illustration.jpg?s=170667a&w=0&k=20&c=j2UVknZB1hrn2Lw6rK3RUhcTPY2VL5HKwZcO540GCLs=" alt="" className='rounded-full border w-72' />
            </div>
            <div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Name:</p>
                    <p className='font-medium'>Luna</p>
                </div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Employee ID:</p>
                    <p className='font-medium'>777</p>
                </div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Date of Birth:</p>
                    <p className='font-medium'>07/11/2001</p>
                </div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Gender:</p>
                    <p className='font-medium'>Female</p>
                </div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Department:</p>
                    <p className='font-medium'>IT</p>
                </div>
                <div className='flex space-x-3 mb-5'>
                    <p className='text-lg font-bold'>Marital Status:</p>
                    <p className='font-medium'>Single</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View