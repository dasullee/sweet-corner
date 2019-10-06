import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { accountSignIn } from '../../actions';
import Input from '../general/form/input';

class SignIn extends Component {
    render(){
        const { accountSignIn, handleSubmit, reset } = this.props;

        return (
            <div className="sign-in mt-3">
                <div className="col s6 center mt-2">
                    <h1>Welcome Back!</h1>
                    <h2>Please Sign In</h2>
                    <p>Sign in to your account to view order status and previous orders.</p>
                </div>
                <div className="col s6">
                    <h1 className="center">Sign In</h1>
                    <form onSubmit={handleSubmit(accountSignIn)}>
                        <Field component={Input} name="email" placeholder="Email" />
                        <Field autoComplete="current-password" component={Input} color="yellow" name="password" placeholder="Password" type="password" />

                        <div className="form-actions right">
                            <button className="btn btn-sm btn-red mr-1" onClick={reset} type="button">Cancel</button>
                            <button className="btn btn-sm" >Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SignIn = reduxForm({
    form: 'signIn'
})(SignIn);

export default connect(null, { accountSignIn })(SignIn);
