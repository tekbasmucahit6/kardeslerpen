import React from 'react'
import "./css/Hero.css"
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='background-container p-4'>
        <div className='font-semibold text-xl flex flex-col justify-center items-center text-white text-center gap-4'>
            <h1 className=''>KARDEŞLER PEN&CAM</h1>
            <i className=''>Kardeşler Pen: Uzun Ömürlü, Şık ve Yüksek Performanslı Pencere Çözümleri!</i>
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center gap-10'>
              <button className='px-6 py-2 border border-green-500 text-green-500 hover:text-white hover:bg-green-600 hover:shadow-xl rounded-xl transition-all'>iletişime geç</button>
              <Link to={"/gallery"}>
                <button className='px-6 py-2 border border-blue-600 text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-xl rounded-xl transition-all'>galeri</button>
              </Link>
            </div>

        </div>
    </div>
  )
}

export default HeroSection