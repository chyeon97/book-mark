import SearchInput from "./components/SearchInput";
import Card from "./components/Card";

let test = Array.from({length: 20}, () => { return {url: "www.naver.com", content: "네이버"}})

function App() {
  return (
    <>
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
