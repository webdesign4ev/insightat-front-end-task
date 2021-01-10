import React, { Component } from 'react';

interface IProps {
    theTitle: string,
    quesNum: number,
    theData: string[],
    logic :string,
    move :string,
    icon_duplicate: string,
    icon_trash:string,
    id:string
}
export const ToggleQuestion: React.SFC<IProps> = ({ theTitle, quesNum,id, theData,logic,move,icon_duplicate,icon_trash }) => {

    return ( 
        <>
            <div className="build-user-data">
                <div className="build-numberBox">
                    <span className="pt-4"> {quesNum}</span>
                </div>
                <div className="build-user-data-input" id="wlcome-screan" >
                    <p>{theTitle}</p>
                    <div className="build-iconbox">
                    <a href={"#"+id} data-toggle="collapse">
                        <img src={logic} className="build-accordion" alt="" />
                        </a>
                        <img src={move} alt="" />
                        <img src={icon_duplicate} alt="" />
                        <img src={icon_trash} alt="" />
                    </div>
                </div>
            </div>
            <div className="build-panel collapse" id={id}>
                <p> {theData[0]}</p>
                <p> {theData[1]}</p>
                <p>{theData[2]}</p>
            </div>

        </>
    )
}

