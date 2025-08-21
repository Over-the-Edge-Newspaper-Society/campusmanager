import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src', import.meta.url))),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    lib: {
      entry: resolve(fileURLToPath(new URL('./src/wordpress-integration.jsx', import.meta.url))),
      name: 'UNBCCalendar',
      fileName: (format) => `unbc-calendar.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
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
}