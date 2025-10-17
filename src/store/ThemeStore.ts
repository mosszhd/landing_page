import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // default theme is always light
      theme: "light",

      toggleTheme: () => {
        const newTheme: Theme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
        set({ theme: newTheme });
      },

      setTheme: (theme: Theme) => {
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }
        set({ theme });
      },
    }),
    {
      name: "theme",

      // on rehydrate, force light mode by default for everyone
      onRehydrateStorage: () => (state) => {
        if (typeof document !== "undefined") {
              // force light mode
          document.documentElement.classList.remove("dark");
          // reset persisted theme to "light"
          state && (state.theme = "light");
        }
      },
    }
  )
);
