import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <div className='bg-blue-900 p-5'>
        <div className='grid grid-rows xl:grid-cols-3 xl:grid-rows-none lg:grid-cols-3 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none gap-10'>
          
          <div className='flex flex-col text-white justify-center items-start gap-3'>
           <strong className='border-b-2 border-white pb-2 text-xl'>CONTACT DETAİLS</strong>
           <p>yeniyurt mahallesi gürcan özbek caddesi 3.sokak no 12 tokat sanayi sitesi</p>
           <p>Merkez / Tokat</p>
           <p><a href="tel:05456191982">+90(545) 619 1982</a></p>
          </div>

          <div className='flex flex-col text-white justify-center items-start'>
          </div>




        </div>
    </div>
  )
}

export default Footer