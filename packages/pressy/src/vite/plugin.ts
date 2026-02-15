import { Plugin, ViteDevServer } from 'vite'
import { resolve, join, relative, dirname } from 'path'
import { existsSync, readFileSync } from 'fs'
import { createHash } from 'crypto'
import { createRequire } from 'module'

const _require = createRequire(import.meta.url)
import fastGlob from 'fast-glob'
import yaml from 'yaml'
import matter from 'gray-matter'
import type { PressyConfig } from '../config.js'
import type { Book, Article, Chapter, ContentManifest, Route } from '../types.js'
import { compileMDX } from '../mdx/processor.js'
import { generateOfflinePage } from '../runtime/offline-page.js'

const VIRTUAL_MODULE_ID = 'virtual:pressy'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID
const VIRTUAL_ENTRY_ID = 'virtual:pressy-entry'
const RESOLVED_VIRTUAL_ENTRY_ID = '\0' + VIRTUAL_ENTRY_ID
const VIRTUAL_ROUTE_PREFIX = 'virtual:pressy-route:'
const RESOLVED_ROUTE_PREFIX = '\0' + VIRTUAL_ROUTE_PREFIX

export function pressyPlugin(config: PressyConfig): Plugin[] {
  let root: string
  let contentDir: string
  let manifest: ContentManifest = { books: [], articles: [] }
  let routes: Route[] = []

  const pwaEnabled = config.pwa?.enabled !== false
  const pwaConfig = {
    themeColor: config.pwa?.themeColor || '#ffffff',
    backgroundColor: config.pwa?.backgroundColor || '#ffffff',
    display: config.pwa?.display || 'standalone',
    shortName: config.pwa?.shortName || config.site.title,
  }

  const contentDiscovery = {
    async discoverContent(): Promise<ContentManifest> {
      const books = await this.discoverBooks()
      const articles = await this.discoverArticles()
      return { books, articles }
    },

    async discoverBooks(): Promise<Book[]> {
      const booksDir = join(contentDir, 'books')
      if (!existsSync(booksDir)) return []

      const bookDirs = await fastGlob('*', {
        cwd: booksDir,
        onlyDirectories: true,
      })

      const books: Book[] = []

      for (const bookSlug of bookDirs) {
        const bookPath = join(booksDir, bookSlug)
        const metadataPath = join(bookPath, '_book.yaml')

        if (!existsSync(metadataPath)) continue

        const metadataContent = readFileSync(metadataPath, 'utf-8')
        const metadata = yaml.parse(metadataContent)

        // Find chapters
        const chapterFiles = await fastGlob('*.mdx', {
          cwd: bookPath,
          ignore: ['_*.mdx'],
        })

        const chapters: Chapter[] = chapterFiles
          .map((file): Chapter | null => {
            const match = file.match(/^(\d+)-(.+)\.mdx$/)
            if (!match) return null

            const order = parseInt(match[1], 10)
            const slug = match[2]
            const filePath = join(bookPath, file)
            const content = readFileSync(filePath, 'utf-8')
            const { data } = matter(content)

            return {
              slug,
              title: data.title || slug.replace(/-/g, ' '),
              order,
              filePath,
              wordCount: content.split(/\s+/).length,
              readingTime: Math.ceil(content.split(/\s+/).length / 200),
            }
          })
          .filter((c): c is Chapter => c !== null)
          .sort((a, b) => a.order - b.order)

        const coverPath = existsSync(join(bookPath, 'cover.jpg'))
          ? join(bookPath, 'cover.jpg')
          : existsSync(join(bookPath, 'cover.png'))
          ? join(bookPath, 'cover.png')
          : undefined

        books.push({
          slug: bookSlug,
          metadata,
          chapters,
          basePath: bookPath,
          coverPath,
        })
      }

      return books
    },

    async discoverArticles(): Promise<Article[]> {
      const articlesDir = join(contentDir, 'articles')
      if (!existsSync(articlesDir)) return []

      const articleDirs = await fastGlob('*', {
        cwd: articlesDir,
        onlyDirectories: true,
      })

      const articles: Article[] = []

      for (const articleSlug of articleDirs) {
        const articlePath = join(articlesDir, articleSlug)
        const metadataPath = join(articlePath, '_article.yaml')
        const indexPath = join(articlePath, 'index.mdx')

        if (!existsSync(indexPath)) continue

        let metadata: Article['metadata']
        if (existsSync(metadataPath)) {
          metadata = yaml.parse(readFileSync(metadataPath, 'utf-8'))
        } else {
          const content = readFileSync(indexPath, 'utf-8')
          const { data } = matter(content)
          metadata = data as Article['metadata']
        }

        const content = readFileSync(indexPath, 'utf-8')

        articles.push({
          slug: articleSlug,
          metadata,
          filePath: indexPath,
          basePath: articlePath,
          wordCount: content.split(/\s+/).length,
          readingTime: Math.ceil(content.split(/\s+/).length / 200),
        })
      }

      return articles
    },
  }

  function generateRoutes(manifest: ContentManifest): Route[] {
    const routes: Route[] = [
      { path: '/', type: 'home' },
      { path: '/books', type: 'books' },
      { path: '/articles', type: 'articles' },
    ]

    for (const book of manifest.books) {
      routes.push({
        path: `/books/${book.slug}`,
        type: 'book',
        content: book,
      })

      for (const chapter of book.chapters) {
        routes.push({
          path: `/books/${book.slug}/${chapter.slug}`,
          type: 'chapter',
          content: chapter,
          book,
        })
      }
    }

    for (const article of manifest.articles) {
      routes.push({
        path: `/articles/${article.slug}`,
        type: 'article',
        content: article,
      })
    }

    return routes
  }

  function generateHTML(route: Route): string {
    const title = getRouteTitle(route, config)
    const description = getRouteDescription(route, config)

    let contentImport = ''
    let contentArg = ''
    if (route.type === 'chapter') {
      const chapter = route.content as Chapter
      const importPath = '/' + relative(root, chapter.filePath).split('\\').join('/')
      contentImport = `import Content from '${importPath}';\n    `
      contentArg = ', Content'
    } else if (route.type === 'article') {
      const article = route.content as Article
      const importPath = '/' + relative(root, article.filePath).split('\\').join('/')
      contentImport = `import Content from '${importPath}';\n    `
      contentArg = ', Content'
    }

    const dataJson = JSON.stringify({
      route: route.path,
      routeType: route.type,
      manifest,
      pagination: config.pagination,
    })

    const pwaTags = pwaEnabled
      ? `
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="${pwaConfig.themeColor}">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="${pwaConfig.shortName}">
  <link rel="apple-touch-icon" href="/icon-192.png">`
      : `
  <meta name="theme-color" content="${pwaConfig.themeColor}">`

    return `<!DOCTYPE html>
<html lang="${config.site.language || 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="stylesheet" href="/@pressy/typography/prose.css">
  <link rel="stylesheet" href="/@pressy/typography/fluid.css">
  <link rel="stylesheet" href="/@pressy/typography/themes/light.css" id="theme-light">${pwaTags}
</head>
<body>
  <div id="app"></div>
  <script type="module">
    import { hydrate } from '/@pressy/client';
    ${contentImport}const data = ${dataJson};
    hydrate(data${contentArg});
  </script>
</body>
</html>`
  }

  function getRouteTitle(route: Route, config: PressyConfig): string {
    switch (route.type) {
      case 'home':
        return config.site.title
      case 'books':
        return `Books | ${config.site.title}`
      case 'articles':
        return `Articles | ${config.site.title}`
      case 'book':
        return `${(route.content as Book).metadata.title} | ${config.site.title}`
      case 'chapter':
        return `${(route.content as Chapter).title} | ${route.book?.metadata.title} | ${config.site.title}`
      case 'article':
        return `${(route.content as Article).metadata.title} | ${config.site.title}`
      default:
        return config.site.title
    }
  }

  function getRouteDescription(route: Route, config: PressyConfig): string {
    switch (route.type) {
      case 'book':
        return (route.content as Book).metadata.description || ''
      case 'article':
        return (route.content as Article).metadata.description || ''
      default:
        return config.site.description || ''
    }
  }

  /** Generate a simple SVG icon as a placeholder when no custom icon is provided. */
  function generatePlaceholderIcon(size: number): string {
    const initial = config.site.title.charAt(0).toUpperCase()
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${pwaConfig.themeColor === '#ffffff' ? '#1a1a1a' : pwaConfig.themeColor}" rx="${Math.round(size * 0.15)}"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(size * 0.45)}" fill="#ffffff">${initial}</text>
</svg>`
  }

  return [
    {
      name: 'pressy:config',
      enforce: 'pre',
      async config(_, { command }) {
        if (command === 'build') {
          // Discover content early so we can set rollup inputs
          const tempContentDir = resolve(config.contentDir || 'content')
          contentDir = tempContentDir
          manifest = await contentDiscovery.discoverContent()
          routes = generateRoutes(manifest)

          // Create an input for each route
          const input: Record<string, string> = {
            'pressy-entry': VIRTUAL_ENTRY_ID,
          }
          for (const route of routes) {
            const name = route.path === '/' ? 'index' : route.path.slice(1).replace(/\//g, '-')
            input[name] = VIRTUAL_ROUTE_PREFIX + route.path
          }

          return {
            appType: 'custom' as const,
            resolve: {
              alias: {
                'preact': dirname(_require.resolve('preact/package.json')),
                'preact/jsx-runtime': dirname(_require.resolve('preact/package.json')) + '/jsx-runtime',
              },
            },
            build: {
              rollupOptions: {
                input,
                preserveEntrySignatures: 'exports-only',
              },
            },
          }
        }
        return { appType: 'custom' as const }
      },
      configResolved(resolvedConfig) {
        root = resolvedConfig.root
        contentDir = resolve(root, config.contentDir || 'content')
      },
    },
    {
      name: 'pressy:content',
      async buildStart() {
        manifest = await contentDiscovery.discoverContent()
        routes = generateRoutes(manifest)
      },
      options(opts) {
        // After routes are discovered in buildStart (on subsequent builds) or
        // we set inputs here for the first build — but routes aren't ready yet.
        // We'll handle this in buildStart via emitFile instead.
        return opts
      },
      resolveId(id) {
        if (id === VIRTUAL_MODULE_ID) {
          return RESOLVED_VIRTUAL_MODULE_ID
        }
        if (id === VIRTUAL_ENTRY_ID) {
          return RESOLVED_VIRTUAL_ENTRY_ID
        }
        if (id.startsWith(VIRTUAL_ROUTE_PREFIX)) {
          return '\0' + id
        }
        if (id === '/@pressy/client') {
          return resolve(__dirname, '../runtime/client.js')
        }
        if (id.startsWith('/@pressy/typography/')) {
          const cssFile = id.replace('/@pressy/typography/', '')
          return { id: `@pressy/typography/${cssFile}`, external: false }
        }
      },
      load(id) {
        if (id === RESOLVED_VIRTUAL_MODULE_ID) {
          return `export const manifest = ${JSON.stringify(manifest)};
export const routes = ${JSON.stringify(routes)};
export const config = ${JSON.stringify(config)};`
        }
        if (id === RESOLVED_VIRTUAL_ENTRY_ID) {
          return [
            `import '@pressy/typography/prose.css'`,
            `import '@pressy/typography/fluid.css'`,
            `import '@pressy/typography/themes/light.css'`,
            `export { hydrate } from '/@pressy/client'`,
          ].join('\n')
        }
        if (id.startsWith(RESOLVED_ROUTE_PREFIX)) {
          const routePath = id.slice(RESOLVED_ROUTE_PREFIX.length)
          const route = routes.find(r => r.path === routePath)
          if (!route) return null

          const dataJson = JSON.stringify({
            route: route.path,
            routeType: route.type,
            manifest,
            pagination: config.pagination,
          })

          let contentImport = ''
          let contentArg = ''
          if (route.type === 'chapter') {
            const chapter = route.content as Chapter
            const importPath = chapter.filePath
            contentImport = `import Content from '${importPath}';\n`
            contentArg = ', Content'
          } else if (route.type === 'article') {
            const article = route.content as Article
            const importPath = article.filePath
            contentImport = `import Content from '${importPath}';\n`
            contentArg = ', Content'
          }

          return [
            `import { hydrate } from '/@pressy/client';`,
            contentImport,
            `const data = ${dataJson};`,
            `hydrate(data${contentArg});`,
          ].join('\n')
        }
      },
    },
    {
      name: 'pressy:mdx',
      async transform(code, id) {
        if (!id.endsWith('.mdx')) return null

        const result = await compileMDX(code, id)
        return {
          code: result.code,
          map: result.map,
        }
      },
    },
    {
      name: 'pressy:html',
      configureServer(server: ViteDevServer) {
        server.middlewares.use(async (req, res, next) => {
          const url = req.url || '/'

          // Suppress missing favicon requests in dev
          if (url === '/favicon.ico') {
            res.statusCode = 204
            res.end()
            return
          }

          // Serve a no-op service worker in dev mode so registration succeeds
          if (url === '/sw.js') {
            res.setHeader('Content-Type', 'application/javascript')
            res.setHeader('Service-Worker-Allowed', '/')
            res.end([
              '// Dev-mode service worker — no caching, passes everything through',
              'self.addEventListener("install", () => self.skipWaiting());',
              'self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));',
              'self.addEventListener("message", (e) => {',
              '  if (e.data?.type === "SKIP_WAITING") self.skipWaiting();',
              '});',
            ].join('\n'))
            return
          }

          // Serve a dev manifest
          if (url === '/manifest.webmanifest') {
            res.setHeader('Content-Type', 'application/manifest+json')
            res.end(JSON.stringify({
              name: config.site.title,
              short_name: pwaConfig.shortName,
              description: config.site.description,
              start_url: './',
              display: pwaConfig.display,
              background_color: pwaConfig.backgroundColor,
              theme_color: pwaConfig.themeColor,
              icons: [
                { src: './icon-192.png', sizes: '192x192', type: 'image/png' },
                { src: './icon-512.png', sizes: '512x512', type: 'image/png' },
              ],
            }, null, 2))
            return
          }

          // Serve placeholder icons in dev
          if (url === '/icon-192.png' || url === '/icon-512.png') {
            const size = url.includes('192') ? 192 : 512
            res.setHeader('Content-Type', 'image/svg+xml')
            res.end(generatePlaceholderIcon(size))
            return
          }

          // Serve offline page in dev
          if (url === '/offline.html') {
            res.setHeader('Content-Type', 'text/html')
            res.end(generateOfflinePage(config.site.title))
            return
          }

          // Resolve virtual /@pressy/ URLs to real file paths
          if (url.startsWith('/@pressy/')) {
            const bareImport = url.slice(1) // e.g. '@pressy/typography/prose.css'
            try {
              const result = await server.pluginContainer.resolveId(bareImport)
              if (result && !result.external) {
                req.url = '/@fs' + result.id
              }
            } catch {}
            next()
            return
          }

          const route = routes.find((r) => r.path === url)

          if (route) {
            const html = generateHTML(route)
            const transformed = await server.transformIndexHtml(url, html)
            res.setHeader('Content-Type', 'text/html')
            res.end(transformed)
            return
          }

          next()
        })
      },
    },
    {
      name: 'pressy:build',
      apply: 'build',
      async generateBundle(_, bundle) {
        // Collect CSS files and map route names to their bundled chunks
        const cssFiles: string[] = []
        const routeChunks = new Map<string, string>() // route input name -> output fileName
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (fileName.endsWith('.css')) {
            cssFiles.push(fileName)
          }
          if (chunk.type === 'chunk' && chunk.isEntry && chunk.name) {
            routeChunks.set(chunk.name, fileName)
          }
        }

        // Generate HTML files for each route during build
        for (const route of routes) {
          const title = getRouteTitle(route, config)
          const description = getRouteDescription(route, config)

          // Find the bundled JS chunk for this route
          const routeName = route.path === '/' ? 'index' : route.path.slice(1).replace(/\//g, '-')
          const routeJsFile = routeChunks.get(routeName)

          // Compute relative path prefix from this route's HTML back to the output root
          // e.g. "/" -> "./", "/books/flatland" -> "../../", "/books/flatland/preface" -> "../../../"
          const depth = route.path === '/' ? 0 : route.path.slice(1).split('/').length
          const assetPrefix = depth === 0 ? './' : '../'.repeat(depth)

          const cssLinks = cssFiles.map(f => `  <link rel="stylesheet" href="${assetPrefix}${f}">`).join('\n')

          const buildPwaTags = pwaEnabled
            ? `
  <link rel="manifest" href="${assetPrefix}manifest.webmanifest">
  <meta name="theme-color" content="${pwaConfig.themeColor}">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="${pwaConfig.shortName}">
  <link rel="apple-touch-icon" href="${assetPrefix}icon-192.png">`
            : `
  <meta name="theme-color" content="${pwaConfig.themeColor}">`

          const html = `<!DOCTYPE html>
<html lang="${config.site.language || 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
${cssLinks}${buildPwaTags}
</head>
<body>
  <div id="app"></div>
  <script type="module" src="${assetPrefix}${routeJsFile}"></script>
</body>
</html>`
          const fileName = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`

          this.emitFile({
            type: 'asset',
            fileName,
            source: html,
          })
        }

        // Generate manifest.webmanifest
        const hasCustomIcons = config.pwa?.icon192 && config.pwa?.icon512

        const webManifest = {
          name: config.site.title,
          short_name: pwaConfig.shortName,
          description: config.site.description,
          start_url: './',
          display: pwaConfig.display,
          background_color: pwaConfig.backgroundColor,
          theme_color: pwaConfig.themeColor,
          icons: [
            {
              src: './icon-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: './icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        }

        this.emitFile({
          type: 'asset',
          fileName: 'manifest.webmanifest',
          source: JSON.stringify(webManifest, null, 2),
        })

        // Emit offline fallback page
        this.emitFile({
          type: 'asset',
          fileName: 'offline.html',
          source: generateOfflinePage(config.site.title),
        })

        // Emit placeholder SVG icons if no custom icons provided
        if (!hasCustomIcons) {
          this.emitFile({
            type: 'asset',
            fileName: 'icon-192.png',
            source: generatePlaceholderIcon(192),
          })
          this.emitFile({
            type: 'asset',
            fileName: 'icon-512.png',
            source: generatePlaceholderIcon(512),
          })
        }

        // Build service worker with precache manifest
        if (pwaEnabled) {
          const precacheEntries: Array<{ url: string; revision: string | null }> = []

          // Use relative URLs so precaching works on subpath deployments
          // (e.g. /pressy/ or /pressy/pr-preview/pr-1/)
          // The SW resolves these relative to its own scope.

          // Helper: generate a short content hash for revision tracking.
          // Files with hashed names (JS/CSS chunks) use revision: null since
          // the hash is in the URL. Non-hashed files (HTML) need an explicit
          // revision so workbox knows when to update them.
          const contentRevision = (source: string) =>
            createHash('md5').update(source).digest('hex').slice(0, 8)

          // Add all HTML pages (non-hashed filenames → need revision)
          for (const route of routes) {
            const fileName = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`
            const htmlAsset = bundle[fileName]
            const source = htmlAsset && htmlAsset.type === 'asset' ? String(htmlAsset.source) : ''
            precacheEntries.push({
              url: `./${fileName}`,
              revision: contentRevision(source),
            })
          }

          // Add offline page (non-hashed → need revision)
          const offlineSource = generateOfflinePage(config.site.title)
          precacheEntries.push({ url: './offline.html', revision: contentRevision(offlineSource) })

          // Add built JS/CSS chunks (hashed filenames → revision: null)
          for (const [fileName] of Object.entries(bundle)) {
            if (fileName.endsWith('.js') || fileName.endsWith('.css')) {
              precacheEntries.push({
                url: `./${fileName}`,
                revision: null,
              })
            }
          }

          // Bundle the service worker into a self-contained IIFE using esbuild
          // so that workbox imports are inlined (service workers can't use ES module imports)
          const swSourcePath = resolve(__dirname, '../runtime/sw.js')
          const manifestJson = JSON.stringify(precacheEntries)
          const { build: esbuildBuild } = await import('esbuild')
          const esbuildResult = await esbuildBuild({
            entryPoints: [swSourcePath],
            bundle: true,
            format: 'iife',
            write: false,
            platform: 'browser',
            define: {
              'self.__WB_MANIFEST': manifestJson,
            },
          })
          const swCode = esbuildResult.outputFiles![0].text

          this.emitFile({
            type: 'asset',
            fileName: 'sw.js',
            source: swCode,
          })
        }
      },
    },
  ]
}
