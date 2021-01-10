import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
Survey.StylesManager.applyTheme("modern");

interface IProps{
    thePlaceHolder:string,
    theTitle:string
}
export const TextQuestion:React.SFC<IProps>  = ({theTitle,thePlaceHolder}) =>{
    const json = {
        questions: [
            {
                name: "name",
                type: "text",
                title: theTitle,
                placeHolder: thePlaceHolder,
                autoComplete: "name"
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

