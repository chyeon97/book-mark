"use client"
import { useMenu } from "@/stores"
import IconItem from "./IconItem";
import { MENU_ITEM } from "@/utils/constants";

const MobileNavigation = () => {
    const {status, onToggleStatus} = useMenu(state => state);

    return (
        <div className={`${status ? "" : "hidden"} w-full h-screen bg-white p-5`}>
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
                return (<IconItem  key={item.id} icon={item.icon} text={item.text} bgColor="bg-white" hoverColor="bg-gray-50"/>)
              })}
            </div>
           
        </div>
    )
}
export default MobileNavigation
