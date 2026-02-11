import { Plugin, ViteDevServer } from 'vite'
import { resolve, join, relative, basename, dirname } from 'path'
import { existsSync, readFileSync } from 'fs'
import { createRequire } from 'module'

const _require = createRequire(import.meta.url)
import fastGlob from 'fast-glob'
import yaml from 'yaml'
import matter from 'gray-matter'
import type { PressyConfig } from '../config.js'
import type { Book, Article, Chapter, ContentManifest, Route } from '../types.js'
import { compileMDX } from '../mdx/processor.js'

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

    const dataJson = JSON.stringify({ route: route.path, routeType: route.type, manifest })

    return `<!DOCTYPE html>
<html lang="${config.site.language || 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="stylesheet" href="/@pressy/typography/prose.css">
  <link rel="stylesheet" href="/@pressy/typography/fluid.css">
  <link rel="stylesheet" href="/@pressy/typography/themes/light.css" id="theme-light">
  <meta name="theme-color" content="#ffffff">
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

          const dataJson = JSON.stringify({ route: route.path, routeType: route.type, manifest })

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

          // Suppress missing favicon/manifest requests in dev
          if (url === '/favicon.ico' || url === '/manifest.webmanifest') {
            res.statusCode = 204
            res.end()
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

          const html = `<!DOCTYPE html>
<html lang="${config.site.language || 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
${cssLinks}
  <link rel="manifest" href="${assetPrefix}manifest.webmanifest">
  <meta name="theme-color" content="#ffffff">
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
        const webManifest = {
          name: config.site.title,
          short_name: config.site.title,
          description: config.site.description,
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        }

        this.emitFile({
          type: 'asset',
          fileName: 'manifest.webmanifest',
          source: JSON.stringify(webManifest, null, 2),
        })
      },
    },
  ]
}
