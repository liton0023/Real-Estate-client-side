import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //       'http://localhost:3000/api': {
  //       target: "http://localhost:3000/api",
  //       secure:false,
  //     },
  //   },
  // },
  plugins: [react()],
})
