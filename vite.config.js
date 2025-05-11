import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  server: {
    historyApiFallback: true, // For local development
  },
})