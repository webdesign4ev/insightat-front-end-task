import './surveyAnalyzeSideBar.css';
export const SurveyAnalyzeSideBar = () => {
    return (
        <>
        <div className="col-lg-2 ">
       <div className="analyze-link">
        <div className="analyze-link-box active-link">
          <p><a href="#">Status</a></p>
        </div>
        <div className="analyze-link-box">
          <p><a href="#">Results</a></p>
        </div>
        <div className="analyze-link-box">
          <p><a href="#">Individual Responses</a></p>
        </div>
       </div>  
     </div>
        </>
     )
}
