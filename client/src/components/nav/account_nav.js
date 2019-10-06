import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './nav.scss';

class AccountNav extends Component {
    state = {
        authLinks: [
            {
                text: 'My Orders',
                to: '/account/orders'
            },
            {
                text: 'Sign Out',
                to: '/account/sign-out'
            }
        ],
        links: [
            {
                text: 'Sign Up',
                to: '/account/create-account'
            },
            {
                text: 'Sign In',
                to: '/account/sign-in'
            }
        ]
    }

    buildLinks(links){
        return links.map(({text, to}) => (
            <li key={to}>
                <Link to={to}>{text}</Link>
            </li>
        ));
    }

    renderLinks(){
        const { auth } = this.props;
        const linkKey = auth ? 'authLinks' : 'links';

        return this.buildLinks(this.state[linkKey]);
    }

    render(){
        return (
            <ul className="account-nav">
                { this.renderLinks() }
            </ul>
        );
    }
}

function mapStateToProps({user}){
    return { auth: user.auth };
}

export default connect(mapStateToProps)(AccountNav);
