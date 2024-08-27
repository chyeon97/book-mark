"use client"
import { useMenu } from "@/hooks"

interface BoxType {
    children: React.ReactNode 
}

const Box = ({children} : BoxType) => {
    const {status} = useMenu(state => state);
    console.log(status)

    return (
        <div className={status ? "hidden" : "flex flex-col h-[calc(100%-10rem)] sm:mx-[400px] sm:w-[calc(100%-500px)]"}>
          {children}
        </div>
    )
}

export default Box;