import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import Header from './components/Header';
import React, {useEffect} from 'react';
import {getBookMarkList} from './firebase.config';
import Button from './components/Button';

let test = Array.from({length: 20}, () => { return {url: "www.naver.com", content: "네이버"}})

function App() {
    useEffect(() => {
        (async () => {
            const res = await getBookMarkList("book-mark")
            console.log(res)
        })();
    }, [])

  return (
    <>
        <Header/>
        <div style={{display: 'flex'}}>
            <SearchInput hintText={"추가할 URL을 입력해주세요."}/>
            <Button size={"medium"} color={'gray'}>추가</Button>
        </div>

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
