import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconItemProp {
    icon: string,
    text?: string
}

const IconItem = ({icon, text} : IconItemProp) => {
    return (
        <div className="flex w-full py-5 px-4 bg-yellow-400">
            <img className="mr-4" src={icon} alt="아이콘" width="30" height="30"/>
            <p className="font-bold">{text}</p>
        </div>
    )
}

export default IconItem;