import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

// Survey.StylesManager.applyTheme("modern");

interface IProps{
    theTitle:string,
    theMin:string,
    theMax:string,
    theVal:string[]
}


export const RatingQuestion:React.SFC<IProps>  = ({theTitle,theMin,theMax,theVal}) =>{
    const json = {
        questions: [
            {
                type: "rating",
                name: "satisfaction",
                title: theTitle,
                minRateDescription: theMin,
                maxRateDescription: theMax,
                rateValues:[...theVal]
            }
        ]
    };
        return (
            <>
                 <Survey.Survey json={json} 
                 showNavigationButtons={false} 
                 />
            </>
        )
}

