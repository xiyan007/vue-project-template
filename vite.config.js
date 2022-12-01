import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('vite: ', command, mode, ssrBuild);
  const viteConfig = {
    plugins: [vue()],
  };

  return viteConfig;
});
