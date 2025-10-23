import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // allow external devices
    port: 5173,       // or any other port
  },
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["gsap"],
  },
});
