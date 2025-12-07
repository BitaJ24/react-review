import { create } from "zustand";

const useBear = create((set) => ({
  counts: {},
  increasePopulation: (id) =>
    set((state) => ({
      counts: { ...state.counts, [id]: (state.counts[id] || 0) + 1 },
    })),
  decreasePopulation: (id) =>
    set((state) => ({
      counts: { ...state.counts, [id]: (state.counts[id] || 0) - 1 },
    })),
  removeAllBears: (id) =>
    set((state) => ({
      counts: { ...state.counts, [id]: (state.counts[id] = 0) },
    })),
  // updateBears: (newBears) => set({ counts: newBears }),
}));

export default useBear;
