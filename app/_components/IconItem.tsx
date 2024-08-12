import React from "react";

interface IconItemProp {
    icon: string,
    text?: string,
    bgColor?: string,
    hoverColor?: string,
}

const IconItem = ({icon, text, bgColor, hoverColor} : IconItemProp) => {

    return (
        <div className={`flex w-full py-5 px-4 my-5 ${bgColor ? bgColor : "bg-gray-200"} hover:${hoverColor ? hoverColor : "bg-gray-100"} cursor-pointer`}>
            <img className="mr-4" src={icon} alt="아이콘" width="30" height="30"/>
            <p className="font-bold">{text}</p>
        </div>
    )
}

export default IconItem;