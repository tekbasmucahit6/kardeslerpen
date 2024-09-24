import React from 'react'
import Connection from '../components/Connection'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Quality from '../components/Quality'
import Service from '../components/Service'

function Index() {
  return (
    <>
        <Header />
        <HeroSection />
        <Connection />
        <Service />
        <Quality />
    </>
  )
}

export default Index