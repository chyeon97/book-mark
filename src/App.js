import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import Header from './components/Header';
import {useEffect} from 'react';
import {getBookMarkList} from './firebase.config';

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
        <SearchInput/>

        <ul className="wrap">
          {test.map((item, index) => {
            return <Card key={index} data={item}/>
          })}
        </ul>
      
     
     
    </>
    
  );
}

export default App;
