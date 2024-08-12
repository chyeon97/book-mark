"use client";
import React from "react";
import { useMenu } from "@/stores";

interface ButtonProps {
    id: string,
    sm_show?: boolean,
    icon?:string,
    text?:string,
    iconStyle: {width: number, height?: number, hoverStyle?: {default: string, dark: string}},
    textStyle?: {color: string, size: string}, // TODO 폰트사이즈, 색상 -> 나중에 tailwind 형식으로 변경하기 
}

const Button = ({id, sm_show, icon, text, iconStyle, textStyle} : ButtonProps) => {
    const {onToggleStatus} = useMenu(state => state);

    const onClickBtn = () => {
        if(id == "menu"){
            onToggleStatus();
        }
    }
    
    return (
        <button className={`${sm_show && "visible sm:invisible"} flex box-border border border-none rounded-md py-3 px-3 bg-gray-100 hover:${iconStyle?.hoverStyle?.default}`}
            onClick={() => onClickBtn()}
        >
            {icon && <img width={iconStyle ? `${iconStyle.width}` : "50"} height="50" src={icon} alt="아이콘"/>}
            {text && <p style={textStyle ? {...textStyle} : {}}>{text}</p>}
        </button>
    );
}

export default Button;