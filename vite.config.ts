import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import hercules from "@usehercules/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    hercules(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
