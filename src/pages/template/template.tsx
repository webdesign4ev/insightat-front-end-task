import React from 'react';
import { NavigationBar } from '../MainNavBar/navigationBar';

export const Template = () => {
    return (
        <>
        <NavigationBar />
        <div className="container" style={{width:'58%' , height:'80%',position:'fixed',top:'30%'}}>
            <p>
            template-page works!
            </p>
        </div>
        </>
     )
}
