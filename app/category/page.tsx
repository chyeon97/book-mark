import { Card, DropDwonContainer, List } from "@/components";
import {CATEGORY, CATETORY_CONTETNS} from '@/Enums/constants';

const CategoryMain = () => {
    
    return (
        <>
            <h2 className="title"> 카테고리</h2>

            <div className="flex flex-col w-full space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
                {/* 모바일 화면 -> 드롭다운 */}
                <div className="block sm:hidden"> 
                    <DropDwonContainer>
                        <ul className="animate-slideDown mt-1 p-1 border border-solid border-gray-300 rounded-md divide-y divide-gray-200 sm:border-none sm:p-2">
                            {CATEGORY.map((item, index) => <List key={index} col={false}>{item}</List>)}
                        </ul>
                    </DropDwonContainer>
                </div>
                <div className="hidden sm:block">
                    <Card width={'25%'} bgColor="white" minHeight="3rem" padding="0">
                        <ul className="p-2 divide-y divide-slate-200">
                            {CATEGORY.map((item, index) => <List key={index} col={false}>{item}</List>)}
                        </ul>
                    </Card>
                </div>

                <Card width={'75%'} bgColor="black" minHeight="3rem" padding="0">
                    <ul className="p-2 ">
                        {CATETORY_CONTETNS.map((item, index) => <List key={index} col={true}>{item}</List>)}
                    </ul>
                </Card>
                
            </div>
            
        </>
    )
}

export default CategoryMain;