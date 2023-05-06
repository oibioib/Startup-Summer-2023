import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    isDev &&
      checker({
        typescript: true,
        overlay: false,
        eslint: {
          lintCommand: 'eslint ./src --ext ts,tsx --ignore-path ./.gitignore',
        },
      }),
  ],
  css: {
    devSourcemap: true,
  },
});
