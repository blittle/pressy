export interface BookMetadata {
  title: string
  author: string
  description?: string
  cover?: string
  publishDate?: string
  isbn?: string
  language?: string
  paywall?: {
    enabled: boolean
    previewChapters: number
    shopifyProductId?: string
    mode?: 'shopify' | 'email'
  }
}

export interface ArticleMetadata {
  title: string
  author: string
  description?: string
  publishDate?: string
  tags?: string[]
  cover?: string
}

export interface Chapter {
  slug: string
  title: string
  order: number
  filePath: string
  content?: string
  wordCount?: number
  readingTime?: number
}

export interface Book {
  slug: string
  metadata: BookMetadata
  chapters: Chapter[]
  basePath: string
  coverPath?: string
}

export interface Article {
  slug: string
  metadata: ArticleMetadata
  filePath: string
  basePath: string
  content?: string
  wordCount?: number
  readingTime?: number
}

export type ContentItem = Book | Article

export interface ContentManifest {
  books: Book[]
  articles: Article[]
}

export interface Route {
  path: string
  type: 'book' | 'article' | 'chapter' | 'home' | 'books' | 'articles'
  content?: ContentItem | Chapter
  book?: Book
}

export interface ReadingProgress {
  chapterSlug: string
  page: number
  totalPages: number
  scrollPosition: number
  timestamp: number
}

export interface ChapterMapData {
  chapterMap: Record<string, () => Promise<{ default: import('preact').ComponentType<{ components?: Record<string, unknown> }> }>>
  chapterOrder: string[]
}
