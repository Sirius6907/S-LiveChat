import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("slivechat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("slivechat-theme", theme);
    set({ theme });
  },
}));
