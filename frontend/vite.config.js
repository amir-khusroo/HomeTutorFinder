import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'https://hometutorfinder-backend.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    }
  },
  plugins: [react()],
})
