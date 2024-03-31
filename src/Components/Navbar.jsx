import React from 'react'
import brand_logo from '../assets/brand_logo.png'

const Navbar = () => {
  return (
    <div className='Navbar w-full h-auto flex justify-between items-center py-4 px-14'>
        <div className='logo'>
            <img src={brand_logo} alt="logo" className='w-18' />
        </div>
        <div className='flex gap-6'>
            <div>Menu</div>
            <div>Location</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div className='bg-[#D01C28] text-white px-3 py-1 cursor-pointer'>Login</div>
    </div>
  )
}

export default Navbar