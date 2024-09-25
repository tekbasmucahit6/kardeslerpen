import React from 'react'

function Logo() {
  return (
    <div>
        <div className='xl:bg-yellow-400 md:bg-yellow-400 xl:p-5 md:p-5 xl:shadow-xl md:shadow-xl p-5 grid xl:grid-rows-2 md:grid-rows-2'>
            <h1 className="text-white text-3xl flex items-center font-mono gap-3">KARDEŞLER <i className='xl:text-blue-700 lg:text-blue-700 md:text-blue-700 text-red-500  text-2xl'>pen<i className='text-3xl text-white animate-pulse transition-all'>&</i>cam</i></h1>
            <i className='xl:flex md:flex hidden justify-center items-center text-red-600'>hayallerinize açılan pencereler</i>
        </div>
    </div>
  )
}

export default Logo