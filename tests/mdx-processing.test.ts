import { describe, it, expect } from 'vitest'
import { compileMDX, extractTableOfContents, calculateReadingTime } from '../packages/pressy/src/mdx/processor'

describe('compileMDX', () => {
  it('compiles basic MDX to JS with JSX runtime imports', async () => {
    const source = `---
title: Test Chapter
---

# Hello World

This is a paragraph.
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.code).toContain('_jsx')
    expect(result.code).toContain('Hello World')
    expect(result.code).toContain('This is a paragraph.')
    expect(result.frontmatter).toEqual({ title: 'Test Chapter' })
  })

  it('exports frontmatter as a named export', async () => {
    const source = `---
title: My Title
author: Jane Doe
---

Content here.
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.code).toContain('export const frontmatter =')
    expect(result.frontmatter).toEqual({ title: 'My Title', author: 'Jane Doe' })
  })

  it('handles MDX with no frontmatter', async () => {
    const source = `# Just a heading

Some content without frontmatter.
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.code).toContain('Just a heading')
    expect(result.frontmatter).toEqual({})
  })

  it('handles empty content', async () => {
    const source = `---
title: Empty
---
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.frontmatter).toEqual({ title: 'Empty' })
    expect(result.code).toBeDefined()
  })

  it('processes remark-gfm features (tables, strikethrough)', async () => {
    const source = `---
title: GFM Test
---

| Col A | Col B |
|-------|-------|
| 1     | 2     |

~~deleted text~~
`
    const result = await compileMDX(source, 'test.mdx')

    // GFM tables should produce table elements
    expect(result.code).toContain('thead')
    expect(result.code).toContain('Col A')
    // Strikethrough
    expect(result.code).toContain('del')
    expect(result.code).toContain('deleted text')
  })

  it('adds id attributes to headings via rehype-slug', async () => {
    const source = `---
title: Slug Test
---

# My Heading

## Another Section
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.code).toContain('id: "my-heading"')
    expect(result.code).toContain('id: "another-section"')
  })

  it('handles special characters in content', async () => {
    const source = `---
title: Special Chars
---

Here's some "quoted" text with angle brackets & ampersands.
`
    const result = await compileMDX(source, 'test.mdx')

    expect(result.code).toBeDefined()
    expect(result.frontmatter.title).toBe('Special Chars')
  })

  it('throws on invalid MDX (unclosed JSX tags)', async () => {
    const source = `---
title: Bad MDX
---

This has an <unclosed> tag that MDX treats as JSX.
`
    await expect(compileMDX(source, 'test.mdx')).rejects.toThrow()
  })
})

describe('extractTableOfContents', () => {
  it('extracts headings with levels, text, and slugs', () => {
    const source = `# Chapter One

Some content.

## Section A

More content.

### Subsection A.1

## Section B
`
    const toc = extractTableOfContents(source)

    expect(toc).toEqual([
      { level: 1, text: 'Chapter One', slug: 'chapter-one' },
      { level: 2, text: 'Section A', slug: 'section-a' },
      { level: 3, text: 'Subsection A.1', slug: 'subsection-a-1' },
      { level: 2, text: 'Section B', slug: 'section-b' },
    ])
  })

  it('returns empty array for content with no headings', () => {
    const source = 'Just a paragraph with no headings.'
    const toc = extractTableOfContents(source)

    expect(toc).toEqual([])
  })

  it('handles headings with special characters', () => {
    const source = `## What's in a Name?

## The "Final" Chapter
`
    const toc = extractTableOfContents(source)

    expect(toc).toHaveLength(2)
    expect(toc[0].slug).toBe('what-s-in-a-name')
    expect(toc[1].slug).toBe('the-final-chapter')
  })
})

describe('calculateReadingTime', () => {
  it('calculates reading time at 200 words per minute', () => {
    // 200 words = 1 minute
    const words = Array(200).fill('word').join(' ')
    expect(calculateReadingTime(words)).toBe(1)
  })

  it('rounds up partial minutes', () => {
    // 201 words = ceil(201/200) = 2 minutes
    const words = Array(201).fill('word').join(' ')
    expect(calculateReadingTime(words)).toBe(2)
  })

  it('handles short content', () => {
    expect(calculateReadingTime('Hello world')).toBe(1)
  })
})
