/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: { port: 3000 },
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
