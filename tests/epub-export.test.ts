import { describe, it, expect, beforeAll } from 'vitest'
import { execSync } from 'child_process'
import { existsSync, readFileSync, statSync } from 'fs'
import { join } from 'path'
import { createRequire } from 'module'

const ROOT = join(import.meta.dirname, '..')
const FLATLAND_DIR = join(ROOT, 'examples/flatland')
const EPUB_DIR = join(FLATLAND_DIR, 'dist/epub')
const EPUB_PATH = join(EPUB_DIR, 'flatland.epub')

// Use yauzl or manual ZIP parsing to inspect the EPUB
// Since we don't want to add test-only deps, we'll use unzip via child_process
function unzipEntry(epubPath: string, entryName: string): string {
  return execSync(`unzip -p "${epubPath}" "${entryName}"`, { encoding: 'utf-8' })
}

function listZipEntries(epubPath: string): string[] {
  const output = execSync(`unzip -l "${epubPath}"`, { encoding: 'utf-8' })
  const lines = output.split('\n')
  const entries: string[] = []
  for (const line of lines) {
    // Lines look like: "   1234  2026-03-22 12:00   OEBPS/content.opf"
    const match = line.match(/^\s+\d+\s+\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}\s+(.+)$/)
    if (match) {
      entries.push(match[1].trim())
    }
  }
  return entries
}

