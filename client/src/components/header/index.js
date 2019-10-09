import React from 'react';
import AccountNav from '../nav/account_nav';
import Nav from '../nav';
import './header.scss';

export default props => {
    return (
        <div className="header">
            <div className="header-awning"/>
            
            <Nav />
            <AccountNav />

            <div className="header-logo"/>
            <h1 className="center fancy">We deliver cupcakes for the important events in your life!</h1>
        </div>
    );
}
