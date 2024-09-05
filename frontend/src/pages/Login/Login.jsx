import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { assets } from '../../assets/assets'

const LoginSignup = (props) => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1 class="text-3xl font-bold ">Sign In</h1>
                <div className="loginsignup-fields">
                <input className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="email" placeholder='Email Address' />
                <input className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="password" placeholder='Password' />
                </div>
                <div className="loginsignup-agree">
                    <input className="text-[#00b207] focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="checkbox" name='' id='remember' />
                    <label for="remember">Remember me</label>
                    <Link to="/register"> <span class="hover:text-[#00b207] font-sans text-base font-bold transition-all duration-200 ease-linear"> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤForget password</span> </Link>
                </div>
                <button class="bg-[#00b207] hover:shadow-lg hover:shadow-green-500/40  text-white font-sans text-xs font-bold transition-all duration-200 ease-linear">Login</button>
                <p className="loginsignup-login">Don't have account? <Link to="/register"> <span class="hover:text-[#00b207] transition-all duration-200 ease-linear"> Register</span> </Link></p>
            </div>
        </div>
    )
}

export default LoginSignup