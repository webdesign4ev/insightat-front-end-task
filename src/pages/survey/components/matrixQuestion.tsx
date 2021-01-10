import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
export const MatrixQuestion= () =>{
    const json = {
        questions: [
            {
                type: "matrix",
                name: "Quality",
                title: "Please indicate if you agree or disagree with the following statements",
                columns: [
                    {
                        value: 1,
                        text: "Strongly Agree"
                    }, {
                        value: 2,
                        text: "Somewhat Agree"
                    }, {
                        value: 3,
                        text: "Neither Agree NorDisagree"
                    }, {
                        value: 4,
                        text: "Somewhat Disagree"
                    }, {
                        value: 5,
                        text: "Strongly Disagree"
                    }
                ],
                rows: [
                    {
                        value: "affordable",
                        text: "Feature A"
                    }, {
                        value: "does what it claims",
                        text: "Feature B"
                    }, {
                        value: "better then others",
                        text: "Feature C"
                    }, {
                        value: "easy to use",
                        text: "Feature A"
                    }
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

