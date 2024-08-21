"use client";
import { useRouter } from "next/navigation";
import {IconItem} from "./index";
import { MENU_ITEM } from "@/Enums/constants";
import { useMenu } from "@/hooks";
import url from "@/Enums/url";

interface MenuItemType {
    id: string,
    icon: string,
    text: string,
}

const Navigation = () => {
    const router = useRouter();
    console.log(router)
    const {status} = useMenu(state => state);

    const onMoveUrl = (text: string) => {
        switch (text) {
            case "대시보드":
                router.push(url.MAIN)
                break;
            case "카테고리":
                router.push(url.CATEGORY)
                break;  
            case "알림":
                break;  
        }
    }

    return (
        <div className={"hidden sm:block fixed w-[320px] h-full bg-gray-200"}>
           <img className="m-2" src="/mainLogo.svg" alt="아이콘" width="65"/>
          
           {MENU_ITEM.map((item) => {
                return (
                    <IconItem key={item.id} icon={item.icon} text={item.text} onClickItem={onMoveUrl}/>
            )
            })}
           
        </div>
    )
}

export default Navigation