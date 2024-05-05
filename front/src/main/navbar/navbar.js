import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container'>
            <h1>Luxora</h1>
            <ul>
                <a><li>shop</li></a>
                <a><li>about us</li></a>
                <a><li>designers</li></a>
            </ul>
            <a href='' target="_blank">
                <svg className='ident' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
            </svg>
            </a>
            <a>
                <svg className='bag' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z" />
            </svg>
            </a>
            <div className='bag-count'>0</div>
        </div>
    )
}

export default Navbar


