import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src', import.meta.url))),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: resolve(fileURLToPath(new URL('./src/widget-main.jsx', import.meta.url))),
      name: 'UNBCTodayEventsWidget',
      fileName: (format) => `unbc-today-events-widget.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'widget-style.css';
          return assetInfo.name;
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    global: 'globalThis'
  },
  base: './',
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://over-the-edge.local',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
