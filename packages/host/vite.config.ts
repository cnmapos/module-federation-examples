import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation  } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:5173",
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: 'remote',
          shareScope: 'default',
        }
      },
      shared: ['vue']
    })
  ],
})
