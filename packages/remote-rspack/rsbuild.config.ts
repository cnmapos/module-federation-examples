import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx";
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';


export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
    pluginModuleFederation({
      name: 'remote',
      exposes: {
        './counter': './src/components/counter/index.tsx',
      },
      shared: {
        lodash: {
          singleton: true
        }
      }
    }),
  ],
});
