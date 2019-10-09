import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from './create_account';
import Orders from '../orders';
import OrderDetails from '../orders/order_details';
import SignIn from './sign_in';
import SignOut from './sign_out';
import auth from '../../hoc/auth';
import './account.scss';

class AccountRoutes extends Component {
    render(){
        const { path } = this.props.match;

        return (
            <Switch>
                <Route path={`${path}/create-account`} component={auth(CreateAccount, '/products', false)} />
                <Route path={`${path}/orders`} exact component={auth(Orders)} />
                <Route path={`${path}/orders/:order_id`} component={auth(OrderDetails)} />
                <Route path={`${path}/sign-in`} component={auth(SignIn, '/products', false)} />
                <Route path={`${path}/sign-out`} component={SignOut} />
            </Switch>
        );
    }
}

export default AccountRoutes;
