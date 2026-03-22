import { compile } from '@mdx-js/mdx'
import * as runtime from 'preact/jsx-runtime'
import { h, Fragment } from 'preact'
import renderToString from 'preact-render-to-string'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import matter from 'gray-matter'
import {
  epubComponents,
  resetFootnotes,
  getCollectedFootnotes,
} from './components.js'

interface RenderResult {
  xhtml: string
  frontmatter: Record<string, unknown>
}

/**
 * Render an MDX chapter source to XHTML string for EPUB embedding.
 *
 * Pipeline:
 * 1. Extract frontmatter with gray-matter
 * 2. Compile MDX to JS with @mdx-js/mdx (function-body format)
 * 3. Evaluate the JS to get a Preact component
 * 4. Render to HTML string with preact-render-to-string using EPUB components
 * 5. Append collected footnotes
 */
export async function renderChapterToXHTML(
  source: string,
  _filePath: string
): Promise<RenderResult> {
  // 1. Extract frontmatter
  const { content, data: frontmatter } = matter(source)

  // 2. Compile MDX to JS (function-body format)
  // This produces code like:
  //   const {jsx, jsxs, Fragment} = arguments[0]
  //   function MDXContent(props) { ... }
  //   return { default: MDXContent }
  const compiled = await compile(content, {
    jsxImportSource: 'preact',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    outputFormat: 'function-body',
    development: false,
  })

  const code = String(compiled)

  // 3. Evaluate: function-body format expects arguments[0] to contain the JSX runtime
  // and returns { default: MDXContent }
  // eslint-disable-next-line no-new-func
  const fn = new Function(code)
  const mdxModule = fn.call(undefined, {
    ...runtime,
    Fragment,
    useMDXComponents: () => epubComponents,
  }) as { default: preact.FunctionComponent }

  const MDXContent = mdxModule.default

  // 4. Reset footnote collector and render
  resetFootnotes()

  const bodyHtml = renderToString(
    h(MDXContent, { components: epubComponents } as Record<string, unknown>)
  )

  // 5. Append footnotes if any were collected
  const footnotes = getCollectedFootnotes()
  let footnotesHtml = ''
  if (footnotes.length > 0) {
    const items = footnotes.map(fn => {
      const fnContent = renderToString(h(Fragment, null, fn.children))
      return `    <div class="pressy-footnote-item" id="fn-${fn.id}">
      <p><a href="#fnref-${fn.id}">[${fn.id}]</a> ${fnContent}</p>
    </div>`
    }).join('\n')

    footnotesHtml = `\n  <div class="pressy-footnotes">
    <hr/>
${items}
  </div>`
  }

  return {
    xhtml: bodyHtml + footnotesHtml,
    frontmatter,
  }
}
