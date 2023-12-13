import { create } from "zustand";

export const useNewMessageVisibilityStore = create((set) => ({
  isNewMessageVisible: false,
  setNewMessageVisible: (value) => set({ isNewMessageVisible: value }),
}));
