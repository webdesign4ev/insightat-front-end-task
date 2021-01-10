import React from 'react';
import {SurveyNavBar} from '../survey/components/surveyNavBar';
import { SurveyAnalyzeSideBar } from '../survey/surveyAnalyze/surveyAnalyzeSideBar';
 
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

import customer from '../assets/image/customer.png';

import './results.css';  


export const Results = () => {
    return (
      <>
      <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col">
                     
                        <div className="row header"> 
                         <div className="col-6"></div>
                          <InputGroup className="col-4">
                          <FormControl
                            placeholder="Search" 
                          />
                          <InputGroup.Append>
                            <button><i className="fa fa-search"></i></button>
                          </InputGroup.Append>
                        </InputGroup>

                         <button className="btnExport">Export Data & Report</button>
                             
   
                    </div>
              
              <div style={{marginTop:'20px'}}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th style={{width:'26px'}}> 
                          <InputGroup.Checkbox/>
                          </th>
                          <th>RESPONDENT</th>
                          <th>Q1</th>
                          <th>Q2</th>
                          <th>Q3</th>
                          <th>Q4</th>
                          <th>Q5</th>
                          <th>Q6</th>
                          <th>Q7</th>
                          <th>Q8</th>
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
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
                        </tr>
                        <tr>
                          <td>
                          <InputGroup.Checkbox/>
                          </td>
                          <td>
                          <img src={customer} alt=""/>Mark
                          </td>
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
                        </tr>
                        <tr>
                          <td>
                          <InputGroup.Checkbox/>
                          </td>
                          <td>
                          <img src={customer} alt=""/>Mark
                          </td>
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
                        </tr>
                        <tr>
                        <td>
                        <InputGroup.Checkbox/>
                        </td>
                          <td>
                          <img src={customer} alt=""/>Mark
                          </td>
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
                        </tr>
                        <tr>
                        <td>
                          <InputGroup.Checkbox/>
                        </td>
                          <td>
                             <img src={customer} alt=""/>Mark
                          </td>
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
                        </tr>
                        <tr>
                        <td>
                        <InputGroup.Checkbox/>
                        </td>
                          <td>
                          <img src={customer} alt=""/>Mark
                          </td>
                          <td>Otto</td>
                          <td>Blue</td>
                          <td>Course B</td>
                          <td>Marketing</td>
                          <td>6/10</td>
                          <td>6</td>
                          <td>Feature C</td>
                          <td>Strong</td>
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
