import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // @ 는 src 폴더의 별칭이라서 import 시 ../ 없이 바로 src 루트부터 경로를 쓸 수 있게 해준다.
    },
  },
})