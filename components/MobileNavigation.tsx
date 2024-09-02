"use client"
import { useMenu } from "@/hooks"
import IconItem from "./IconItem";
import { MENU_ITEM } from "@/Enums/constants";
import {getURL} from "@/utils";
import {useRouter} from "next/navigation";

const MobileNavigation = () => {
  const router = useRouter();
    const {status, onToggleStatus} = useMenu(state => state);

    const onMoveURL = (text: string) => {
        router.push(getURL(text));
        onToggleStatus();
    }

    return (
        <div className={`${status ? "" : "hidden"} w-full bg-white p-5`}>
            <img 
                className="float-right hover:cursor-pointer" 
                width="30" 
                height="30" 
                src="https://img.icons8.com/parakeet-line/48/delete-sign.png" 
                alt="delete-sign"
                onClick={() => onToggleStatus()}
            />

            <div className="py-10">
              {MENU_ITEM.map((item) => {
                return (<IconItem  key={item.id} icon={item.icon} text={item.text} onClickItem={onMoveURL} bgColor="bg-white" hoverColor="bg-gray-50"/>)
              })}
            </div>
           
        </div>
    )
}
export default MobileNavigation
