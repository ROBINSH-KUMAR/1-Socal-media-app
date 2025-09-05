import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/1-Socal-media-app/", // <-- must exactly match repo name
});
