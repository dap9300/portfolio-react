// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";

export default defineConfig({
  plugins: [react(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // Vercel si aspetta la cartella dist
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    strictPort: true,
    host: true,
    hmr: {
      overlay: false
    }
  },
});
