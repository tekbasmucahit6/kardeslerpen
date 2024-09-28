import React from 'react'
import Logo from './Logo'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='bg-blue-950 p-5'>
        <div className='grid grid-rows xl:grid-cols-3 xl:grid-rows-none lg:grid-cols-3 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none gap-10'>
          
          <div className='flex flex-col justify-start items-start text-white gap-3'>
            <strong className='border-b-2 border-white pb-2 text-xl w-full'>CONTACT DETAİLS</strong>
            <p>yeniyurt mahallesi gürcan özbek caddesi 3.sokak no 12 tokat sanayi sitesi</p>
            <p>Merkez / Tokat</p>
            <p><a href="tel:05456191982">+90(545) 619 1982</a></p>
          </div>

          <div className='flex flex-col justify-start items-center text-white gap-3'>

            <strong className='border-b-2 border-white pb-2 text-xl w-full'>SOCİAL MEDİA</strong>


            <div className='flex flex-col justify-center items-start gap-5'>
              <div className='text-white flex justify-center items-center'>
                <a href="https://www.instagram.com/kardeslerpen_/" className='flex justify-center items-center gap-10 hover:cursor-pointer hover:text-pink-600'>
                  <FaInstagram className='text-3xl' />
                  <p>instagram</p>
                </a>
              </div>

              <div className='text-white flex justify-center items-center'>
                <a href="https://www.facebook.com/profile.php?id=61566362466660&mibextid=LQQJ4d&rdid=irtbBLCw5q0RPL9j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FBJG5RL3RiGqpwKLU%2F%3Fmibextid%3DLQQJ4d" className='flex justify-center items-center gap-10 hover:cursor-pointer hover:text-blue-600'>
                  <FaFacebook className='text-3xl' />
                  <p>facebook</p>
                </a>
              </div>
            </div>
           
          </div>

          <div className='flex flex-col justify-start items-center text-white gap-3'>
            <strong className='border-b-2 border-white pb-2 text-xl w-full'>BRAND İDENTİTY</strong>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>





        </div>
        <div className='flex justify-center items-center mb-24'>

        </div>
          <hr />
    </div>
  )
}

export default Footer