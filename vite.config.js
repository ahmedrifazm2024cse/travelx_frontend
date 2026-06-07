import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://travelx-2-2liv.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
