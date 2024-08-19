import React from 'react'; 
import { Link } from 'react-router-dom';
import './LoginSignup.css'
import { assets } from '../../assets/assets'

const LoginSignup = (props) => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign In</h1>
                <div className="loginsignup-fields">
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Remember me</p>
                    <p>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤForget password</p>
                </div>
                <button>Login</button>
                <p className="loginsignup-login">Don't have account? <Link to="/register"> <span> Register</span> </Link></p>
            </div>
        </div>
    )
}

export default LoginSignup