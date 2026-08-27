import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    open: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true
  },
  build: {
    outDir: 'dist'
  }
});
