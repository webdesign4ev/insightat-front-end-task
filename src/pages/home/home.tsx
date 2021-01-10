import React from 'react';
import {NavigationBar} from '../MainNavBar/navigationBar';
import {NavLink} from 'react-router-dom';
import contact_us_background from '../assets/image/contact_us_background.png';
import drag_drop from '../assets/image/drag_drop.png';
import './home.css';
export const Home = () => {
    return (
        <> 
        <NavigationBar />
            <div className="home">
            <img className="home__background__img" src={contact_us_background} />
            <div className="row home__wrapper">
                <div
                className="template col-xl-6 d-flex flex-column justify-content-center align-items-center"
                >
                <NavLink className="template__new__button align-self-start"
                    to="/dashboard"
                >
                    <span>NEW</span> Choose from over 200 templates
                    <i className="fa fa-angle-right"></i>
                </NavLink>
                <p className="template__text align-self-start">
                    Data Collection Tool, Simply Powerful and Beautiful
                </p>

                <div className="template__signup__free align-self-start">
                    <NavLink className="btn btn-sign-up-free" to="/signUp">
                    Sign up for free
                    </NavLink>
                    <span> 14 Day Free Trial, No CC Required</span>
                </div>
                </div>

                <div className="col-xl-6">
                <img className="template__drag__drop" src={drag_drop} />
                </div>
            </div>
            </div>
        </>
    )
}
