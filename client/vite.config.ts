import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@mobile': path.resolve(__dirname, 'src/mobile'),
      '@desktop': path.resolve(__dirname, 'src/desktop'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@app': path.resolve(__dirname, 'src/app'),
    },
  },

  server:
    mode === 'development'
      ? {
          proxy: {
            '/api': {
              target: 'http://localhost:5000/api/v1',
              changeOrigin: true,
            },
          },
        }
      : undefined,
}));
