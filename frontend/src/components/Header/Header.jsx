import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-banner'>
          <h2>Fresh & Healthy</h2>
          <h2>Organic Food</h2>
          <button>Shop now</button>
        </div>
    </div>
    <div className='header-febox'>
      <div className='fe-box'>
        <img src={assets.icon1} alt="" />
        <div className='fe-box-content'>
          <h3>Free Shipping</h3>
          <p>Free shipping with discount</p>
        </div>
      </div>

      <div className='fe-box'>
        <img src={assets.icon2} alt="" />
        <div className='fe-box-content'>
          <h3>Great Support</h3>
          <p>Instant access to Contact</p>
        </div>
      </div>

      <div className='fe-box'>
        <img src={assets.icon3} alt="" />
        <div className='fe-box-content'>
          <h3>100% Sucure Payment</h3>
          <p>We ensure your money is save</p>
        </div>
      </div>

      <div className='fe-box'>
        <img src={assets.icon4} alt="" />
        <div className='fe-box-content'>
          <h3>Money-Back Guarantee</h3>
          <p>30 days money-back</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Header