import React, { ReactElement } from "react";


interface HeaderProps { 
    list: string[];
    bgColor?: string;
    fgColor?: string;
}
const Header = ({list, bgColor, fgColor}: HeaderProps) => {
    return (
        <div className="flex mx-auto h-20 justify-between items-center bg-green-700">
            {list.map((item) => {
                return (
                    <div>{item}</div>
                )
            })}
        </div>
    )
}

export default Header;