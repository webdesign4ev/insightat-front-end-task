import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

Survey.StylesManager.applyTheme("modern");

export const ImgPickerQuestion = () =>{
    const json = {
        "elements": [
            {
                "type": "imagepicker",
                "name": "choosepicture",
                "title": "Who should win the best nature photo of the year?",
                showLabel:true,
                "choices": [
                    {
                        "value": "lion",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                    }, {
                        "value": "giraffe",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                    }, {
                        "value": "panda",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                    }, {
                        "value": "camel",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                    }, {
                        "value": "giraffe",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                    }, {
                        "value": "panda",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                    }, {
                        "value": "camel",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                    }
                ]
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

