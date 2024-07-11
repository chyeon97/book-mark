import React from "react";
import '../styles/_modalbox.scss'
import ListCard from "./ListCard";
import classNames from "classnames";

const ModalList = ({list, onClickBtn}) => {
    console.log(list)
    return (
        <>
            <div className="wrapper" onClick={() => onClickBtn(false)}></div>
            <div className={classNames("container_box", "viewList")}>
                <ul>
                    {list.map((item) => {
                        return (<ListCard key={item.url} url={item.url} content={item.content}/>)
                    })}
                </ul>

            </div>
        </>
    )
}

export default ModalList;