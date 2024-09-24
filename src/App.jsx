import React from "react"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"  

import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route />
      </Routes>
    </Router>
     
    </> 
  )
}

export default App
