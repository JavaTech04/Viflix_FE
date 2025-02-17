import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 1004,
  },
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
})
