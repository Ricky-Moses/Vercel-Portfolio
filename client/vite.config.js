import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import compression from 'vite-plugin-compression'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    svgr(), // Optimized SVG imports
    compression({ algorithm: 'brotliCompress' }), // Brotli or gzip compression
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ricky Moses Portfolio',
        short_name: 'Portfolio',
        description: 'My personal web development portfolio',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    minify: 'esbuild', // or 'terser' for extra compression
    chunkSizeWarningLimit: 500, // Smaller chunks for better performance
    cssCodeSplit: true,         // Split large CSS bundles
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
