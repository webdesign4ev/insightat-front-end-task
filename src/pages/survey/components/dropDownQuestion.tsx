import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";


Survey.StylesManager.applyTheme("modern");
interface IProps{
    theTitle:string,
    theVal:string[],
    theName:string
}


export const DropDownQuestion:React.SFC<IProps>  = ({theTitle,theVal,theName}) =>{
    const json = {
        questions: [
            {
                type: "dropdown",
                name: theName,
                title: theTitle,
                colCount: 1,
                choices: [...theVal]
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

