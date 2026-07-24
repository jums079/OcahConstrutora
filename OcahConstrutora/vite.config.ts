import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sites } from './build/sites-vite-plugin.js'

export default defineConfig({
  plugins: [
    react(),
    sites(),
    cloudflare({
      viteEnvironment: { name: 'server' },
      config: {
        name: 'ocah-construtora',
        main: './worker/index.ts',
        compatibility_date: '2026-07-23',
        assets: {
          not_found_handling: 'single-page-application',
        },
      },
    }),
  ],
})
