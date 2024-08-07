import React, { ReactElement } from "react";
import Button from "./Button";

const buttonList = [
    { icon: "https://img.icons8.com/ios/50/do-not-disturb-2.png", width: 35, hoverStyle: { default: "bg-gray-200", dark: "bg-white" } },
]


const Header = () => {
    return (
        <div className="flex container h-20 justify-end items-center px-3">
            {buttonList.map((info) => {
                return (
                    <Button icon={info.icon} iconStyle={{ width: info.width, hoverStyle: info.hoverStyle}} />
                )
            })}
        </div>
    )
}

export default Header;