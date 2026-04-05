import { create } from "zustand";

type LayoutState = {
  view: string;
  open: (layout: string) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  view: "home",
  open: (layout) => set({ view: layout }),
}));