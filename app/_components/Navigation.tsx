import React from "react";
import {IconItem} from "./index";


const sample = [
    
    {
        id: "1",
        icon: "https://img.icons8.com/ios/50/settings--v1.png",
        text: "설정"
    }
]

const Navigation = () => {
    return (
        <div className="hidden sm:block h-screen w-80 bg-gray-200">
           <img className="m-2" src="/mainLogo.svg" alt="아이콘" width="65"/>
            {sample.map((item) => {
                return (<IconItem key={item.id} icon={item.icon} text={item.text}/>)
            })}

        </div>
    )
}

export default Navigation