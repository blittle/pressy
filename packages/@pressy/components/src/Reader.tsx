import { ComponentChildren, ComponentType } from "preact";

import { ScrollReader } from "./reader/ScrollReader.js";
import { PaginatedReader } from "./reader/PaginatedReader.js";

export type { ProgressData, ChapterMapData, OfflineProps, ReaderPaywallConfig, BookmarkData, BookmarkProps } from "./reader/types.js";

export interface ReaderProps {
  children: ComponentChildren;
  title: string;
  bookTitle?: string;
  chapterSlug?: string;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  showDropCap?: boolean;
  paginationMode?: "scroll" | "paginated";
  onSaveProgress?: (data: import("./reader/types.js").ProgressData) => void;
  onRestoreProgress?: () => Promise<import("./reader/types.js").ProgressData | null>;
  bookProgressPercent?: number;
  initialContent?: ComponentType<{ components?: Record<string, unknown> }>;
  chapterMapData?: import("./reader/types.js").ChapterMapData;
  currentChapterSlug?: string;
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>;
  bookBasePath?: string;
  onChapterChange?: (slug: string, page: number, totalPages: number) => void;
  mdxComponents?: Record<string, unknown>;
  paywall?: import("./reader/types.js").ReaderPaywallConfig;
  offlineProps?: import("./reader/types.js").OfflineProps;
  bookmarkProps?: import("./reader/types.js").BookmarkProps;
}

export function Reader({
  children,
  bookTitle,
  prevChapter,
  nextChapter,
  showDropCap = true,
  paginationMode = "scroll",
  onSaveProgress,
  onRestoreProgress,
  bookProgressPercent,
  initialContent,
  chapterMapData,
  currentChapterSlug,
  allChapters,
  bookBasePath,
  onChapterChange,
  mdxComponents,
  paywall,
  offlineProps,
  bookmarkProps,
}: ReaderProps) {
  if (paginationMode === "paginated") {
    return (
      <PaginatedReader
        bookTitle={bookTitle}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        showDropCap={showDropCap}
        onSaveProgress={onSaveProgress}
        onRestoreProgress={onRestoreProgress}
        bookProgressPercent={bookProgressPercent}
        initialContent={initialContent}
        chapterMapData={chapterMapData}
        currentChapterSlug={currentChapterSlug}
        allChapters={allChapters}
        bookBasePath={bookBasePath}
        onChapterChange={onChapterChange}
        mdxComponents={mdxComponents}
        paywall={paywall}
        offlineProps={offlineProps}
        bookmarkProps={bookmarkProps}
      >
        {children}
      </PaginatedReader>
    );
  }

  return (
    <ScrollReader
      bookTitle={bookTitle}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      showDropCap={showDropCap}
      onSaveProgress={onSaveProgress}
      onRestoreProgress={onRestoreProgress}
      allChapters={allChapters}
      bookBasePath={bookBasePath}
      currentChapterSlug={currentChapterSlug}
      offlineProps={offlineProps}
      bookmarkProps={bookmarkProps}
    >
      {children}
    </ScrollReader>
  );
}
