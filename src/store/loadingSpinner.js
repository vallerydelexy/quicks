import { create } from 'zustand'

const useLoadingStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}));

export default useLoadingStore;
