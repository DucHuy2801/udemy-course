import React from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/udemy-logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <li>Categories</li>
                <button className='button-container'>
                    <FontAwesomeIcon icon={faSearch} />
                    <span/>
                    Search for anything
                </button>
                <li>Udemy Business</li>
                <li>Teach on Udemy</li>
                <li>My learning process</li>
                <div className='nav-icons'>
                    <img src={cart_icon} alt=''/>
                    <div className="nav-cart-count">0</div>
                    <button className='login'>Log in</button>
                    <button className='signup'>Sign up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar