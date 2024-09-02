import { Card, DropDwonContainer, MyObjectList } from "@/components";
import {CATEGORY, CATETORY_CONTETNS} from '@/Enums/constants';
import MyUlContainer from "@/app/category/_components/MyUlContainer";

const CategoryMain = () => {
    
    return (
        <>
            <h2 className="title"> 카테고리</h2>

            <div className="flex flex-col w-full space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
                {/* 모바일 화면 -> 드롭다운 */}
                <div className="block sm:hidden"> 
                    <DropDwonContainer>
                        <MyUlContainer/>
                    </DropDwonContainer>
                </div>
                <div className="hidden sm:block">
                    <Card width={'25%'} bgColor="white" minHeight="3rem" padding="0">
                        <ul className="p-2 divide-y divide-slate-200">
                            {CATEGORY.map((item, index) => <MyObjectList key={index} col={false}>{item}</MyObjectList>)}
                        </ul>
                    </Card>
                </div>

                <Card width={'75%'} bgColor="black" minHeight="3rem" padding="0">
                    <ul className="p-2 ">
                        {CATETORY_CONTETNS.map((item, index) => <MyObjectList key={index} col={true}>{item}</MyObjectList>)}
                    </ul>
                </Card>
                
            </div>
            
        </>
    )
}

export default CategoryMain;