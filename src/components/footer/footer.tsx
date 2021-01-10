import React from 'react';
import {NavLink} from 'react-router-dom';
import  './footer.css';

export const Footer = () => {
    return (
        <>
            <div className="footer text-center d-flex justify-content-center">
                {/* will be link */}
            <NavLink to="/terms" className="a">Terms &amp; Conditions of Use</NavLink>
            <p>·</p>
            <NavLink  to="/Privacy" className="a">Privacy Policy</NavLink>
            <p>·</p>
            <NavLink  to="/faq" className="a">FAQ</NavLink>
            <p>·</p>
            <NavLink  to="/" className="a"> &copy; Insightat 2020</NavLink>
            </div>
        </>
    )
}
