import classNames from "classnames/bind";
import React from "react";
import "../styles/_input.scss"
const SearchInput = ({id, hintText, size, multi, onChange}) => {
    return (
        <>
            {multi ? <textarea id={id} placeholder={hintText} onChange={onChange}/> :

                <div className={classNames("box", size)}>
                    <input id={id} placeholder={hintText} onChange={onChange}/>
                </div>
            }
        </>

    )
    
}

export default SearchInput;

SearchInput.defaultProps = {
    id: "",
    hintText: "",
    size: "medium",
    multi: false,
    onChange: () => {}
}