import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'cli/index': 'src/cli/index.ts',
    'vite/plugin': 'src/vite/plugin.ts',
    'runtime/client': 'src/runtime/client.tsx',
    'runtime/offline': 'src/runtime/offline.ts',
    'runtime/sw': 'src/runtime/sw.ts',
    'content/discovery': 'src/content/discovery.ts',
    'epub/builder': 'src/epub/builder.ts',
    'epub/render': 'src/epub/render.ts',
    'epub/components': 'src/epub/components.tsx',
    'epub/templates': 'src/epub/templates.ts',
    'epub/styles': 'src/epub/styles.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  target: 'node18',
  shims: true,
})
