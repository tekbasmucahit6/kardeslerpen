import React from 'react'
import Connection from '../components/Connection'
import HeroSection from '../components/HeroSection'
import Header from '../basicComponents/Header'
import Quality from '../components/Quality'
import Service from '../components/Service'
import Footer from '../basicComponents/Footer'
import Workers from '../components/Workers'
import Firmas from '../components/Firmas'
import Powered from '../components/Powered'

function Index() {
  return (
    <>
        <Header />
        <HeroSection />
        <Firmas />
        <Connection />
        <Service />
        <Quality />
        <Workers />
        <Footer />
        <Powered />
    </>
  )
}

export default Index