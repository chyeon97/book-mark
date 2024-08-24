"use client"

import { useMenu } from "@/hooks"

interface childrenType {
    id: string | number,
    category: string,
    note?: string,
    url?: string,
}

interface ListProps {
    children: childrenType
    col: boolean,
}

const List = ({children, col}:ListProps) => {
    const {onSelectedItem, onToggleDropDown} = useMenu((state) => state)

    const onClickItem = (e: React.MouseEvent<HTMLLIElement>) => {
        onSelectedItem(e.currentTarget.innerText || "")
        onToggleDropDown();
    }

    const onClickURL = () => {
        return window.open(children.url)
    }

    const renderContainer = (): React.ReactElement => {
        if(col) {
            return (
                <li className="list justify-between items-center" onClick={() => onClickURL()}>
                    <div className="list list-col">
                        <p className="text-lg">{children.url}</p>
                        <p className="text-sm">{children.note}</p>
                    </div>

                    <img width="20" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1"/>
                </li>
            )
        }
        return (
            <li className="list" onClick={onClickItem}>{children.category}</li>
        )
    }

    

    return (
        renderContainer()
    )
}

export default List;