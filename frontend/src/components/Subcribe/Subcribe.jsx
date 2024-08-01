import React from 'react'
import './Subcribe.css'
import { assets } from '../../assets/assets'
const Subcribe = () => {
  return (
    <div className='subcribe'>
        <div className='subcribe-content'>
            <h1>Subcribe our Newsettler</h1>
            <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
        </div>

        <div className='email-container'>
            <form action="">
                <input type="email" placeholder='Email' name='email' />
                <button type='submit'>Subcribe</button>
            </form>
        </div>

        <div className='social-icon'>
            <img src={assets.facebookIcon} alt="" />
            <img src={assets.twitterIcon} alt="" />
            <img src={assets.pinterestIcon} alt="" />
            <img src={assets.instagramIcon} alt="" />
        </div>
    </div>
  )
}

export default Subcribe