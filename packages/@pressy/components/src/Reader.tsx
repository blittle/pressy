import { ComponentChildren } from 'preact'
import { useState, useEffect, useRef, useCallback } from 'preact/hooks'

import { Navigation } from './Navigation.js'
import { TextShare } from './TextShare.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ReaderProps {
  children: ComponentChildren
  title: string
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap?: boolean
  paginationMode?: 'scroll' | 'paginated'
}

export function Reader({
  children,
  prevChapter,
  nextChapter,
  showDropCap = true,
  paginationMode = 'scroll',
}: ReaderProps) {
  if (paginationMode === 'paginated') {
    return (
      <PaginatedReader
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        showDropCap={showDropCap}
      >
        {children}
      </PaginatedReader>
    )
  }

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
}

function PaginatedReader({
  children,
  prevChapter,
  nextChapter,
  showDropCap,
}: PaginatedReaderProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

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

  // Apply translateX whenever currentPage changes
  useEffect(() => {
    const article = articleRef.current
    const viewport = viewportRef.current
    if (!article || !viewport) return

    const offset = currentPage * viewport.clientWidth
    article.style.transform = `translateX(-${offset}px)`
  }, [currentPage])

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

  // Touch swipe navigation
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let touchStartX = 0
    let touchStartY = 0
    let isSwiping = false

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
      isSwiping = false
    }

    const onTouchMove = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - touchStartX
      const dy = e.touches[0].clientY - touchStartY
      // Only count as horizontal swipe if horizontal movement > vertical
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isSwiping = true
        e.preventDefault()
      }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwiping) return
      const dx = e.changedTouches[0].clientX - touchStartX
      const threshold = 50
      if (dx < -threshold) {
        goNext()
      } else if (dx > threshold) {
        goPrev()
      }
    }

    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: false })
    viewport.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      viewport.removeEventListener('touchend', onTouchEnd)
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

      {/* Tap zones */}
      <div
        class="pressy-tap-zone pressy-tap-prev"
        onClick={goPrev}
        aria-label="Previous page"
      />
      <div
        class="pressy-tap-zone pressy-tap-next"
        onClick={goNext}
        aria-label="Next page"
      />

      {/* Page footer with progress and indicator */}
      <div class="pressy-page-footer">
        <div class="pressy-progress-bar">
          <div
            class="pressy-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div class="pressy-page-indicator">
          Page {currentPage + 1} of {totalPages}
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
     We use translateX to show the current page. */
  .pressy-prose--paginated {
    max-width: none;
    height: 100%;
    column-fill: auto;
    column-gap: 0;
    overflow: visible;
    box-sizing: border-box;
    padding: 0;
    will-change: transform;
    transition: transform 0.3s ease;
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

  /* Tap zones — invisible overlays on left/right thirds of screen */
  .pressy-tap-zone {
    position: absolute;
    top: 0;
    bottom: 60px;
    z-index: 10;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .pressy-tap-prev {
    left: 0;
    width: 33%;
  }

  .pressy-tap-next {
    right: 0;
    width: 33%;
  }

  /* Page footer */
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
  }
`
