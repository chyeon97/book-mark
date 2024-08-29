"use client"
import React from "react";

interface IconItemProp {
    icon: string,
    text: string,
    bgColor?: string,
    hoverColor?: string,
    onClickItem: (text: string) => void,
}

const IconItem = ({icon, text, bgColor, hoverColor, onClickItem} : IconItemProp) => {

    return (
        <div onClick={() => onClickItem(text)}
        className={`flex w-full py-5 px-4 my-5 ${bgColor ? bgColor : "bg-gray-200"} hover:${hoverColor ? hoverColor : "bg-gray-100"} cursor-pointer`}>
            <img className="mr-4" src={icon} alt="아이콘" width="30" height="30"/>
            <p className="font-bold">{text}</p>
        </div>
    )
}

export default IconItem;