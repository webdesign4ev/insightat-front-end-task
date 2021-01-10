import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
Survey.StylesManager.applyTheme("modern");

interface IProps{
    theTitle:string,
    theValues:string[]
}


export const CheckBoxQuestion:React.SFC<IProps>  = ({theTitle,theValues}) =>{
    const json = {
        questions: [
            {
                type: "checkbox",
                name: "car",
                title: theTitle,
                colCount: 1,
                choices: [...theValues]
            }
        ]
    };
    
        return (
            <>
                 <Survey.Survey json={json} 
                  applyTheme="modern"
                 showNavigationButtons={false} 
                 />
            </>
        )
}

