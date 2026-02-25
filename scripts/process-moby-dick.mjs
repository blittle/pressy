#!/usr/bin/env node
/**
 * One-off script to split Moby-Dick (from Project Gutenberg) into
 * individual MDX chapter files for the Pressy example.
 *
 * Usage:
 *   # First download the text:
 *   curl -o scripts/pg2701.txt https://www.gutenberg.org/cache/epub/2701/pg2701.txt
 *   # Then run:
 *   node scripts/process-moby-dick.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const INPUT_FILE = 'scripts/pg2701.txt'
const OUTPUT_DIR = 'examples/moby-dick/content/books/moby-dick'

function main() {
  console.log('Reading local Gutenberg text...')
  // Normalize to \n line endings (Gutenberg uses \r\n)
  const text = readFileSync(INPUT_FILE, 'utf-8').replace(/\r\n/g, '\n')

  // Find content boundaries
  const startIdx = text.indexOf('\n  ETYMOLOGY.\n')
  const endIdx = text.indexOf('*** END OF THE PROJECT GUTENBERG EBOOK')

  if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find content boundaries')
    process.exit(1)
  }

  // Content starts at ETYMOLOGY (preserve leading spaces — they're significant)
  const content = text.slice(startIdx + 1, endIdx).trimEnd()
  const lines = content.split('\n')

  // Parse sections by scanning lines for headings.
  // Headings we recognize:
  //   "  ETYMOLOGY."
  //   "  EXTRACTS. (...)" or "EXTRACTS."
  //   "CHAPTER N. Title." (may span 2 lines)
  //   "Epilogue"
  const sections = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    let heading = null
    let headingLines = 1

    if (/^  ETYMOLOGY\./.test(line)) {
      heading = 'ETYMOLOGY'
    } else if (/^  EXTRACTS[\.(]/.test(line)) {
      heading = 'EXTRACTS_INTRO'
    } else if (/^EXTRACTS\./.test(line)) {
      heading = 'EXTRACTS'
    } else if (/^CHAPTER \d+\./.test(line)) {
      // Chapter title may span multiple lines — collect until we hit
      // a line ending with a period or an empty line
      heading = line.trim()
      while (!heading.endsWith('.') && i + headingLines < lines.length) {
        const nextLine = lines[i + headingLines].trim()
        if (nextLine === '') break
        heading += ' ' + nextLine
        headingLines++
      }
    } else if (/^Epilogue/.test(line)) {
      heading = 'Epilogue'
    }

    if (heading !== null) {
      sections.push({ heading, bodyLines: [], startLine: i })
      i += headingLines
    } else {
      // Append to current section's body
      if (sections.length > 0) {
        sections[sections.length - 1].bodyLines.push(line)
      }
      i++
    }
  }

  // Merge the two EXTRACTS sections into one
  const introIdx = sections.findIndex((s) => s.heading === 'EXTRACTS_INTRO')
  const quotesIdx = sections.findIndex((s) => s.heading === 'EXTRACTS')

  if (introIdx !== -1 && quotesIdx !== -1) {
    // Combine intro + separator + quotes
    sections[introIdx].heading = 'EXTRACTS'
    sections[introIdx].bodyLines.push('', '---', '', ...sections[quotesIdx].bodyLines)
    sections.splice(quotesIdx, 1)
  }

  console.log(`Found ${sections.length} sections`)

  // Generate MDX files
  mkdirSync(OUTPUT_DIR, { recursive: true })
  let fileIndex = 0
  let totalWords = 0

  for (const section of sections) {
    let title, slug
    const rawBody = section.bodyLines.join('\n').trim()

    if (section.heading === 'ETYMOLOGY') {
      title = 'Etymology'
      slug = 'etymology'
    } else if (section.heading === 'EXTRACTS') {
      title = 'Extracts'
      slug = 'extracts'
    } else if (section.heading === 'Epilogue') {
      title = 'Epilogue'
      slug = 'epilogue'
    } else {
      // "CHAPTER 42. The Whiteness of the Whale."
      const chapterMatch = section.heading.match(
        /^CHAPTER (\d+)\.\s+(.+?)\.?$/
      )
      if (chapterMatch) {
        const num = chapterMatch[1]
        const chapterTitle = chapterMatch[2]
        title = `Chapter ${num}. ${chapterTitle}`
        slug = slugify(chapterTitle)
      } else {
        title = section.heading
        slug = slugify(section.heading)
      }
    }

    const paddedIndex = String(fileIndex).padStart(3, '0')
    const filename = `${paddedIndex}-${slug}.mdx`
    const mdxContent = formatMdx(title, rawBody)
    const words = wordCount(rawBody)
    totalWords += words

    writeFileSync(join(OUTPUT_DIR, filename), mdxContent)
    console.log(`  ${filename} (${words} words)`)
    fileIndex++
  }

  console.log(`\nDone! Generated ${fileIndex} chapter files (${totalWords.toLocaleString()} total words).`)
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length
}

function formatMdx(title, rawBody) {
  let body = rawBody
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')

  // Split into paragraph blocks (separated by blank lines)
  const lines = body.split('\n')
  const paragraphs = []
  let current = []

  for (const line of lines) {
    if (line.trim() === '') {
      if (current.length > 0) {
        paragraphs.push(current.join('\n'))
        current = []
      }
      continue
    }
    current.push(line)
  }
  if (current.length > 0) {
    paragraphs.push(current.join('\n'))
  }

  // Process each paragraph
  const processed = paragraphs.map((para) => {
    // Preserve markdown HRs
    if (para.trim() === '---') return '---'

    const paraLines = para.split('\n')

    // Check if this is indented/special text (poetry, letters, etc.)
    const allIndented = paraLines.every((l) => l.startsWith('  '))
    if (allIndented) {
      const cleaned = paraLines
        .map((l) => l.replace(/^  /, ''))
        .join('\n')
      // Short lines = poetry/quotes → blockquote
      const avgLineLen =
        cleaned.split('\n').reduce((s, l) => s + l.length, 0) /
        cleaned.split('\n').length
      if (avgLineLen < 60) {
        return cleaned
          .split('\n')
          .map((l) => `> ${l}`)
          .join('\n')
      }
      // Indented prose — join lines
      return cleaned.replace(/\n(?!\n)/g, ' ').replace(/  +/g, ' ')
    }

    // Regular paragraph: join wrapped lines into a single line
    return paraLines
      .map((l) => l.trim())
      .join(' ')
      .replace(/  +/g, ' ')
  })

  // Escape characters that are special in MDX/JSX
  const escaped = processed
    .join('\n\n')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/<(?=[A-Za-z/])/g, '\\<')

  // Escape the title for YAML frontmatter
  const safeTitle = title.includes(':') || title.includes('"') || title.includes("'")
    ? `"${title.replace(/"/g, '\\"')}"`
    : title

  return `---\ntitle: ${safeTitle}\n---\n\n${escaped}\n`
}

main()
