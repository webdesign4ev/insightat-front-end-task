import React from 'react';
import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyAnalyzeSideBar } from './surveyAnalyzeSideBar';
import './surveyAnalyze.css';
export const SurveyAnalyze = () => {
    return (
        <>
            <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col-lg-10">
                        <div className="container-fluid analyze-body-header">
                            <p>Customer Satisfaction Survey</p>
                            <a href="#" className="export-link">Export Data & Report</a>
                        </div>
                        <div className="container-fluid analyze-body-header">
                            <div className="key-stats-box">
                                <span>Key stats</span>
                                <div className="stats">
                                    <div className="stats-box">
                                        <span>VIEWED</span>
                                        <h6>15</h6>
                                    </div>
                                    <div className="stats-box">
                                        <span>STARTED</span>
                                        <h6>15</h6>
                                    </div>
                                    <div className="stats-box">
                                        <span>COMPLETED</span>
                                        <h6>15</h6>
                                    </div>
                                    <div className="stats-box">
                                        <span>COMPLETION</span>
                                        <h6>100%</h6>
                                    </div>
                                    <div className="stats-box">
                                        <span>AVERAGE TIME TO COMPLETE</span>
                                        <h6>56 Sec.</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="container ">
                            <div className="analyze-table-header">
                                <span>DEVICE</span>
                                <span>VIEWED</span>
                                <span>STARTED</span>
                                <span>COMPLETED</span>
                                <span>COMPLETION</span>
                                <span>AVERAGE TIME TO COMPLETE</span>
                            </div>
                        </div>
                        <div className="container-fluid analyze-table-container first-row-table">
                            <div className="analyze-table-content">
                                <p className="taple-caption">PC & Laptop</p>
                                <span></span>
                                <span></span>
                                <span>5</span>
                                <span>5</span>
                                <span>5</span>
                                <span>100%</span>
                                <span>56 Sec.</span>
                            </div>
                        </div>
                        <div className="container-fluid analyze-table-container second-row-table">
                            <div className="analyze-table-content">
                                <p className="taple-caption">Tablet</p>
                                <span></span>
                                <span></span>
                                <span className="analyze-margein-element">5</span>
                                <span>5</span>
                                <span>5</span>
                                <span>100%</span>
                                <span>56 Sec.</span>
                            </div>
                        </div>
                        <div className="container-fluid analyze-table-container last-row-table">
                            <div className="analyze-table-content">
                                <p className="taple-caption">Smartphone</p>
                                <span></span>
                                <span></span>
                                <span>5</span>
                                <span>5</span>
                                <span>5</span>
                                <span>100%</span>
                                <span>56 Sec.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
