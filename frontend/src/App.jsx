import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Subcribe from './components/Subcribe/Subcribe'
import Breadcrumb from './components/Breadcrumbs/Breadcrumbs'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Contactus from './pages/Contactus/Contactus'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Products from './pages/Products/Products'
import ProductDisplay from './pages/ProductDisplay/ProductDisplay'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import OrderHistory from './pages/OrderHistory/OrderHistory'
import OrderDetails from './pages/OrderDetails/OrderDetails'
import Profile from './pages/Profile/Profile'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Breadcrumb/>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/shoppingcart/order' element={<PlaceOrder/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/productdisplay' element={<ProductDisplay/>} />
          <Route path='/shoppingcart' element={<ShoppingCart/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/orderhistory' element={<OrderHistory/>} />
          <Route path='/orderdetails' element={<OrderDetails/>} />
       </Routes>    
      </div> 
      <Subcribe/>
      <Footer/>
    </>
  )
}

export default App
