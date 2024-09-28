import React from 'react'
import Connection from '../components/Connection'
import HeroSection from '../components/HeroSection'
import Header from '../basicComponents/Header'
import Quality from '../components/Quality'
import Service from '../components/Service'
import Footer from '../basicComponents/Footer'
import Workers from '../components/Workers'
import Firmas from '../components/Firmas'
import Powered from '../basicComponents/Powered'
import Product from '../components/Product'
import Productİnfo from '../components/Productİnfo'

function Index() {
  return (
    <>
        <Header />
        <HeroSection />
        <Workers />
        <Firmas />
        <Connection />
        <Service />
        <Product />
        <Quality />
        <Productİnfo />
        <Footer />
        <Powered />
    </>
  )
}

export default Index