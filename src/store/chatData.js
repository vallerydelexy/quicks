import { create } from 'zustand'

const useChatStore = create((set) => ({
  data: undefined,
  setData: (data) => set({data}),
  clearData: () => set({data: undefined}),
}));

export default useChatStore;
