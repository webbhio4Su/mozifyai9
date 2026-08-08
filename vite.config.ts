import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mozifyai9/',   // tên repo của bạn để tránh lỗi 404 khi deploy lên GitHub Pages
})
