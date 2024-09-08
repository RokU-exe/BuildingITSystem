import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store user data in localStorage or state management solution
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/'); // Redirect to home page
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', err);
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1 className="text-3xl font-bold">Sign In</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="loginsignup-fields">
                    <input
                        className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0"
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0"
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="loginsignup-agree">
                        <input className="text-[#00b207] focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="checkbox" name='' id='remember' />
                        <label htmlFor="remember">Remember me</label>
                        <Link to="/forgot-password"> <span className="hoverr:text-[#00b207] font-sans text-base font-bold transition-all duration-200 ease-linear">Forget password</span> </Link>
                    </div>
                    <button type="submit" className="bg-[#00b207] hover:shadow-lg hover:shadow-green-500/40 text-white font-sans text-xs font-bold transition-all duration-200 ease-linear">Login</button>
                </form>
                <p className="loginsignup-login">Don't have account? <Link to="../Register"> <span className="hover:text-[#00b207] transition-all duration-200 ease-linear"> Register</span> </Link></p>
            </div>
        </div>
    );
};

export default Login;