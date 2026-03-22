import { join } from 'path'
import { existsSync, readFileSync } from 'fs'
import fastGlob from 'fast-glob'
import matter from 'gray-matter'
import type { Book, Article, Chapter, ContentManifest } from '../types.js'
import type { BookConfig } from '../config.js'

export async function discoverBooks(
  contentDir: string,
  bookConfigs?: BookConfig[]
): Promise<Book[]> {
  if (!bookConfigs || bookConfigs.length === 0) return []

  const booksDir = join(contentDir, 'books')
  const results: Book[] = []

  for (const bookConfig of bookConfigs) {
    const bookSlug = bookConfig.slug
    const bookPath = join(booksDir, bookSlug)
    if (!existsSync(bookPath)) continue

    const { slug: _, ...metadata } = bookConfig

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

    // Resolve cover image: prefer metadata.cover, then fall back to common filenames
    let coverPath: string | undefined
    if (metadata.cover && existsSync(join(bookPath, metadata.cover))) {
      coverPath = join(bookPath, metadata.cover)
    } else {
      for (const ext of ['jpg', 'png', 'svg', 'webp']) {
        const candidate = join(bookPath, `cover.${ext}`)
        if (existsSync(candidate)) {
          coverPath = candidate
          break
        }
      }
    }

    const coverUrl = coverPath
      ? `/books/${bookSlug}/${coverPath.split('/').pop()}`
      : undefined

    results.push({
      slug: bookSlug,
      metadata,
      chapters,
      basePath: bookPath,
      coverPath,
      coverUrl,
    })
  }

  return results
}

export async function discoverArticles(contentDir: string): Promise<Article[]> {
  const articlesDir = join(contentDir, 'articles')
  if (!existsSync(articlesDir)) return []

  const articleDirs = await fastGlob('*', {
    cwd: articlesDir,
    onlyDirectories: true,
  })

  const articles: Article[] = []

  for (const articleSlug of articleDirs) {
    const articlePath = join(articlesDir, articleSlug)
    const indexPath = join(articlePath, 'index.mdx')

    if (!existsSync(indexPath)) continue

    const content = readFileSync(indexPath, 'utf-8')
    const { data } = matter(content)
    const metadata = data as Article['metadata']

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
}

export async function discoverContent(
  contentDir: string,
  bookConfigs?: BookConfig[]
): Promise<ContentManifest> {
  const books = await discoverBooks(contentDir, bookConfigs)
  const articles = await discoverArticles(contentDir)
  return { books, articles }
}
