import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/app.scss';
import About from './about';
import Account from './account';
import Cart from './cart';
import Contact from './contact';
import Footer from './footer';
import GuestCheckout from './checkout/guest_checkout';
import GuestOrderDetails from './orders/guest_order_details';
import Header from './header';
import Home from './home';
import Products from './products';
import Services from './services';
import ProductDetails from './products/product_details';

const App = () => (
    <div className="app">
        <div className="container">
            <Header />

            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout/guest" component={GuestCheckout} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="/orders/guest/:order_id" component={GuestOrderDetails} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route path="/services" component={Services} />
            
            <Footer />
        </div>
    </div>
);

export default App;
