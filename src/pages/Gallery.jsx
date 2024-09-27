import React from 'react'
import Header from '../basicComponents/Header'
import Footer from '../basicComponents/Footer'
import Photos from '../components/Photos'
import Powered from '../components/Powered'

function Gallery() {
  return (
    <div>
        <Header />
        <Photos />
        <Footer />
        <Powered />
    </div>
  )
}

export default Gallery