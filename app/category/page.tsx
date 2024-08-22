import { Card } from "@/components";


const test = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
]

const CategoryMain = () => {
    return (
        <div className="hidden sm:flex flex-col">
            <h2 className="title"> 카테고리</h2>

            <div className="flex w-full space-x-4">
                 <Card width={'25%'} bgColor="white" minHeight="0">
                        {test.map((item, index) => <div key={index}>{item}</div>)}
                </Card>

                <Card width={'75%'} bgColor="black" minHeight="0">
                    {test.map((item, index) => <div key={index}>{item}</div>)}
                </Card>
                
            </div>
            
        </div>
    )
}

export default CategoryMain;