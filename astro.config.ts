import { defineConfig } from 'astro/config'

// Astro Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import copyDir from './integrations/copy-dir'

// Vite Plugins
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://dicedvo.org',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    copyDir([
      './public/og'
    ]),
  ],
  vite: {
    server: {
      watch: {
        ignored: ["**/src/generate_assets/**/*"], // HERE
      },
    },
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          'dice': FileSystemIconLoader(
            './src/assets/icons',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        }
      })
    ]
  }
})
