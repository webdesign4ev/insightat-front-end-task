import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Footer} from './components/footer/footer';
import {Home} from './pages/home/home';
import {Privacy} from './pages/privacy/privacy';
import {HowItWorks} from './pages/howItWorks/howItWorks';
import {Terms} from './pages/terms/terms';
import {ContactUs} from './pages/contactUs/contactUs';
import {FAQ} from './pages/faq/faq';
import {ChangePassword} from './pages/changePassword/changePassword';
import {Account} from './pages/account/account';
import {Solutions} from './pages/solutions/solutions';
import {LogIn} from './pages/logIn/logIn';
import {SignUp} from './pages/signUp/signUp';
import {Pricing} from './pages/pricing/pricing';
import SurveyComponent from './pages/survey/components/surveyCreeator';
import {Template} from './pages/template/template';
import {Profile} from './pages/profile/profile';
import {SurveyAnalyze} from './pages/survey/surveyAnalyze/surveyAnalyze';
import {EditProfile} from './pages/profile/editProfile';
import {SurveyDesign} from './pages/survey/surveyDesign/surveyDesign';
import {AdminUser} from './pages/adminUser/adminUser';
import {UserAccount} from './pages/userAccount/userAccount';
import {Dashboard} from './pages/dashboard/dashboard';
import {Results} from './pages/results/results';
import {SurveyShare} from './pages/survey/surveyShare/surveyShare';
import 'bootstrap/dist/css/bootstrap.css';
import "survey-react/survey.css";
import 'font-awesome/css/font-awesome.css';

function App() {
  return (   
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/privacy" component={Privacy}/>
      <Route  path="/terms" component={Terms}/>
      <Route  path="/howItWorks" component={HowItWorks}/>
      <Route  path="/contactUs" component={ContactUs}/>
      <Route  path="/faq" component={FAQ}/>
      <Route  path="/solutions" component={Solutions}/>
      <Route  path="/pricing" component={Pricing}/>
      <Route  path="/logIn" component={LogIn}/>
      <Route  path="/signUp" component={SignUp}/>
      <Route  path="/template" component={Template}/>
      <Route  path="/changePassword" component={ChangePassword}/>
      <Route  path="/account" component={Account}/>
      <Route  path="/profile" component={Profile}/>
      <Route  path="/editProfile" component={EditProfile}/>
      <Route path="/design" component={SurveyDesign} />
      <Route path="/analyze" component={SurveyAnalyze} />
      <Route path="/share" component={SurveyShare} />
      <Route path="/build" component={SurveyComponent} />
      <Route path="/adminUser" component={AdminUser} />
      <Route path="/userAccount" component={UserAccount} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/results" component={Results} />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}
export default App;
