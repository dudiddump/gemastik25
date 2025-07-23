import { create } from "zustand";

interface ToggleStore {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  toggleOpen: () => void;
}

export const useToggleStore = create<ToggleStore>((set) => ({
  isOpen: false,
  setIsOpen: (state) => set({ isOpen: state }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
