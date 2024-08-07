import { Header, Navigation } from "./_components";

const MyBookMark = () => {
  const headerList = ["화면모드 전환"]
  return (
    <div>
      <div className="flex">
        <Navigation/>
        <Header list={headerList}/>
      </div>
     
      
    </div>
   
  )
}

export default MyBookMark;