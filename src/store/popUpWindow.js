import { create } from 'zustand'

const usePopupStore = create((set) => ({
  isOpen: false,
  content: "default",
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
  setContent: (content) => set({ content }),
}));

export default usePopupStore;
