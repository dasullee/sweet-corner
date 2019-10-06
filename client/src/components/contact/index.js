import React from 'react';
import ContactForm from './contact_form.js';
import Schedule from '../general/schedule';
import downDots from '../../assets/images/down-dots.png';
import upDots from '../../assets/images/up-dots.png';
import './contact.scss';

export default props => {
    return (
        <div className="contact">
            <div className="col s6">
                <div className="content-container">
                    <div className="content">
                        <h2>Contact us today!</h2>

                        <p>Talk cupcakes to us! At Sweet Corner's we love hearing from our customers. Send your questions, comments and flavor suggestions to:</p>
                        <p>office@sweetcorner.com</p>
                        <p>Our expert bakers are waiting to create an unique cupcake bursting with freshness and flavor just for you. Our management team are also waiting for their next event to organize.</p>

                        <div className="left-dot-container">
                            <img src={upDots} alt="Decorative dots" />
                        </div>
                        

                        <Schedule />
                    </div>
                </div>
            </div>

            <div className="col s6">
                <ContactForm/>

                <div className="right-dot-container">
                    <img src={downDots} alt="Decorative dots" />
                </div>
            </div>
        </div>
    );
}
