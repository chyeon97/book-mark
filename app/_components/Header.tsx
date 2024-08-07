import React, { ReactElement } from "react";


interface HeaderProps { 
    list: string[];
    bgColor?: string;
    fgColor?: string;
}
const Header = ({list, bgColor, fgColor}: HeaderProps) => {
    return (
        <div className="flex container h-20 justify-end items-center bg-gray-200">
            {list.map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}

export default Header;