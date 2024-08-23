import { Card, List } from "@/components";
import {CATEGORY, CATETORY_CONTETNS} from '@/Enums/constants';

const CategoryMain = () => {
    return (
        <>
            <h2 className="title"> 카테고리</h2>

            <div className="flex flex-col w-full space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
                 {/* 모바일 화면에서는 셀렉박스로 보이게끔 수정 필요 */}
                 <Card width={'25%'} bgColor="white" minHeight="3rem" padding="0">
                    <ul className="p-2 divide-y divide-slate-200">
                        {CATEGORY.map((item, index) => <List key={index} col={false}>{item}</List>)}
                    </ul>
                </Card>

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