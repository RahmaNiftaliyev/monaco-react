import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    snapshotFormat: {
      printBasicPrototype: true,
    },
    setupFiles: ['./setupTests.ts'],
    exclude: ['**/node_modules/**', '**/demo/**', '**/playground/**'],
  },
  resolve: {
    alias: {
      '@monaco-editor/loader': '@monaco-editor/loader/lib/es/index.js',
    },
  },
});
