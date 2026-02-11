import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'cli/index': 'src/cli/index.ts',
    'vite/plugin': 'src/vite/plugin.ts',
    'runtime/client': 'src/runtime/client.ts',
    'runtime/offline': 'src/runtime/offline.ts',
    'runtime/sw': 'src/runtime/sw.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  target: 'node18',
  shims: true,
})
