import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import Header from './components/Header';
import React, {useEffect, useState} from 'react';
import {getBookMarkList} from './firebase.config';
import Button from './components/Button';
import ModalBox from "./components/ModalBox";

let test = Array.from({length: 20}, () => { return {url: "www.naver.com", content: "네이버"}})

function App() {
  const [add, setAdd] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await getBookMarkList("book-mark")
            console.log(res)
        })();
    }, [])


    const onClickAdd = () => {
      console.log("test")
      return setAdd(true);
    }

    const onClickClose = () => {
      return setAdd(false)
    }

  return (
    <>
      {add && <ModalBox onClickClose={() =>onClickClose() }/>}
        <Header/>
        <Button size={"medium"} color={'gray'} onClick={() => onClickAdd()}>추가</Button>
        <SearchInput hintText={"찾을 단어를 입력해주세요."}/>

        <ul className="wrap">
          {test.map((item, index) => {
            return <Card key={index} data={item}/>
          })}
        </ul>
      
     
     
    </>
    
  );
}

export default App;
