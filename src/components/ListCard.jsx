import React from "react";
import "../styles/_listcard.scss"
const ListCard = ({url, content}) => {
    return (
        <li className="listCardContainer">
            <div className="innerContainer">
            
                    {url}
                    <p>{content}</p>
               
                
                
            </div>
         
            
        </li>
    )
}

export default ListCard;