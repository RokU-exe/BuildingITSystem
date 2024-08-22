import React from 'react';
import './Contactus.css'; // Create this CSS file
import { assets } from '../../assets/assets'; // Ensure assets is correctly imported

const Contactus = () => {
    return (
        <div className="contact-us">
            <div className="contact-boxes">
                
                <div className="white-box"> <h1>Address</h1>2715 Ash Dr. San Jose, South Dakota 83574</div>
                <div className="white-box"><h1>Phone number</h1>(123) 456-7890
                <p>(659) 535-7268</p></div>
                <div className="white-box"><h1>Email</h1>Proxy@gmail.com
                <p>Help.proxy@gmail.com</p></div> 
                <div className="white-box large-box">
                    <h2>Just Say Hello!</h2>
                    <p>Do you fancy saying hi to me or you want to started with your</p>
                    <p>project and you need my help? Feel free to contact me</p>
                    <div className="contact-form">
                        <input type="text" placeholder="Template Cookie" />
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Title" />
                        <input type="text" placeholder="Subjects" />
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
            <div className="map">
                <img src='https://www.safewise.com/app/uploads/2022/05/floods-near-me.png' alt="Map" />
            </div>
        </div>
    );
};

export default Contactus;
