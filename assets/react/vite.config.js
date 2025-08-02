import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src/wordpress-integration.jsx'),
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
})