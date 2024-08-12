"use client";
import {IconItem} from "./index";
import { MENU_ITEM } from "@/utils/constants";
import { useMenu } from "@/stores";

const Navigation = () => {
    const {status} = useMenu(state => state);

    return (
        <div className={`${status ? "hidden" : "hidden sm:block h-screen w-80 bg-gray-200"}`}>
           <img className="m-2" src="/mainLogo.svg" alt="아이콘" width="65"/>
          
           {MENU_ITEM.map((item) => {
                return (
                    <IconItem key={item.id} icon={item.icon} text={item.text} hoverBottom={false}/>
            )
            })}
           
        </div>
    )
}

export default Navigation