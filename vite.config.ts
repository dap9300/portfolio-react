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
  root: "client", // Specifica la cartella root corretta
  build: {
    outDir: "../dist", // Costruisce la build nella cartella dist fuori da client
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    strictPort: true,
    host: true,
    hmr: {
      overlay: false,
    },
  },
});
