import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@js': path.resolve(__dirname, './src/js'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@blocks': path.resolve(__dirname, './src/lib/blocks'),
      '@components': path.resolve(__dirname, './src/lib/components'),
      '@containers': path.resolve(__dirname, './src/lib/containers'),
    }
  }
});
