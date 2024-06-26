import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import {getBookMarkList, postBookMarkList} from './firebase.config';
import Button from './components/Button';
import ModalBox from "./components/ModalBox";

let test = Array.from({length: 20}, () => { return {url: "www.naver.com", content: "네이버"}})

function App() {
    const [selectData, setSelectData] = useState([]);
    const [openModal, setOpenModal] = useState({
        "add": false,
    });

    useEffect(() => {
        (async () => {
            const res = await getBookMarkList("book-mark")
            setSelectData(res);
        })();
    }, [])

    const onToggleModal = (id, status) => {
        return setOpenModal((prev) => {
            return {
                ...prev,
                [id]: status,
            }
        })
    }


    const onClickBtn = (e, cb) => {
        console.log(e.target.id)
        switch (e.target.id){
            case "addModal":
                console.log(e.target.innerText)
                switch (e.target.innerText) {
                    case "추가":
                        onToggleModal("add", true)
                        break;

                    case "저장":
                        (async () => {
                            const param = {
                                content: cb.contents,
                                url: cb.url,
                                storeTime: new Date(),
                                deleteTime: "",
                            }
                            await postBookMarkList(param)
                        })();

                        break;

                    case "취소":
                    default:
                        onToggleModal("add", false)
                        break;
                }
                break;


            default:
                window.open(e.target.id)
                break;
        }
    }


  return (
    <>
      {openModal.add && <ModalBox
          id="addModal"
          buttons={["취소", "저장"]}
          onClickBtn={onClickBtn}
      />}
        <Header/>
        <Button id={"addModal"} size={"medium"} color={'gray'} onClick={onClickBtn}>추가</Button>
        <SearchInput hintText={"찾을 단어를 입력해주세요."}/>

        <ul className="wrap">
          {selectData.map((item) => {
            return <Card id={item.url} key={item.url} data={item} onClick={onClickBtn}/>
          })}
        </ul>
      
     
     
    </>
    
  );
}

export default App;
