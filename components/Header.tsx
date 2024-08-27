"use client";
import React from "react";
import Button from "./Button";
import {HEADER_BUTTONS} from '@/Enums/constants'
import { useMenu } from "@/hooks";

const Header = () => {
    const {status} = useMenu(state => state);
    console.log( status)
    return (
        <div className={`${status ? "hidden": "flex sm:h-16 justify-between items-center sm:px-3"}`}>
            {HEADER_BUTTONS.map((info) => {
                return (
                    <Button key={info.id} id={info.id} sm_show={info.sm_show} icon={info.icon} iconStyle={{ width: info.width, hoverStyle: info.hoverStyle}} />
                )
            })}
        </div>
    )
}

export default Header;