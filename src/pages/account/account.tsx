import React from 'react';
import {NavigationBar} from '../MainNavBar/navigationBar';

import './account.css'; 


export const Account = () => {
    return (
        <>
        <NavigationBar />
        <div>
                <div className="account"> 

        <div className="account__wrapper">
            <div className="account__error" >* errorMessage</div>
            <div className="account__item">
            <label>Username</label>
            <input type="text" />
            </div>

            <div className="account__item">
            <label>Email</label>
            <input type="text" />
            </div>

            <div className="account__item">
            <label>Phone number</label>
            <input type="text"/>
            </div>

            <div className="account__item">
            <label>New Password</label>
            <input type="password" />
            </div>

            <div className="account__item">
            <label>Confirm Password</label>
            <input type="password" />
            </div>

            <div className="d-flex justify-content-end">
            <button className="account__submit" >
                Update
            </button>
            </div>
        </div>
        </div>

                    </div>
              

        </>
     )
}
