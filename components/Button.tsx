import React from 'react'

const Button = ({text,textColor,bgColor} ) => {
  return (
    <>
    <button className={`${bgColor} font-nunito text-lg font-black ${textColor} px-11 py-4 rounded-xl w-max`}>{text}</button>
    </>
  )
}

export default Button