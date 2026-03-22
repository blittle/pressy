import { createWriteStream, readFileSync, mkdirSync, existsSync } from 'fs'
import { join, extname } from 'path'
import archiver from 'archiver'
import type { Book } from '../types.js'
import { renderChapterToXHTML } from './render.js'
import { epubStyles } from './styles.js'
import {
  generateContainerXml,
  generateContentOpf,
  generateTocXhtml,
  generateTocNcx,
  generateCoverXhtml,
  wrapChapterXhtml,
} from './templates.js'

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

export interface BuildEpubOptions {
  outputDir: string
}

/**
 * Build an EPUB file for a given book.
 * Returns the path to the generated .epub file.
 */
export async function buildEpub(
  book: Book,
  options: BuildEpubOptions
): Promise<string> {
  const { outputDir } = options

  // Ensure output directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const outputPath = join(outputDir, `${book.slug}.epub`)

  // Determine cover info
  const hasCover = !!book.coverPath && existsSync(book.coverPath)
  let coverExt = ''
  let coverMediaType = ''
  if (hasCover) {
    coverExt = extname(book.coverPath!)
    coverMediaType = MIME_TYPES[coverExt.toLowerCase()] || 'image/jpeg'
  }

  // Render all chapters to XHTML
  const chapterData: Array<{
    id: string
    filename: string
    title: string
    xhtml: string
  }> = []

  for (const chapter of book.chapters) {
    const source = readFileSync(chapter.filePath, 'utf-8')
    const { xhtml } = await renderChapterToXHTML(source, chapter.filePath)

    const id = `ch-${String(chapter.order).padStart(3, '0')}-${chapter.slug}`
    const filename = `${id}.xhtml`

    chapterData.push({
      id,
      filename,
      title: chapter.title,
      xhtml: wrapChapterXhtml(chapter.title, xhtml),
    })
  }

  // Chapter metadata for templates
  const chapterMeta = chapterData.map(({ id, filename, title }) => ({ id, filename, title }))

  // Build the EPUB ZIP
  await new Promise<void>((resolve, reject) => {
    const output = createWriteStream(outputPath)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', resolve)
    archive.on('error', reject)
    archive.pipe(output)

    // 1. mimetype — MUST be first entry, uncompressed
    archive.append('application/epub+zip', {
      name: 'mimetype',
      store: true, // no compression
    })

    // 2. META-INF/container.xml
    archive.append(generateContainerXml(), {
      name: 'META-INF/container.xml',
    })

    // 3. OEBPS/content.opf
    const coverImageHref = hasCover ? `images/cover${coverExt}` : undefined
    archive.append(
      generateContentOpf(book, chapterMeta, hasCover, coverMediaType, coverImageHref),
      { name: 'OEBPS/content.opf' }
    )

    // 4. OEBPS/toc.xhtml (EPUB 3 nav)
    archive.append(generateTocXhtml(book, chapterMeta), {
      name: 'OEBPS/toc.xhtml',
    })

    // 5. OEBPS/toc.ncx (EPUB 2 compat)
    archive.append(generateTocNcx(book, chapterMeta), {
      name: 'OEBPS/toc.ncx',
    })

    // 6. OEBPS/styles.css
    archive.append(epubStyles, {
      name: 'OEBPS/styles.css',
    })

    // 7. Cover page and image
    if (hasCover && coverImageHref) {
      archive.append(generateCoverXhtml(coverImageHref), {
        name: 'OEBPS/cover.xhtml',
      })
      archive.append(readFileSync(book.coverPath!), {
        name: `OEBPS/${coverImageHref}`,
      })
    }

    // 8. Chapter XHTML files
    for (const ch of chapterData) {
      archive.append(ch.xhtml, {
        name: `OEBPS/chapters/${ch.filename}`,
      })
    }

    archive.finalize()
  })

  return outputPath
}
