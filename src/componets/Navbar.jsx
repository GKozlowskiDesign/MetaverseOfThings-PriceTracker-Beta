import React from 'react'
import { LogoIcon } from '../Icons/Icons'


const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-black via-indigo-900 to-black text-white h-14 flex'>
        <div className='wrapper-container w-full'>
            <div className='flex items-center gap-1 cursor-pointer mb-10'>
                <LogoIcon />
                <h1 className='font-semibold text-3xl'><span className='text-3xl text-indigo-600'>MV</span>oT<span 
                className='text-3xl text-indigo-600'>Ex</span>plorer</h1>   
            </div>
        </div>
    </div>


    
  )
}

export default Navbar