import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Ensures assets load from root
  build: {
    outDir: 'dist',  // Explicitly set output folder
    emptyOutDir: true,  // Clears old files on build
  },
});