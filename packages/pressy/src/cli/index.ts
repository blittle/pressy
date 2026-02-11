#!/usr/bin/env node
import { cac } from 'cac'
import { createServer, build, preview } from 'vite'
import { resolve } from 'path'
import { existsSync } from 'fs'
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

  // Dynamic import of config
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

cli.help()
cli.version('0.1.0')

cli.parse()
