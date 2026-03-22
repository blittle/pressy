import type { Book, Chapter } from '../types.js'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function generateContainerXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
}

export function generateContentOpf(
  book: Book,
  chapters: Array<{ id: string; filename: string; title: string }>,
  hasCover: boolean,
  coverMediaType?: string,
  coverImageHref?: string
): string {
  const meta = book.metadata
  const bookId = meta.isbn || `urn:pressy:${book.slug}`
  const language = meta.language || 'en'
  const date = meta.publishDate || new Date().toISOString().split('T')[0]

  let manifestItems = `    <item id="styles" href="styles.css" media-type="text/css"/>
    <item id="toc" href="toc.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>`

  if (hasCover) {
    manifestItems += `\n    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>`
    manifestItems += `\n    <item id="cover-image" href="${coverImageHref || 'images/cover'}" media-type="${coverMediaType || 'image/jpeg'}" properties="cover-image"/>`
  }

  for (const ch of chapters) {
    manifestItems += `\n    <item id="${escapeXml(ch.id)}" href="chapters/${escapeXml(ch.filename)}" media-type="application/xhtml+xml"/>`
  }

  let spineItems = ''
  if (hasCover) {
    spineItems += `    <itemref idref="cover" linear="no"/>\n`
  }
  spineItems += `    <itemref idref="toc"/>`
  for (const ch of chapters) {
    spineItems += `\n    <itemref idref="${escapeXml(ch.id)}"/>`
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="bookid">${escapeXml(bookId)}</dc:identifier>
    <dc:title>${escapeXml(meta.title)}</dc:title>
    <dc:creator>${escapeXml(meta.author)}</dc:creator>
    <dc:language>${escapeXml(language)}</dc:language>
    <dc:date>${escapeXml(date)}</dc:date>${meta.description ? `\n    <dc:description>${escapeXml(meta.description)}</dc:description>` : ''}
    <meta property="dcterms:modified">${new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')}</meta>${hasCover ? '\n    <meta name="cover" content="cover-image"/>' : ''}
  </metadata>
  <manifest>
${manifestItems}
  </manifest>
  <spine toc="ncx">
${spineItems}
  </spine>
</package>`
}

export function generateTocXhtml(
  book: Book,
  chapters: Array<{ id: string; filename: string; title: string }>
): string {
  const items = chapters
    .map(ch => `      <li><a href="chapters/${escapeXml(ch.filename)}">${escapeXml(ch.title)}</a></li>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <nav epub:type="toc" class="pressy-toc">
    <h1>Table of Contents</h1>
    <ol>
${items}
    </ol>
  </nav>
</body>
</html>`
}

export function generateTocNcx(
  book: Book,
  chapters: Array<{ id: string; filename: string; title: string }>
): string {
  const bookId = book.metadata.isbn || `urn:pressy:${book.slug}`

  const navPoints = chapters
    .map((ch, i) => `    <navPoint id="navpoint-${i + 1}" playOrder="${i + 1}">
      <navLabel><text>${escapeXml(ch.title)}</text></navLabel>
      <content src="chapters/${escapeXml(ch.filename)}"/>
    </navPoint>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${escapeXml(bookId)}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${escapeXml(book.metadata.title)}</text></docTitle>
  <docAuthor><text>${escapeXml(book.metadata.author)}</text></docAuthor>
  <navMap>
${navPoints}
  </navMap>
</ncx>`
}

export function generateCoverXhtml(coverImageHref: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Cover</title>
  <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <div class="pressy-cover">
    <img src="${escapeXml(coverImageHref)}" alt="Cover"/>
  </div>
</body>
</html>`
}

export function wrapChapterXhtml(title: string, bodyHtml: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
  <title>${escapeXml(title)}</title>
  <link rel="stylesheet" type="text/css" href="../styles.css"/>
</head>
<body>
  <section epub:type="chapter">
    <h1>${escapeXml(title)}</h1>
${bodyHtml}
  </section>
</body>
</html>`
}
