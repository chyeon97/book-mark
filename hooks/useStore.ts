import {create} from 'zustand';

interface ToggleState {
    darkMode : boolean;
    onToggleMode: () => void;
}

const useStore = create<ToggleState>((set) => ({
    darkMode: true,
    onToggleMode: () => set((state) => ({darkMode: !state.darkMode}))
}))

export default useStore