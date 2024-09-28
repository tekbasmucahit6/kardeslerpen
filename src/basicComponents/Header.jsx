import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Logo from './Logo';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="bg-blue-800 px-5 flex justify-center xl:justify-between md:justify-between items-center">
        <Link to={"/"}>
          <Logo />
        </Link>


        <div className="xl:flex md:flex hidden justify-center items-center gap-4">
          <a href="tel:05456191982">
            <button className='bg-green-500  px-3 py-2 shadow-lg text-white rounded'>iletişime geç</button>
          </a>
            <i className='text-white hover:text-red-600 hover:cursor-pointer'>+90(545) 619 1982</i>
            <a href="https://www.instagram.com/kardeslerpen_/">
              <div className='text-3xl text-white hover:bg-white p-3 transition-all rounded-full hover:cursor-pointer hover:text-pink-600'>
                <FaInstagram />
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566362466660&mibextid=LQQJ4d&rdid=irtbBLCw5q0RPL9j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FBJG5RL3RiGqpwKLU%2F%3Fmibextid%3DLQQJ4d">
              <div className='text-3xl text-white hover:bg-white p-3 transition-all rounded-full hover:cursor-pointer hover:text-blue-600'>
                <FaFacebook />
              </div>
            </a>
        </div>


      </div>
  )
}

export default Header