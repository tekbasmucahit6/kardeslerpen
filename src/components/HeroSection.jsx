import React from 'react'
import "./css/Hero.css"

function HeroSection() {
  return (
    <div className='background-container p-4'>
        <div className='font-semibold text-xl flex flex-col justify-center items-center text-white text-center gap-4'>
            <h1 className=''>KARDEŞLER PEN&CAM</h1>
            <i className=''>Kardeşler Pen: Uzun Ömürlü, Şık ve Yüksek Performanslı Pencere Çözümleri!</i>
            <button className='px-6 py-2 bg-green-600 hover:bg-green-600 hover:shadow-xl rounded-xl'>iletişime geç</button>

        </div>
    </div>
  )
}

export default HeroSection