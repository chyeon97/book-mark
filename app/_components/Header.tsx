import React, { ReactElement } from "react";


interface HeaderProps { 
    list: string[];
    bgColor?: string;
    fgColor?: string;
}
const Header = ({list, bgColor, fgColor}: HeaderProps) => {
    return (
        <div className="flex flex-row bg-green-500">
            {list.map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}

export default Header;