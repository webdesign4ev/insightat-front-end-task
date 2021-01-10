import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { inherits } from 'util';


Survey.StylesManager.applyTheme("default"); 
export const UploadFile= () =>{
    const  json = {
        questions: [
            {
                type: "file",
                title: "Download QR code",
                name: "files",
                storeDataAsText: false,
                allowMultiple: true,
                maxSize: inherits
            }
        ]
    };
        return (
            <>
                 <Survey.Survey json={json} 
                 showNavigationButtons={false} 
                 />; 
            </>
        )
}

