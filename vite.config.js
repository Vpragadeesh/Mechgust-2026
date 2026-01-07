import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sample26/',
  plugins: [react()],
  server: {
    port: 5173,
    middlewareMode: false
  },
  ssr: {
    external: []
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
})
