import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import {getBookMarkList, postBookMarkList, getGroupDataList} from './firebase.config';
import ModalBox from "./components/ModalBox";
import Box from './components/Box';
import { getGroupList } from './Logics';
import ModalList from './components/ModalList';

function App() {
    const [selectData, setSelectData] = useState([]);
    const [groupList, setGroupList] = useState([]);
    const [viewModal, setViewModal] = useState({
        open: false,
        data: [],
    })
    const [openModal, setOpenModal] = useState({
        "add": false,
        "view": false,
    });

    useEffect(() => {
        (async () => {
            const res = await getBookMarkList();
            const groupList = getGroupList(res);
            setGroupList(groupList);
            setSelectData(res);
        })();
    }, [])

    const onToggleModal = (id) => {
        return setOpenModal((prev) => {
            return {
                ...prev,
                [id]: !prev[id],
            }
        })
    }


    const callbackFunc = {
        onClickGroupBox: async (group) => {
            console.log(group)
            const res = await getGroupDataList(group)
        
            if(res.length > 0) {
                callbackFunc.onToggleViewModal(true, res)
            }
            
        },

        onToggleViewModal: (flag, data) => {
            if(flag) {
                setViewModal(() => {
                    return {open: true, data}
                })
            }else{
                setViewModal((prev) => {return {open: !prev.open, data:[]}})
            }
        }

    }


    const onClickBtn = (e, cb) => {
        switch (e.target.id){
            case "addModal":
                console.log(e.target.innerText)
                switch (e.target.innerText) {
                    case "저장":
                        (async () => {
                            const param = {
                                content: cb.contents,
                                url: cb.url,
                                group: "테스트",
                                storeTime: new Date(),
                                deleteTime: "",
                            }
                            console.log(param)
                            await postBookMarkList(param)
                            onToggleModal("add")
                            await getBookMarkList();
                            
                        })();

                        break;

                    case "취소":
                    default:
                        onToggleModal("add")
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

        {viewModal.open && <ModalList
          id="viewModal"
          list={viewModal.data}
          onClickBtn={callbackFunc.onToggleViewModal}
        />}


        <Header onClickBtn={onToggleModal}/>

     
            <div className="boxWrapper">
                {groupList.map((group) => {
                    return <Box key={group} group={group} onClick={callbackFunc.onClickGroupBox}/>
                })}
            </div>
       
     
    </>
    
  );
}

export default App;
