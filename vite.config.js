import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `http://server-side-m9du.onrender.com`,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
