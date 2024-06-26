import React, {useEffect, useState} from 'react';
import '../styles/_modalbox.scss'
import SearchInput from "./SearchInput";
import Button from "./Button";

const URL = "url";
const CONTENTS = "contetns";

const ModalBox = ({id, buttons, onClickBtn })=> {
    const [inputInfo, setInputInfo] = useState({
        [URL]: "",
        [CONTENTS]: "",
    })

    const onChangeInput = (e) => {
        setInputInfo((prev) => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }


    const onClickStoreBtn = (e) => {
        return onClickBtn(e, inputInfo)
    }

    useEffect(() => {
        console.log(inputInfo)
    })
    return (
        <>
            <div id={id} className="wrapper" onClick={onClickBtn}/>

            <div className="container_box">
                <SearchInput id={URL} hintText={"저장할 URL를 입력하세요."} onChange={onChangeInput}/>
                <br/>
                <SearchInput id={CONTENTS} multi={true} hintText={"간단한 설명을 기입하세요."} onChange={onChangeInput}/>
                <br/>
                <div>

                    {buttons.map((text) => {
                        let color = text == "저장" ? "blue" : "gray"
                        let onClickFunc = text == "저장" ? onClickStoreBtn : onClickBtn;
                       return (
                            <Button id={id} size="medium" color={color} onClick={onClickFunc}>
                                {text}
                            </Button>
                       )
                    })}
                </div>

            </div>
        </>
       
    )
}

export default ModalBox;