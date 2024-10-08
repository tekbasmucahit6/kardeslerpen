import React from 'react'
import { GiConfirmed } from "react-icons/gi";

function Service() {
  return (
    <div className='flex flex-col justify-center items-center mt-24 mb-24'>
        <strong>HİZMETLERİMİZ</strong>
        <div className='grid grid-rows-2 w-full xl:grid-cols-2 xl:grid-rows-none lg:grid-cols-2 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none justify-center items-center xl:gap-16 lg:gap-16 md:gap-16 gap-5 mt-10'>

            <div className='flex flex-col justify-center items-start gap-6 xl:ml-60 lg:ml-32 md:ml-20'>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Plastik Pencere Ve pencere çeşitler</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Plastik Kapı ve kapı çeşitleri</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Panel kapı</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Çelik kapı </i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Cam balkon</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Plastik pvc balkon</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Pvc Sürgülü kapı</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Pvc sürgülü pencere </i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Buzlu cam</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Ayna</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Çelik kapı çeşitleri </i>
            </div>

            <div className='flex flex-col justify-center items-start gap-6 xl:ml-60 lg:ml-32 md:ml-20'>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Alüminyum balkon korkuluk</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Alüminyum Merdiven korkulukları</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Alüminyum kapı</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Alüminyum pencere</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Alüminyum ürün çeşitleri</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Menteşeli Sineklik</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Sürgülü sineklik</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Tek cam</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Isıcam</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Oda kapısı çeşitleri</i>
                <i className='flex justify-center items-center gap-2'><GiConfirmed className='text-green-500 text-xl' /> Isıcam imalatı</i>
            </div>

        </div>
    </div>
  )
}

export default Service