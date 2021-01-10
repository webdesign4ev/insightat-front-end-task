import React from 'react';
import {NavigationBar} from '../MainNavBar/navigationBar';

 

import './changePassword.css';

export const ChangePassword = () => {
 
    return (  
        <div className="container divContent" > 
            <h3>Insightat</h3>
        <div className="change-password">
        <p>New Password</p>
        <input type="password"/>

        <p>Confirm Password</p>
        <input type="password"/>

        <div className="d-flex justify-content-end">
            <button className="btn btn-success">Update Password</button>
        </div>
        </div>

         </div>
         
     )
}

