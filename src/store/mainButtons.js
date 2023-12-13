import { create } from 'zustand'

const useButtonStore = create((set) => ({
  buttonState: false,
  openButtons: () => set({ buttonState: true }),
  closeButtons: () => set({ buttonState: false }),
}));

export default useButtonStore;
