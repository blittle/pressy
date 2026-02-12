import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

import matter from 'gray-matter'

export interface MDXCompileResult {
  code: string
  map: string | null
  frontmatter: Record<string, unknown>
}

export async function compileMDX(
  source: string,
  filePath: string
): Promise<MDXCompileResult> {
  // Extract frontmatter
  const { content, data: frontmatter } = matter(source)

  // Compile MDX — jsx: false outputs valid JS with _jsx() calls
  const result = await compile(content, {
    jsxImportSource: 'preact',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    development: false,
  })

  // With jsx: false (default), the compiled output is valid JS
  // with its own JSX runtime imports and default export.
  // We just append the frontmatter as a named export.
  const compiled = String(result)
  const code = `${compiled}
export const frontmatter = ${JSON.stringify(frontmatter)};
`

  return {
    code,
    map: null,
    frontmatter,
  }
}

// Helper to extract table of contents from MDX
export function extractTableOfContents(source: string): Array<{
  level: number
  text: string
  slug: string
}> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const toc: Array<{ level: number; text: string; slug: string }> = []
  let match

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    toc.push({ level, text, slug })
  }

  return toc
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
