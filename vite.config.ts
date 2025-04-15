import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
  },
  plugins: [dts({ exclude: 'src/example/' }), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ['./setup.ts'],
    coverage: {
      exclude: ['**/**/index.ts', 'src/example', 'vite.config.ts', 'tests'],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://connpass.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
