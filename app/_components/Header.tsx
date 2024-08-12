"use client";
import React from "react";
import Button from "./Button";
import {HEADER_BUTTONS} from '@/utils/constants'
import { useMenu } from "@/stores";

const Header = () => {
    const {status} = useMenu(state => state);
    console.log( status)
    return (
        <div className={`${status ? "hidden": ""} flex container h-20 justify-between items-center px-3`}>
            {HEADER_BUTTONS.map((info) => {
                return (
                    <Button key={info.id} id={info.id} sm_show={info.sm_show} icon={info.icon} iconStyle={{ width: info.width, hoverStyle: info.hoverStyle}} />
                )
            })}
        </div>
    )
}

export default Header;