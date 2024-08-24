"use client";
import React, {useState, useEffect} from "react";
import { useMenu } from "@/hooks"

interface DropDownProps {
    children: React.ReactNode
}

const DropDwonContainer = ({children}: DropDownProps) => {
    const {open, selected, onToggleDropDown} = useMenu((state) => state);
   
    const onToggle = () => {
        return onToggleDropDown();
    }

    return (
        <>
            <div className="flex justify-between border border-solid border-gray-300 rounded-md p-3">
                <h3>{selected}</h3>
                <img 
                width="20" 
                className={`cursor-pointer duration-100 ease-out ${open ? "rotate-180 " : ""}`} 
                src="https://img.icons8.com/ios-glyphs/30/sort-down.png" 
                alt="bottom_icon"
                onClick={()=> onToggle()}
                />
            
            </div>
            {open && children}
        </>
        
    )
}


export default DropDwonContainer;