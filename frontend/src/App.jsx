import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Subcribe from './components/Subcribe/Subcribe'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Products from './pages/Products/Products'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='app'>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/products' element={<Products/>} />
       </Routes>
      </div>
      <Subcribe/>
      <Footer/>
    </>
   
  )
}

export default App
