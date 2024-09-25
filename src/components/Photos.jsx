import React from 'react'

function Photos() {
  return (
    <div className='flex flex-col gap-10 mt-10 mb-10 justify-center items-center'>
      <h1>FOTOĞRAF RULOSU</h1>
      <div className='grid grid-cols-2 xl:grid-cols-4 xl:grid-rows-none lg:grid-cols-3 lg:grid-rows-none md:grid-cols-3 md:grid-rows-none gap-16'>
        <img src="/public/img/resim1.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim2.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim3.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim4.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim5.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim6.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim7.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim8.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim9.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim10.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim11.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim12.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim13.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim14.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim15.jpg" className='w-64 rounded-xl' alt="" />
        <img src="/public/img/resim16.jpg" className='w-64 rounded-xl' alt="" />
      </div>
    </div>
  )
}

export default Photos