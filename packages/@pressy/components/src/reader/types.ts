import { ComponentType } from "preact";

export interface ProgressData {
  page: number;
  totalPages: number;
  scrollPosition: number;
  /** In multi-chapter mode, the slug of the chapter this progress belongs to. */
  activeChapterSlug?: string;
}

export interface ChapterMapData {
  chapterMap: Record<
    string,
    () => Promise<{
      default: ComponentType<{ components?: Record<string, unknown> }>;
    }>
  >;
  chapterOrder: string[];
}

export interface ReaderPaywallConfig {
  previewChapters: number;
  authorized: boolean;
  bookSlug: string;
  price?: string;
  mode?: 'email' | 'stripe';
  bookBasePath?: string;
}

export interface OfflineProps {
  bookSlug: string;
  chapterUrls: string[];
  cachedBooks: { value: Set<string> };
  cacheProgress: {
    value: { bookSlug: string; current: number; total: number } | null;
  };
  onDownload: (bookSlug: string, chapterUrls: string[]) => void;
  onRemove: (bookSlug: string) => void;
}

export interface BookmarkData {
  id: string
  bookSlug: string
  chapterSlug: string
  chapterTitle: string
  page: number
  totalPages: number
  scrollPosition: number
  createdAt: number
}

export interface BookmarkProps {
  bookmarks: BookmarkData[]
  onAddBookmark: (data: {
    chapterSlug: string
    chapterTitle: string
    page: number
    totalPages: number
    scrollPosition: number
  }) => void
  onDeleteBookmark: (id: string) => void
  onNavigateBookmark: (bookmark: BookmarkData) => void
}
