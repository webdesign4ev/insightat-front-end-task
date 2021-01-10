import { SurveyNavBar } from '../components/surveyNavBar';
// import icon_arrow_down from './icon_arrow_down.svg';
import { UploadFile } from '../components/uploadFile';
import './surveyShare.css';
export const SurveyShare = () => {
    return (
        <>
            <SurveyNavBar />
            <div className="container share-content">
                <div className="caption">
                    <h6>How do you want to share your survey?</h6>
                </div>

                <div className="share-insde-content">
                    <div className="web-link-box">
                        <div className="web-link-box-caption">
                            <span>Web Link</span>
                            <span>Share it with people so they can visit and respond to your Survey</span>
                        </div>
                        <div className="link-container">
                            <a href="#" className="lerom-link">https://loremipsum.com/random/a3ghtrtp</a>
                            <a href="#" className="copy">copy</a>
                            <button className="download"><img src="icon/icon-arrow-down.svg" alt="" />
                                Download QR Code
                            </button>
                        </div>

                    </div>
                </div>





                    {/* <div className="share-insde-content">
            <div className="web-link-box">
                <div className="web-link-box-caption">
                <span>Web Link</span>
                <span>Share it with people so they can visit and respond to your Survey</span>
                </div>
                <div className="link-container">
                    <a href="#" className="lerom-link ">https://loremipsum.com/random/a3ghtrtp</a>
                    <a href="#" className="copy">copy</a>
                    <UploadFile />
                </div>       
                </div>  
                </div>
 */}

                    <div className="box-container">
                        <div className="socail-box first-box">
                            <div className="socail-box-caption">
                                <p>Social media and email</p>
                                <p>Share your survey on social media or send it in an email</p>
                            </div>
                            <div className="icon-socaol-media-box">
                                <span><i className="fa fa-facebook"></i></span>
                                <span><i className="fa fa-linkedin"></i></span>
                                <span><i className="fa fa-twitter"></i></span>
                                <span><i className="fa fa-google"></i></span>
                                <span><i className="fa fa-envelope"></i></span>
                            </div>
                        </div>
                        <div className="socail-box second-box">
                            <div className="socail-box-caption">
                                <p>Embed in a web page</p>
                                <p>Paste this into your HTML wherever you want the embedded survey to appear on your page.</p>
                            </div>
                            <div>
                                <button className="Copy-Code">Copy Code</button>
                            </div>
                        </div>
                        <div className="socail-box last-box">
                            <div className="socail-box-caption">
                                <p>Add to Profile Page</p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                            </div>
                            <div>
                                <button className="Copy-Code">add</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
