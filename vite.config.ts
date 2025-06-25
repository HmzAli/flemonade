import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'FLEMONADE',
          description: 'Flemonade is a handcrafted lemonade brand based in Bangi, Malaysia — made with real lemons, premium sugar, and no shortcuts. Order online, pick up weekly in KL.',
          canonical: 'https://flemonade.com'
        },
      },
    })],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
