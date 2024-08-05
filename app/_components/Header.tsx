import React, { ReactElement } from "react";


interface HeaderProps { 
    list: string[];
    bgColor?: string;
    fgColor?: string;
}
const Header = ({list, bgColor, fgColor}: HeaderProps) => {
    return (
        <div className="flex flex-row w-full bg-yellow-50">
            {list.map((item) => {
                return (
                    <div className="m-2">{item}</div>
                )
            })}
        </div>
    )
}

export default Header;