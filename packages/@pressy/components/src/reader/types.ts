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

export interface TTSProps {
  supported: boolean;
  isPlaying: boolean;
  rate: number;
  onToggle: () => void;
  onSetRate: (rate: number) => void;
}
