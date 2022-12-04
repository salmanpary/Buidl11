import React from 'react'

const Playercard = (props) => {
  return (
    <div className='card-blur rounded-xl m-2 flex  justify-between py-2  gap-4'>
        <h2 className='capitalize w-20 ml-2 font-bold text-xl'>{props.name}</h2>
        <h4 className='font-bold opacity-80'>{props.credits}</h4>
        <button className='mr-4 text-red-500 font-black '>X</button>
    </div>
  )
}

export default Playercard