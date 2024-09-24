import React from 'react'
import { FaInstagram } from "react-icons/fa";
function Header() {
  return (
    <div className="bg-blue-800 px-5 flex justify-center xl:justify-between md:justify-between items-center">
        <div className='xl:bg-yellow-400 md:bg-yellow-400 xl:p-5 md:p-5 xl:shadow-xl md:shadow-xl p-5 grid xl:grid-rows-2 md:grid-rows-2'>
            <h1 className="text-white text-3xl flex items-center font-mono gap-3">KARDEŞLER <i className='xl:text-blue-700 lg:text-blue-700 md:text-blue-700 text-red-500  text-2xl'>pen<i className='text-3xl text-white animate-pulse transition-all'>&</i>cam</i></h1>
            <i className='xl:flex md:flex hidden justify-center items-center text-red-600'>hayallerinize açılan pencereler</i>
        </div>


        <div className="xl:flex md:flex hidden justify-center items-center gap-4">
            <button className='bg-green-500  px-3 py-2 shadow-lg text-white rounded'>iletişime geç</button>
            <i className='text-white hover:text-red-600 hover:cursor-pointer'>+90(545) 619 1982</i>
            <div className='text-3xl text-white hover:bg-white p-3 rounded-full hover:cursor-pointer hover:text-pink-600'>
                <FaInstagram />
            </div>
        </div>


      </div>
  )
}

export default Header