import React from 'react'

function Workers() {
  return (
    <div className='grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-none lg:grid-cols-2 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none gap-10 mt-16 mb-16 p-4'>
        <div className='flex justify-center items-center'>
            <img src="/public/img/resim5.jpg" className='w-80 border-2 shadow-xl  border-amber-500' alt="" />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 text-center'>
            <h1>kardeşler pen&cam kalitesi</h1>
            <p>Kardeşler Pen&Cam: Evinizin ve iş yerinizin tüm kapı, pencere ve cam ihtiyaçlarında kaliteli çözümler sunuyoruz! PVC ve alüminyum kapı, pencere sistemlerinden cam balkon, çelik kapı, sineklik ve ısıcam imalatına kadar geniş ürün yelpazemizle hizmetinizdeyiz. Uzman ekibimiz ve yılların tecrübesiyle estetik ve dayanıklılığı bir araya getiriyoruz. Evinize değer katmak için hemen bizi arayın!</p>
        </div>
    </div>
  )
}

export default Workers