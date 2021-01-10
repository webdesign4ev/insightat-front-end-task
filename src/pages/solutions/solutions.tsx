import React from 'react';
import icon_employer from '../assets/image/icon_employer.png';
import icon_form from '../assets/image/icon_form.png';
import icon_custom_support from '../assets/image/icon_custom_support.png';
import icon_product from '../assets/image/icon_product.png';
import icon_feedback from '../assets/image/icon_feedback.png';
import './solutions.css';
import { NavigationBar } from '../MainNavBar/navigationBar';

export const Solutions = () => {
    return (
        <div> 
            <NavigationBar />
            <div className="solutions container">
            <div className="solutions__item"> 
                <div className="solutions__item__description">
                <h1>Not Your Usual Survey and Form Builder</h1>
                <p> Build surveys and forms, share via verity of channels and get the results. <br/>That’s simple!</p>
                </div>
                <div className="solutions__item__img">
                <img src={icon_form} />
                </div>
            </div> 

            <div className="solutions__item">
                <div className="solutions__item__img">
                <img src={icon_custom_support} />
                </div>

                <div className="solutions__item__description">
                <h1>The Real Voice of Your Customers</h1>
                <p> Listen to your customers and show them that you care. Insightat helps you build your own customer satisfaction surveys, or you could pick one of many templates.</p>
                </div>
            </div>

            <div className="solutions__item">
                <div className="solutions__item__description">
                <h1>Employees Engagement Never Been More Professional</h1>
                <p> Collet the employees' feedback and improve their engagement</p>
                </div>
                <div className="solutions__item__img">
                <img src={icon_employer} />
                </div>
            </div>

            <div className="solutions__item">
                <div className="solutions__item__img">
                <img src={icon_product} />
                </div>
                
                <div className="solutions__item__description">
                <h1>Improve Your Products And Services</h1>
                <p>Give your customers the opportunity to rate your services and products for the continues improving.</p>
                </div>
            </div>

            <div className="solutions__item">
                <div className="solutions__item__description">
                <h1>Instant Feedback (Kiosk)</h1>
                <p>Get the instant feedback and close the gap between you and the customers.</p>
                </div>
                <div className="solutions__item__img">
                <img src={icon_feedback} />
                </div>
            </div>
            </div>
        </div>
    )
}
