import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('vite: ', command, mode, ssrBuild);

  const viteConfig = {
    base: '',
    logLevel: 'info',
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@components': resolve('./src/components'),
        '@pages': resolve('./src/pages'),
      },
    },
    plugins: [vue()],
  };

  if (mode === 'production') {
    viteConfig.logLevel = 'error';
  }

  return viteConfig;
});
