import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5174",
  plugins: [
    vue(),
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-counter': './src/components/counter/index.vue',
      },
      shared: ['vue'],
    })
  ],
})
