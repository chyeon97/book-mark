import { Header, Navigation } from "./_components";

const MyBookMark = () => {
  const headerList = ["아이콘", "화면모드 전환"]
  return (
    <div>
      <Header list={headerList}/>
      <Navigation/>
    </div>
   
  )
}

export default MyBookMark;