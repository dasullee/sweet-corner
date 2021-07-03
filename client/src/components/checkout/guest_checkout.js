import React from 'react'
import './checkout.scss'
import { Field, reduxForm } from 'redux-form'
import Input from './guest_form'
import {connect} from 'react-redux'
import {createGuestOrder} from '../../actions'
class GuestCheckout extends React.Component {
    async handleGuestCheckout(values){
        const orderInfo = await this.props.createGuestOrder(values)
        const redirectUrl = `/orders/guest/${orderInfo.orderId}?email=${orderInfo.email}`
        this.props.history.push(redirectUrl)
    }   
    render(){
        const {handleSubmit} = this.props
        return(
            <div className="guest-checkout">
                <h1 className="center">Guest Checkout</h1>
                <form className="center" onSubmit={handleSubmit(this.handleGuestCheckout.bind(this))}>
                    <Field className="contactForm orange" label="First Name" name="firstName" component={Input} />
                    <Field className="contactForm yellow" label="Last Name" name="lastName" component={Input} />
                    <Field className="contactForm teel" label="Email" name="email" component={Input} />
                    <button  className="btnCheckout orange">Submit Order</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'custom-form'
})(connect(null, {
    createGuestOrder: createGuestOrder
})(GuestCheckout));