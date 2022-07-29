import React from 'react'

const Button = ({text} ) => {
  return (
    <>
    <button className='bg-primary font-nunito text-lg font-black text-white px-11 py-4 rounded-xl w-max'>{text}</button>
    </>
  )
}

export default Button