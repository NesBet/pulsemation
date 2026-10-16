import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-router-dom'],
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || /(^|\/)react($|\/)/.test(id)) return 'vendor-react'
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three'
            if (id.includes('framer-motion')) return 'vendor-framer'
          }
        },
      },
    },
  },
})