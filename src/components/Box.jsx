import React from "react";
import "../styles/_box.scss";
import TEST from '../images/프로그래머스.png'

const Box = ({group, onClick}) => {
    return (
        <div className="rootWrapper" onClick={() => onClick(group)}>
            <div className="boxContainer">
            <div className="imgBx">
                <img src={TEST} />
                {/* 썸네일 추가 필요 */}
            </div>
            <div className="content">
                <h3>{group}</h3>
                <p>sub text</p>
            </div>
            </div>
        </div>
               
    )
}

export default Box;