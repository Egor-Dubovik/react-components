/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    manifest: false,
    outDir: 'dist',
    minify: mode === 'development' ? false : true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: ['./src/setupTests.ts'],
  },
}));
