import classNames from "classnames/bind";
import React from "react";
import "../styles/_input.scss"
const SearchInput = ({hintText, size, multi}) => {
    return (
        <>
            {multi ? <textarea placeholder={hintText}/> : 

                <div className={classNames("box", size)}>
                    <input placeholder={hintText}/>
                </div>
            }
        </>

    )
    
}

export default SearchInput;

SearchInput.defaultProps = {
    size: "medium",
}