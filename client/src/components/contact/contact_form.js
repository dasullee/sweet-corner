import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/form/input';
import Textarea from '../general/form/textarea';

class ContactForm extends Component {
    render(){
        return (
            <form className="contact-form">
                <h3>Contact Form</h3>

                <Field color="red" component={Input} name="name" placeholder="Name" />
                <Field color="yellow" component={Input} name="email" placeholder="Email" />
                <Field color="teal" component={Input} name="phone" placeholder="Phone" />
                <Field color="red" component={Input} name="subject" placeholder="Subject" />

                <Field color="yellow" component={Textarea} name="message" placeholder="Message" />

                <div className="button-container">
                    <button className="teal white-text">Send</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'contact-form'
})(ContactForm);
