import React from "react";
import "../styles/input.scss"
const SearchInput = ({hintText}) => {
    return (
        <div className="box">
            <input placeholder={hintText}></input>
        </div>
    )
    
}

export default SearchInput;