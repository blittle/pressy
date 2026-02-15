import { ComponentChildren, ComponentType } from "preact";
import { useState, useEffect, useRef, useCallback } from "preact/hooks";

import { Navigation } from "./Navigation.js";
import { TextShare } from "./TextShare.js";
import { OfflineIndicator } from "./OfflineIndicator.js";

export interface ProgressData {
  page: number;
  totalPages: number;
  scrollPosition: number;
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

export interface ReaderProps {
  children: ComponentChildren;
  title: string;
  bookTitle?: string;
  chapterSlug?: string;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  showDropCap?: boolean;
  paginationMode?: "scroll" | "paginated";
  onSaveProgress?: (data: ProgressData) => void;
  onRestoreProgress?: () => Promise<ProgressData | null>;
  bookProgressPercent?: number;
  initialContent?: ComponentType<{ components?: Record<string, unknown> }>;
  chapterMapData?: ChapterMapData;
  currentChapterSlug?: string;
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>;
  bookBasePath?: string;
  onChapterChange?: (slug: string, page: number, totalPages: number) => void;
  mdxComponents?: Record<string, unknown>;
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
      >
        {children}
      </PaginatedReader>
    );
  }

  return (
    <ScrollReader
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      showDropCap={showDropCap}
      onSaveProgress={onSaveProgress}
      onRestoreProgress={onRestoreProgress}
    >
      {children}
    </ScrollReader>
  );
}

// ── Scroll Reader ────────────────────────────────────────────

interface ScrollReaderProps {
  children: ComponentChildren;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  showDropCap: boolean;
  onSaveProgress?: (data: ProgressData) => void;
  onRestoreProgress?: () => Promise<ProgressData | null>;
}

