import React from 'react'
import Logo from './Logo'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='bg-blue-900 p-5'>
        <div className='grid grid-rows xl:grid-cols-3 xl:grid-rows-none lg:grid-cols-3 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none gap-10'>
          
          <div className='flex flex-col justify-start items-start text-white gap-3'>
            <strong className='border-b-2 border-white pb-2 text-xl w-full'>CONTACT DETAİLS</strong>
            <p>yeniyurt mahallesi gürcan özbek caddesi 3.sokak no 12 tokat sanayi sitesi</p>
            <p>Merkez / Tokat</p>
            <p><a href="tel:05456191982">+90(545) 619 1982</a></p>
          </div>

          <div className='flex flex-col justify-start items-center text-white gap-3'>
            <strong className='border-b-2 border-white pb-2 text-xl w-full'>SOCİAL MEDİA</strong>
            <div className='text-white'>
              <a href="" className='flex justify-center items-center gap-10 hover:cursor-pointer hover:text-pink-600'>
                <FaInstagram className='text-3xl' />
                <p>  instagram </p>
              </a>
            </div>
           
          </div>

          <div className='flex flex-col justify-start items-center text-white gap-3'>
            <strong className='border-b-2 border-white pb-2 text-xl w-full'>BRAND İDENTİTY</strong>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>





        </div>
    </div>
  )
}

export default Footer