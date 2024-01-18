import { defineConfig } from 'astro/config'

// Astro Integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// Vite Plugins
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
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
