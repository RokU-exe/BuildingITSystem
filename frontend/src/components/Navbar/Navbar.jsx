import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <>
    <div className="navbar1">
      <div className="logo">
        <Link to='/'>
          <img src={assets.logo} alt="" />
          <img src={assets.logoText} alt="" />
          </Link>
      </div>
      <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
            <button
            class="!absolute right-1 top-1 z-10 select-none rounded-full bg-[#00b207] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true">                
              Search
            </button>
            <input
                type="email"
                class="peer h-full w-full rounded-full border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
            </label>
      </div>
      <div className="phone-number">
        <img src={assets.phoneCall} alt="" />
        <p>(+84)123 456 789</p>
      </div>
    </div>

    <div className='navbar'>
      <ul className='nav-menu'>
        <li className={menu === "home"?"active": " hover:text-gray-400 transition duration-300 ease-in-out hover:border-[#00b207]"}><Link to='/' onClick={()=>setMenu("home")} >Home</Link></li>
        <li className={menu === "products"?"active":" hover:text-gray-400 transition duration-300 ease-in-out hover:border-[#00b207]"}><Link to='/products' onClick={()=>setMenu("products")} >Products</Link></li>
        <li onClick={()=>setMenu("pages")} className={menu==="pages"?"active":" hover:text-gray-400 transition duration-300 ease-in-out hover:border-[#00b207]"}>Pages</li>
        <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":" hover:text-gray-400 transition duration-300 ease-in-out hover:border-[#00b207]"}>About Us</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":" hover:text-gray-400 transition duration-300 ease-in-out hover:border-[#00b207]"}>Contact Us</li>
      </ul>
      <div className='nav-icon w-28'>
        <div className='nav-cart-icon'>
          <Link to='/shoppingcart' onClick={()=>setMenu("order")} className={menu==="order"?"active":""}><img src={assets.cart} alt="" /></Link>
          <div className='dot'></div>
        </div>
        <Link to="/loginsignup"><button><img src={assets.user} alt="" /></button></Link>

      </div>
    </div>
    </>

  )
}

export default Navbar