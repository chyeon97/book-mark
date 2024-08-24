import { CATEGORY } from '@/Enums/constants';
import {create} from 'zustand'
import { combine } from 'zustand/middleware'


interface MenuState extends CategoryState{
    status: boolean,
    onToggleStatus: () => void,
}

interface CategoryState {
    open: boolean,
    selected: string,
    onSelectedItem: (text: string) => void,
    onToggleDropDown: () => void,
}


const useMenu = create<MenuState>(
    combine(
        {
            open: false,
            status: false,
            selected: CATEGORY[0].category
        }, 
        (set) => ({
            onToggleStatus: () => set(state => ({status: !state.status})),
            onSelectedItem: (text) => set(state => {return state.selected != text ? ({selected: text}): state}),
            onToggleDropDown: () => set(state => ({open: !state.open}))
        })
    )
);

export default useMenu;