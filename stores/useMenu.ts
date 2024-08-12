import {create} from 'zustand'

interface MenuState {
    status: boolean,
    onToggleStatus: () => void,
}

const useMenu = create<MenuState>(set => ({
    status: false,
    onToggleStatus: () => set(state => ({status: !state.status}))
}));

export default useMenu;