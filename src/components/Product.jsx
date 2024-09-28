import React from 'react'

function Product() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-16 mb-16'>
            <strong className='mb-10'>ÜRÜNLER</strong>
            <div className='grid grid-rows gap-24 xl:grid-cols-6 xl:grid-rows-none lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 md:grid-rows-none'>
                
                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün1.webp" className='w-32' alt="" />
                    <p>pasifik 800-860</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün2.webp" className='w-32' alt="" />
                    <p>888 seri</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün3.webp" className='w-32' alt="" />
                    <p>pasifik 873</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün4.webp" className='w-32' alt="" />
                    <p>atlantik 777</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün5.webp" className='w-32' alt="" />
                    <p>atlantik 752-750</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 hover:scale-125 transition-all'>
                    <img src="../products/ürün6.webp" className='w-32' alt="" />
                    <p>atlantik 760</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Product