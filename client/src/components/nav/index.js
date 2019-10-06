import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart_widget';
import './nav.scss';

export default props => {
    return (
        <ul className="main-nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <CartWidget />
        </ul>
    );
}
