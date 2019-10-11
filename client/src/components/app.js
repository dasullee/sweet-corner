import React from 'react';
import {Route} from 'react-router-dom'
import '../assets/css/app.scss';
import About from './about'
import Contact from './contact'
import Footer from './footer'
import Header from './header'
import Home from './home'
import Services from './services'
import Products from './products'
import ProductDetails from './products/product_details'
import Cart from './cart'
import GuestCheckout from './checkout/guest_checkout'
import GuestOrderDetails from './orders/guest_order_details'


const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/' component={Home} />
            <Route path='/services' component={Services} />
            <Route exact path='/products' component={Products} />
            <Route path='/products/:product_id' component={ProductDetails} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout/guest' component={GuestCheckout} />
            <Route path='/orders/guest/:order_id' component={GuestOrderDetails} />
            <Footer/>
        </div>
    </div>
);

export default App;
