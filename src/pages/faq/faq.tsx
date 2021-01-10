import React from 'react';
import {NavigationBar} from '../MainNavBar/navigationBar';

import './faq.css'; 


export const FAQ = () => {
    return (
        <>
        <NavigationBar />
        <div className="container" style={{width:'58%' , height:'80%',position:'fixed',top:'-20%'}}>
        <div> 
                <div className="privacy container">
                <h1>FAQ | Frequently Asked Questions</h1>
                <div className="faq__item">
                    <p className="faq__item__question">What is Insightat?</p>
                    <p className="faq__item__answer">
                    Paperform is an online platform that enables anyone to create online forms
                    or product pages quickly, intuitively, and to brand them as they like, all
                    without writing code. Whether you’re involved involved with organising
                    events, sporting groups, marketing agencies, tech startups, or any other
                    project, Paperform is a beautiful and robust solution. Quickly and simply
                    create customisable forms and pages that take payments, and are easy for
                    your customers and communities to complete on mobile or desktop. To see
                    how it works, watch the 3 minute video.
                    </p>
                </div>
                </div> 
            </div>
        
        </div>
        </>
     )
}
