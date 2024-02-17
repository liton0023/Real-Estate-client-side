import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:5000,
    proxy: {
        '/api': {
        target: "http://mern-server-9cwo.onrender.com",
        changeOrigin:true,
        rewrite: (path)=> path.replace(/^\/api/,"/api"),
        // secure: true,
      },
    },
  },
  plugins: [react()],
})
