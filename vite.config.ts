import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id: string) {
              if (id.includes('node_modules')) {
                if (/[\\/]node_modules[\\/](lucide-react)[\\/]/.test(id)) return 'icons';
                if (/[\\/]node_modules[\\/](react-router-dom|react-router|react-dom|react)[\\/]/.test(id)) return 'vendor';
              }
            },
          },
        },
      },
    };
});
