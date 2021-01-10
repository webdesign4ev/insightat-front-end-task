import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
export const RadioGroupQuestion= () =>{
    const json = {
        questions: [
            {
                type: "radiogroup",
                name: "car",
                title: "What is your favorite color ?",
                colCount: 1,
                choices: [
                    "Red",
                    "Black",
                    "Blue",
                    "White"
                ]
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

