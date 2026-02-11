import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
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

  // Compile MDX
  const result = await compile(content, {
    jsx: true,
    jsxImportSource: 'preact',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor-link'],
          },
        },
      ],
    ],
    development: process.env.NODE_ENV !== 'production',
  })

  // Generate code that exports the compiled component
  const code = `
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'preact/jsx-runtime';
import * as runtime from 'preact/jsx-runtime';
import { useMDXComponents } from '@pressy/components/content';

${result.value}

export const frontmatter = ${JSON.stringify(frontmatter)};
export default function MDXContent(props) {
  const components = useMDXComponents();
  return _MDXContent({ ...props, components });
}
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
