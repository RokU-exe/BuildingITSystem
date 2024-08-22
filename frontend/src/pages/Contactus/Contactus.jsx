import React from 'react';
import './Contactus.css'; // Create this CSS file
import { assets } from '../../assets/assets'; // Ensure assets is correctly imported

const Contactus = () => {
    return (
        <div className="contact-us">
            <div className="contact-boxes">
                
                <div className="white-box font-sans text-base font-light"> <h1 className='font-sans text-2xl font-bold'>Address</h1>702 Nguyen Van Linh, Tan Hung, District 7, Ho Chi Minh City, Vietnam</div>
                <div className="white-box font-sans text-base font-light"><h1 className='font-sans text-2xl font-bold'>Hotline</h1>(123) 456-7890
                <p>(659) 535-7268</p></div>
                <div className="white-box font-sans text-base font-light"><h1 className='font-sans text-2xl font-bold'>Email</h1>ingrediet@gmail.com
                <p>help_ingrediet.proxy@gmail.com</p></div> 
                <div className="white-box large-box">
                    <h2 className='font-sans text-2xl font-bold mb-2'>Just Say Hello!</h2>
                    <p className='font-sans text-base font-light mb-2'>Do you fancy saying hi to me or you want to started with your</p>
                    <p className='font-sans text-base font-light mb-4'>project and you need my help? Feel free to contact me</p>
                    <div className="contact-form">
                        <input className='focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0' type="text" placeholder="Template Cookie" />
                        <input className='focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0' type="email" placeholder="Email Address" />
                        <input className='focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0' type="text" placeholder="Title" />
                        <input className='focus:ring-transparent focus:border-2 focus:border-[#00b207] focus:outline-0' type="text" placeholder="Subjects" />
                        <button className='bg-[#00b207] hover:shadow-lg hover:shadow-green-500/40  text-white transition-all duration-200 ease-linear font-sans text-xs font-bold'>Send Message</button>
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
