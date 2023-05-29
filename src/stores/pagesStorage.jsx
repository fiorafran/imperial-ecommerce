import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePagesStore = create(persist((set) => ({
  isLoading: false,
  games: [],
  setLoading: (value) => set(() => ({ isLoading: value })),
  setGames: (games) => set(() => ({ games }))
}),
{
    name: "pages-cache",
}
));
