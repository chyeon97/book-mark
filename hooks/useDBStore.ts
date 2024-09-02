import {create} from 'zustand';

interface State {
  allGroupInfo: string[]
}

interface Action {
  setGroupInfo: (data: string[]) => void
}

const useDBStore = create<State & Action>((set) => ({
  allGroupInfo: [],

  setGroupInfo: (data: string[]) => set({allGroupInfo: data})
}))

export default useDBStore;