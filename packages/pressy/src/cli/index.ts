#!/usr/bin/env node
import { cac } from 'cac'
import { createServer, build, preview } from 'vite'
import { resolve } from 'path'
import { existsSync, writeFileSync, rmSync, mkdirSync } from 'fs'
import { transform } from 'esbuild'
import { readFileSync } from 'fs'
import { pressyPlugin } from '../vite/plugin.js'
import type { PressyConfig } from '../config.js'

const cli = cac('pressy')

async function loadConfig(root: string): Promise<PressyConfig> {
  const configPath = resolve(root, 'pressy.config.ts')
  const configPathJs = resolve(root, 'pressy.config.js')

  let configFile = configPath
  if (!existsSync(configPath)) {
    if (existsSync(configPathJs)) {
      configFile = configPathJs
    } else {
      console.log('No pressy.config.ts found, using defaults')
      return {
        site: {
          title: 'My Publication',
          url: 'http://localhost:3000',
        },
        pagination: { defaultMode: 'scroll' },
        outDir: 'dist',
        contentDir: 'content',
      }
    }
  }

  // For .ts configs, strip types with esbuild and write adjacent temp file
  if (configFile.endsWith('.ts')) {
    const tempFile = configFile.replace(/\.ts$/, '.pressy-tmp.mjs')
    try {
      const source = readFileSync(configFile, 'utf-8')
      const result = await transform(source, {
        loader: 'ts',
        format: 'esm',
      })
      writeFileSync(tempFile, result.code)
      const mod = await import(`file://${tempFile}?t=${Date.now()}`)
      return mod.default
    } finally {
      rmSync(tempFile, { force: true })
    }
  }

  const mod = await import(`file://${configFile}`)
  return mod.default
}

cli
  .command('[root]', 'Start dev server')
  .alias('dev')
  .option('--port <port>', 'Port to run dev server on', { default: 3000 })
  .option('--host', 'Expose to network')
  .action(async (root: string = '.', options: { port: number; host?: boolean }) => {
    const cwd = resolve(process.cwd(), root)
    const config = await loadConfig(cwd)

    const server = await createServer({
      root: cwd,
      plugins: [pressyPlugin(config)],
      server: {
        port: options.port,
        host: options.host,
      },
    })

    await server.listen()
    console.log(`\n  Pressy dev server running at:\n`)
    server.printUrls()
  })

cli
  .command('build [root]', 'Build for production')
  .option('--outDir <dir>', 'Output directory')
  .action(async (root: string = '.', options: { outDir?: string }) => {
    const cwd = resolve(process.cwd(), root)
    const config = await loadConfig(cwd)

    console.log('Building for production...\n')

    await build({
      root: cwd,
      base: './',
      plugins: [pressyPlugin(config)],
      build: {
        outDir: options.outDir || config.outDir || 'dist',
      },
    })

    console.log('\nBuild complete!')
  })

cli
  .command('preview [root]', 'Preview production build')
  .option('--port <port>', 'Port to run preview server on', { default: 4173 })
  .action(async (root: string = '.', options: { port: number }) => {
    const cwd = resolve(process.cwd(), root)
    const config = await loadConfig(cwd)

    const server = await preview({
      root: cwd,
      plugins: [pressyPlugin(config)],
      preview: {
        port: options.port,
      },
    })

    console.log(`\n  Preview server running at:\n`)
    server.printUrls()
  })

cli
  .command('init [dir]', 'Scaffold a new Pressy project')
  .option('--title <title>', 'Book title', { default: 'My Book' })
  .option('--author <author>', 'Author name', { default: 'Author Name' })
  .action(async (dir: string = '.', options: { title: string; author: string }) => {
    const cwd = resolve(process.cwd(), dir)

    if (existsSync(resolve(cwd, 'pressy.config.ts'))) {
      console.error('A pressy.config.ts already exists in this directory.')
      process.exit(1)
    }

    // Create directory structure
    mkdirSync(resolve(cwd, 'content/books/my-book'), { recursive: true })
    mkdirSync(resolve(cwd, 'theme'), { recursive: true })

    // Generate slug from title
    const slug = options.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'my-book'

    // Write config
    writeFileSync(resolve(cwd, 'pressy.config.ts'), `import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: '${options.title.replace(/'/g, "\\'")}',
    url: 'http://localhost:3000',
    author: '${options.author.replace(/'/g, "\\'")}',
  },
  book: {
    slug: '${slug}',
    title: '${options.title.replace(/'/g, "\\'")}',
    author: '${options.author.replace(/'/g, "\\'")}',
    description: '',
  },
  pagination: {
    defaultMode: 'paginated',
  },
})
`)

    // Write a starter chapter
    const chapterDir = resolve(cwd, `content/books/${slug}`)
    mkdirSync(chapterDir, { recursive: true })
    writeFileSync(resolve(chapterDir, '01-chapter-one.mdx'), `---
title: Chapter One
---

# Chapter One

Start writing here.

<Callout type="tip" title="Getting Started">
  Edit this file or add more chapters. Files are ordered by their numeric prefix.
</Callout>
`)

    // Write empty custom theme
    writeFileSync(resolve(cwd, 'theme/custom.css'), `/* Custom theme overrides — loaded after Pressy defaults */\n`)

    console.log(`\n  Pressy project scaffolded in ${dir === '.' ? 'current directory' : dir}\n`)
    console.log('  Next steps:')
    console.log('    npm install pressy @pressy-pub/components @pressy-pub/typography')
    console.log('    npx pressy dev\n')
  })

cli.help()
// Read version from package.json at build time; fall back for dev
const CLI_VERSION = '0.1.1'
cli.version(CLI_VERSION)

cli.parse()
