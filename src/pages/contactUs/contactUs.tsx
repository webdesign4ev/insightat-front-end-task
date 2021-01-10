import React from 'react';
import question from '../assets/image/question.png';
import {NavigationBar} from '../MainNavBar/navigationBar';
import customer from '../assets/image/customer.png';
import './contactUs.css';

export const ContactUs = () => {
    return (
        <div>
        <NavigationBar />
            <div className="contact container row">
            <div className="contact__left col-xl-6 col-12">
                <div className="contact__form">
                <h1>Contact Insightat</h1>
                <p className="contact__label">Name</p>
                <input className="contact__input" placeholder="Type your name here..." />

                <p className="contact__label">Email</p>
                <input className="contact__input" placeholder="Type your email here..." />

                <p className="contact__label">Message</p>
                <textarea className="contact__textarea" rows={10}></textarea><br />

                <button className="contact__button">Send</button>
                </div>

                <div className="contact__links">
                <p>Stay in touch</p>
                <div className="d-flex">
                    <div className="contact__links__item">
                    <img src={question} />
                    </div>

                    <div className="contact__links__item">
                    <img src={question} />
                    </div>

                    <div className="contact__links__item">
                    <img src={question}/>
                    </div>

                    <div className="contact__links__item">
                    <img src={question} />
                    </div>

                    <div className="contact__links__item">
                    <img src={question} />
                    </div>
                </div>
                </div>
            </div>

            <div className="contact__right col-xl-6 col-12">
                <img src={customer} />
            </div>
            </div>
        </div>
    )
}
