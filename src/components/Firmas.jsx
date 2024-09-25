import React from 'react'

function Firmas() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-16 mb-16'>
        <h1>TEDARİKÇİ FİRMALAR</h1>
        <div className='grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-14'>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Adopen</i>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Adokapı</i>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Adoplaswin</i>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Penwood</i>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Accado</i>
            <i className='bg-blue-700 hover:bg-amber-500 p-5 text-center cursor-pointer text-white border rounded hover:scale-110 transition-all'>Geviss</i>
        </div>
    </div>
  )
}

export default Firmas