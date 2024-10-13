import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: process.env.PORT || 4000, // Puerto del servidor de desarrollo
  },

  build: {
    outDir: "dist", // Opcional, define la carpeta de salida
  },

  base: "./", // Asegúrate de este valor para servir desde rutas relativas en archivos locales
});
