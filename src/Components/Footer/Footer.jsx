import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='footer-logo' src={assets.logo} alt='' />
                    <p>Welcome to Yumbox, where fresh, flavorful meals are just a click away. We craft every dish with the best ingredients to bring you a delightful dining experience.<br /> Craving something tasty? Explore our menu, add your favorites, and let us deliver happiness right to your door.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-323-123-5532</li>
                        <li>contact@yumbox.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                &copy; 2024 YumBox. All rights reserved.
            </p>
        </div>
    )
}

export default Footer