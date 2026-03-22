import { ComponentChildren, ComponentType } from "preact";
import { useState, useEffect, useRef, useCallback } from "preact/hooks";

import { TextShare } from "../TextShare.js";
import { OfflineIndicator } from "../OfflineIndicator.js";
import { OfflineFooterIcon } from "./ScrollReader.js";
import { PAGINATED_STYLES } from "./paginated-reader-styles.js";
import type { ProgressData, ChapterMapData, OfflineProps, ReaderPaywallConfig, BookmarkProps } from "./types.js";
import { formatRelativeTime } from "./utils.js";

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

export interface PaginatedReaderProps {
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
  paywall?: ReaderPaywallConfig;
  offlineProps?: OfflineProps;
  bookmarkProps?: BookmarkProps;
}

function ChapterDivider({ title }: { title: string }) {
  return (
    <div class="pressy-chapter-divider">
      <h2 class="pressy-chapter-divider-title">{title}</h2>
    </div>
  );
}

export function PaginatedReader({
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
  paywall,
  offlineProps,
  bookmarkProps,
}: PaginatedReaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const totalPagesRef = useRef(1);
  totalPagesRef.current = totalPages;
  const [pagesReady, setPagesReady] = useState(false);
  const hasRestoredRef = useRef(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipTransitionRef = useRef(false);

  // Detect ?page=last on initial render (backward chapter navigation)
  const wantsLastPageRef = useRef(
    typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("page") === "last"
  );
  // Hide content until page position is resolved (prevents flash at page 0
  // before jumping to the saved page). Covers both ?page=last and normal restore.
  const [awaitingRestore, setAwaitingRestore] = useState(
    wantsLastPageRef.current || !!onRestoreProgress
  );

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

  // Clean up ?page=last from the URL on mount
  useEffect(() => {
    if (wantsLastPageRef.current) {
      const url = new URL(window.location.href);
      url.searchParams.delete("page");
      history.replaceState(null, "", url.pathname);
    }
  }, []);

  // Settings & TOC panel state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
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

  // Sync real viewport height to CSS custom property.
  // 100dvh is unreliable on Android PWAs where the system nav bar
  // overlaps the content. window.innerHeight always reflects the
  // actual usable area.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const syncHeight = () => {
      container.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    syncHeight();

    window.addEventListener("resize", syncHeight);
    window.visualViewport?.addEventListener("resize", syncHeight);
    return () => {
      window.removeEventListener("resize", syncHeight);
      window.visualViewport?.removeEventListener("resize", syncHeight);
    };
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
  const [chapterHint, setChapterHint] = useState<"next" | "prev" | "paywall" | null>(null);

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
    setPagesReady(true);

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

  // Restore page position once pages are first computed.
  // Handles both ?page=last (backward chapter nav) and normal restore from
  // localStorage in a single effect — no racing between separate effects.
  // Uses pagesReady (not totalPages > 1) so single-page chapters work too.
  useEffect(() => {
    if (hasRestoredRef.current || !pagesReady) return;

    // 1. ?page=last takes priority (backward chapter navigation)
    if (wantsLastPageRef.current) {
      wantsLastPageRef.current = false;
      skipTransitionRef.current = true;
      setCurrentPage(totalPages - 1);
      hasRestoredRef.current = true;
      setAwaitingRestore(false);
      return;
    }

    // 2. Try to restore from saved progress
    if (!onRestoreProgress) {
      hasRestoredRef.current = true;
      setAwaitingRestore(false);
      return;
    }

    onRestoreProgress().then((data) => {
      if (hasRestoredRef.current) {
        setAwaitingRestore(false);
        return;
      }

      const currentTotalPages = totalPagesRef.current;

      if (!data || data.page <= 0) {
        hasRestoredRef.current = true;
        setAwaitingRestore(false);
        return;
      }

      let targetPage: number;
      if (
        data.totalPages <= 1 ||
        Math.abs(data.totalPages - currentTotalPages) <= 2
      ) {
        // Saved totalPages is degenerate (<=1) or very close to current —
        // use saved page directly. Clamping below handles out-of-bounds.
        targetPage = data.page;
      } else {
        // Significantly different layout — scale proportionally
        const fraction = data.page / (data.totalPages - 1);
        targetPage = Math.round(fraction * (currentTotalPages - 1));
      }

      const clamped = Math.max(
        0,
        Math.min(targetPage, currentTotalPages - 1)
      );
      skipTransitionRef.current = true;
      setCurrentPage(clamped);
      hasRestoredRef.current = true;
      setAwaitingRestore(false);
    });
  }, [pagesReady, totalPages, onRestoreProgress]);

  // Apply translateX — combines page position + drag offset
  useEffect(() => {
    const article = articleRef.current;
    const viewport = viewportRef.current;
    if (!article || !viewport) return;

    const baseOffset = currentPage * viewport.clientWidth;
    const totalOffset = baseOffset - dragOffset;

    if (isDragging || skipTransitionRef.current) {
      // During drag or programmatic restore: no transition, immediate response
      article.style.transition = "none";
      skipTransitionRef.current = false;
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

    // Paywall gate: block preloading chapters beyond preview limit for unauthorized users
    if (paywall && !paywall.authorized) {
      const nextChapterIdx = chapterOrder.indexOf(nextSlug);
      if (nextChapterIdx >= paywall.previewChapters) return;
    }

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
    paywall,
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
            activeChapterSlug,
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
            activeChapterSlug,
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

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
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

  // Detect if we're at the paywall boundary: last free chapter, no next chapter due to paywall
  const atPaywallBoundary = (() => {
    if (!paywall || paywall.authorized || !isMultiChapter || !chapterMapData) return false;
    if (effectiveNextChapter) return false; // next chapter is available, not at boundary
    const { chapterOrder } = chapterMapData;
    const lastLoadedSlug = loadedChapters[loadedChapters.length - 1]?.slug;
    const lastLoadedIdx = chapterOrder.indexOf(lastLoadedSlug);
    // We're at the boundary if the next chapter exists but is paywalled
    return lastLoadedIdx >= 0 && lastLoadedIdx < chapterOrder.length - 1;
  })();

  const handlePaywallAction = useCallback(() => {
    if (!paywall) return;
    if (paywall.mode === 'stripe' || paywall.price) {
      window.location.href = `/api/checkout?book=${paywall.bookSlug}`;
    } else if (paywall.bookBasePath) {
      window.location.href = `${paywall.bookBasePath}?purchase=true`;
    }
  }, [paywall]);

  const goToPage = useCallback(
    (page: number) => {
      wantsLastPageRef.current = false;
      const clamped = Math.max(0, Math.min(page, totalPages - 1));
      setCurrentPage(clamped);
    },
    [totalPages]
  );

  const goNext = useCallback(() => {
    if (currentPage >= totalPages - 1) {
      // At the last page — navigate to next chapter if available
      if (effectiveNextChapter) {
        sessionStorage.setItem("pressy-internal-nav", "1");
        window.location.href = effectiveNextChapter.slug;
      } else if (atPaywallBoundary) {
        handlePaywallAction();
      }
      return;
    }
    goToPage(currentPage + 1);
  }, [currentPage, totalPages, effectiveNextChapter, atPaywallBoundary, handlePaywallAction, goToPage]);

  const goPrev = useCallback(() => {
    if (currentPage <= 0) {
      // At the first page — navigate to prev chapter if available
      if (effectivePrevChapter) {
        sessionStorage.setItem("pressy-internal-nav", "1");
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

  // Whether the primary input is a finger (i.e. phone/tablet).
  // Touch devices use swipe for page turns; tapping just toggles the footer.
  // We use (pointer: coarse) instead of (hover: none) because some devices
  // (e.g. Samsung with S-Pen) report hover capability even on touch-only use.
  const isTouchDevice =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  // Click handler: on desktop, edge clicks turn pages and middle clicks
  // toggle footer / double-click fullscreen. On touch devices, any tap
  // simply toggles the footer — swiping handles all page navigation.
  const handleContainerClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Clicks inside panels or on interactive elements — ignore
      if (
        target.closest(
          ".pressy-settings-panel, .pressy-settings-toggle, .pressy-toc-drawer, .pressy-toc-toggle, .pressy-bookmarks-panel, .pressy-bookmarks-toggle"
        )
      )
        return;
      if (target.closest('a, button, input, select, textarea, [role="button"]'))
        return;

      // If settings, TOC, or bookmarks panel is open, close it on any outside click
      if (settingsOpen || tocOpen || bookmarksOpen) {
        setSettingsOpen(false);
        setTocOpen(false);
        setBookmarksOpen(false);
        return;
      }

      // Touch devices: tap anywhere toggles the footer, nothing else
      if (isTouchDevice) {
        if (footerVisible) {
          setFooterVisible(false);
          if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
        } else {
          showFooterTemporarily();
        }
        return;
      }

      // Desktop: edge clicks turn pages, middle clicks toggle footer / fullscreen
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
        // Middle third — single click toggles footer, double click toggles fullscreen
        const now = Date.now();
        const timeSinceLastTap = now - lastMiddleTapRef.current;
        lastMiddleTapRef.current = now;

        if (timeSinceLastTap < 300) {
          if (middleTapTimerRef.current)
            clearTimeout(middleTapTimerRef.current);
          toggleFullscreen();
        } else {
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
      isTouchDevice,
      settingsOpen,
      tocOpen,
      bookmarksOpen,
      showFooterTemporarily,
      toggleFullscreen,
    ]
  );

  // Hover zone tracking for desktop navigation hints
  const [hoverZone, setHoverZone] = useState<"left" | "right" | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isTouchDevice) return;
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
      } else if (!settingsOpen && !tocOpen && !bookmarksOpen) {
        // Hide after a short delay when leaving the bottom area (not when panels are open)
        if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
        footerTimerRef.current = setTimeout(() => setFooterVisible(false), 600);
      }
    },
    [isTouchDevice, settingsOpen, tocOpen, bookmarksOpen]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverZone(null);
    if (!settingsOpen && !tocOpen && !bookmarksOpen) {
      if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
      footerTimerRef.current = setTimeout(() => setFooterVisible(false), 600);
    }
  }, [settingsOpen, tocOpen, bookmarksOpen]);

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
        } else if (dx < -40 && atEnd && atPaywallBoundary) {
          setChapterHint("paywall");
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
        sessionStorage.setItem("pressy-internal-nav", "1");
        window.location.href = effectiveNextChapter.slug;
        return;
      }
      if (atEnd && dx < -chapterThreshold && atPaywallBoundary) {
        setIsDragging(false);
        setDragOffset(0);
        setChapterHint(null);
        handlePaywallAction();
        return;
      }
      if (atStart && dx > chapterThreshold && effectivePrevChapter) {
        setIsDragging(false);
        setDragOffset(0);
        setChapterHint(null);
        sessionStorage.setItem("pressy-internal-nav", "1");
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
    atPaywallBoundary,
    handlePaywallAction,
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
      <div
        class="pressy-paginated-viewport"
        ref={viewportRef}
        style={
          awaitingRestore
            ? { opacity: 0 }
            : { opacity: 1, transition: "opacity 0.15s ease" }
        }
      >
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
      {chapterHint === "paywall" && atPaywallBoundary && (
        <div
          class="pressy-chapter-hint pressy-chapter-hint--next pressy-chapter-hint--paywall"
          aria-live="polite"
        >
          <span class="pressy-chapter-hint-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </span>
          <span class="pressy-chapter-hint-text">
            {paywall?.price ? `Purchase — ${paywall.price}` : "Unlock full book"}
          </span>
          <span class="pressy-chapter-hint-arrow">{"\u2192"}</span>
        </div>
      )}

      {/* TOC drawer overlay */}
      {tocOpen && allChapters && (
        <div
          class="pressy-toc-backdrop"
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            setTocOpen(false);
          }}
        >
          <div
            class="pressy-toc-drawer"
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <div class="pressy-toc-header">
              <span class="pressy-toc-title">Contents</span>
              <button
                class="pressy-toc-close"
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  setTocOpen(false);
                }}
                aria-label="Close table of contents"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  width="18"
                  height="18"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav class="pressy-toc-list">
              <a
                href={bookBasePath ? bookBasePath.replace(/\/books\/[^/]+$/, '') || '/' : '/'}
                class="pressy-toc-item pressy-toc-item--home"
                onClick={() => { sessionStorage.setItem('pressy-internal-nav', '1'); setTocOpen(false) }}
              >
                <span class="pressy-toc-item-num">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                  </svg>
                </span>
                <span class="pressy-toc-item-title">{bookTitle || 'Home'}</span>
              </a>
              {allChapters.map((ch, i) => (
                <a
                  key={ch.slug}
                  href={`${bookBasePath || ""}/${ch.slug}`}
                  class={`pressy-toc-item ${
                    ch.slug === (activeChapterSlug || currentChapterSlug)
                      ? "pressy-toc-item--active"
                      : ""
                  }`}
                  onClick={() => setTocOpen(false)}
                >
                  <span class="pressy-toc-item-num">{i + 1}.</span>
                  <span class="pressy-toc-item-title">{ch.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Page footer with progress — hidden by default */}
      <div
        class={`pressy-page-footer ${
          footerVisible || settingsOpen || tocOpen || bookmarksOpen
            ? "pressy-page-footer--visible"
            : ""
        }`}
      >
        <div class="pressy-progress-bar">
          <div
            class="pressy-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div class="pressy-footer-row">
          {allChapters && allChapters.length > 0 && (
            <button
              class="pressy-toc-toggle"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                setSettingsOpen(false);
                setBookmarksOpen(false);
                setTocOpen(!tocOpen);
              }}
              aria-label="Table of contents"
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
          {bookTitle && (
            <button
              class="pressy-footer-title"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                if (allChapters && allChapters.length > 0) {
                  setSettingsOpen(false);
                  setBookmarksOpen(false);
                  setTocOpen(!tocOpen);
                }
              }}
            >
              {bookTitle}
            </button>
          )}
          <OfflineFooterIcon offlineProps={offlineProps} />
          {bookmarkProps && (
            <button
              class="pressy-bookmarks-toggle"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                setSettingsOpen(false);
                setTocOpen(false);
                setBookmarksOpen(!bookmarksOpen);
              }}
              aria-label="Bookmarks"
            >
              <svg
                viewBox="0 0 24 24"
                fill={bookmarksOpen ? "currentColor" : "none"}
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="18"
                height="18"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          )}
          <button
            class="pressy-settings-toggle"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              setTocOpen(false);
              setBookmarksOpen(false);
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

        {/* Bookmarks panel */}
        {bookmarkProps && (
          <div
            class={`pressy-bookmarks-panel ${
              bookmarksOpen ? "pressy-bookmarks-panel--open" : ""
            }`}
          >
            {bookmarkProps.bookmarks.length === 0 ? (
              <div class="pressy-bookmarks-empty">No bookmarks yet</div>
            ) : (
              <div class="pressy-bookmarks-list">
                {bookmarkProps.bookmarks.map((bm) => (
                  <div
                    key={bm.id}
                    class="pressy-bookmark-item"
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      bookmarkProps.onNavigateBookmark(bm);
                      setBookmarksOpen(false);
                    }}
                  >
                    <div class="pressy-bookmark-info">
                      <span class="pressy-bookmark-chapter">{bm.chapterTitle}</span>
                      <span class="pressy-bookmark-detail">
                        {bm.totalPages > 0
                          ? `Page ${bm.page + 1} of ${bm.totalPages}`
                          : bm.scrollPosition > 0
                            ? `Scroll ${Math.round(bm.scrollPosition)}px`
                            : "Start"}
                        {" \u00b7 "}
                        {formatRelativeTime(bm.createdAt)}
                      </span>
                    </div>
                    <button
                      class="pressy-bookmark-delete"
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        bookmarkProps.onDeleteBookmark(bm.id);
                      }}
                      aria-label="Delete bookmark"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              class="pressy-bookmark-add"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                const chapterSlug = activeChapterSlug || currentChapterSlug || "";
                const chapterTitle = allChapters?.find(ch => ch.slug === chapterSlug)?.title || chapterSlug;
                bookmarkProps.onAddBookmark({
                  chapterSlug,
                  chapterTitle,
                  page: currentPage,
                  totalPages,
                  scrollPosition: 0,
                });
              }}
            >
              Bookmark this page
            </button>
          </div>
        )}
      </div>

      <TextShare />
      <OfflineIndicator />

      <style>{PAGINATED_STYLES}</style>
    </div>
  );
}
