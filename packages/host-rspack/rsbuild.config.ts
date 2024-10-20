import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/remote': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/remote': ''
        }
      }
    }
  },
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        remote: 'remote@http://localhost:3000/remote/mf-manifest.json'
      },
      shared: {
        lodash: {
          singleton: true,
          eager: true,
        }
      }
    })
  ],
});
