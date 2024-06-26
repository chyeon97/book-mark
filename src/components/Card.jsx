import React from "react";
import "../styles/_card.scss";
import Button from './Button';


// url주소, 책갈피, 즐겨찾기 아이콘
const Card = ({data, id, onClick}) => {
    const {url, content} = data;

    return (
        <li>
            <div>
                <div className="title">{url}</div>
                <div className="content">{content}</div>
            </div>
            <Button id={id} size="medium" color={"pink"} onClick={onClick}>열기</Button>
        </li>
    )
}

export default Card;