import React from 'react'
import { FaInstagram } from "react-icons/fa";
import Logo from './Logo';
function Header() {
  return (
    <div className="bg-blue-800 px-5 flex justify-center xl:justify-between md:justify-between items-center">
        <Logo />


        <div className="xl:flex md:flex hidden justify-center items-center gap-4">
          <a href="tel:05456191982">
            <button className='bg-green-500  px-3 py-2 shadow-lg text-white rounded'>iletişime geç</button>
          </a>
            <i className='text-white hover:text-red-600 hover:cursor-pointer'>+90(545) 619 1982</i>
            <div className='text-3xl text-white hover:bg-white p-3 rounded-full hover:cursor-pointer hover:text-pink-600'>
                <FaInstagram />
            </div>
        </div>


      </div>
  )
}

export default Header