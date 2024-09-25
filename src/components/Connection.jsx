import React from 'react'
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
function Connection() {
  return (
    <div className='fixed bottom-5 end-5'>
        <div className='flex flex-col justify-center items-center gap-2'>
        <a href="tel:05456191982">
            <div className='flex justify-center items-center bg-blue-600 hover:bg-blue-700 p-5 rounded-full'>
                <FaPhone className='text-white' />
            </div>
        </a>

        <a href="">
            <div className='flex justify-center items-center bg-green-500 hover:bg-green-600 p-5 rounded-full'>
                <IoLogoWhatsapp className='text-white' />
            </div>
        </a>

        </div>
    </div>
  )
}

export default Connection