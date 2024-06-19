import React from "react";
import "../styles/card.scss";


// url주소, 책갈피, 즐겨찾기 아이콘
const Card = ({data}) => {
    const {url, content} = data;

    return (
        <li>
            <div>
                <div className="title">{url}</div>
                <div className="content">{content}</div>
            </div>
            
           
        </li>
    )
}

export default Card;