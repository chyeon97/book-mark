import { Card, SearchInput } from "@/components";



const DashBoard = () => {

  return (
    <div className="space-y-4">
        <div className="flexRowMode space-x-4">
          <Card width="50%" bgColor="black" minHeight="1rem" padding="10">
            <h2>북마크 등록</h2>
            <p className="text-4xl text-right">⇀</p> 
          </Card>

          <Card width="50%" bgColor="white" minHeight="1rem" padding="10">
            오늘 알람
          </Card>
        </div>
        
        <Card width="100%" bgColor="white" minHeight="2rem" padding="10">
          차트
        </Card>
     
    </div>

  )
}

export default DashBoard;