import React from 'react';
import {SurveyNavBar} from '../survey/components/surveyNavBar';
import { SurveyAnalyzeSideBar } from '../survey/surveyAnalyze/surveyAnalyzeSideBar';

import { Bar ,Doughnut} from 'react-chartjs-2'
import './dashboard.css';  


export const Dashboard = () => {
    return (
      <>
      <SurveyNavBar />
            <div className="container-fluid analyze">
                <div className="row">
                    <SurveyAnalyzeSideBar />
                    <div className="col-lg-10">
                     
                        <div className="row content">
                             <div className="col-3 colLeft">
                                 <p>Respondents:145 of 145</p>
                             </div>

                             <div className="col-9 colRight">
                                 <button>Export Data & Report</button>
                             </div>
                            
                            <br/>

                            <div className="BarStyle">
                              <Bar
                              data={{
                                labels:['red','blue','yellow','green','purple'] ,
                                datasets:[
                                  {
                                    label:'Q1: What Is Your Favourite Color?',
                                      data:[40,20,30,90,30],
                                      backgroundColor:[
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 206, 86)',
                                        'rgb(75, 192, 192)',
                                        'rgb(153, 102, 255)' 
                                      ]
                                  },
                                ],
                              
                              }}

                                height={400}
                                width={600}
                                options={{
                                maintainAspectRatio:false,
                                scales:{
                                  yAxes:[
                                    {
                                      ticks:{
                                        beginAtZero:true,
                                      },
                                    },
                                  ],
                                },
                                legend:{
                                  labels:{
                                    fontSize:20,
                                    fontColor:'#000'
                                  }
                                }
                              }}
                              />
                            </div>


  
                            <div className="DoughnutStyle">
                            
                          <Doughnut
                              data={{
                                labels:['75% male','25% Female'] ,
                                datasets:[
                                  {
                                      data:[75,25],
                                      backgroundColor:[ 
                                        'rgb(255, 206, 86)' ,
                                        'rgb(255, 99, 132)'
                                      ]
                                  },
                                ],
                              
                              }}

                                height={400}
                                width={600}
                                options={{
                                maintainAspectRatio:false,
                                scales:{
                                  yAxes:[
                                    {
                                      ticks:{
                                        beginAtZero:true,
                                      },
                                    },
                                  ],
                                },
                                legend:{
                                  labels:{
                                    fontSize:20,
                                    fontColor:'#000'
                                  }
                                }
                              }}
                              />
                            </div>

                    </div>
               </div>
               </div>
     </div>
    
    </>
     );
}
