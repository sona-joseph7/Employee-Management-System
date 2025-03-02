import React from 'react'

const SummaryCard = ({icon,text,number,color}) => {
  return (
    <div className={`rounded-2xl shadow-lg p-4 w-60  h-40 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105 cursor-pointer ${color}`}>
        <div className='text-5xl mb-2'>
            {/*icon  */}
            {icon}
        </div>
        <div >
            <p className='text-sm text-gray-600'>{text}</p>
            <p className='text-2xl font-bold'>{number}</p>
        </div>
    </div>
  )
}

export default SummaryCard