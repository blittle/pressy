import { ComponentChildren } from 'preact'
import { useRef, useState, useEffect, useCallback } from 'preact/hooks'

import { Navigation } from './Navigation.js'
import { TextShare } from './TextShare.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ReaderProps {
  children: ComponentChildren
  title: string
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap?: boolean
  paginated?: boolean
}

export function Reader({
  children,
  prevChapter,
  nextChapter,
  showDropCap = true,
  paginated = false,
}: ReaderProps) {
  if (paginated) {
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

      <style>{`
        .pressy-reader {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `}</style>
    </div>
  )
}

// ── Paginated Reader ──────────────────────────────────────────

const PAGE_INDICATOR_HEIGHT = 48
const SWIPE_THRESHOLD = 50

interface PaginatedReaderProps {
  children: ComponentChildren
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap?: boolean
}

function PaginatedReader({
  children,
  prevChapter,
  nextChapter,
  showDropCap = true,
}: PaginatedReaderProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [columnWidth, setColumnWidth] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Touch tracking
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchDeltaX = useRef(0)
  const isDragging = useRef(false)

  // Measure and configure CSS columns
  const recalculate = useCallback(() => {
    const el = contentRef.current
    const viewport = viewportRef.current
    if (!el || !viewport) return

    const width = viewport.clientWidth
    setColumnWidth(width)

    // Set column width to match the viewport
    el.style.columnWidth = `${width}px`
    el.style.columnGap = `${width}px`

    // Wait for layout to settle
    requestAnimationFrame(() => {
      // With column-gap = width, step size = width * 2
      // But scrollWidth includes: N columns * width + (N-1) gaps * width = (2N - 1) * width
      // So N = (scrollWidth / width + 1) / 2
      const sw = el.scrollWidth
      const pages = Math.max(1, Math.round((sw / width + 1) / 2))
      setTotalPages(pages)
    })
  }, [])

  // Initialize and observe resize
  useEffect(() => {
    recalculate()

    const observer = new ResizeObserver(() => recalculate())
    if (viewportRef.current) {
      observer.observe(viewportRef.current)
    }

    return () => observer.disconnect()
  }, [recalculate])

  // Recalculate when children change (content loaded)
  useEffect(() => {
    recalculate()
  }, [children, recalculate])

  // Navigation helpers
  const goToPage = useCallback((page: number) => {
    const clamped = Math.max(0, Math.min(page, totalPages - 1))
    setCurrentPage(clamped)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)
  }, [totalPages])

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1)
    } else if (nextChapter) {
      window.location.href = nextChapter.slug
    }
  }, [currentPage, totalPages, goToPage, nextChapter])

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1)
    } else if (prevChapter) {
      window.location.href = prevChapter.slug
    }
  }, [currentPage, goToPage, prevChapter])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextPage()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevPage()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [nextPage, prevPage])

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchDeltaX.current = 0
    isDragging.current = false
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const dx = e.touches[0].clientX - touchStartX.current
    const dy = e.touches[0].clientY - touchStartY.current

    // Only start dragging if horizontal movement > vertical
    if (!isDragging.current && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isDragging.current = true
    }

    if (isDragging.current) {
      e.preventDefault()
      touchDeltaX.current = dx
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (isDragging.current && Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) {
        nextPage()
      } else {
        prevPage()
      }
    }
    touchDeltaX.current = 0
    isDragging.current = false
  }, [nextPage, prevPage])

  // Tap zones (click on left/right third of screen)
  const handleTapZone = useCallback((e: MouseEvent) => {
    // Ignore if there's a text selection
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) return

    // Ignore clicks on links or interactive elements
    const target = e.target as HTMLElement
    if (target.closest('a, button, input, select, textarea')) return

    const x = e.clientX
    const width = window.innerWidth
    const third = width / 3

    if (x < third) {
      prevPage()
    } else if (x > third * 2) {
      nextPage()
    }
    // Middle third: do nothing (future: toggle UI)
  }, [prevPage, nextPage])

  // Calculate the translateX offset
  // With column-gap = columnWidth, each page step = columnWidth * 2
  const translateX = columnWidth > 0 ? -currentPage * columnWidth * 2 : 0

  return (
    <div class="pressy-reader pressy-reader-paginated">
      <div
        ref={viewportRef}
        class="pressy-paginated-viewport"
        onClick={handleTapZone}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <article
          ref={contentRef}
          class={`pressy-prose pressy-paginated-content ${showDropCap ? '' : 'no-drop-cap'}`}
          data-drop-cap={showDropCap}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isAnimating ? 'transform 0.3s ease' : 'none',
          }}
        >
          {children}
        </article>
      </div>

      <div class="pressy-page-indicator">
        <button
          class="pressy-page-btn"
          onClick={prevPage}
          disabled={currentPage === 0 && !prevChapter}
          aria-label="Previous page"
        >
          ‹
        </button>
        <span class="pressy-page-info">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          class="pressy-page-btn"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 && !nextChapter}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <OfflineIndicator />

      <style>{PAGINATED_STYLES}</style>
    </div>
  )
}

const PAGINATED_STYLES = `
  .pressy-reader-paginated {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--color-bg, #fff);
    overflow: hidden;
  }

  .pressy-paginated-viewport {
    flex: 1;
    overflow: hidden;
    max-width: 65ch;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    position: relative;
    -webkit-user-select: text;
    user-select: text;
  }

  .pressy-paginated-content {
    /* Override prose defaults for column mode */
    max-width: none !important;
    margin-inline: 0 !important;
    padding-inline: 0 !important;

    /* CSS columns */
    column-fill: auto;
    height: 100%;

    /* column-width and column-gap set via JS */
  }

  .pressy-page-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: ${PAGE_INDICATOR_HEIGHT}px;
    border-top: 1px solid var(--color-border, #e5e5e5);
    background: var(--color-bg, #fff);
    flex-shrink: 0;
  }

  .pressy-page-info {
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    font-size: 0.875rem;
    color: var(--color-text-muted, #666);
    min-width: 5ch;
    text-align: center;
  }

  .pressy-page-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-text-muted, #666);
    cursor: pointer;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    line-height: 1;
    transition: color 0.15s, background 0.15s;
  }

  .pressy-page-btn:hover:not(:disabled) {
    color: var(--color-text, #1a1a1a);
    background: var(--color-bg-subtle, #f5f5f5);
  }

  .pressy-page-btn:disabled {
    opacity: 0.3;
    cursor: default;
  }
`
