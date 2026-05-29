import { fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss(), svgr()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
        '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.API_BASE_URL || 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
