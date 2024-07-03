import React from "react";
import "../styles/_box.scss";
import TEST from '../images/프로그래머스.png'

const Box = ({group}) => {
    return (
        <div className="rootWrapper">
            <div className="boxContainer">
            <div className="imgBx">
                <img src={TEST} />
            </div>
            <div className="content">
                <h2>TEST</h2>
                <p>sub text</p>
            </div>
            </div>
        </div>
               
    )
}

export default Box;