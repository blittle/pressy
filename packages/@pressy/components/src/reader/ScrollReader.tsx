import { ComponentChildren } from "preact";
import { useState, useEffect, useRef, useCallback } from "preact/hooks";

import { Navigation } from "../Navigation.js";
import { TextShare } from "../TextShare.js";
import { OfflineIndicator } from "../OfflineIndicator.js";
import { SCROLL_STYLES } from "./scroll-reader-styles.js";
import type { ProgressData, OfflineProps } from "./types.js";

// ── Offline Footer Icon ───────────────────────────────────────

export function OfflineFooterIcon({ offlineProps }: { offlineProps?: OfflineProps }) {
  if (!offlineProps) return null;

  const {
    bookSlug,
    chapterUrls,
    cachedBooks,
    onDownload,
    onRemove,
  } = offlineProps;

  // Read signal .value directly in render — @preact/signals auto-subscribes
  // and re-renders this component when the underlying signal changes.
  const isCached = cachedBooks.value.has(bookSlug);

  // Check isCached FIRST (matching DownloadBook's order). The download function
  // optimistically marks the book as cached immediately, so isCached becomes true
  // at the same time as isDownloading. Checking isCached first means we show the
  // cached icon right away while the SW downloads in the background.
  if (isCached) {
    return (
      <button
        class="pressy-offline-icon pressy-offline-icon--cached"
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          onRemove(bookSlug);
        }}
        aria-label="Available offline. Click to remove."
        title="Available offline. Click to remove."
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
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="9 15 12 18 15 15" />
          <line x1="12" y1="12" x2="12" y2="18" />
        </svg>
        <svg
          class="pressy-offline-check"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="10"
          height="10"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      class="pressy-offline-icon"
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        onDownload(bookSlug, chapterUrls);
      }}
      aria-label="Download for offline reading"
      title="Download for offline reading"
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
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        <polyline points="9 15 12 18 15 15" />
        <line x1="12" y1="12" x2="12" y2="18" />
      </svg>
    </button>
  );
}

// ── Scroll Reader ────────────────────────────────────────────

export interface ScrollReaderProps {
  children: ComponentChildren;
  bookTitle?: string;
  prevChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  showDropCap: boolean;
  onSaveProgress?: (data: ProgressData) => void;
  onRestoreProgress?: () => Promise<ProgressData | null>;
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>;
  bookBasePath?: string;
  currentChapterSlug?: string;
  offlineProps?: OfflineProps;
}

export function ScrollReader({
  children,
  bookTitle,
  prevChapter,
  nextChapter,
  showDropCap,
  onSaveProgress,
  onRestoreProgress,
  allChapters,
  bookBasePath,
  currentChapterSlug,
  offlineProps,
}: ScrollReaderProps) {
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Footer visibility
  const [footerVisible, setFooterVisible] = useState(false);
  const footerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const showFooterTemporarily = useCallback(() => {
    setFooterVisible(true);
    if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
    footerTimerRef.current = setTimeout(() => setFooterVisible(false), 3000);
  }, []);

  // Settings state
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

  const handleFontSizeChange = useCallback(
    (delta: number) => {
      setFontScale((prev) => {
        const next =
          Math.round(Math.max(0.8, Math.min(1.5, prev + delta)) * 10) / 10;
        localStorage.setItem("pressy-font-size", String(next));
        applyFontScale(next);
        return next;
      });
    },
    [applyFontScale]
  );

  // Toggle footer on tap
  const handleReaderClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          ".pressy-page-footer, .pressy-toc-backdrop, .pressy-toc-toggle"
        )
      )
        return;
      if (target.closest('a, button, input, select, textarea, [role="button"]'))
        return;

      if (settingsOpen || tocOpen) {
        setSettingsOpen(false);
        setTocOpen(false);
        return;
      }

      if (footerVisible) {
        setFooterVisible(false);
        if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
      } else {
        showFooterTemporarily();
      }
    },
    [footerVisible, settingsOpen, tocOpen, showFooterTemporarily]
  );

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

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onSaveProgress]);

  return (
    <div class="pressy-reader" onClick={handleReaderClick}>
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

      {/* TOC drawer overlay */}
      {tocOpen && allChapters && (
        <div
          class="pressy-toc-backdrop pressy-toc-backdrop--scroll"
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
                    ch.slug === currentChapterSlug
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

      {/* Footer */}
      <div
        class={`pressy-page-footer pressy-page-footer--scroll ${
          footerVisible || settingsOpen || tocOpen
            ? "pressy-page-footer--visible"
            : ""
        }`}
      >
        <div class="pressy-footer-row">
          {allChapters && allChapters.length > 0 && (
            <button
              class="pressy-toc-toggle"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                setSettingsOpen(false);
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
                  setTocOpen(!tocOpen);
                }
              }}
            >
              {bookTitle}
            </button>
          )}
          <OfflineFooterIcon offlineProps={offlineProps} />
          <button
            class="pressy-settings-toggle"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              setTocOpen(false);
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

      <style>{SCROLL_STYLES}</style>
    </div>
  );
}
