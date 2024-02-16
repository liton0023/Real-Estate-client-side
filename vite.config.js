import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `https://mern-server-9cwo.onrender.com`,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
