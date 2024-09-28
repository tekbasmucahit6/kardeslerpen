import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { IoMdCut } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
function Productİnfo() {
  return (
    <div>
        <div className='grid grid-rows xl:grid-cols-2 xl:grid-rows-none lg:grid-cols-2 lg:grid-rows-none md:grid-cols-2 md:grid-rows-none mt-24 mb-24 gap-10'>
            <div className='flex justify-center items-start px-10'>
                <strong className='text-2xl xl:text-5xl lg:text-5xl md:text-3xl font-bold'>KALİTE, ÇEŞİTLİLİK VE GLOBALLİK</strong>
            </div>
            <div className='flex flex-col gap-10 justify-center items-start p-5'>

                <div className='flex flex-row justify-center items-center gap-5'>
                    <div className='bg-blue-950 p-4 rounded-full'>
                        <FaRecycle className='text-amber-600 text-4xl' />
                    </div>
                    <div className='flex flex-col justify-center items-start w-auto'>
                        <strong>%100 Geri dönüştürülebilir</strong>
                        <p>%100 geri dönüştürülebilen profil üretimi sayesinde çevre ile dost olduk</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-5'>
                    <div className='bg-blue-950 p-4 rounded-full'>
                        <IoMdCut className='text-amber-600 text-4xl' />
                    </div>
                    <div className='flex flex-col justify-center items-start w-auto'>
                        <strong>Mükemmel Mukavemet</strong>
                        <p>Adopen teknolojisiyle köşelerde mükemmel mukavemet ve sıfır dayanıklılık kaybı</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-5'>
                    <div className='bg-blue-950 p-4 rounded-full'>
                        <FaMoneyBillAlt className='text-amber-600 text-4xl' />
                    </div>
                    <div className='flex flex-col justify-center items-start w-auto'>
                        <strong>Azalan işçilik maliyeti</strong>
                        <p>Pratikliği sayesinde birçok makineyle uzun ve uğraştırıcı süreçlerden kurtulup daha verimli bir çalışma süreci yarattık</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Productİnfo