import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { assets } from '../../assets/assets'

const Register = (props) => {
    return (
        <div className='register'>
            <div className="register-container">
                <h1 class="text-3xl font-bold">Create Account</h1>
                <div className="register-fields">
                    <input className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="email" placeholder='Email Address' />
                    <input className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="password" placeholder='Password' />
                    <input className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0"type="password" placeholder='Confirm Password' />
                </div>
                <div className="register-agree">
                    <input className="text-[#00b207] focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="checkbox" name='' id='acceptterm' />
                    <label for="acceptterm">Accept all terms & Conditions</label>
                </div>
                <button class="font-sans text-xs font-bold hover:shadow-lg hover:shadow-green-500/40 transition-all duration-200 ease-linear">Register</button>
                <p className="register-createaccount">Already have an account?<Link to="/login"><span class="hover:text-[#00b207] transition-all duration-200 ease-linear"> Login</span></Link></p>
            </div>
        </div>
    )
}

export default Register