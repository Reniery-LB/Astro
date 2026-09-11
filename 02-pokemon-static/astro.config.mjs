// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          '**/*.tmp',
          '**/DumpStack.log.tmp',
          'C:/DumpStack.log.tmp',
          'C:\\DumpStack.log.tmp',
          'C:/pagefile.sys',
          'C:/swapfile.sys',
          'C:/hiberfil.sys'
        ]
      }
    }
  },

  integrations: [icon(), solidJs()]
});