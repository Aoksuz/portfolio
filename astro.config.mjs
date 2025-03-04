import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { execSync } from 'node:child_process'

export default defineConfig({
  integrations: [tailwind()],
  base: '/dev/tv-ratings/',
  hooks: {
    'astro:build:start': async () => {
      console.log('Building Vue app...')
      execSync('cd dev/tv-ratings && npm install && npm run build', {
        stdio: 'inherit'
      })
      console.log('Vue app built successfully!')
    }
  }
})
