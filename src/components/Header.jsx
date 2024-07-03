import React from 'react';
import '../styles/_header.scss';
import AddIcon from '../images/addicon.png'


const Header = ({onClickBtn}) => {
    return (
        <div className="container">
            {/* <img src={ICON} width={40}/> */}
            {/* <SearchInput size={"small"} hintText={"찾을 단어를 입력해주세요."}/> */}
            <img src={AddIcon} alt="추가" width={50} height={50}/>
            {/* <Button className="addBtn" id={"addModal"} size={"medium"} color={'gray'} onClick={onClickBtn}>추가</Button> */}
        </div>
    );
}

export default Header