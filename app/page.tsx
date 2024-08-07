import { Header, Navigation } from "./_components";

const MyBookMark = () => {
  const headerList = ["화면모드 전환"]
  
  return (
    <div>
      <div className="flex">
        <Navigation/>
        <Header/>
      </div>
     
      
    </div>
   
  )
}

export default MyBookMark;