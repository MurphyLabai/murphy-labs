import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'pages/coin-flip': resolve(__dirname, 'pages/coin-flip.html'),
        'pages/dice-roller': resolve(__dirname, 'pages/dice-roller.html'),
        'pages/card-flip': resolve(__dirname, 'pages/card-flip.html'),
        'pages/name-extractor': resolve(__dirname, 'pages/name-extractor.html'),
        'pages/promo-pilot': resolve(__dirname, 'pages/promo-pilot.html'),
        'pages/promo-pilot-pro': resolve(__dirname, 'pages/promo-pilot-pro.html'),
        'pages/faq': resolve(__dirname, 'pages/faq.html'),
        'pages/terms': resolve(__dirname, 'pages/terms.html'),
        'pages/privacy': resolve(__dirname, 'pages/privacy.html'),
      },
    },
  },
  server: {
    port: 3052,
    host: '0.0.0.0',
    open: false,
  },
});
