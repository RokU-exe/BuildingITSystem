import React from 'react'; 
import { Link } from 'react-router-dom';
import './Aboutus.css'
import { assets } from '../../assets/assets'

const Aboutus = () => {
    return (
        <div className='aboutus'>
            <section className='text-image'>
                <div className='text'>
                    <h1>100% Trusted Organic Food Store</h1>
                    <p>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
                </div>
                <img src="https://tribine.baltic-course.com/wp-content/uploads/2024/01/senior-man-working-in-the-field-_1706014719_1706015462.webp" alt="About Us" className="team-image" />
            </section>

            <section className='text-image reverse'>
                <div className='text'>
                    <h1>100% Trusted Organic Food Store</h1>
                    <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Dui non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.</p>
                    <p>Sed in metus pellentesque.</p>
                    <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                    <p>Maecenas ut nunc fringilla erat varius.</p>
                </div>
                <img src="https://th.bing.com/th/id/R.b6e19713e68ce041d30afc55ff1f59c9?rik=PJdDLFUdIAD4yg&riu=http%3a%2f%2fwww.hoffmannhayes.com%2fwp-content%2fuploads%2f2017%2f03%2fDaniels-Workday-Backyard-e1490371085974.jpg&ehk=d1MPzRB2FDK9zyx2SX6PyoiZ7RpSvMpFXLkIc47JPvM%3d&risl=&pid=ImgRaw&r=0" alt="About Us" className="team-image"/>
            </section>

            <section className='text-image'>
                <div className='text'>
                    <h1>We Delivered, You Enjoy Your Order.</h1>
                    <p>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                    <p>Sed in metus pellentesque.</p>
                    <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                    <p>Maecenas ut nunc fringilla erat varius.</p>
                    <button>Shop Now</button>
                </div>
                <img src="https://alredha-international.com/wp-content/uploads/2021/08/about.jpg" alt="About Us" className="team-image"/>
            </section>

            <section className='ourteam'>
                <div className='text'>
                    <h2>Our Awesome Team</h2>
                    <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
                </div>
            </section>
        </div>
    );
};

export default Aboutus