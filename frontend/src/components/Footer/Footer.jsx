import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-1'>
                <h2>IngreDiet</h2>
                <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className='contact'>
                    <h3>(+84)123 456 789</h3> or <h3>ingrediet@gmail.com</h3>
                </div>
            </div>

            <div className='footer-content-2'>
                <h2>My Account</h2>
                <ul>
                    <li>My Account</li>
                    <li>Order History</li>
                    <li>Shopping Cart</li>
                    <li>Wishlist</li>
                </ul>
            </div>
            <div className='footer-content-3'>
                <h2>Helps</h2>
                <ul>
                    <li>Contact</li>
                    <li>Faqs</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-4'>
                <h2>Proxy</h2>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Track Order</li>
                </ul>
            </div>
            <div className='footer-content-5'>
                <h2>Categories</h2>
                <ul>
                    <li>Fruit & Vegetables</li>
                    <li>Meat & Fish</li>
                    <li>Bread & Bakery</li>
                    <li>Beauty & Health</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>IngreDiet eCommerce © 2024. All Rights Reserved</p>
    </div>
  )
}

export default Footer