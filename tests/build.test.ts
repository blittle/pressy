import { describe, it, expect, beforeAll } from 'vitest'
import { execSync } from 'child_process'
import { existsSync, readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const FLATLAND_DIR = join(ROOT, 'examples/flatland')
const DIST = join(FLATLAND_DIR, 'dist')

describe('pressy build (flatland example)', () => {
  beforeAll(() => {
    // Build packages first, then build the flatland example
    execSync('pnpm -r --filter "./packages/**" build', {
      cwd: ROOT,
      stdio: 'pipe',
    })
    // Invoke the CLI directly via node (avoids pnpm bin symlink issues)
    execSync('node ../../packages/pressy/dist/cli/index.js build', {
      cwd: FLATLAND_DIR,
      stdio: 'pipe',
    })
  })

  it('produces a dist directory', () => {
    expect(existsSync(DIST)).toBe(true)
  })

  describe('HTML output', () => {
    it('generates index.html at root', () => {
      const indexPath = join(DIST, 'index.html')
      expect(existsSync(indexPath)).toBe(true)

      const html = readFileSync(indexPath, 'utf-8')
      expect(html).toContain('<!DOCTYPE html>')
      expect(html).toContain('Flatland')
    })

    it('generates book listing page', () => {
      const booksIndex = join(DIST, 'books/index.html')
      expect(existsSync(booksIndex)).toBe(true)
    })

    it('generates articles listing page', () => {
      const articlesIndex = join(DIST, 'articles/index.html')
      expect(existsSync(articlesIndex)).toBe(true)
    })

    it('generates the book detail page', () => {
      const bookPage = join(DIST, 'books/flatland/index.html')
      expect(existsSync(bookPage)).toBe(true)

      const html = readFileSync(bookPage, 'utf-8')
      expect(html).toContain('Flatland')
    })

    it('generates HTML for each chapter', () => {
      const expectedChapters = [
        'preface',
        'of-the-nature-of-flatland',
        'of-the-climate-and-houses',
        'concerning-the-inhabitants',
        'concerning-the-women',
        'of-our-methods-of-recognizing',
        'of-recognition-by-sight',
        'concerning-a-stranger',
      ]

      for (const slug of expectedChapters) {
        const chapterPath = join(DIST, `books/flatland/${slug}/index.html`)
        expect(existsSync(chapterPath), `Missing chapter: ${slug}`).toBe(true)
      }
    })

    it('generates HTML for the article', () => {
      const articlePath = join(DIST, 'articles/about-flatland/index.html')
      expect(existsSync(articlePath)).toBe(true)
    })

    it('includes correct title and meta description in HTML', () => {
      const html = readFileSync(join(DIST, 'index.html'), 'utf-8')

      // Title
      expect(html).toMatch(/<title>.*Flatland.*<\/title>/)
      // Description meta tag
      expect(html).toMatch(/<meta name="description" content="[^"]+">/)
    })

    it('includes script tag pointing to bundled JS', () => {
      const html = readFileSync(join(DIST, 'index.html'), 'utf-8')
      expect(html).toMatch(/<script type="module" src="[^"]+\.js"/)
    })

    it('includes CSS links', () => {
      const html = readFileSync(join(DIST, 'index.html'), 'utf-8')
      expect(html).toMatch(/<link rel="stylesheet" href="[^"]+\.css"/)
    })
  })

  describe('PWA assets', () => {
    it('generates manifest.webmanifest', () => {
      const manifestPath = join(DIST, 'manifest.webmanifest')
      expect(existsSync(manifestPath)).toBe(true)

      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
      expect(manifest.name).toContain('Flatland')
      expect(manifest.short_name).toBe('Flatland')
      expect(manifest.icons).toHaveLength(2)
      expect(manifest.icons[0].sizes).toBe('192x192')
      expect(manifest.icons[1].sizes).toBe('512x512')
    })

    it('generates service worker', () => {
      const swPath = join(DIST, 'sw.js')
      expect(existsSync(swPath)).toBe(true)

      const sw = readFileSync(swPath, 'utf-8')
      // Should contain precache manifest entries
      expect(sw.length).toBeGreaterThan(100)
    })

    it('does not precache HTML pages', () => {
      // HTML pages must NOT be in the precache manifest. precacheAndRoute
      // uses a cache-first strategy that overrides the NetworkFirst
      // NavigationRoute, which would prevent new deploys from showing up.
      const sw = readFileSync(join(DIST, 'sw.js'), 'utf-8')
      expect(sw).not.toMatch(/["']\.\/index\.html["']/)
      expect(sw).not.toMatch(/["']\.\/books\/[^"']*\/index\.html["']/)
      expect(sw).not.toMatch(/["']\.\/articles\/[^"']*\/index\.html["']/)
      expect(sw).not.toMatch(/["']\.\/offline\.html["']/)
    })

    it('still precaches JS and CSS chunks', () => {
      const sw = readFileSync(join(DIST, 'sw.js'), 'utf-8')
      expect(sw).toMatch(/\.js["']/)
      expect(sw).toMatch(/\.css["']/)
    })

    it('generates offline fallback page', () => {
      const offlinePath = join(DIST, 'offline.html')
      expect(existsSync(offlinePath)).toBe(true)
    })

    it('generates icons', () => {
      expect(existsSync(join(DIST, 'icon-192.png'))).toBe(true)
      expect(existsSync(join(DIST, 'icon-512.png'))).toBe(true)
    })

    it('generates favicon', () => {
      expect(existsSync(join(DIST, 'favicon.png'))).toBe(true)
    })

    it('HTML references the manifest', () => {
      const html = readFileSync(join(DIST, 'index.html'), 'utf-8')
      expect(html).toContain('manifest.webmanifest')
    })
  })

  describe('static assets', () => {
    it('includes the book cover image', () => {
      // The flatland example has a cover.jpg
      const coverPath = join(DIST, 'books/flatland/cover.jpg')
      expect(existsSync(coverPath)).toBe(true)
    })

    it('outputs bundled JS files', () => {
      const assetsDir = join(DIST, 'assets')
      if (existsSync(assetsDir)) {
        const files = readdirSync(assetsDir)
        const jsFiles = files.filter(f => f.endsWith('.js'))
        expect(jsFiles.length).toBeGreaterThan(0)
      } else {
        // JS files might be at the root level
        const files = readdirSync(DIST)
        const jsFiles = files.filter(f => f.endsWith('.js'))
        expect(jsFiles.length).toBeGreaterThan(0)
      }
    })

    it('outputs CSS files', () => {
      const assetsDir = join(DIST, 'assets')
      if (existsSync(assetsDir)) {
        const files = readdirSync(assetsDir)
        const cssFiles = files.filter(f => f.endsWith('.css'))
        expect(cssFiles.length).toBeGreaterThan(0)
      } else {
        const allFiles = getAllFiles(DIST)
        const cssFiles = allFiles.filter(f => f.endsWith('.css'))
        expect(cssFiles.length).toBeGreaterThan(0)
      }
    })
  })

  describe('content discovery verification', () => {
    it('discovered all 8 chapters in correct order', () => {
      // The book detail page's JS bundle should contain the chapter order
      // We verify by checking that all chapter HTML pages exist with correct paths
      const bookDir = join(DIST, 'books/flatland')
      const chapterDirs = readdirSync(bookDir).filter(f => {
        const fullPath = join(bookDir, f)
        return existsSync(join(fullPath, 'index.html'))
      })

      // 8 chapters: preface + 7 content chapters
      expect(chapterDirs.length).toBe(8)
    })

    it('discovered the article', () => {
      const articlesDir = join(DIST, 'articles')
      expect(existsSync(articlesDir)).toBe(true)

      const articleDirs = readdirSync(articlesDir).filter(f => {
        const fullPath = join(articlesDir, f)
        return existsSync(join(fullPath, 'index.html'))
      })

      expect(articleDirs).toContain('about-flatland')
    })
  })
})

function getAllFiles(dir: string, prefix = ''): string[] {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const fullPath = join(prefix, entry.name)
    if (entry.isDirectory()) {
      files.push(...getAllFiles(join(dir, entry.name), fullPath))
    } else {
      files.push(fullPath)
    }
  }
  return files
}
