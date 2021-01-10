import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyBuildSideBar } from './surveyBuildSideBar';
import logic from '../components/icon/logic.svg';
import move from '../components/icon/move.svg';
import icon_duplicate from '../components/icon/icon_duplicate.svg';
import icon_trash from '../components/icon/icon_trash.svg';
import {ToggleQuestion} from '../components/toggelQuestion';
import {RadioGroupQuestion} from '../components/radioGroupQuestion';
import {BooleanQuestion} from '../components/booleanQuestion';
import './surveyBuild.css';
export const SurveyBuild = () => {
    return (
        <>
            <SurveyNavBar /> 
            <div className="container-fluid build-content-sec">
                <div className="row">
                    <SurveyBuildSideBar />
                    <div className="col-lg-10 col-md-8 col-sm-8 col-xs-8">
                        <div className="build-content-detailes">
                            <div className="build-user-data">
                                <span className="build-welcomebox">
                                    <span className="pt-3">W</span> </span>
                                <div className="build-user-data-input" id="build-wlcome-screan" >
                                    <p>Welocme screan</p>
                                </div>
                            </div>                            
                            <ToggleQuestion theTitle="What is your name?" id="ques1"
                            quesNum={1} logic={logic} move={move} icon_duplicate={icon_duplicate}
                            icon_trash={icon_trash} theData={["Course A","Course B","Course C",]}
                            />
                            <ToggleQuestion theTitle="How old are you?" id="ques2"
                            quesNum={2} logic={logic} move={move} icon_duplicate={icon_duplicate}
                            icon_trash={icon_trash} theData={["Course A","Course B","Course C",]}
                            />
                            <div className="build-information">
                                <div className="build-user-data">
                                    <div className="build-user-data-option" id="build-wlcome-screan" >
                                        <div className="build-activeOption">
                                        <BooleanQuestion theLabel="Add other option"/>
                                        </div>
                                        <div className="build-activeOption">
                                        <BooleanQuestion theLabel="Required"/>
                                        </div>
                                        <div className="build-activeOption">
                                        <BooleanQuestion theLabel="Randomized"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="build-color-section">
                                    <div className="build-color-header color-radio-header">
                                        <RadioGroupQuestion />
                                    </div>
                                </div>
                                <div className="build-line-color">
                                    <button className="build-cancel-btn">Cancel</button>
                                    <button className="build-save-btn">Save</button>
                                </div>
                            </div>
                            <ToggleQuestion theTitle="In which department do you work?" id="ques3"
                            quesNum={4} logic={logic} move={move} icon_duplicate={icon_duplicate}
                            icon_trash={icon_trash} theData={["Course A","Course B","Course C",]}
                            />
                            <ToggleQuestion theTitle="Which of these courses have you already attended?" id="ques4"
                            quesNum={5} logic={logic} move={move} icon_duplicate={icon_duplicate}
                            icon_trash={icon_trash} theData={["Course A","Course B","Course C",]}
                            />
                            
                            <div className="build-user-data">
                                <span className="build-welcomebox thanksbox">
                                    <span className="pt-3">T</span> </span>
                                <div className="build-user-data-input" id="build-wlcome-screan" >
                                    <p>Thank you Screan</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
