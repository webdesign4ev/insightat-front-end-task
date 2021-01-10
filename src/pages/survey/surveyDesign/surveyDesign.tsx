
import React from 'react';
import { SurveyNavBar } from '../components/surveyNavBar';
import { SurveyDesignSideBar } from './surveyDesignSideBar';
import Rectangle_141 from "../components/icon/Rectangle_141.svg";
import { TextQuestion } from '../components/textQuestion';
import { RatingQuestion } from '../components/ratingQuestion';
import { MatrixQuestion } from "../components/matrixQuestion";
import { DropDownQuestion } from '../components/dropDownQuestion';
import { ImgPickerQuestion } from "../components/imgPickerQuestion";
import { CheckBoxQuestion } from '../components/checkBoxQuestion';
import './surveyDesign.css';
export const SurveyDesign = () => {
    return (
        <>
            <SurveyNavBar />
            <div className="container-fluid design design-content-sec">
                <div className="row">
                    <SurveyDesignSideBar />
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8 design_cont">
                        <div className="build-content-detailes">
                            <div className="user-data">
                                <span className="welcomebox cs">
                                    <span className="pt-3">CS</span> </span>
                                <div className="user-data-input" id="wlcome-screan" >
                                    <p>EXTFOX - Web Development Agency</p>
                                </div>
                            </div>
 
                            <div className="user-data user-informaion-container">
                                <div className="numberBox number-user-data-container">
                                    <span className="pt-4"> 1</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container"
                                    id="wlcome-screan" >
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                                </div>
                            </div>

                            <div className="user-data user-informaion-container">
                                <div className="numberBox number-user-data-container">
                                    <span className="pt-4"> 2</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container 
                                favourite-artist-container" id="wlcome-screan" >
                                    <TextQuestion theTitle="Who is your favorite artist?"
                                        thePlaceHolder="Type your Favorite here .........." />
                                </div>
                            </div>


                            <div className="user-data user-informaion-container">
                                <div className="numberBox number-user-data-container">
                                    <span className="pt-4"> 3</span>

                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >

                                    <TextQuestion theTitle="Do you have any further comments?"
                                        thePlaceHolder="Type your comment here..." />
                                </div>
                            </div>

                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 4</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>

                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container"
                                    id="wlcome-screan">
                                    <div className="user-informaion-continer-box-color">
                                        <CheckBoxQuestion theTitle="What is your favorite color?"
                                            theValues={["red", "black", "blue", "green"]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 5 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <div className="user-informaion-continer-box-color">
                                    <CheckBoxQuestion theTitle="Which of these courses have you already attended?"
                                            theValues={["Course A", "Course B", "Course C", "Course D"]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="user-data user-informaion-container">
                                <div className="numberBox number-user-data-container">
                                    <span className="pt-4"> 6</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
                                    <TextQuestion theTitle="In which department do you work?"
                                        thePlaceHolder="Select an option..." />
                                </div>
                            </div>

                            <div className="user-data user-informaion-container">
                                <div className="sub-middle-height numberBox number-user-data-container recommended-section-text">
                                    <span className="pt-4"> 7</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text"
                                    id="wlcome-screan">
                                    <div className="cobtainer-recommended-box">
                                        <RatingQuestion
                                            theTitle="How likely is it that you would recommend the event to a friend or colleague?"
                                            theMin="Disagree" theMax="Agree"
                                            theVal={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="user-data user-informaion-container">
                                <div className="numberBox number-user-data-container">
                                    <span className="pt-4"> 8</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container favourite-artist-container" id="wlcome-screan" >
                                    <p>How would you rate our product?</p>
                                    <div className="star-cotent">
                                        <i className="fa fa-star rate"></i>
                                        <span>1</span>
                                    </div>  
                                    <div className="star-cotent">
                                        <i className="fa fa-star rate"></i>
                                        <span>2</span>
                                    </div>
                                    <div className="star-cotent">
                                        <i className="fa fa-star rate"></i>
                                        <span>3</span>
                                    </div>
                                    <div className="star-cotent">
                                        <i className="fa fa-star rate"></i>
                                        <span>4</span>
                                    </div>
                                    <div className="star-cotent">
                                        <i className="fa fa-star rate"></i>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number table-container-box">
                                    <span className="pt-4"> 9 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container table-container-box matrix-dropDown" id="wlcome-screan" >
                                    <MatrixQuestion />

                                </div>
                            </div>

                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 10 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <span className="color-container-boxex-text-header">On which days do you use the following products</span>
                                    <span className="color-container-boxex-text-span">You can select multiple options per row.</span>
                                    <div className="days-box">
                                        <div className="viual-container-grid">
                                            <div className="vitual"></div>
                                            <div className="day-name-container-header ">
                                                <span>Mon</span>
                                                <span>Tue</span>
                                                <span>Wed</span>
                                                <span>Thu</span>
                                                <span>Fri</span>
                                                <span>Sat</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                        <div className="days-box-caption">
                                            <span>Product A</span>
                                            <div className="day-name-container">
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                            </div>
                                        </div>
                                        <div className="days-box-caption">
                                            <span>Product b</span>
                                            <div className="day-name-container">
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                            </div>
                                        </div>
                                        <div className="days-box-caption">
                                            <span>Product c</span>
                                            <div className="day-name-container">
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                                <div className="day-name-box"><input type="checkbox" name="" id="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 11 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <p>How would you rate the different types of chocolate?</p>
                                    <div className="days-box">
                                        <div className="days-box-caption">
                                            <div className="checolate-name-container">
                                            <RatingQuestion
                                            theTitle="Dark Chocolate"
                                            theMin="" theMax=""
                                            theVal={["-2","-1","0","2","1"]}
                                        />
                                            </div>
                                        </div>
                                        <div className="days-box-caption">
                                            <div className="checolate-name-container">
                                            <RatingQuestion
                                            theTitle="Milk Chocolate"
                                            theMin="" theMax=""
                                            theVal={["-2","-1","0","2","1"]}
                                        />
                                            </div>
                                        </div>
                                        <div className="days-box-caption">
                                            <div className="checolate-name-container">
                                            <RatingQuestion
                                            theTitle="Sweet Chocolate"
                                            theMin="" theMax=""
                                            theVal={["-2","-1","0","2","1"]}
                                        />
                                            </div>
                                        </div>

                                        <div className="days-box-caption">
                                            <div className="checolate-name-container">
                                            <RatingQuestion
                                            theTitle="White Chocolate"
                                            theMin="" theMax=""
                                            theVal={["-2","-1","0","2","1"]}
                                        />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 12 </span>
                                    <img src={Rectangle_141} alt=" " />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <p> How much did Multiple Choice Grid </p>
                                    <div className="days-box">

                                        <div className="viual-container-grid">
                                            <div className="vitual"></div>
                                            <div className="day-name-container-header choise-grid-dayes-head">
                                                <span>Mon</span>
                                                <span>Tue</span>
                                                <span>Wed</span>
                                                <span>Thu</span>
                                                <span>Fri</span>
                                                <span>Sat</span>
                                                <span>Sun</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid-box-caption">
                                        <span className="change-background">Product A</span>
                                        <div className="grid-name-container">
                                            <div className="grid-name-box "></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                        </div>
                                    </div>
                                    <div className="grid-box-caption">
                                        <span className="change-background">Product b</span>
                                        <div className="grid-name-container">
                                            <div className="grid-name-box "></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                        </div>
                                    </div>
                                    <div className="grid-box-caption">
                                        <span className="change-background">Product c</span>
                                        <div className="grid-name-container">
                                            <div className="grid-name-box "></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                            <div className="grid-name-box"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 13 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <p> How would you rate the popular brands of chocolate? </p>
                                    <div className="choclate-brand-container">
                                        <div className="choclate-brand-container-select-img">
                                            <DropDownQuestion theTitle="1"theName=""
                                            theVal={["2","3","4","5"]}/>
                                        </div>
                                    </div>
                                    <div className="choclate-brand-container">
                                        <div className="choclate-brand-container-select-img">
                                        <DropDownQuestion theTitle="2"theName=""
                                            theVal={["2","3","4","5"]}/>
                                        </div>
                                    </div>
                                    <div className="choclate-brand-container">
                                        <div className="choclate-brand-container-select-img">
                                        <DropDownQuestion theTitle="3"theName=""
                                            theVal={["2","3","4","5"]}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container color-container-boxex-number">
                                    <span className="pt-4"> 14 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input design-user-data-container color-container-boxex-text favourite-artist-container" id="wlcome-screan" >
                                    <p> How would you rate the popular brands of chocolate?</p>
                                    <div className="rate-choclate-brand-container">
                                        <span>Toblerone</span>
                                        <div className="rate-choclate-brand-container-star">
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                        </div>
                                    </div>
                                    <div className="rate-choclate-brand-container">
                                        <span>Ferrero Rocher</span>
                                        <div className="rate-choclate-brand-container-star">
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                        </div>
                                    </div>
                                    <div className="rate-choclate-brand-container">
                                        <span>Lindt</span>
                                        <div className="rate-choclate-brand-container-star">
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                        </div>
                                    </div>
                                    <div className="rate-choclate-brand-container">
                                        <span>Hershey's</span>
                                        <div className="rate-choclate-brand-container-star">
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                        </div>
                                    </div>
                                    <div className="rate-choclate-brand-container">
                                        <span>Cadbury</span>
                                        <div className="rate-choclate-brand-container-star">
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                            <i className="fa fa-star rate"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="user-data user-informaion-container">
                                <div className="sub-middle-height numberBox number-user-data-container recommended-section-text chose-date">
                                    <span className="pt-4"> 15</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text chose-date" id="wlcome-screan" >
                                    <p>Please chose a date</p>

                                    <div className="container-chose-date">
                                        <div className="container-chose-date-box-item">
                                            <p>month</p>
                                            <input type="text" name="" id="" />
                                        </div>
                                        <div className="container-chose-date-box-item">
                                            <p>day</p>
                                            <input type="text" name="" id="" />
                                        </div>
                                        <div className="container-chose-date-box-item container-chose-date-box-item-year">
                                            <p>year</p>
                                            <input type="text" name="" id="" />
                                        </div>
                                        <div>
                                            <p className="date-line"> | </p>
                                        </div>
                                        <div className="container-chose-date-box-item">
                                            <p>hour</p>
                                            <input type="text" name="" id="" />
                                        </div>
                                        <div className="date-line"><p>:</p></div>
                                        <div className="container-chose-date-box-item">
                                            <p>minute</p>
                                            <input type="text" name="" id="" />
                                        </div>

                                        <div className="am-pm-container">
                                            <p className="am-pm-container-item"><span>AM</span></p>
                                            <p className="am-pm-container-item"><span>PM</span></p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="user-data user-informaion-container ">
                                <div className="numberBox number-user-data-container  nature-photo-container">
                                    <span className="pt-4"> 16 </span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="user-data-input nature-photo-container" id="wlcome-screan" >
                                    <div className="nature-photo-content">
                                        <div className="nature-photo-content-item">
                                            <div className="nature-photo-content-box">
                                                <ImgPickerQuestion />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-data user-informaion-container">
                                <div className="sub-middle-height numberBox number-user-data-container recommended-section-text">
                                    <span className="pt-4"> 17</span>
                                    <img src={Rectangle_141} alt="" />
                                </div>
                                <div className="sub-middle-height user-data-input design-user-data-container favourite-artist-container recommended-section-text" id="wlcome-screan" >
                                    <RatingQuestion theTitle="How likely is it that you would recommend the event to a friend or colleague?"
                                        theMin="Not at all likely"
                                        theMax="Extremely likely"
                                        theVal={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} />
                                </div>
                            </div>
                            <div className="container-submit-data">
                                <button className="submit-data">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
