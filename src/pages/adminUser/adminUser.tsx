import React from 'react';
import {SurveyNavBar} from '../survey/components/surveyNavBar';
import { SurveyAnalyzeSideBar } from '../survey/surveyAnalyze/surveyAnalyzeSideBar';
 
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

import customer from '../assets/image/customer.png';

import './adminUser.css';  


export const AdminUser = () => {
    return (
      <>
      <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col">
                     
                        <div className="row header"> 
                         
                         <p><strong>Users</strong> 1390 total</p>

                          <div className="col-3"></div>
                         <button className="btnStyle" 
                         style={{marginRight:'5px',marginTop:'7px'}}>Export</button>
                         
                         <button className="btnStyle" style={{marginTop:'7px'}}>Delete</button>
                         
                          <InputGroup className="col-4">
                          <FormControl
                            placeholder="Search" 
                          />
                          <InputGroup.Append>
                            <button style={{border:'none'}}><i className="fa fa-search"></i></button>
                          </InputGroup.Append>
                        </InputGroup>

                         <button className="btnStyle" 
                         style={{backgroundColor:'#fa7268',color:'#fff',marginTop:'7px'}}>Add User</button>
                             
   
                    </div>
              
              <div style={{marginTop:'20px'}}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th style={{width:'26px'}}> 
                          <InputGroup.Checkbox/>
                          </th>
                          <th>NAME</th>
                          <th>EMAIL</th>
                          <th>LAST SEEN</th>
                          <th>SIGN UP</th>
                          <th>PLAN</th>
                          <th>ID</th>
                          <th>COUNTRY</th>
                          <th></th> 
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                        <tr>
                          <td> 
                            <InputGroup.Checkbox/>
                          </td>
                          <td>
                            <img src={customer} alt=""/>Mark
                          </td>
                          <td>beatrice@gmail.com</td>
                          <td>just now</td>
                          <td>3 month ago</td>
                          <td>standard</td>
                          <td>559</td>
                          <td>Czech Republic</td>
                          <td>...</td> 
                        </tr>
                       
                       </tbody>
                    </Table>
              </div>
               </div>
               </div>
     </div>
    
    </>
     );
}
