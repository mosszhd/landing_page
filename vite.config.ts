import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), ""); // third param: prefix filter ("" = no filter)

  return {
    base: env.VITE_BASE_PATH || "/landing_page", // use env variable
    plugins: [react(), tailwindcss()],
  };
});
