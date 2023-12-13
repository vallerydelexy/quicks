import { create } from 'zustand'

const usePopupStore = create((set) => ({
  isOpen: false,
  content: "default",
  thread: "default",
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
  setContent: (content) => set({ content }),
  setThread: (thread) => set({thread}),
}));

export default usePopupStore;
