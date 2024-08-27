import { CATEGORY } from '@/Enums/constants';
import {create} from 'zustand'
import { combine } from 'zustand/middleware'


interface MenuState extends CategoryState, EnrollState{
    status: boolean,
    onToggleStatus: () => void,
}

interface CategoryState {
    open: boolean,
    selected: string,
    onSelectedItem: (text: string) => void,
    onToggleDropDown: () => void,
}

interface EnrollState {
    openForm: boolean,
    category: string,
    url: string,
    note: string,
    onToggleForm : () => void,
}


const useMenu = create<MenuState>(
    combine(
        {
            open: false,
            status: false,
            selected: CATEGORY[0].category,
            openForm: false,
            category: "",
            url: "",
            note: "",
        }, 
        (set) => ({
            onToggleStatus: () => set(state => ({status: !state.status})),
            onSelectedItem: (text) => set(state => {return state.selected != text ? ({selected: text}): state}),
            onToggleDropDown: () => set(state => ({open: !state.open})),
            onToggleForm: () => set(state => ({openForm: !state.openForm}))
        })
    )
);

export default useMenu;