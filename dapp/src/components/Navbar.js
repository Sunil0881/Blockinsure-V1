import React from 'react'
import LOGO from "../assets/logo.png";
import Button from './Button';

const Navbar = () => {
  return (
    <div>
          <div className='flex items-center justify-between px-14 bg-blue-100'>
                <div>
                    <img src={LOGO} alt='img' width={150}></img>
                </div>

                <div className='flex items-center text-lg font-semibold'>
                  <a  href='/' className='pl-10'>Home</a>
                  <a href='/policy' className='pl-7' >Policy</a>
                  <a href='claim' className='pl-7' >Claim</a>
                </div>

                <div className='flex items-center'>
                  <Button />
                </div>
          </div>
    </div>
  )
}

export default Navbar