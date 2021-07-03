import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'
import CartWidget from './cart_widget'

export default () => {
    return (
        <ul className="main-nav">
            <li>
                <Link className="link" to='/'>HOME</Link>
            </li>
            <li>
                <Link className="link" to='/about'>ABOUT US</Link>
            </li>
            <li>
                <Link className="link" to='/products'>PRODUCTS</Link>
            </li>
            <li>
                <Link className="link" to='/services'>SERVICES</Link>
            </li>
            <li>
                <Link className="link" to='/contact'>CONTACT</Link>
            </li>
            <CartWidget />
        </ul>
    )
}