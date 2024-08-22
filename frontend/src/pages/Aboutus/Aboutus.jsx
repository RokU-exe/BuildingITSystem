import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import './Aboutus.css';
import { assets } from '../../assets/assets';

const Aboutus = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const teamMembers = [
        { src: "https://banbuengdairy.com/wp-content/uploads/2023/04/portrait-young-handsome-farmer-rice-field-he-wearing-straw-hat-he-smile-standing-waist-scaled.jpg", name: "John Doe" },
        { src: "https://st3.depositphotos.com/1158045/12714/i/450/depositphotos_127149968-stockafbeelding-lachende-boer-in-zijn-akker.jpg", name: "Jane Smith" },
        { src: "https://media.istockphoto.com/id/157612888/fr/photo/senior-agriculteur-debout-dans-le-champ.jpg?s=612x612&w=0&k=20&c=4-Opa1Haac84-ZwrypjMf3WGnEgJlBz_v8FXQqUPeK8=", name: "Alice Johnson" },
        { src: "https://th.bing.com/th/id/OIP.du4XtjjB2qHTch-0XR_sbgHaHO?w=1084&h=1058&rs=1&pid=ImgDetMain", name: "Bob Brown" },
        { src: "https://media.istockphoto.com/id/1365692557/photo/portrait-of-a-young-woman-carrying-a-crate-of-fresh-produce-on-a-farm.webp?b=1&s=170667a&w=0&k=20&c=o3SMTas28eof015jMdWNSy0j6YVY4JbyUH7jbn8LFyo=", name: "Eve Davis" },
        { src: "https://www.j-longlife.co.jp/column/wp-content/uploads/2020/04/72b40c670753894204bb609d4f6f524a.jpg", name: "Charlie Wilson" },
        { src: "https://img.freepik.com/premium-photo/elderly-old-man-gardening_1006041-280.jpg", name: "Dana Lee" }
    ];
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 4 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 4 ? 0 : prevIndex + 1));
    };
    

    return (
        <div className='aboutus'>
            <section className='text-image'>
                <div className='text'>
                    <h1 className='text-3xl font-bold'>100% Trusted</h1>
                    <h1 className='text-3xl font-bold mb-2'>Organic Food Store</h1>
                    <p>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet </p>
                    <p>ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac </p>
                    <p>lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a</p>
                    <p>eros non massa vulputate ornare. Vivamus ornare commodo</p>
                    <p>ante, at commodo felis congue vitae.</p>
                </div>
                <img className="w-auto" src="https://ucacsa.com/static/assets/img/creditos/habilitacion.png" alt="About Us" />
            </section>

            <section className='grey-background'>
    <section className='text-image reverse'>
        <div className='text'>
            <h1 className='text-3xl font-bold'>100% Trusted</h1>
            <h1 className='text-3xl font-bold mb-2'>Organic Food Store</h1>
            <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et</p>
            <p>rhoncus neque. Dui non diam eget est luctus tincidunt a a mi. Nulla eu</p> 
            <p>eros consequat tortor tincidunt feugiat.</p>
            <div className="grid">
                <div><h2 className='text-xl font-bold'>100% Organic food</h2>100% healthy & Fresh food</div>
                <div><h2 className='text-xl font-bold'>Great Support 24/7</h2>Instant access to Contact</div>
                <div><h2 className='text-xl font-bold'>Customer Feeback</h2>Our happy customer</div>
                <div><h2 className='text-xl font-bold'>100% Sucure Payment</h2>We ensure your money is save</div>
                <div><h2 className='text-xl font-bold'>Free Shipping</h2>Free shipping with discount</div>
                <div><h2 className='text-xl font-bold'>100% Organic Food</h2>100% healthy & Fresh food</div>
            </div>
        </div>
        <img src="https://th.bing.com/th/id/R.b6e19713e68ce041d30afc55ff1f59c9?rik=PJdDLFUdIAD4yg&riu=http%3a%2f%2fwww.hoffmannhayes.com%2fwp-content%2fuploads%2f2017%2f03%2fDaniels-Workday-Backyard-e1490371085974.jpg&ehk=d1MPzRB2FDK9zyx2SX6PyoiZ7RpSvMpFXLkIc47JPvM%3d&risl=&pid=ImgRaw&r=0" alt="About Us" className="team-image"/>
    </section>
</section>


            <section className='text-image'>
                <div className='text'>
                    <h1 className='text-3xl font-bold mb-2'>We Delivered, You Enjoy Your Order.</h1>

                    <p>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,</p>
                    <p>ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim</p>
                    <p>diam, ac mattis eros accumsan rhoncus. Curabitur auctor</p>
                    <p>bibendum nunc eget elementum.</p>
                    <p>ㅤㅤㅤ</p>
                    <p>Sed in metus pellentesque.</p>
                    <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                    <p>Maecenas ut nunc fringilla erat varius.</p>
                    <button>Shop Now</button>
                </div>
                <img src="https://alredha-international.com/wp-content/uploads/2021/08/about.jpg" alt="About Us" className="team-image"/>
            </section>

            <section className='ourteam'>
                <div className='text'>

                    <h3 className='text-3xl font-bold'>Our Awesome Team</h3>
                    <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus</p>
                    <p>neque. Duis non diam eget est luctus tincidunt a a mi.</p>
                </div>
                <div className='team-gallery'>
                    {teamMembers.slice(currentIndex, currentIndex + 4).map((member, index) => (
                        <div key={index} className='team-member'>
                            <img src={member.src} alt={`Team Member ${index + 1}`} />
                            <div className='name-overlay'>{member.name}</div>
                        </div>
                    ))}
                </div>
                <button className='slider-button prev' onClick={handlePrev}></button>
                <button className='slider-button next' onClick={handleNext}></button>
            </section>
        </div>
    );
};

export default Aboutus;

