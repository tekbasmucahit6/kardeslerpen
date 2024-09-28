import React from 'react'
import { FiExternalLink } from "react-icons/fi";
function Powered() {
  return (
    <div className='flex justify-center items-center bg-blue-950 p-2 text-white'>
        <strong className='flex justify-cneter items-center gap-3'>powered by <a href="https://mucahittekbas.com" className='bg-red-600 hover:bg-amber-400 p-2 rounded transition-all'>mücahit tekbaş</a> <FiExternalLink /></strong>
    </div>
  )
}

export default Powered