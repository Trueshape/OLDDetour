// vite.config.ts — Vite per OLDDetour: dev locale con API (server/api.ts), build statica per GitHub Pages (VITE_READ_ONLY=1).
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { oldDetourApi } from "./server/api";

const readOnly = process.env.VITE_READ_ONLY === "1";

export default defineConfig({
  base: readOnly ? "/OLDDetour/" : "/",
  plugins: [react(), tailwindcss(), oldDetourApi()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: { port: 3100, strictPort: true },
});
