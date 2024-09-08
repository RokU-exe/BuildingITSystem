import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { assets } from '../../assets/assets';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Registration error:', err);
        }
    };

    return (
        <div className='register'>
            <div className="register-container">
                <h1 className="text-3xl font-bold">Create Account</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="register-fields">
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
                    <input
                        className="focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0"
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className="register-agree">
                        <input className="text-[#00b207] focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0" type="checkbox" name='' id='acceptterm' required />
                        <label htmlFor="acceptterm">Accept all terms & Conditions</label>
                    </div>
                    <button type="submit" className="font-sans text-xs font-bold hover:shadow-lg hover:shadow-green-500/40 transition-all duration-200 ease-linear">Register</button>
                </form>
                <p className="register-createaccount">Already have an account?<Link to="../Login"><span className="hover:text-[#00b207] transition-all duration-200 ease-linear"> Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;