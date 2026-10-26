import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Local development: /api calls ko local Express server (server/server.js) par bhejo
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
