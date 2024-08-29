"use client";
import { useRouter } from "next/navigation";
import {IconItem} from "./index";
import { MENU_ITEM } from "@/Enums/constants";
import { useMenu } from "@/hooks";
import url from "@/Enums/url";
import {getURL} from "@/utils";

interface MenuItemType {
    id: string,
    icon: string,
    text: string,
}

const Navigation = () => {
    const router = useRouter();
    const {status} = useMenu(state => state);

    const onMoveURL = (text: string) => {
        router.push(getURL(text))
    }

    return (
        <div className={"hidden sm:block fixed w-[320px] h-full bg-gray-200"}>
           <img className="m-2" src="/mainLogo.svg" alt="아이콘" width="65"/>
          
           {MENU_ITEM.map((item) => {
                return (
                    <IconItem key={item.id} icon={item.icon} text={item.text} onClickItem={onMoveURL}/>
            )
            })}
           
        </div>
    )
} 

export default Navigation