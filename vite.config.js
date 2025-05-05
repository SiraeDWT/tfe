import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  base: '/static/',
  publicDir: 'public',
  build: {
    outDir: 'backend/static',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/app.css'
      }
    },
    cssCodeSplit: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [resolve(__dirname, 'src/scss')],
      }
    }
  }
})
