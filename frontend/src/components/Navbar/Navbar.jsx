import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <h1>IngreDiet</h1>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""}>Shop</li>
            <li onClick={()=>setMenu("pages")} className={menu==="pages"?"active":""}>Pages</li>
            <li onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</li>
            <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>About Us</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className='nav-icon'>
          <div className='nav-cart-icon'>
            <img src={assets.cart} alt="" />
            <div className='dot'></div>
          </div>
          <button><img src={assets.user} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar