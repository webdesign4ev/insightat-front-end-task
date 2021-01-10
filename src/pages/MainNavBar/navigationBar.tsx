import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigationBar.css';

export const NavigationBar = () => {
    return (
        <div>
            <nav className=" navbar fixed-top  navbar-expand-lg navbar-light navbar-border">
            <NavLink className="navbar-brand" to="/">Insightat</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
             data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
              aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/pricing">Pricing</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/solutions">Solutions</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/howItWorks">Help</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/contactUs">Contact </NavLink>
                </li>
                <li className="nav-item nav__login ">
                <NavLink to="/logIn" className="login_color"> Log In</NavLink>
                </li>
                <li className="nav-item nav__signup">
                <NavLink to="/signUp" className="signUp_color">Sign Up</NavLink>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
