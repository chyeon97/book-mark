import React from 'react';
import '../styles/_header.scss';
import SearchInput from './SearchInput';
import AddIcon from '../images/addicon.png'


const Header = ({onClickBtn}) => {
    return (
        <div className="container">
            {/* <img src={ICON} width={40}/> */}
            <SearchInput id={"test"} size={"large"} hintText={"저장 또는 조회할 url(단어)를 입력해주세요."}/>
            <img id={"addModal"} src={AddIcon} alt="추가" width={50} height={50} onClick={() => onClickBtn("add")}/>
            {/* <Button className="addBtn" id={"addModal"} size={"medium"} color={'gray'} onClick={onClickBtn}>추가</Button> */}
        </div>
    );
}

export default Header