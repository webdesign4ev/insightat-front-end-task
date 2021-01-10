import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavigationBar} from '../MainNavBar/navigationBar';

import tick from '../assets/image/tick.png';


import './pricing.css';

export const Pricing = () => {

    const stylePricingPlanItem = {
        backgroundColor: "#fa7268",
        borderColor: "#fa7268" 
     };

    return (
        <>
        <NavigationBar />
        <div className="container" 
              style={{width:'65%',textAlign:'center',marginTop:'55px'}}>
       <div className="pricing">
        <div className="pricing__title">
          <h3>Choose a plan that works for you</h3>
          <div className="d-flex justify-content-center">
            <p className="pricing__subtitle">Just need the basic plan?</p>
            <span>
                <NavLink style={{color:"#fa7268"}} to="/signup">
                Sign up for a free account</NavLink>  
            </span>
          </div>
        </div>

        <div className="pricing__plans row">
    <div
      className="pricing__plans-item col-xl-4 col-12">
      <div
        className="pricing__plans-item__content"
       >
        <div className="pricing__plans-item__content__header">
          <h4>standard</h4>
          <div className="d-flex">
            <p className="pricing__cash-symbol">€</p>
            <p className="pricing__amount">39</p>
            <p className="pricing__period">/ mon</p>
          </div>
        </div>
        <div className="pricing__plans-item__content__body">
          <div className="d-flex">
            <img src={tick} alt=""/>
            <p className="item">item </p>
          </div>
        </div>
      </div>
      <div className="pricing__plans-item__select-plan">
        <button
          style={stylePricingPlanItem}>
          Select plan
        </button>
      </div>
    </div>

    <div
      className="pricing__plans-item col-xl-4 col-12"
      style={{ backgroundColor: "#f8f8fa"}}>
      <div
        className="pricing__plans-item__content"
       >
        <div className="pricing__plans-item__content__header">
          <div className="d-flex justify-content-between align-items-center">
            <h4>advantage</h4>
            <h5>Best Value</h5>
          </div>
          <div className="d-flex">
            <p className="pricing__cash-symbol">€</p>
            <p className="pricing__amount">456</p>
            <p className="pricing__period">/ year</p>
          </div>
        </div>
        <div className="pricing__plans-item__content__body">
          <div className="d-flex">
            <img
              src={tick} alt=""/>
            <p className="item">item1</p>
          </div>
        </div>
      </div>
      <div className="pricing__plans-item__select-plan">
        <button
          style={{backgroundColor:'#ffc107',borderColor:'#ffc107'}} >
          Select plan
        </button>
      </div>
    </div>

    <div
      className="pricing__plans-item col-xl-4 col-12">
      <div
        className="pricing__plans-item__content"
       >
        <div className="pricing__plans-item__content__header">
          <h4>premier</h4>
          <div className="d-flex">
            <p className="pricing__cash-symbol">€</p>
            <p className="pricing__amount">1,118</p>
            <p className="pricing__period">/ year</p>
          </div>
        </div>
        <div className="pricing__plans-item__content__body">
          <div className="d-flex">
            <img src={tick} alt="" />
            <p className="item">item </p>
          </div>
        </div>
      </div>
      <div className="pricing__plans-item__select-plan">
        <button style={stylePricingPlanItem}>
          Select plan
        </button>
      </div>
    </div>
  </div>
</div>
<div className="pricing__footer"> 
</div>

      </div>
     
        </>
     )
}
