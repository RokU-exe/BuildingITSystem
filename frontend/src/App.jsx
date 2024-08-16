import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Subcribe from './components/Subcribe/Subcribe'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Register from './pages/Register/Register'
import { Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='app'>
        <Routes>
          <Route path='/loginsignup' element={<LoginSignup/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>

      <Subcribe/>
      <Footer/>
    </>
   
  )
}

export default App
