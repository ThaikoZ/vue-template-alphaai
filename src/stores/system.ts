import { defineStore } from "pinia";
import { ref, watch } from "vue";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME = "light";

export const useSystemStore = defineStore("system", () => {
  const theme = ref<"light" | "dark">(
    (localStorage.getItem(THEME_STORAGE_KEY) as "light" | "dark") ||
      DEFAULT_THEME
  );

  const setTheme = (newTheme: "light" | "dark") => {
    theme.value = newTheme;
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme.value === "light" ? "dark" : "light");
  };

  watch(
    theme,
    (newTheme) => {
      document.body.setAttribute("data-theme", newTheme);
    },
    { immediate: true }
  );

  return {
    theme,
    setTheme,
    toggleTheme,
  };
});