function ScrollReader({
  children,
  prevChapter,
  nextChapter,
  showDropCap,
  onSaveProgress,
  onRestoreProgress,
}: ScrollReaderProps) {
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore scroll position on mount
  useEffect(() => {
    if (!onRestoreProgress) return;
    onRestoreProgress().then((data) => {
      if (data && data.scrollPosition > 0) {
        window.scrollTo(0, data.scrollPosition);
      }
    });
  }, []);

  // Save scroll position (debounced)
  useEffect(() => {
    if (!onSaveProgress) return;

    const handleScroll = () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        onSaveProgress({
          page: 0,
          totalPages: 0,
          scrollPosition: window.scrollY,
        });
      }, 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [onSaveProgress]);

  // Save on page unload
  useEffect(() => {
    if (!onSaveProgress) return;

    const handleUnload = () => {
      onSaveProgress({
        page: 0,
        totalPages: 0,
        scrollPosition: window.scrollY,
      });
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [onSaveProgress]);

  return (
    <div class="pressy-reader">
      <main class="pressy-reader-main">
        <article
          class={`pressy-prose ${showDropCap ? "" : "no-drop-cap"}`}
          data-drop-cap={showDropCap}
        >
          {children}
        </article>
      </main>

      <TextShare />
      <Navigation prev={prevChapter} next={nextChapter} />
      <OfflineIndicator />

      <style>{SCROLL_STYLES}</style>
    </div>
  );
}

// ── Paginated Reader ──────────────────────────────────────────

interface LoadedChapter {
  slug: string;
  title: string;
  Content: ComponentType<{ components?: Record<string, unknown> }>;
}

interface ChapterPageRange {
  slug: string;
  startPage: number;
  endPage: number;
}

interface PaginatedReaderProps {
  children: ComponentChildren;
  bookTitle?: string;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  showDropCap: boolean;
  onSaveProgress?: (data: ProgressData) => void;
  onRestoreProgress?: () => Promise<ProgressData | null>;
  bookProgressPercent?: number;
  initialContent?: ComponentType<{ components?: Record<string, unknown> }>;
  chapterMapData?: ChapterMapData;
  currentChapterSlug?: string;
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>;
  bookBasePath?: string;
  onChapterChange?: (slug: string, page: number, totalPages: number) => void;
  mdxComponents?: Record<string, unknown>;
}

function ChapterDivider({ title }: { title: string }) {
  return (
    <div class="pressy-chapter-divider">
      <h2 class="pressy-chapter-divider-title">{title}</h2>
    </div>
  );
}

function PaginatedReader({
  children,
  bookTitle,
  prevChapter,
  nextChapter,
  showDropCap,
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
}: PaginatedReaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const hasRestoredRef = useRef(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Multi-chapter state
  const [loadedChapters, setLoadedChapters] = useState<LoadedChapter[]>([]);
  const [chapterRanges, setChapterRanges] = useState<ChapterPageRange[]>([]);
  const [activeChapterSlug, setActiveChapterSlug] = useState(
    currentChapterSlug || ""
  );
  const preloadingRef = useRef<Set<string>>(new Set());

  // Whether we're in multi-chapter mode
  const isMultiChapter = !!(
    chapterMapData &&
    initialContent &&
    currentChapterSlug &&
    allChapters
  );

  // Initialize loaded chapters
  useEffect(() => {
    if (isMultiChapter && initialContent && currentChapterSlug) {
      const chapterInfo = allChapters!.find(
        (ch) => ch.slug === currentChapterSlug
      );
      setLoadedChapters([
        {
          slug: currentChapterSlug,
          title: chapterInfo?.title || currentChapterSlug,
          Content: initialContent,
        },
      ]);
      setActiveChapterSlug(currentChapterSlug);
    }
  }, []); // Only on mount

  // Settings panel state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("pressy-theme") || "light";
    }
    return "light";
  });
  const [fontScale, setFontScale] = useState<number>(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("pressy-font-size");
      return saved ? parseFloat(saved) : 1.0;
    }
    return 1.0;
  });

  const applyFontScale = useCallback((scale: number) => {
    if (scale === 1.0) {
      document.documentElement.style.removeProperty("--font-size-base");
    } else {
      document.documentElement.style.setProperty(
        "--font-size-base",
        `calc(clamp(1rem, 0.875rem + 0.5vw, 1.25rem) * ${scale})`
      );
    }
  }, []);

  // Apply saved font scale on mount
  useEffect(() => {
    if (fontScale !== 1.0) {
      applyFontScale(fontScale);
    }
  }, []);

  const handleThemeChange = useCallback((theme: string) => {
    setActiveTheme(theme);
    localStorage.setItem("pressy-theme", theme);
    const resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  // Drag/swipe state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [chapterHint, setChapterHint] = useState<"next" | "prev" | null>(null);

  // Touch tracking refs (avoid re-renders during drag)
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const lastTouchXRef = useRef(0);
  const lastTouchTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isSwipingRef = useRef(false);
  const isDraggingRef = useRef(false);

  // Build page-to-chapter map after recalculating pages
  const updateChapterRanges = useCallback(() => {
    if (!isMultiChapter) return;
    const article = articleRef.current;
    const viewport = viewportRef.current;
    if (!article || !viewport) return;

    const viewportWidth = viewport.clientWidth;
    if (viewportWidth === 0) return;

    const sections = article.querySelectorAll(".pressy-chapter-section");
    const ranges: ChapterPageRange[] = [];

    sections.forEach((section) => {
      const slug = section.getAttribute("data-chapter-slug") || "";
      const sectionLeft = (section as HTMLElement).offsetLeft;
      const sectionWidth = (section as HTMLElement).scrollWidth;
      const startPage = Math.floor(sectionLeft / viewportWidth);
      const endPage = Math.max(
        startPage,
        Math.ceil((sectionLeft + sectionWidth) / viewportWidth) - 1
      );
      ranges.push({ slug, startPage, endPage });
    });

    setChapterRanges(ranges);
  }, [isMultiChapter]);

  // Calculate page count and set column-width to match viewport
  const recalculatePages = useCallback(() => {
    const article = articleRef.current;
    const viewport = viewportRef.current;
    if (!article || !viewport) return;

    const viewportWidth = viewport.clientWidth;
    if (viewportWidth === 0) return;

    // Set column-width to viewport width so each column = one page
    article.style.columnWidth = `${viewportWidth}px`;

    // Force synchronous layout recalculation
    void article.scrollWidth;

    const total = Math.max(1, Math.round(article.scrollWidth / viewportWidth));
    setTotalPages(total);

    // Clamp current page if now out of bounds (e.g. after resize)
    setCurrentPage((prev) => Math.min(prev, total - 1));

    // Update chapter ranges for multi-chapter mode
    updateChapterRanges();
  }, [updateChapterRanges]);

  // Font size change handler (defined after recalculatePages)
  const handleFontSizeChange = useCallback(
    (delta: number) => {
      setFontScale((prev) => {
        const next =
          Math.round(Math.max(0.8, Math.min(1.5, prev + delta)) * 10) / 10;
        localStorage.setItem("pressy-font-size", String(next));
        applyFontScale(next);
        setTimeout(() => recalculatePages(), 100);
        return next;
      });
    },
    [applyFontScale, recalculatePages]
  );

  // Recalculate on mount and on resize via ResizeObserver
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Delay initial calculation to let fonts and content render
    const initialTimer = setTimeout(recalculatePages, 50);

    const observer = new ResizeObserver(() => {
      recalculatePages();
    });
    observer.observe(viewport);

    return () => {
      clearTimeout(initialTimer);
      observer.disconnect();
    };
  }, [recalculatePages]);

  // Recalculate when loaded chapters change
  useEffect(() => {
    if (loadedChapters.length > 0) {
      // Delay to let new content render
      const timer = setTimeout(recalculatePages, 50);
      return () => clearTimeout(timer);
    }
  }, [loadedChapters.length, recalculatePages]);

  // Recalculate when images finish loading
  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    const images = article.querySelectorAll("img");
    if (images.length === 0) return;

    const onLoad = () => recalculatePages();
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, [recalculatePages, loadedChapters.length]);

  // Check ?page=last query param for backward navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("page") === "last" && totalPages > 1) {
      setCurrentPage(totalPages - 1);
      hasRestoredRef.current = true;
      // Clean up the URL
      const url = new URL(window.location.href);
      url.searchParams.delete("page");
      history.replaceState(null, "", url.pathname);
    }
  }, [totalPages]);

  // Apply translateX — combines page position + drag offset
  useEffect(() => {
    const article = articleRef.current;
    const viewport = viewportRef.current;
    if (!article || !viewport) return;

    const baseOffset = currentPage * viewport.clientWidth;
    const totalOffset = baseOffset - dragOffset;

    if (isDragging) {
      // During drag: no transition, immediate response
      article.style.transition = "none";
    } else {
      // Snap animation: smooth ease-out
      article.style.transition =
        "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }

    article.style.transform = `translateX(-${totalOffset}px)`;
  }, [currentPage, dragOffset, isDragging]);

  // Manage focusability: elements on off-screen pages get tabindex="-1"
  // so tab navigation can't reach them and cause layout shifts.
  // Uses getBoundingClientRect which accounts for the CSS transform.
  useEffect(() => {
    const article = articleRef.current;
    const viewport = viewportRef.current;
    if (!article || !viewport) return;

    const viewportRect = viewport.getBoundingClientRect();

    const focusable = article.querySelectorAll<HTMLElement>(
      "a[href], button, input, select, textarea, [tabindex]"
    );

    focusable.forEach((el) => {
      const elRect = el.getBoundingClientRect();
      const onCurrentPage =
        elRect.left >= viewportRect.left - 1 &&
        elRect.right <= viewportRect.right + 1;

      if (onCurrentPage) {
        const original = el.getAttribute("data-original-tabindex");
        if (original !== null) {
          if (original === "") {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", original);
          }
          el.removeAttribute("data-original-tabindex");
        }
      } else {
        if (!el.hasAttribute("data-original-tabindex")) {
          el.setAttribute(
            "data-original-tabindex",
            el.getAttribute("tabindex") || ""
          );
        }
        el.setAttribute("tabindex", "-1");
      }
    });
  }, [currentPage, totalPages]);

  // Preload next chapter when within 2 pages of chapter end
  useEffect(() => {
    if (!isMultiChapter || !chapterMapData || chapterRanges.length === 0)
      return;

    const activeRange = chapterRanges.find((r) => r.slug === activeChapterSlug);
    if (!activeRange) return;

    const pagesFromEnd = activeRange.endPage - currentPage;
    if (pagesFromEnd > 2) return;

    // Find the next chapter to preload
    const { chapterOrder, chapterMap } = chapterMapData;
    const lastLoadedSlug = loadedChapters[loadedChapters.length - 1]?.slug;
    const lastLoadedIdx = chapterOrder.indexOf(lastLoadedSlug);
    if (lastLoadedIdx === -1 || lastLoadedIdx >= chapterOrder.length - 1)
      return;

    const nextSlug = chapterOrder[lastLoadedIdx + 1];
    if (preloadingRef.current.has(nextSlug)) return;
    if (loadedChapters.some((ch) => ch.slug === nextSlug)) return;

    preloadingRef.current.add(nextSlug);

    const loader = chapterMap[nextSlug];
    if (!loader) return;

    loader()
      .then((mod) => {
        const Content = mod.default;
        const chapterInfo = allChapters!.find((ch) => ch.slug === nextSlug);
        setLoadedChapters((prev) => {
          if (prev.some((ch) => ch.slug === nextSlug)) return prev;
          return [
            ...prev,
            {
              slug: nextSlug,
              title: chapterInfo?.title || nextSlug,
              Content,
            },
          ];
        });
      })
      .catch(() => {
        // Dynamic import failed — will fall back to full-page navigation
        preloadingRef.current.delete(nextSlug);
      });
  }, [
    currentPage,
    activeChapterSlug,
    chapterRanges,
    isMultiChapter,
    chapterMapData,
    loadedChapters,
    allChapters,
  ]);

  // Detect chapter boundary crossings and update URL / active chapter
  useEffect(() => {
    if (!isMultiChapter || chapterRanges.length === 0 || !bookBasePath) return;

    const currentRange = chapterRanges.find(
      (r) => currentPage >= r.startPage && currentPage <= r.endPage
    );
    if (!currentRange || currentRange.slug === activeChapterSlug) return;

    const prevSlug = activeChapterSlug;
    setActiveChapterSlug(currentRange.slug);

    // Update URL
    const newPath = `${bookBasePath}/${currentRange.slug}`;
    history.replaceState(null, "", newPath);

    // Update document title
    const chapterInfo = allChapters?.find(
      (ch) => ch.slug === currentRange.slug
    );
    if (chapterInfo) {
      document.title = document.title.replace(
        /^[^|]+/,
        chapterInfo.title + " "
      );
    }

    // Notify parent about chapter change (saves progress for the chapter being left)
    if (onChapterChange && prevSlug) {
      const prevRange = chapterRanges.find((r) => r.slug === prevSlug);
      if (prevRange) {
        const prevTotalPages = prevRange.endPage - prevRange.startPage + 1;
        onChapterChange(prevSlug, prevTotalPages - 1, prevTotalPages);
      }
    }
  }, [
    currentPage,
    chapterRanges,
    activeChapterSlug,
    isMultiChapter,
    bookBasePath,
    allChapters,
    onChapterChange,
  ]);

  // Save progress when page changes (debounced) — save relative to active chapter
  useEffect(() => {
    if (!onSaveProgress || !hasRestoredRef.current) return;

    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      if (isMultiChapter && chapterRanges.length > 0) {
        const activeRange = chapterRanges.find(
          (r) => r.slug === activeChapterSlug
        );
        if (activeRange) {
          const chapterPage = currentPage - activeRange.startPage;
          const chapterTotalPages =
            activeRange.endPage - activeRange.startPage + 1;
          onSaveProgress({
            page: chapterPage,
            totalPages: chapterTotalPages,
            scrollPosition: 0,
          });
        }
      } else {
        onSaveProgress({
          page: currentPage,
          totalPages,
          scrollPosition: 0,
        });
      }
    }, 300);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [
    currentPage,
    totalPages,
    onSaveProgress,
    isMultiChapter,
    chapterRanges,
    activeChapterSlug,
  ]);

  // Save progress on page unload
  useEffect(() => {
    if (!onSaveProgress) return;

    const handleUnload = () => {
      if (isMultiChapter && chapterRanges.length > 0) {
        const activeRange = chapterRanges.find(
          (r) => r.slug === activeChapterSlug
        );
        if (activeRange) {
          const chapterPage = currentPage - activeRange.startPage;
          const chapterTotalPages =
            activeRange.endPage - activeRange.startPage + 1;
          onSaveProgress({
            page: chapterPage,
            totalPages: chapterTotalPages,
            scrollPosition: 0,
          });
        }
      } else {
        onSaveProgress({
          page: currentPage,
          totalPages,
          scrollPosition: 0,
        });
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [
    currentPage,
    totalPages,
    onSaveProgress,
    isMultiChapter,
    chapterRanges,
    activeChapterSlug,
  ]);

  // Determine the effective last chapter slug for rubber-band / next chapter hint
  const effectiveNextChapter = (() => {
    if (!isMultiChapter || !chapterMapData) return nextChapter;
    const { chapterOrder } = chapterMapData;
    const lastLoadedSlug = loadedChapters[loadedChapters.length - 1]?.slug;
    const lastLoadedIdx = chapterOrder.indexOf(lastLoadedSlug);
    // If we haven't loaded the last chapter in the book yet, no next chapter hint needed
    // (preloading will seamlessly add the next chapter)
    if (lastLoadedIdx < chapterOrder.length - 1) return undefined;
    // All chapters loaded — navigate to book table of contents
    if (bookBasePath) return { slug: bookBasePath, title: "Table of Contents" };
    return nextChapter;
  })();

  // Determine the effective prev chapter for backward navigation
  const effectivePrevChapter = (() => {
    if (!isMultiChapter || !chapterMapData) return prevChapter;
    const { chapterOrder } = chapterMapData;
    const firstLoadedSlug = loadedChapters[0]?.slug;
    const firstLoadedIdx = chapterOrder.indexOf(firstLoadedSlug);
    // If the first loaded chapter is the first chapter of the book
    if (firstLoadedIdx <= 0) return prevChapter;
    // There's a previous chapter in the book — navigate to it via page load
    const prevSlug = chapterOrder[firstLoadedIdx - 1];
    const prevInfo = allChapters?.find((ch) => ch.slug === prevSlug);
    return {
      slug: `${bookBasePath}/${prevSlug}?page=last`,
      title: prevInfo?.title || prevSlug,
    };
  })();

  const goToPage = useCallback(
    (page: number) => {
      const clamped = Math.max(0, Math.min(page, totalPages - 1));
      setCurrentPage(clamped);
    },
    [totalPages]
  );

  const goNext = useCallback(() => {
    if (currentPage >= totalPages - 1) {
      // At the last page — navigate to next chapter if available
      if (effectiveNextChapter) {
        window.location.href = effectiveNextChapter.slug;
      }
      return;
    }
    goToPage(currentPage + 1);
  }, [currentPage, totalPages, effectiveNextChapter, goToPage]);

  const goPrev = useCallback(() => {
    if (currentPage <= 0) {
      // At the first page — navigate to prev chapter if available
      if (effectivePrevChapter) {
        window.location.href = effectivePrevChapter.slug;
      }
      return;
    }
    goToPage(currentPage - 1);
  }, [currentPage, effectivePrevChapter, goToPage]);

  // Footer visibility — hidden by default, shown on interaction
  const [footerVisible, setFooterVisible] = useState(false);
  const footerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showFooterTemporarily = useCallback(() => {
    setFooterVisible(true);
    if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
    footerTimerRef.current = setTimeout(() => setFooterVisible(false), 3000);
  }, []);

  // Double-tap fullscreen (mobile middle-third)
  const lastMiddleTapRef = useRef(0);
  const middleTapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen not supported or denied
      });
    }
  }, []);

  // Tap-to-turn: clicking left/right thirds of the screen turns pages.
  // Uses a click handler on the container so interactive content (links,
  // footnotes, buttons) naturally gets priority via event bubbling.
  const handleContainerClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Clicks inside the settings panel or on interactive elements — don't turn pages
      if (target.closest(".pressy-settings-panel, .pressy-settings-toggle"))
        return;
      if (target.closest('a, button, input, select, textarea, [role="button"]'))
        return;

      // If settings panel is open, close it on any outside click
      if (settingsOpen) {
        setSettingsOpen(false);
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const edgeZone = rect.width * 0.15;

      if (x < edgeZone) {
        goPrev();
      } else if (x > rect.width - edgeZone) {
        goNext();
      } else {
        // Middle third tap — single tap toggles footer, double tap toggles fullscreen
        const now = Date.now();
        const timeSinceLastTap = now - lastMiddleTapRef.current;
        lastMiddleTapRef.current = now;

        if (timeSinceLastTap < 300) {
          // Double tap — cancel pending single-tap action, toggle fullscreen
          if (middleTapTimerRef.current)
            clearTimeout(middleTapTimerRef.current);
          toggleFullscreen();
        } else {
          // Possible single tap — delay to check for double tap
          if (middleTapTimerRef.current)
            clearTimeout(middleTapTimerRef.current);
          middleTapTimerRef.current = setTimeout(() => {
            if (footerVisible) {
              setFooterVisible(false);
              if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
            } else {
              showFooterTemporarily();
            }
          }, 300);
        }
      }
    },
    [
      goNext,
      goPrev,
      footerVisible,
      settingsOpen,
      showFooterTemporarily,
      toggleFullscreen,
    ]
  );

  // Hover zone tracking for desktop navigation hints
  const [hoverZone, setHoverZone] = useState<"left" | "right" | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const third = rect.width / 3;

      if (x < third) {
        setHoverZone("left");
      } else if (x > third * 2) {
        setHoverZone("right");
      } else {
        setHoverZone(null);
      }

      // Show footer when mouse is in the bottom quarter
      if (y > rect.height * 0.75) {
        setFooterVisible(true);
        if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
      } else if (!settingsOpen) {
        // Hide after a short delay when leaving the bottom area (not when settings is open)
        if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
        footerTimerRef.current = setTimeout(() => setFooterVisible(false), 600);
      }
    },
    [settingsOpen]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverZone(null);
    if (!settingsOpen) {
      if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
      footerTimerRef.current = setTimeout(() => setFooterVisible(false), 600);
    }
  }, [settingsOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is in an input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToPage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToPage(totalPages - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, goToPage, totalPages]);

  // Touch swipe navigation with drag tracking, velocity detection, and rubber-band.
  // Listeners attach to the outer container (not the viewport) so they capture
  // touches that land on sibling elements like the tap-zone overlays.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;
      lastTouchXRef.current = touch.clientX;
      lastTouchTimeRef.current = performance.now();
      velocityRef.current = 0;
      isSwipingRef.current = false;
      isDraggingRef.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const dx = touch.clientX - touchStartXRef.current;
      const dy = touch.clientY - touchStartYRef.current;

      // Lock direction after initial movement
      if (!isSwipingRef.current) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
          isSwipingRef.current = true;
        } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
          // Vertical scroll — not our concern
          return;
        } else {
          return; // Not enough movement yet
        }
      }

      e.preventDefault();

      // Track velocity (px per ms) using last touch position
      const now = performance.now();
      const timeDelta = now - lastTouchTimeRef.current;
      if (timeDelta > 0) {
        const instantVelocity =
          (touch.clientX - lastTouchXRef.current) / timeDelta;
        // Smooth velocity with exponential moving average
        velocityRef.current = 0.6 * instantVelocity + 0.4 * velocityRef.current;
      }
      lastTouchXRef.current = touch.clientX;
      lastTouchTimeRef.current = now;

      // Determine drag offset with rubber-band resistance at boundaries
      let offset = dx;
      const atStart = currentPage === 0;
      const atEnd = currentPage >= totalPages - 1;

      if ((atStart && dx > 0) || (atEnd && dx < 0)) {
        // Rubber-band: diminishing resistance using square root curve
        // This gives a natural iOS-like rubber-band feel
        const sign = dx > 0 ? 1 : -1;
        const absDx = Math.abs(dx);
        offset = sign * Math.sqrt(absDx) * 5;

        // Show chapter hint when overscrolling past boundary
        if (dx > 40 && atStart && effectivePrevChapter) {
          setChapterHint("prev");
        } else if (dx < -40 && atEnd && effectiveNextChapter) {
          setChapterHint("next");
        } else {
          setChapterHint(null);
        }
      } else {
        setChapterHint(null);
      }

      isDraggingRef.current = true;
      setIsDragging(true);
      setDragOffset(offset);
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwipingRef.current || !isDraggingRef.current) {
        setIsDragging(false);
        setDragOffset(0);
        setChapterHint(null);
        return;
      }

      const dx = e.changedTouches[0].clientX - touchStartXRef.current;
      const velocity = velocityRef.current; // px/ms
      const distanceThreshold = 50;
      const velocityThreshold = 0.3; // px/ms — a fast flick
      const chapterThreshold = 80;

      const atStart = currentPage === 0;
      const atEnd = currentPage >= totalPages - 1;

      // Chapter navigation on overscroll
      if (atEnd && dx < -chapterThreshold && effectiveNextChapter) {
        setIsDragging(false);
        setDragOffset(0);
        setChapterHint(null);
        window.location.href = effectiveNextChapter.slug;
        return;
      }
      if (atStart && dx > chapterThreshold && effectivePrevChapter) {
        setIsDragging(false);
        setDragOffset(0);
        setChapterHint(null);
        window.location.href = effectivePrevChapter.slug;
        return;
      }

      // Determine page change: distance OR velocity triggers a turn
      if (dx < -distanceThreshold || velocity < -velocityThreshold) {
        goNext();
      } else if (dx > distanceThreshold || velocity > velocityThreshold) {
        goPrev();
      }

      // Reset drag state — the CSS transition handles the snap animation
      isDraggingRef.current = false;
      setIsDragging(false);
      setDragOffset(0);
      setChapterHint(null);
    };

    // Cancel drag if touch is interrupted
    const onTouchCancel = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      setDragOffset(0);
      setChapterHint(null);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [
    currentPage,
    totalPages,
    goNext,
    goPrev,
    effectiveNextChapter,
    effectivePrevChapter,
  ]);

  // Compute per-chapter page indicator values
  const chapterPageInfo = (() => {
    if (!isMultiChapter || chapterRanges.length === 0) {
      return { chapterPage: currentPage, chapterTotalPages: totalPages };
    }
    const activeRange = chapterRanges.find((r) => r.slug === activeChapterSlug);
    if (!activeRange) {
      return { chapterPage: currentPage, chapterTotalPages: totalPages };
    }
    return {
      chapterPage: currentPage - activeRange.startPage,
      chapterTotalPages: activeRange.endPage - activeRange.startPage + 1,
    };
  })();

  // Book progress: position in the entire book based on word counts.
  // Maps currentPage/totalPages (across all loaded content) through
  // word counts to estimate absolute position in the full book.
  const progressPercent = (() => {
    if (!allChapters || allChapters.length === 0) {
      return totalPages > 1 ? (currentPage / (totalPages - 1)) * 100 : 100;
    }

    const totalWords = allChapters.reduce(
      (sum, ch) => sum + (ch.wordCount || 0),
      0
    );
    if (totalWords === 0) return 0;

    const firstLoadedSlug = loadedChapters[0]?.slug || activeChapterSlug;
    let wordsBeforeLoaded = 0;
    let loadedWords = 0;
    let foundFirst = false;

    for (const ch of allChapters) {
      if (ch.slug === firstLoadedSlug) foundFirst = true;
      if (!foundFirst) {
        wordsBeforeLoaded += ch.wordCount || 0;
      } else if (loadedChapters.some((lc) => lc.slug === ch.slug)) {
        loadedWords += ch.wordCount || 0;
      } else {
        break;
      }
    }

    const pageFraction = totalPages > 1 ? currentPage / (totalPages - 1) : 0;
    const wordsInto = wordsBeforeLoaded + pageFraction * loadedWords;

    return Math.min(100, (wordsInto / totalWords) * 100);
  })();

  // Render content — either multi-chapter sections or single-chapter children
  const renderContent = () => {
    if (isMultiChapter && loadedChapters.length > 0) {
      return loadedChapters.map((ch) => (
        <section
          key={ch.slug}
          class="pressy-chapter-section"
          data-chapter-slug={ch.slug}
        >
          <ChapterDivider title={ch.title} />
          <ch.Content components={mdxComponents || {}} />
        </section>
      ));
    }
    return children;
  };

  return (
    <div
      class="pressy-reader pressy-reader--paginated"
      ref={containerRef}
      onClick={handleContainerClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Paginated content viewport */}
      <div class="pressy-paginated-viewport" ref={viewportRef}>
        <article
          ref={articleRef}
          class={`pressy-prose pressy-prose--paginated ${
            showDropCap ? "" : "no-drop-cap"
          }`}
          data-drop-cap={showDropCap}
        >
          {renderContent()}
        </article>
      </div>

      {/* Navigation arrows — appear on hover in left/right thirds */}
      <div
        class={`pressy-nav-arrow pressy-nav-arrow--prev ${
          hoverZone === "left" ? "pressy-nav-arrow--visible" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
      <div
        class={`pressy-nav-arrow pressy-nav-arrow--next ${
          hoverZone === "right" ? "pressy-nav-arrow--visible" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>

      {/* Chapter boundary hints */}
      {chapterHint === "prev" && effectivePrevChapter && (
        <div
          class="pressy-chapter-hint pressy-chapter-hint--prev"
          aria-live="polite"
        >
          <span class="pressy-chapter-hint-arrow">{"\u2190"}</span>
          <span class="pressy-chapter-hint-text">
            {effectivePrevChapter.title}
          </span>
        </div>
      )}
      {chapterHint === "next" && effectiveNextChapter && (
        <div
          class="pressy-chapter-hint pressy-chapter-hint--next"
          aria-live="polite"
        >
          <span class="pressy-chapter-hint-text">
            {effectiveNextChapter.title}
          </span>
          <span class="pressy-chapter-hint-arrow">{"\u2192"}</span>
        </div>
      )}

      {/* Page footer with progress — hidden by default */}
      <div
        class={`pressy-page-footer ${
          footerVisible || settingsOpen ? "pressy-page-footer--visible" : ""
        }`}
      >
        <div class="pressy-progress-bar">
          <div
            class="pressy-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div class="pressy-footer-row">
          {bookTitle && <span class="pressy-footer-title">{bookTitle}</span>}
          <button
            class="pressy-settings-toggle"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              setSettingsOpen(!settingsOpen);
            }}
            aria-label="Settings"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="18"
              height="18"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        {/* Settings panel */}
        <div
          class={`pressy-settings-panel ${
            settingsOpen ? "pressy-settings-panel--open" : ""
          }`}
        >
          <div class="pressy-settings-section">
            <div class="pressy-settings-label">Theme</div>
            <div class="pressy-theme-options">
              {(
                [
                  {
                    id: "light",
                    label: "Light",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        width="16"
                        height="16"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                    ),
                  },
                  {
                    id: "dark",
                    label: "Dark",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        width="16"
                        height="16"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    ),
                  },
                  {
                    id: "system",
                    label: "System",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    ),
                  },
                  {
                    id: "sepia",
                    label: "Sepia",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        width="16"
                        height="16"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    ),
                  },
                ] as const
              ).map((t) => (
                <button
                  key={t.id}
                  class={`pressy-theme-btn ${
                    activeTheme === t.id ? "pressy-theme-btn--active" : ""
                  }`}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleThemeChange(t.id);
                  }}
                >
                  {t.icon}
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div class="pressy-settings-section">
            <div class="pressy-settings-label">Font Size</div>
            <div class="pressy-font-size-controls">
              <button
                class="pressy-font-size-btn"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleFontSizeChange(-0.1);
                }}
                disabled={fontScale <= 0.8}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span class="pressy-font-size-value">
                {Math.round(fontScale * 100)}%
              </span>
              <button
                class="pressy-font-size-btn"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleFontSizeChange(0.1);
                }}
                disabled={fontScale >= 1.5}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>

      <TextShare />
      <OfflineIndicator />

      <style>{PAGINATED_STYLES}</style>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────

