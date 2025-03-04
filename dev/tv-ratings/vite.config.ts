import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/dev/tv-ratings/',
  build: {
    outDir: path.resolve(__dirname, '../../dist/dev/tv-ratings'),
    emptyOutDir: true,
  },
})
