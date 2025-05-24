import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
      ],
      base: import.meta.env.VITE_BASE_PATH || "/Secure-Money-Transfer-Web-Application/tree/main/Frontend"
})
