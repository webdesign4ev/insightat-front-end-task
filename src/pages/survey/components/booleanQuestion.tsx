import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
interface IProps{
    theLabel:string
}



export const BooleanQuestion:React.SFC<IProps>  = ({theLabel}) =>{
    const json = {
        questions: [
            {
                "type": "boolean",
                "name": "bool",
                "title": "",
                "label": theLabel,
                defaultValue:true
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

