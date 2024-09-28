import React from 'react'

function Firmas() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mt-24 mb-24'>
        <strong>TEDARİKCİ FİRMALAR</strong>
        <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-14 justify-center items-center'>
          <img src="../public/businneslogo/adopen.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
          <img src="../public/businneslogo/adokapi.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
          <img src="../public/businneslogo/accado.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
          <img src="../public/businneslogo/adoplas.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
          <img src="../public/businneslogo/adowood.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
          <img src="../public/businneslogo/geviss.png" className='w-48 hover:border-2 hover:border-blue-950 hover:p-2 hover:rounded-xl transition-all' alt="" />
        </div>
    </div>
  )
}

export default Firmas