const SCROLL_STYLES = `
  .pressy-reader {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .pressy-reader-main {
    flex: 1;
    padding: 2rem 0;
  }
`;

const PAGINATED_STYLES = `
  html:has(.pressy-reader--paginated) body {
    margin: 0;
  }

  .pressy-reader--paginated {
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  /* Viewport clips overflow and shows one page at a time.
     Vertical padding gives consistent top/bottom margins on every page. */
  .pressy-paginated-viewport {
    flex: 1;
    overflow: hidden;
    position: relative;
    min-height: 0;
    padding-block: 2rem;
    box-sizing: border-box;
  }

  /* Article uses CSS multi-column layout for pagination.
     column-width is set dynamically via JS to match viewport width.
     Each column = one "page". Content overflows horizontally into new columns.
     translateX controlled by JS — transitions set dynamically during drag vs snap. */
  .pressy-prose--paginated {
    max-width: none;
    height: 100%;
    column-fill: auto;
    column-gap: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    will-change: transform;
    /* Transition is set dynamically: none during drag, ease-out on snap */
  }

  /* Center content elements within each column/page at a readable width */
  .pressy-prose--paginated > * {
    max-width: min(65ch, calc(100% - 3rem));
    margin-left: auto;
    margin-right: auto;
  }

  /* Preserve vertical margins from prose styles */
  .pressy-prose--paginated > h1,
  .pressy-prose--paginated > h2,
  .pressy-prose--paginated > h3,
  .pressy-prose--paginated > h4 {
    max-width: min(65ch, calc(100% - 3rem));
    margin-left: auto;
    margin-right: auto;
  }

  /* ── Navigation arrows ────────────────────────────────────── */
  /* Hover-triggered arrows on left/right edges for desktop navigation */
  .pressy-nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted, #6c757d);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
    z-index: 5;
  }

  .pressy-nav-arrow svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .pressy-nav-arrow--prev {
    left: 0.75rem;
  }

  .pressy-nav-arrow--next {
    right: 0.75rem;
  }

  .pressy-nav-arrow--visible {
    opacity: 0.4;
  }

  /* Hide on touch devices — swipe handles navigation there */
  @media (hover: none) {
    .pressy-nav-arrow {
      display: none;
    }
  }

  /* ── Chapter boundary hints ─────────────────────────────── */
  /* Shown when overscrolling past first/last page of a chapter */
  .pressy-chapter-hint {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border: 1px solid var(--color-border, #dee2e6);
    border-radius: 0.75rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    z-index: 20;
    pointer-events: none;
    animation: pressy-hint-fade-in 0.15s ease-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    max-width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pressy-chapter-hint--prev {
    left: 1rem;
  }

  .pressy-chapter-hint--next {
    right: 1rem;
  }

  .pressy-chapter-hint-arrow {
    flex-shrink: 0;
    font-size: 1rem;
    opacity: 0.6;
  }

  .pressy-chapter-hint-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @keyframes pressy-hint-fade-in {
    from { opacity: 0; transform: translateY(-50%) scale(0.95); }
    to { opacity: 1; transform: translateY(-50%) scale(1); }
  }

  /* ── Page footer ───────────────────────────────────────────── */
  .pressy-page-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1.5rem 1rem;
    text-align: center;
    user-select: none;
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
    z-index: 15;
    background: var(--color-bg, #ffffff);
  }

  .pressy-page-footer--visible {
    transform: translateY(0);
    opacity: 1;
  }

  /* Progress bar */
  .pressy-progress-bar {
    height: 3px;
    background: var(--color-border, #dee2e6);
    border-radius: 1.5px;
    overflow: hidden;
  }

  .pressy-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 1.5px;
    transition: width 0.3s ease;
  }

  /* ── Footer row (title + gear) ──────────────────────────── */
  .pressy-footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }

  .pressy-footer-title {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    color: var(--color-text-muted, #6c757d);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .pressy-settings-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted, #6c757d);
    cursor: pointer;
    border-radius: 0.375rem;
    transition: color 0.15s, background 0.15s;
    padding: 0;
  }

  .pressy-settings-toggle:hover {
    color: var(--color-text, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
  }

  /* ── Settings panel ────────────────────────────────────── */
  .pressy-settings-panel {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.25s ease, opacity 0.2s ease;
    border-top: 0 solid var(--color-border, #dee2e6);
  }

  .pressy-settings-panel--open {
    max-height: 300px;
    opacity: 1;
    border-top-width: 1px;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }

  .pressy-settings-section {
    margin-bottom: 0.75rem;
  }

  .pressy-settings-section:last-child {
    margin-bottom: 0;
  }

  .pressy-settings-label {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted, #6c757d);
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .pressy-theme-options {
    display: flex;
    gap: 0.375rem;
  }

  .pressy-theme-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.375rem 0.5rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 0.5rem;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.6875rem;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-theme-btn:hover {
    background: var(--color-bg-subtle, #f8f9fa);
  }

  .pressy-theme-btn--active {
    border-color: var(--color-accent, #212529);
    background: var(--color-bg-subtle, #f8f9fa);
    font-weight: 600;
  }

  .pressy-font-size-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .pressy-font-size-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 1.5px solid var(--color-border, #dee2e6);
    border-radius: 50%;
    background: transparent;
    color: var(--color-text, #212529);
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .pressy-font-size-btn:hover:not(:disabled) {
    background: var(--color-bg-subtle, #f8f9fa);
    border-color: var(--color-accent, #212529);
  }

  .pressy-font-size-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .pressy-font-size-value {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-text, #212529);
    min-width: 3ch;
    text-align: center;
  }

  /* ── Chapter sections ─────────────────────────────────── */
  .pressy-chapter-section + .pressy-chapter-section {
    break-before: column;
  }

  .pressy-chapter-divider {
    text-align: center;
    padding: 3rem 1.5rem;
    max-width: min(65ch, calc(100% - 3rem));
    margin: 0 auto;
  }

  .pressy-chapter-divider-title {
    font-size: 1.5rem;
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    margin: 0;
  }

  /* ── Reduced motion preference ────────────────────────────
     Disable page turn animations for users who prefer reduced motion. */
  @media (prefers-reduced-motion: reduce) {
    .pressy-prose--paginated {
      transition: none !important;
    }
    .pressy-progress-fill {
      transition: none !important;
    }
  }
`;
