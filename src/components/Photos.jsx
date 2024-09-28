import React, { useEffect, useState } from 'react'

function Photos() {
  const [photo,setPhoto] = useState() 
  useEffect(() => {
    setPhoto(["../img/resim1.jpg","../img/resim2.jpg","../img/resim3.jpg","../img/resim5.jpg","../img/resim6.jpg","../img/resim7.jpg","../img/resim8.jpg","../img/resim9.jpg","../img/resim10.jpg","../img/resim11.jpg","../img/resim12.jpg","../img/resim13.jpg","../img/resim16.jpg","../img/resim17.jpg","../img/resim18.jpg","../img/resim19.jpg","../img/resim20.jpg","../img/resim21.jpg","../img/resim22.jpg","../img/resim23.jpg","../img/resim24.jpg","../img/resim25.jpg","../img/resim14.jpg","../img/resim15.jpg","../img/resim4.jpg"])
  },[])
  return (
    <div className='flex flex-col gap-10 mt-10 mb-10 justify-center items-center'>
      <strong>FOTOĞRAF RULOSU</strong>
      <div className='grid grid-cols-2 p-3 xl:grid-cols-4 xl:grid-rows-none lg:grid-cols-3 lg:grid-rows-none md:grid-cols-3 md:grid-rows-none gap-16'>
        {
          photo?photo.map((dt,i) => (
            <img src={dt} key={i} className='w-64 rounded-xl' alt="" />
          )):
          <div>yükleniyor</div>
        }
        
      </div>
    </div>
  )
}

export default Photos