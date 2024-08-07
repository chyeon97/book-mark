import React, { ReactElement } from "react";
import Button from "./Button";

const buttonList = [
    { sm_show: true, icon: "https://img.icons8.com/ios-filled/50/menu--v1.png", width: 30,},
    { sm_show: false, icon: "https://img.icons8.com/ios/50/do-not-disturb-2.png", width: 30, hoverStyle: { default: "bg-gray-200", dark: "bg-white" } },
]


const Header = () => {
    return (
        <div className="flex container h-20 justify-between items-center px-3">
            {buttonList.map((info) => {
                return (
                    <Button sm_show={info.sm_show} icon={info.icon} iconStyle={{ width: info.width, hoverStyle: info.hoverStyle}} />
                )
            })}
        </div>
    )
}

export default Header;