import React from "react";
import '../styles/_modalbox.scss'
import SearchInput from "./SearchInput";
import Button from "./Button";

const ModalBox = ({onClickClose, })=> {
    return (
        <>
        
        <div className="wrapper" onClick={onClickClose}/>
            <div className="container_box">
                <SearchInput hintText={"저장할 URL를 입력하세요."}/>
                <br/>
                <SearchInput multi={true} hintText={"간단한 설명을 기입하세요."}/>
                <br/>
                <div>
                <Button size="medium" color="blue">저장</Button>
                </div>
               
            </div>
            </>
       
    )
}

export default ModalBox;