import React from 'react';
import './Footer.css'

import logo from '../Assets/image/logo-udemy-inverted.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className='links-and-language-selector'>
                <ul className='link-column'>
                    <li>Udemy Business</li>
                    <li>Teach on Udemy</li>
                    <li>Get the app</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>Affiliate</li>
                    <li>Investors</li>
                    <li>Terms</li>
                    <li>Privacy policy</li>
                    <li>Cookies settings</li>
                    <li>Sitemap</li>
                    <li>Accessibility statement</li>
                </ul>
            </div>
            <div className='logo-and-copyright'>
                <div className="logo-container">
                    <img src={logo} alt='' />
                </div>
                <div className="language-selector-container">
                    <button>English</button>
                </div>
                <div className="copy-right">
                    <p>© 2023 Udemy, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer