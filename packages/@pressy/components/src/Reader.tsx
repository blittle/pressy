import { ComponentChildren } from 'preact'
import { useState, useEffect, useRef, useCallback } from 'preact/hooks'

import { Navigation } from './Navigation.js'
import { TextShare } from './TextShare.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ProgressData {
  page: number
  totalPages: number
  scrollPosition: number
}

export interface ReaderProps {
  children: ComponentChildren
  title: string
  chapterSlug?: string
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap?: boolean
  paginationMode?: 'scroll' | 'paginated'
  onSaveProgress?: (data: ProgressData) => void
  onRestoreProgress?: () => Promise<ProgressData | null>
  bookProgressPercent?: number
}

export function Reader({
  children,
  prevChapter,
  nextChapter,
  showDropCap = true,
  paginationMode = 'scroll',
  onSaveProgress,
  onRestoreProgress,
  bookProgressPercent,
}: ReaderProps) {
  if (paginationMode === 'paginated') {
    return (
      <PaginatedReader
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        showDropCap={showDropCap}
        onSaveProgress={onSaveProgress}
        onRestoreProgress={onRestoreProgress}
        bookProgressPercent={bookProgressPercent}
      >
        {children}
      </PaginatedReader>
    )
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
  )
}

// ── Scroll Reader ────────────────────────────────────────────

interface ScrollReaderProps {
  children: ComponentChildren
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap: boolean
  onSaveProgress?: (data: ProgressData) => void
  onRestoreProgress?: () => Promise<ProgressData | null>
}

function ScrollReader({
  children,
  prevChapter,
  nextChapter,
  showDropCap,
  onSaveProgress,
  onRestoreProgress,
}: ScrollReaderProps) {
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Restore scroll position on mount
  useEffect(() => {
    if (!onRestoreProgress) return
    onRestoreProgress().then((data) => {
      if (data && data.scrollPosition > 0) {
        window.scrollTo(0, data.scrollPosition)
      }
    })
  }, [])

  // Save scroll position (debounced)
  useEffect(() => {
    if (!onSaveProgress) return

    const handleScroll = () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
      saveTimerRef.current = setTimeout(() => {
        onSaveProgress({
          page: 0,
          totalPages: 0,
          scrollPosition: window.scrollY,
        })
      }, 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    }
  }, [onSaveProgress])

  // Save on page unload
  useEffect(() => {
    if (!onSaveProgress) return

    const handleUnload = () => {
      onSaveProgress({
        page: 0,
        totalPages: 0,
        scrollPosition: window.scrollY,
      })
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [onSaveProgress])

  return (
    <div class="pressy-reader">
      <main class="pressy-reader-main">
        <article
          class={`pressy-prose ${showDropCap ? '' : 'no-drop-cap'}`}
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
  )
}

// ── Paginated Reader ──────────────────────────────────────────

interface PaginatedReaderProps {
  children: ComponentChildren
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap: boolean
  onSaveProgress?: (data: ProgressData) => void
  onRestoreProgress?: () => Promise<ProgressData | null>
  bookProgressPercent?: number
}

function PaginatedReader({
  children,
  prevChapter,
  nextChapter,
  showDropCap,
  onSaveProgress,
  onRestoreProgress,
  bookProgressPercent,
}: PaginatedReaderProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const hasRestoredRef = useRef(false)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Drag/swipe state
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [chapterHint, setChapterHint] = useState<'next' | 'prev' | null>(null)

  // Touch tracking refs (avoid re-renders during drag)
  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const lastTouchXRef = useRef(0)
  const lastTouchTimeRef = useRef(0)
  const velocityRef = useRef(0)
  const isSwipingRef = useRef(false)
  const isDraggingRef = useRef(false)

  // Calculate page count and set column-width to match viewport
  const recalculatePages = useCallback(() => {
    const article = articleRef.current
    const viewport = viewportRef.current
    if (!article || !viewport) return

    const viewportWidth = viewport.clientWidth
    if (viewportWidth === 0) return

    // Set column-width to viewport width so each column = one page
    article.style.columnWidth = `${viewportWidth}px`

    // Force synchronous layout recalculation
    void article.scrollWidth

    const total = Math.max(1, Math.round(article.scrollWidth / viewportWidth))
    setTotalPages(total)

    // Clamp current page if now out of bounds (e.g. after resize)
    setCurrentPage((prev) => Math.min(prev, total - 1))
  }, [])

  // Recalculate on mount and on resize via ResizeObserver
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    // Delay initial calculation to let fonts and content render
    const initialTimer = setTimeout(recalculatePages, 50)

    const observer = new ResizeObserver(() => {
      recalculatePages()
    })
    observer.observe(viewport)

    return () => {
      clearTimeout(initialTimer)
      observer.disconnect()
    }
  }, [recalculatePages])

  // Recalculate when images finish loading
  useEffect(() => {
    const article = articleRef.current
    if (!article) return

    const images = article.querySelectorAll('img')
    if (images.length === 0) return

    const onLoad = () => recalculatePages()
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', onLoad)
        img.addEventListener('error', onLoad)
      }
    })

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onLoad)
        img.removeEventListener('error', onLoad)
      })
    }
  }, [recalculatePages])

  // Restore saved reading position once totalPages is known
  useEffect(() => {
    if (hasRestoredRef.current || !onRestoreProgress || totalPages <= 1) return
    hasRestoredRef.current = true

    onRestoreProgress().then((data) => {
      if (data && data.page > 0) {
        const clamped = Math.min(data.page, totalPages - 1)
        setCurrentPage(clamped)
      }
    })
  }, [totalPages, onRestoreProgress])

  // Apply translateX — combines page position + drag offset
  useEffect(() => {
    const article = articleRef.current
    const viewport = viewportRef.current
    if (!article || !viewport) return

    const baseOffset = currentPage * viewport.clientWidth
    const totalOffset = baseOffset - dragOffset

    if (isDragging) {
      // During drag: no transition, immediate response
      article.style.transition = 'none'
    } else {
      // Snap animation: smooth ease-out
      article.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }

    article.style.transform = `translateX(-${totalOffset}px)`
  }, [currentPage, dragOffset, isDragging])

  // Save progress when page changes (debounced)
  useEffect(() => {
    if (!onSaveProgress || !hasRestoredRef.current) return

    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      onSaveProgress({
        page: currentPage,
        totalPages,
        scrollPosition: 0,
      })
    }, 300)

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    }
  }, [currentPage, totalPages, onSaveProgress])

  // Save progress on page unload
  useEffect(() => {
    if (!onSaveProgress) return

    const handleUnload = () => {
      onSaveProgress({
        page: currentPage,
        totalPages,
        scrollPosition: 0,
      })
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [currentPage, totalPages, onSaveProgress])

  const goToPage = useCallback(
    (page: number) => {
      const clamped = Math.max(0, Math.min(page, totalPages - 1))
      setCurrentPage(clamped)
    },
    [totalPages],
  )

  const goNext = useCallback(() => {
    if (currentPage >= totalPages - 1) {
      // At the last page — navigate to next chapter if available
      if (nextChapter) {
        window.location.href = nextChapter.slug
      }
      return
    }
    goToPage(currentPage + 1)
  }, [currentPage, totalPages, nextChapter, goToPage])

  const goPrev = useCallback(() => {
    if (currentPage <= 0) {
      // At the first page — navigate to prev chapter if available
      if (prevChapter) {
        window.location.href = prevChapter.slug
      }
      return
    }
    goToPage(currentPage - 1)
  }, [currentPage, prevChapter, goToPage])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is in an input/textarea
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToPage(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToPage(totalPages - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, goToPage, totalPages])

  // Touch swipe navigation with drag tracking, velocity detection, and rubber-band
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartXRef.current = touch.clientX
      touchStartYRef.current = touch.clientY
      lastTouchXRef.current = touch.clientX
      lastTouchTimeRef.current = performance.now()
      velocityRef.current = 0
      isSwipingRef.current = false
      isDraggingRef.current = false
    }

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const dx = touch.clientX - touchStartXRef.current
      const dy = touch.clientY - touchStartYRef.current

      // Lock direction after initial movement
      if (!isSwipingRef.current) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
          isSwipingRef.current = true
        } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
          // Vertical scroll — not our concern
          return
        } else {
          return // Not enough movement yet
        }
      }

      e.preventDefault()

      // Track velocity (px per ms) using last touch position
      const now = performance.now()
      const timeDelta = now - lastTouchTimeRef.current
      if (timeDelta > 0) {
        const instantVelocity = (touch.clientX - lastTouchXRef.current) / timeDelta
        // Smooth velocity with exponential moving average
        velocityRef.current = 0.6 * instantVelocity + 0.4 * velocityRef.current
      }
      lastTouchXRef.current = touch.clientX
      lastTouchTimeRef.current = now

      // Determine drag offset with rubber-band resistance at boundaries
      let offset = dx
      const atStart = currentPage === 0
      const atEnd = currentPage >= totalPages - 1

      if ((atStart && dx > 0) || (atEnd && dx < 0)) {
        // Rubber-band: diminishing resistance using square root curve
        // This gives a natural iOS-like rubber-band feel
        const sign = dx > 0 ? 1 : -1
        const absDx = Math.abs(dx)
        offset = sign * Math.sqrt(absDx) * 5

        // Show chapter hint when overscrolling past boundary
        if (dx > 40 && atStart && prevChapter) {
          setChapterHint('prev')
        } else if (dx < -40 && atEnd && nextChapter) {
          setChapterHint('next')
        } else {
          setChapterHint(null)
        }
      } else {
        setChapterHint(null)
      }

      isDraggingRef.current = true
      setIsDragging(true)
      setDragOffset(offset)
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwipingRef.current || !isDraggingRef.current) {
        setIsDragging(false)
        setDragOffset(0)
        setChapterHint(null)
        return
      }

      const dx = e.changedTouches[0].clientX - touchStartXRef.current
      const velocity = velocityRef.current // px/ms
      const distanceThreshold = 50
      const velocityThreshold = 0.3 // px/ms — a fast flick
      const chapterThreshold = 80

      const atStart = currentPage === 0
      const atEnd = currentPage >= totalPages - 1

      // Chapter navigation on overscroll
      if (atEnd && dx < -chapterThreshold && nextChapter) {
        setIsDragging(false)
        setDragOffset(0)
        setChapterHint(null)
        window.location.href = nextChapter.slug
        return
      }
      if (atStart && dx > chapterThreshold && prevChapter) {
        setIsDragging(false)
        setDragOffset(0)
        setChapterHint(null)
        window.location.href = prevChapter.slug
        return
      }

      // Determine page change: distance OR velocity triggers a turn
      if (dx < -distanceThreshold || velocity < -velocityThreshold) {
        goNext()
      } else if (dx > distanceThreshold || velocity > velocityThreshold) {
        goPrev()
      }

      // Reset drag state — the CSS transition handles the snap animation
      isDraggingRef.current = false
      setIsDragging(false)
      setDragOffset(0)
      setChapterHint(null)
    }

    // Cancel drag if touch is interrupted
    const onTouchCancel = () => {
      isDraggingRef.current = false
      setIsDragging(false)
      setDragOffset(0)
      setChapterHint(null)
    }

    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: false })
    viewport.addEventListener('touchend', onTouchEnd, { passive: true })
    viewport.addEventListener('touchcancel', onTouchCancel, { passive: true })

    return () => {
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      viewport.removeEventListener('touchend', onTouchEnd)
      viewport.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [currentPage, totalPages, goNext, goPrev, nextChapter, prevChapter])

  // Trackpad/mouse wheel → page snapping
  // Accumulates small wheel deltas and triggers page turns at a threshold,
  // giving CSS scroll-snap-like behavior without conflicting with CSS columns.
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let accumulatedDelta = 0
    let wheelTimer: ReturnType<typeof setTimeout> | null = null
    const wheelThreshold = 80 // px of accumulated scroll before page turn

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()

      // Use deltaX for horizontal scroll, deltaY for vertical (most common)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      accumulatedDelta += delta

      // Reset accumulator after inactivity
      if (wheelTimer) clearTimeout(wheelTimer)
      wheelTimer = setTimeout(() => {
        accumulatedDelta = 0
      }, 200)

      if (accumulatedDelta > wheelThreshold) {
        goNext()
        accumulatedDelta = 0
      } else if (accumulatedDelta < -wheelThreshold) {
        goPrev()
        accumulatedDelta = 0
      }
    }

    viewport.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      viewport.removeEventListener('wheel', onWheel)
      if (wheelTimer) clearTimeout(wheelTimer)
    }
  }, [goNext, goPrev])

  const progressPercent = totalPages > 1 ? ((currentPage + 1) / totalPages) * 100 : 100

  return (
    <div class="pressy-reader pressy-reader--paginated">
      {/* Paginated content viewport */}
      <div class="pressy-paginated-viewport" ref={viewportRef}>
        <article
          ref={articleRef}
          class={`pressy-prose pressy-prose--paginated ${showDropCap ? '' : 'no-drop-cap'}`}
          data-drop-cap={showDropCap}
        >
          {children}
        </article>
      </div>

      {/* Tap zones with visual feedback */}
      <div
        class="pressy-tap-zone pressy-tap-prev"
        onClick={goPrev}
        aria-label="Previous page"
        role="button"
        tabIndex={-1}
      />
      <div
        class="pressy-tap-zone pressy-tap-next"
        onClick={goNext}
        aria-label="Next page"
        role="button"
        tabIndex={-1}
      />

      {/* Chapter boundary hints */}
      {chapterHint === 'prev' && prevChapter && (
        <div class="pressy-chapter-hint pressy-chapter-hint--prev" aria-live="polite">
          <span class="pressy-chapter-hint-arrow">{'\u2190'}</span>
          <span class="pressy-chapter-hint-text">{prevChapter.title}</span>
        </div>
      )}
      {chapterHint === 'next' && nextChapter && (
        <div class="pressy-chapter-hint pressy-chapter-hint--next" aria-live="polite">
          <span class="pressy-chapter-hint-text">{nextChapter.title}</span>
          <span class="pressy-chapter-hint-arrow">{'\u2192'}</span>
        </div>
      )}

      {/* Page footer with progress and indicator */}
      <div class="pressy-page-footer">
        <div class="pressy-progress-bar">
          <div
            class="pressy-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div class="pressy-page-indicator">
          <span>Page {currentPage + 1} of {totalPages}</span>
          {bookProgressPercent != null && (
            <span class="pressy-book-progress">{Math.round(bookProgressPercent)}% of book</span>
          )}
        </div>
      </div>

      <TextShare />
      <OfflineIndicator />

      <style>{PAGINATED_STYLES}</style>
    </div>
  )
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
`

const PAGINATED_STYLES = `
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

  /* ── Tap zones ─────────────────────────────────────────────── */
  /* Invisible overlays on left/right thirds of screen.
     Visual feedback via radial gradient on active state. */
  .pressy-tap-zone {
    position: absolute;
    top: 0;
    bottom: 60px;
    z-index: 10;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    background: transparent;
    transition: background 0.15s ease;
  }

  .pressy-tap-prev {
    left: 0;
    width: 33%;
  }

  .pressy-tap-next {
    right: 0;
    width: 33%;
  }

  /* Tap feedback — brief highlight on press */
  .pressy-tap-prev:active {
    background: radial-gradient(
      circle at 30% 50%,
      rgba(0, 0, 0, 0.04) 0%,
      transparent 70%
    );
  }

  .pressy-tap-next:active {
    background: radial-gradient(
      circle at 70% 50%,
      rgba(0, 0, 0, 0.04) 0%,
      transparent 70%
    );
  }

  /* Dark theme tap feedback */
  [data-theme="dark"] .pressy-tap-prev:active {
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
  }

  [data-theme="dark"] .pressy-tap-next:active {
    background: radial-gradient(
      circle at 70% 50%,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
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
    flex-shrink: 0;
    padding: 0.5rem 1.5rem 1rem;
    text-align: center;
    user-select: none;
  }

  /* Progress bar */
  .pressy-progress-bar {
    height: 3px;
    background: var(--color-border, #dee2e6);
    border-radius: 1.5px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .pressy-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 1.5px;
    transition: width 0.3s ease;
  }

  /* Page indicator */
  .pressy-page-indicator {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .pressy-book-progress {
    opacity: 0.7;
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
`
