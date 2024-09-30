import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'


export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [
        ...configDefaults.exclude, 
        'e2e/**',
        "cypress/**",
        'node_modules/**'
      ],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
