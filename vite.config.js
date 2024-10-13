import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: process.env.PORT, // Cambia este número al puerto que prefieras
  },
});
