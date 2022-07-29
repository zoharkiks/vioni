import React from 'react'
import {images} from '../constants'

const Navbar = () => {
  return (
    <div className='flex'>
      <div className="flex">
        <img src={images.logo.src} alt="" />
      </div>
    </div>
  )
}

export default Navbar