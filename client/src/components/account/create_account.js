import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createAccount } from '../../actions';
import Input from '../general/form/input';

class CreateAccount extends Component {
    render() {
        const { createAccount, handleSubmit, reset } = this.props;

        return (
            <div className="sign-in mt-3">
                <div className="col s6 center mt-2">
                    <h1>Welcome!</h1>
                    <h2>Create a new account</h2>
                    <p>With an account you can better track current orders and view your order history.</p>
                </div>
                <div className="col s6">
                    <h1 className="center">Create Account</h1>
                    <form onSubmit={handleSubmit(createAccount)}>
                        <Field component={Input} name="firstName" placeholder="First Name" />
                        <Field component={Input} color="yellow" name="lastName" placeholder="Last Name" />
                        <Field component={Input} color="teal" name="email" placeholder="Email" />
                        <Field autoComplete="new-password" component={Input} name="password" placeholder="Password" type="password" />
                        <Field autoComplete="confirm-password" component={Input} color="yellow" name="confirmPassword" placeholder="Confirm Password" type="password" />

                        <div className="form-actions right">
                            <button className="btn btn-sm btn-red mr-1" onClick={reset} type="button">Cancel</button>
                            <button className="btn btn-sm" >Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate({ firstName, lastName, email, password, confirmPassword }){
    const errors = {};
    
    if(!firstName){
        errors.firstName = 'Please enter a first name';
    }
    if(!lastName){
        errors.lastName = 'Please enter a last name';
    }
    if(!email){
        errors.email = 'Please enter an email';
    }
    if(!password){
        errors.password = 'Please choose a password';
    }
    if (password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

CreateAccount = reduxForm({
    form: 'createAccount',
    validate
})(CreateAccount);

export default connect(null, { createAccount })(CreateAccount);
