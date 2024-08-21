import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
            <Link to="/Contactus"><li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li></Link>
        </ul>
        <div className="nav-login-cart">
          <Link to="/loginsignup"><button>Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar