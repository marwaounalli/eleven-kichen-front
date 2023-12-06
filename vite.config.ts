import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    setupFiles: ['src/tests/setup-vitest.ts'],
    coverage: {
      all: true,
      exclude: [
        '**/*.d.ts',
        'src/assets/*',
        'src/router/index.ts',
        'src/main.ts',
        'src/plugins/*',
        'src/rules/*',
        'src/tests/utils/*',
        'src/tests/mocks/*',
        '.eslintrc.cjs',
      ],
      reporter: ['text-summary', 'html'],
      thresholds: {
        autoUpdate: true,
        statements: 36.33,
        branches: 89.26,
        functions: 63.33,
        lines: 36.33,
      },
    },
  },
});
