import { defineStore } from "pinia";

export type ThemeState = "light" | "dark";

export const DEFAULT_THEME: ThemeState = "light";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: DEFAULT_THEME as ThemeState,
  }),
  actions: {
    setTheme(newTheme: ThemeState) {
      this.theme = newTheme;
      document.body.setAttribute("data-theme", newTheme);
    },
    toggleTheme() {
      this.setTheme(this.theme === "light" ? "dark" : "light");
    },
    initTheme() {
      document.body.setAttribute("data-theme", this.theme);
    },
  },
  persist: {
    key: "theme-store",
    storage: localStorage,
  },
});
