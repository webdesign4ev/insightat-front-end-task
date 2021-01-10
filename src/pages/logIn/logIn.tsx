import React from 'react';
import { NavLink } from 'react-router-dom';

import icon_google from '../assets/image/icon_google.png';

import './login.css';
export const LogIn = () => {

  const progressStyle = {
    maxWidth: "95%",
    margin: "auto",
    marginBottom: "-48px"
  };

  return (


    <div className="login">
      <div className="row">
        <div className="col-lg-4 login__wrapper d-flex flex-column justify-content-between"
          style={{ paddingBottom: "0px" }}>
          <h1 style={{ textAlign: "center" }}><NavLink className="login__title" to="/">Insightat</NavLink></h1>

          <div style={{ padding: "1% 12% 1% 12%" }}>
            <div className="login__google">
              <h1>Login</h1>
              <p className="text-center">
                Need a Insightat account?
             <span><NavLink to="/signup">Create an account</NavLink></span>
              </p>
              <button className="btn login__google__button">
                <img src={icon_google} alt="" /><span>Log in with Google</span>
              </button>
              <div className="login__divider"></div>
            </div>

            <form name="txtLoginForm" >
              <div className="login__input">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  name="txtEmail"
                  required
                />
              </div>
              <div className="login__input">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="txtPassword"
                  required
                />
              </div>

              <div className="login__input justify-content-between d-flex flex-row">
                <div className="d-flex align-items-center" >
                  <input
                    type="checkbox"
                    value="rememberMe"
                  />
                  <label className="btn text_remember">Remember me</label>
                </div>

                <span className="btn">
                  <NavLink to="/changePassword" style={{ color: "#fa7268" }}>Forgot Password?</NavLink>
                </span>
              </div>


              <button className="btn login__button" style={{ marginTop: "1px" }} type="submit">Log In</button>
            </form>
          </div>
        </div>

        <div className="col-lg-8 login__background d-flex flex-column justify-content-end">
          <div className="login__background__text">
            <h1>Login to Insightat</h1>
            <p>Welcome back! We missed you.</p>
          </div>
        </div>
      </div>
    </div>



  )
}
