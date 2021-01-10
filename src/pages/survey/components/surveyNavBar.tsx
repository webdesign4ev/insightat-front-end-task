import React from 'react';
import {NavLink} from 'react-router-dom';
import Group_250 from './icon/Group_250.svg';
import Rectangle_153 from './icon/Rectangle_153.svg';
import icon_home from './icon/icon_home.svg';
import round_arrow_forward_ios_24px from './icon/round_arrow_forward_ios_24px.svg';
import './surveyNavBar.css';  
export const SurveyNavBar = () => {
    return (
        <>
            <div className="container-fluid share-navbar-sec">
            <div className="row  navbar ">
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-3">
                <div className="logo-content">
                <NavLink to="/" className="nav-brand">
                    Insightat
                </NavLink>
                <img src={Rectangle_153} alt=""></img>
                <img src={icon_home} alt=""></img>
                <img src={round_arrow_forward_ios_24px} alt=""></img>
                <span>
                    Customer Satisfaction Survey</span>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 offset-2">
                <div className="navbar-link ">
                <ul className="navbar-list">
                    <li className="navbar-item active"><NavLink to="/build" className="navLink">build</NavLink></li>
                    <li className="navbar-item"><NavLink to="/design">design</NavLink></li>
                    <li className="navbar-item"><NavLink to="/share">share</NavLink></li>
                    <li className="navbar-item"><NavLink to="/analyze">analyze</NavLink></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 offset-2">
            <div className="previw">
                <NavLink to="/">preview</NavLink>
            
                <img id="list-control" src={Group_250} alt="" ></img>
                    <div className="side-list">
                    <ul className="list">
                        <li className="side-list-item">my accout </li>
                        <li className="side-list-item">contacts</li>
                        <li className="side-list-item border-link-slide">help</li>
                        <li className="side-list-item">log out</li>
                    </ul>
                    </div> 
            </div>
            </div>
            </div>
            </div> 
        </>
    )
}
