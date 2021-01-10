import icon_grid from "../components/icon/icon_grid.svg";
import icon_cog from "../components/icon/icon_cog.svg";
import baseline_format_quote_24px from "../components/icon/baseline_format_quote_24px.svg";
import round_short_text_edit_24px from "../components/icon/round_short_text_edit_24px.svg";
import long_text_24px from "../components/icon/long_text_24px.svg";
import round_list_24px from "../components/icon/round_list_24px.svg";
import Path_127 from "../components/icon/Path_127.svg" ;
import baseline_arrow_drop_up_24px from "../components/icon/baseline_arrow_drop_up_24px.svg";
import round_bar_chart_24px from "../components/icon/round_bar_chart_24px.svg" ;
import round_star_border_24px from "../components/icon/round_star_border_24px.svg";
import Path_185 from "../components/icon/Path_185.svg";
import round_apps_edit_24px from "../components/icon/round_apps_edit_24px.svg";
import baseline_grid_on_24px from "../components/icon/baseline_grid_on_24px.svg";
import round_vertical_split_edit_24px from "../components/icon/round_vertical_split_edit_24px.svg" ;
import scale_apps_24px from "../components/icon/scale_apps_24px.svg";
import Path_100 from "../components/icon/Path_100.svg";
import pill_active from "../components/icon/pill_active.svg";
import Path_129 from "../components/icon/Path_129.svg";
import Path_117 from "../components/icon/Path_117.svg";
import baseline_vertical_align_top_24px from "../components/icon/baseline_vertical_align_top_24px.svg";
import baseline_payment_24px from "../components/icon/baseline_payment_24px.svg";
import './surveyBuildSideBar.css'; 
export const SurveyBuildSideBar = () => {
  return (
    <>
      <div className="col-lg-2 side">
      <div className=" left-side">
       
          <div className="header-sidebar">   
            <p>
                <img id="list-control" src={icon_grid} alt="" />
            </p> 
            <p>
                <img id="list-control" src={icon_cog} alt="" />
            </p>
          </div>

          <div className="build-content-sidebar">
            <div className="build-content-sidebar-header">
            <span className="text-left pl-2 pt-2 pb-2 ">quetions</span>
            </div> 
            <div className="build-content-sidebar-options">
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={baseline_format_quote_24px} alt="" /></span>   
                <span>Descriptive text</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_short_text_edit_24px} alt="" /></span>   
                <span className="">TextBox(short answer)</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={long_text_24px} alt="" /></span>   
                <span className="">TextBox(long answer)</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_list_24px} alt="" /></span>   
                <span className="">multiple choices</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={Path_127}alt="" /></span>   
                <span className="">checkboxes</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={baseline_arrow_drop_up_24px} alt="" /></span>   
                <span className="">dropdown menu</span>
              </div>

               <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_bar_chart_24px} alt="" /></span>   
                <span className="">rating(likert scale)</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_star_border_24px} alt="" /></span>   
                <span className="">star rating</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={Path_185} alt="" /></span>   
                <span className="">net promoter score</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_apps_edit_24px} alt="" /></span>   
                <span className="">multiple choices grid</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={baseline_grid_on_24px} alt="" /></span>   
                <span className="">checkboxe grid</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={round_vertical_split_edit_24px}alt="" /></span>   
                <span className="">textbox list</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={scale_apps_24px} alt="" /></span>   
                <span className="">likert scale grid</span>
              </div>

              <div className="build-content-sidebar-options-content ">
                <span ><img  src={Path_129} alt="" /></span>   
                <span className="">date</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={Path_117} alt="" /></span>   
                <span className="">image choice</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={baseline_vertical_align_top_24px} alt="" /></span>   
                <span className="">file upload</span>
              </div>
              <div className="build-content-sidebar-options-content ">
                <span ><img  src={baseline_payment_24px} alt="" /></span>   
                <span className="">payment</span>
              </div>
              </div> 
             <hr className="line">
           </hr>
            <ul className="build-content-sidebar-options-content-pill ">
              <li><img  src={Path_100} alt="" /></li>
              <li>welcome screan</li>
              <li className="pill-active "><img  src={pill_active} alt="" /></li>
            </ul>
            <ul className="build-content-sidebar-options-content-pill ">
              <li><img  src={Path_100} alt="" /></li>
              <li>welcome screan</li>
              <li className="pill-active "><img  src={pill_active} alt="" /></li>
            </ul>

          </div> 
      </div>
      </div>
    </>
  )
}
