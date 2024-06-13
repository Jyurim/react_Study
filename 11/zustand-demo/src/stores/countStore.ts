import { create } from "zustand";

type CountStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
