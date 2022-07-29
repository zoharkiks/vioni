import React from 'react'
import {images} from '../constants'
import { Icon } from '@iconify/react';


const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
      <div className="flex justify-center items-center font-bold text-2xl space-x-4">
        <img src={images.logo.src} alt="" />
        <div className="h1">Vioni</div>
      </div>
      <Icon className='h-8 w-8' icon="heroicons-solid:menu-alt-3" />
    </div>
  )
}

export default Navbar