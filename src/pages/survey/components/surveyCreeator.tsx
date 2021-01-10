import React, { Component, createRef } from "react";
import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import { SurveyNavBar } from './surveyNavBar';
import 'bootstrap/dist/css/bootstrap.css';
import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
import './surveyCreator.css';
import '../surveyBuild/surveyBuild.css';
SurveyCreator.StylesManager.applyTheme("bootstrap");


class SurveyComponent extends Component {
    componentDidMount() {
        //remove a property to the page object. You can't set it in JSON as well
        Survey.Serializer.removeProperty("page", "visibleIf");
        //remove a property from the base question class and as result from all questions 
        Survey.Serializer.removeProperty("question", "visibleIf");
        var creatorOptions = { showJSONEditorTab: false, showTestSurveyTab: false };
        var creator = new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        creator.showToolbox = "left";
        creator.showPropertyGrid = "left";
        creator.rightContainerActiveItem("toolbox");
        creator.onCanShowProperty.add(function (sender, options) {
            if (options.obj.getType() == "survey") {
                options.canShow = options.property.name == "title";
            }
        });
    }
    render() {
        return (
            <>
                <SurveyNavBar />
                <div className="build-user-data creator-welcom">
                    <span className="build-welcomebox">
                        <span className="pt-3">W</span> </span>
                    <div className="build-user-data-input" id="build-wlcome-screan" >
                        <p>Welocme screan</p>
                    </div>
                </div>
                <div id="creatorElement" />
            </>
        );
    }
}
export default SurveyComponent;
