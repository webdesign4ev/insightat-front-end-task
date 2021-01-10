import React from 'react';
import {NavLink} from 'react-router-dom'; 


import icon_google from '../assets/image/icon_google.png';

import './signUp.css'; 

export class SignUp extends React.Component{

  state = {};

  render(){
    return (
      <div className="signup">
        <div className="row">
          <div className="col-lg-4 signup__wrapper d-flex flex-column justify-content-between"
            style={{padding:"1% 3% 1% 3%"}}>
             <h1 style={{textAlign:"center"}}>
                <NavLink className="signup__title"  to="/">Insightat</NavLink>
            </h1>

            <div className="signup__google">
              <h1>Create a FREE account</h1>
              <p className="text-center">
                Already have an account? 
                <span>
                    <NavLink to="/login">Log In</NavLink>
              </span>
              </p>
              <button className="btn signup__google__button"
                 style={{border:"1px solid #ccc"}}>
                <img src={icon_google}  alt=""/>
                <span>Sign up with Google</span>
              </button>
      
              <div className="signup__divider"></div>
            </div>
      
            <div>
            <form>
                  <div className="signup__input">
                    <label>First Name *</label>

                    <input type="text"
                      placeholder="Type your first name here..."
                      name="firstname" />
                  </div>
                  <div className="signup__input">
                    <label>Last Name *</label>
                    <input type="text"
                      placeholder="Type your last name here..."
                      name="lastname"
                    />
                  </div>
                  <div className="signup__input">
                    <label>Username *</label>
                    <input type="text"
                     placeholder="Type your username here..."
                      name="username"
                    />
                  </div>
        
                  <div className="signup__input">
                    <label>Email *</label>
                    <input type="email"
                      placeholder="Type your email here..."
                      name="email"
                    />
                  </div>
        
                  <div className="signup__input">
                    <label>Password *</label>
                    <input type="password"
                      placeholder="Type your password here..."
                      name="password"
                    />
                  </div>
        
                  <div className="signup__input">
                    <label>Country *</label>
                    <select
                      id="country" placeholder="Type your country here..."
                      name="country"
                    >
                      <option>Egypt </option>
                      <option>Egypt </option>
                      <option>Egypt </option>
                    </select>
                  </div>
        
                  <div className="signup__input">
                    <label>Phone number (Optional)</label>
                    <input
                      type="text"
                      placeholder="Type your number here..."
                      name="phone"
                    />
                  </div>
        
                  <button className="btn signup__button" type="submit">
                    Create Account
                  </button>
        
                  <p className="signup__agreement">
                    By clicking 'CREATE ACCOUNT' or signing up, you agree to the
                    <a href="/terms-conditions">Terms of Use</a> and
                    <a href="/privacy-policy">Privacy Policy</a>.
                  </p>
                </form>
            
            </div>
          </div>
      
          <div className="col-lg-8 signup__background d-flex flex-column justify-content-end"
          style={{position:"fixed",right:"0"}}>
            <div className="signup__background__text">
              <h1>Register For Free Trial</h1>
              <p>
                Welcome to Insightat! Start your free trial now, no <br />credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
      
   );
  }
}

  
 
