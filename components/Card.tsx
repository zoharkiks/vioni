import React from 'react'
import { Icon } from '@iconify/react';


const Card = ({text}) => {
  return (
    <>
    <div className="  flex flex-col justify-center items-center  py-12 px-6 space-y-10 rounded-[30px] bg-white max-w-[90%] drop-shadow-lg ">
        <div className="flex bg-primary rounded-full p-5">
        <Icon className='text-white h-14 w-14' icon="bi:shield-fill-check" />
        </div>
        <h2 className='font-bold text-3xl '>{text}</h2>
        <p className='text-lg text-center text-text '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui ut non ac habitant.</p>
    </div>
    </>
  )
}

export default Card