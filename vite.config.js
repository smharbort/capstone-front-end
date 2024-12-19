import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // open: "https://ps-capstone-quiz-app-frontend-v1.netlify.app/",
    port: 3013
  }
})
