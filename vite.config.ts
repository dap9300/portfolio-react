import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";

export default defineConfig({
  plugins: [react(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Assumendo che il codice React sia in client/src
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    strictPort: true,
    host: true,
    hmr: {
      overlay: false,
    },
    middlewareMode: true, // Abilita il supporto per middleware lato server
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
});
