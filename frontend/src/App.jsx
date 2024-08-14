import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Subcribe from './components/Subcribe/Subcribe'
import ProductDisplay from './pages/ProductDisplay/ProductDisplay'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='app'>
        <Routes>
          <Route path='/productdisplay' element={<ProductDisplay/>} />
        </Routes>
      </div> 
      <Subcribe/>
      <Footer/>
    </>
   
  )
}

export default App
