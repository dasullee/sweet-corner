import React from 'react'
import './contact.scss'
import { Field, reduxForm } from 'redux-form'
import Input from './contact_form.js'
import Schedule from '../general/schedule'


class CustomForm extends React.Component {
    handleFormSubmit(formValues){
        console.log("values", formValues)
    }
    resetForm(){
        this.props.reset()
    }
    render(){
        const {handleSubmit} = this.props
        
    return (
        <div className="containerContact">
            <section className="column contactP">
                <h1>Contact us today!</h1>
                <p>Talk cupcakes to us! At Sweet Corner's we love hearing from our customers. Send your questions, comments and flavor suggestions to:</p>
                <a href="mailto::office@sweetcorner.com">office@sweetcorner.com</a>
                <p>Our expert bakers are waiting to create an unique cupcake bursting with freshness and flavor just for you. Our management team are also waiting for their next event to organize.</p>
                <img className="middleDots" src={require('../../assets/images/up-dots.png')}></img>
            </section>

            <section className="column">
                <h1 className="title">Contact Form</h1>
                <form className="mainForm" onSubmit={handleSubmit(this.handleFormSubmit)}>
                        <Field label="Name" className="contactForm orange" name="name" component={Input} />
                        <Field label="Email" className="contactForm yellow" name="email" component={Input} />
                        <Field label="Phone" className="contactForm teel" name="phone" component={Input} />
                        <Field label="Subject" className="contactForm orange" name="subject" component={Input} />
                        <Field label="Message" className="contactForm yellow message" name="message" component={Input} />
                        <button className="btn teel">SEND</button>
                </form>
            </section>

            <section className="column">
                <Schedule />
            </section>
            
            <section className="column">
                <img className="rightDots" src={require('../../assets/images/down-dots.png')} ></img>
            </section>
        </div>
    )
    }
}

export default reduxForm({
    form: 'custom-form'
})(CustomForm);