describe('pressy export-epub (flatland example)', () => {
  beforeAll(() => {
    // Build packages first, then export EPUB
    execSync('pnpm -r --filter "./packages/**" build', {
      cwd: ROOT,
      stdio: 'pipe',
    })
    execSync('node ../../packages/pressy/dist/cli/index.js export-epub', {
      cwd: FLATLAND_DIR,
      stdio: 'pipe',
    })
  })

  it('produces an EPUB file', () => {
    expect(existsSync(EPUB_PATH)).toBe(true)
  })

  it('EPUB file has non-trivial size', () => {
    const stats = statSync(EPUB_PATH)
    // Should be at least 10KB (cover image alone is ~113KB)
    expect(stats.size).toBeGreaterThan(10000)
  })

  describe('ZIP structure', () => {
    it('mimetype is the first entry in the ZIP', () => {
      const entries = listZipEntries(EPUB_PATH)
      expect(entries[0]).toBe('mimetype')
    })

    it('mimetype contains the correct EPUB media type', () => {
      const mimetype = unzipEntry(EPUB_PATH, 'mimetype')
      expect(mimetype).toBe('application/epub+zip')
    })

    it('contains META-INF/container.xml', () => {
      const entries = listZipEntries(EPUB_PATH)
      expect(entries).toContain('META-INF/container.xml')
    })

    it('contains all required OEBPS files', () => {
      const entries = listZipEntries(EPUB_PATH)
      expect(entries).toContain('OEBPS/content.opf')
      expect(entries).toContain('OEBPS/toc.xhtml')
      expect(entries).toContain('OEBPS/toc.ncx')
      expect(entries).toContain('OEBPS/styles.css')
    })

    it('contains cover page and image', () => {
      const entries = listZipEntries(EPUB_PATH)
      expect(entries).toContain('OEBPS/cover.xhtml')
      expect(entries.some(e => e.startsWith('OEBPS/images/cover'))).toBe(true)
    })

    it('contains all 8 chapter XHTML files', () => {
      const entries = listZipEntries(EPUB_PATH)
      const chapters = entries.filter(e => e.startsWith('OEBPS/chapters/') && e.endsWith('.xhtml'))
      expect(chapters).toHaveLength(8)
    })
  })

  describe('container.xml', () => {
    it('points to content.opf', () => {
      const container = unzipEntry(EPUB_PATH, 'META-INF/container.xml')
      expect(container).toContain('full-path="OEBPS/content.opf"')
      expect(container).toContain('media-type="application/oebps-package+xml"')
    })
  })

  describe('content.opf (package document)', () => {
    let opf: string

    beforeAll(() => {
      opf = unzipEntry(EPUB_PATH, 'OEBPS/content.opf')
    })

    it('is valid XML with correct namespace', () => {
      expect(opf).toContain('xmlns="http://www.idpf.org/2007/opf"')
      expect(opf).toContain('version="3.0"')
    })

    it('includes book metadata', () => {
      expect(opf).toContain('<dc:title>Flatland: A Romance of Many Dimensions</dc:title>')
      expect(opf).toContain('<dc:creator>Edwin A. Abbott</dc:creator>')
      expect(opf).toContain('<dc:language>en</dc:language>')
    })

    it('includes description', () => {
      expect(opf).toContain('<dc:description>')
      expect(opf).toContain('Flatland')
    })

    it('manifest lists all chapters', () => {
      expect(opf).toContain('id="ch-000-preface"')
      expect(opf).toContain('id="ch-007-concerning-a-stranger"')
    })

    it('manifest includes cover-image with properties', () => {
      expect(opf).toContain('properties="cover-image"')
    })

    it('manifest includes navigation document with nav property', () => {
      expect(opf).toContain('properties="nav"')
    })

    it('spine references all chapters in order', () => {
      // Verify spine has idref for each chapter
      expect(opf).toContain('idref="ch-000-preface"')
      expect(opf).toContain('idref="ch-007-concerning-a-stranger"')
      // Cover should be linear=no
      expect(opf).toContain('idref="cover" linear="no"')
    })
  })

  describe('toc.xhtml (EPUB 3 navigation)', () => {
    let toc: string

    beforeAll(() => {
      toc = unzipEntry(EPUB_PATH, 'OEBPS/toc.xhtml')
    })

    it('has epub:type="toc" navigation', () => {
      expect(toc).toContain('epub:type="toc"')
    })

    it('lists all chapters with links', () => {
      expect(toc).toContain('Preface to the Second and Revised Edition')
      expect(toc).toContain('href="chapters/')
    })
  })

  describe('toc.ncx (EPUB 2 compatibility)', () => {
    let ncx: string

    beforeAll(() => {
      ncx = unzipEntry(EPUB_PATH, 'OEBPS/toc.ncx')
    })

    it('is valid NCX with correct namespace', () => {
      expect(ncx).toContain('xmlns="http://www.daisy.org/z3986/2005/ncx/"')
    })

    it('includes docTitle and docAuthor', () => {
      expect(ncx).toContain('<docTitle>')
      expect(ncx).toContain('Flatland')
      expect(ncx).toContain('<docAuthor>')
      expect(ncx).toContain('Edwin A. Abbott')
    })

    it('has navPoints for all chapters', () => {
      expect(ncx).toContain('navPoint')
      expect(ncx).toContain('playOrder="1"')
      expect(ncx).toContain('playOrder="8"')
    })
  })

  describe('chapter content', () => {
    it('chapters contain rendered MDX content', () => {
      const preface = unzipEntry(EPUB_PATH, 'OEBPS/chapters/ch-000-preface.xhtml')
      // Should contain actual prose, not just empty wrappers
      expect(preface).toContain('Flatland')
      expect(preface).toContain('<p>')
      expect(preface.length).toBeGreaterThan(500)
    })

    it('chapters are valid XHTML with correct structure', () => {
      const chapter = unzipEntry(EPUB_PATH, 'OEBPS/chapters/ch-001-of-the-nature-of-flatland.xhtml')
      expect(chapter).toContain('<?xml version="1.0"')
      expect(chapter).toContain('xmlns="http://www.w3.org/1999/xhtml"')
      expect(chapter).toContain('epub:type="chapter"')
      expect(chapter).toContain('<h1>')
      expect(chapter).toContain('../styles.css')
    })

    it('Aside component renders correctly in EPUB', () => {
      const preface = unzipEntry(EPUB_PATH, 'OEBPS/chapters/ch-000-preface.xhtml')
      expect(preface).toContain('class="pressy-aside"')
      expect(preface).toContain('pressy-aside-title')
    })

    it('Footnote component renders as linked references', () => {
      const chapter = unzipEntry(EPUB_PATH, 'OEBPS/chapters/ch-003-concerning-the-inhabitants.xhtml')
      // Inline reference
      expect(chapter).toContain('href="#fn-')
      expect(chapter).toContain('id="fnref-')
      // Footnote section at bottom
      expect(chapter).toContain('class="pressy-footnotes"')
      expect(chapter).toContain('class="pressy-footnote-item"')
    })
  })

  describe('styles', () => {
    it('includes CSS stylesheet', () => {
      const styles = unzipEntry(EPUB_PATH, 'OEBPS/styles.css')
      expect(styles).toContain('font-family')
      expect(styles).toContain('.pressy-aside')
      expect(styles).toContain('.pressy-callout')
      expect(styles).toContain('.pressy-scene-break')
      expect(styles).toContain('.pressy-footnotes')
    })
  })

  describe('cover', () => {
    it('cover.xhtml references the cover image', () => {
      const cover = unzipEntry(EPUB_PATH, 'OEBPS/cover.xhtml')
      expect(cover).toContain('<img')
      expect(cover).toContain('images/cover')
      expect(cover).toContain('class="pressy-cover"')
    })
  })
})
