import React from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/udemy-logo.png'
import heart from '../Assets/heart.svg'
import cart from '../Assets/cart.svg'

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
                    <div className="nav-heart">
                        <img src={heart} alt="" />
                    </div>
                    <div className="nav-cart">
                        <img src={cart} alt="" />
                    </div>
                    <div className="nav-notice">
                        {/* <FontAwesomeIcon icon={faBell} /> */}
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar