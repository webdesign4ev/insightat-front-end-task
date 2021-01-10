import React from 'react';
import {SurveyNavBar} from '../survey/components/surveyNavBar';
import { SurveyAnalyzeSideBar } from '../survey/surveyAnalyze/surveyAnalyzeSideBar';
  
import Table from 'react-bootstrap/Table'; 
 
import customer from '../assets/image/customer.png';

import './userAccount.css';  


export const UserAccount = () => {
    return (
      <>
      <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col">
                     
                        <div className="row header"> 

                        <img src={customer} alt=""/>

                        <span>
                            <h5>Mike Fox</h5>
                            <p>Standard User</p>
                            <p>
                               <i className="fa fa-map-marker"></i>Czech Republic
                               <i className="fa fa-clock"></i> Last Interction Yesterday
                            </p>
                        </span>
                         
                        <span style={{width:'43%'}}></span>

                         <button className="btnStyle">Send Email</button>
                         <button className="btnStyle" 
                              style={{backgroundColor:'#f3f3f5',color:'#000'}}>Delete</button>
                             
   
                    </div>
              
              <div className="row userData">
                  <span>
                      <p>User Information</p>
                      <Table className="table table-borderless">
                          <tr>
                              <th>First Name</th>
                              <td>Mike</td>
                          </tr>
                          <tr>
                              <th>Last Name</th>
                              <td>Fow</td>
                          </tr>
                          <tr>
                              <th>Email</th>
                              <td>chad.carpenter@mail.com</td>
                          </tr>
                          <tr>
                              <th>Created At</th>
                              <td>Feb 20,2018 at 9:04 am(+6)</td>
                          </tr>
                          <tr>
                              <th>Plan</th>
                              <td>Standard</td>
                          </tr>
                          <tr>
                              <th>Country</th>
                              <td>Czech Republic</td>
                          </tr>
                      </Table>
                  </span>
            
                  <span>
                      <p>Activity</p>
                      <Table className="table table-borderless">
                          <tr>
                              <th>Surveys Created</th>
                              <td>5</td>
                          </tr>
                          <tr>
                              <th>Surveys Published</th>
                              <td>2</td>
                          </tr>
                          <tr>
                              <th>Polls Created</th>
                              <td>13</td>
                          </tr>
                          <tr>
                              <th>Polls Published</th>
                              <td>8</td>
                          </tr>
                          <tr>
                              <th>NPS Created</th>
                              <td>13</td>
                          </tr>
                          <tr>
                              <th>NPS Published</th>
                              <td>8</td>
                          </tr>
                      </Table>
                  </span>
            
            
              </div>
               </div>
               </div>
     </div>
    
    </>
     );
}
