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
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                </div>
                <div className="register-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Accept all terms & Conditions</p>
                </div>
                <button>Register</button>
                <p className="register-createaccount">Already have an account?<Link to="/login"><span class="hover:text-[#00b207]"> Login</span></Link></p>
            </div>
        </div>
    )
}

export default Register