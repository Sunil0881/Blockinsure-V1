import React from 'react'
import LOGO from "../assets/logo.png";
import Button from './Button';

const AdminNavbar = () => {
  return (
    <div>
          <div className='flex items-center justify-between px-14 bg-blue-100'>
                <div>
                    <img src={LOGO} alt='img' width={150}></img>
                </div>

                

                <div className='flex items-center'>
                  <Button />
                </div>
          </div>
    </div>
  )
}

export default AdminNavbar