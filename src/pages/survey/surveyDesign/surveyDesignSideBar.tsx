
import baseline_arrow_drop_down_24px from "../components/icon/baseline_arrow_drop_down_24px.svg"
import long_text_24px from "../components/icon/long_text_24px.svg";
import round_invert_colors_24px from "../components/icon/round_invert_colors_24px.svg";
import outline_color_lens_24px from "../components/icon/outline_color_lens_24px.svg";
import Group_235 from "../components/icon/Group_235.svg" 
import Group_234 from "../components/icon/Group_234.svg" 
import Rectangle_20 from "../components/icon/Rectangle_20.svg" ;
import Group_237 from "../components/icon/Group_237.svg";
import icon_plus from "../components/icon/icon_plus.svg";
import n_n from "../components/icon/n_n.svg"
import './surveyDesignSideBar.css';

export const SurveyDesignSideBar = () => {
    return (
        <>
        <div className="col-lg-2 side design-navbar-sec">
            <div className=" left-side">
             
                <div className="header-sidebar">   
                    <p>
                        <img id="list-control" src={round_invert_colors_24px} alt="" />
                    </p> 
                    <p>
                        <img id="list-control" src={outline_color_lens_24px} alt="" />
                    </p>
                </div>
                <div className="build-content-sidebar">
                    <div className="build-content-sidebar-header">
                    <span className="text-left pl-2 pt-2 pb-2 ">customize</span>
                    </div> 
                    <aside className="content">
                        <div className="aside-content-header">
                        <p>layout</p>

                            <div className="aside-content-header-box-first">
                                <span ><img  src={long_text_24px} alt="" /></span>   
                                <span>one questions at a time</span>
                            </div>
                            <div className="aside-content-header-box-socend">
                            <span ><img  src={long_text_24px} alt="" /></span>   
                            <span>all  questions in one page</span>
                        </div>
                        
                        <div className="down-up-number-content">
                            <p>typography</p>
                            <div className="down-up-number-content-box">
                                
                            <div className="down-up-number-content-box-first">
                                <span>quicksand</span>
                                <span><img  src={baseline_arrow_drop_down_24px} alt="" /></span>  
                            </div>
                            <div className="down-up-number-content-box-first down-up-number-content-box-second">
                                <span>14</span>
                                <span><img  src={baseline_arrow_drop_down_24px} alt="" /></span>  
                            </div>
                        </div>
                        </div> 
                    
                        </div> 
                        <p className="color-head">colors</p>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Rectangle_20}alt="" /></div>
                            <div className="color-option-content">
                            <p className="color-option-content-sub-title">main color</p>
                            <p className="color-option-content-text">Welcome, Thank You, Buttons and Hover</p>
                            </div>
                        </div>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Group_234} alt="" /></div>
                            <div className="color-option-content">
                            <p className="color-option-content-sub-title">main text</p>
                            <p className="color-option-content-text">Welcome, Thank You, buttons Text Color</p>
                            </div>
                        </div>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Rectangle_20} alt="" /></div>
                            <div className="color-option-content">
                            <p className="color-option-content-sub-title only-address">Question Color</p>
                            </div>
                        </div>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Group_235}alt="" /></div>
                            <div className="color-option-content">
                            <p className="color-option-content-sub-title only-address">Answer Color
                            </p>
                            </div>
                        </div>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Group_234}alt="" /></div>

                            <div className="color-option-content">
                            <p className="color-option-content-sub-title only-address only-address"> Page Color

                            </p>
                            </div>

                        </div>
                        <div className="color-option">
                            <div className="color-option-box">  <img src={Group_237} alt="" /></div>

                            <div className="color-option-content">
                            <p className="color-option-content-sub-title only-address"> Background

                            </p>
                            </div>
                        </div>
                        <div className="color-option">

                            <div className="color-option-content rectangle-color-option-sec">
                            <p className="color-option-content-sub-title"> Welcome Screen Logo</p>

                            <div className="rectangle-color">
                            <img  src={n_n} alt="" />
                            <img  src={icon_plus} alt="" />
                            </div>  
                            </div>
                        </div>
                    </aside>
                </div> 
            </div>
      </div>

        </>
     )
}
