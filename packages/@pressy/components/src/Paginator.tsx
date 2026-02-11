import { ComponentChildren } from 'preact'
import { useSignal, useComputed } from '@preact/signals'
import { useRef, useEffect } from 'preact/hooks'

export interface PaginatorProps {
  children: ComponentChildren
  onPageChange?: (page: number, totalPages: number) => void
}

export function Paginator({ children, onPageChange }: PaginatorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const currentPage = useSignal(0)
  const totalPages = useSignal(1)

  // Calculate total pages based on content width
  useEffect(() => {
    const calculatePages = () => {
      if (!contentRef.current || !containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = contentRef.current.scrollWidth
      const pages = Math.ceil(contentWidth / containerWidth)
      totalPages.value = Math.max(1, pages)

      // Clamp current page
      if (currentPage.value >= totalPages.value) {
        currentPage.value = totalPages.value - 1
      }
    }

    calculatePages()

    // Recalculate on resize
    const observer = new ResizeObserver(calculatePages)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [children])

  // Navigate to page
  const goToPage = (page: number) => {
    const newPage = Math.max(0, Math.min(page, totalPages.value - 1))
    currentPage.value = newPage

    if (contentRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      contentRef.current.scrollTo({
        left: newPage * containerWidth,
        behavior: 'smooth',
      })
    }

    onPageChange?.(newPage, totalPages.value)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goToPage(currentPage.value + 1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPage(currentPage.value - 1)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch/swipe handling
  useEffect(() => {
    if (!containerRef.current) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          goToPage(currentPage.value + 1)
        } else {
          goToPage(currentPage.value - 1)
        }
      }
    }

    const container = containerRef.current
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  const progress = useComputed(() => {
    if (totalPages.value <= 1) return 100
    return Math.round(((currentPage.value + 1) / totalPages.value) * 100)
  })

  return (
    <div class="pressy-paginator" ref={containerRef}>
      {/* Paginated content */}
      <div class="pressy-paginator-content" ref={contentRef}>
        <article class="pressy-prose" data-drop-cap>
          {children}
        </article>
      </div>

      {/* Page controls */}
      <div class="pressy-paginator-controls">
        <button
          class="pressy-page-btn pressy-page-prev"
          onClick={() => goToPage(currentPage.value - 1)}
          disabled={currentPage.value === 0}
          aria-label="Previous page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div class="pressy-page-info">
          <span class="pressy-page-number">
            {currentPage.value + 1} / {totalPages.value}
          </span>
          <div class="pressy-progress-bar">
            <div class="pressy-progress-fill" style={{ width: `${progress.value}%` }} />
          </div>
        </div>

        <button
          class="pressy-page-btn pressy-page-next"
          onClick={() => goToPage(currentPage.value + 1)}
          disabled={currentPage.value >= totalPages.value - 1}
          aria-label="Next page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      <style>{`
        .pressy-paginator {
          position: relative;
          height: calc(100vh - 8rem);
          overflow: hidden;
        }

        .pressy-paginator-content {
          height: calc(100% - 3rem);
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;

          /* Hide scrollbar but keep functionality */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .pressy-paginator-content::-webkit-scrollbar {
          display: none;
        }

        .pressy-paginator-content .pressy-prose {
          column-width: calc(100vw - 3rem);
          column-gap: 3rem;
          column-fill: auto;
          height: 100%;
          padding: 0 1.5rem;
        }

        /* Prevent orphans and widows */
        .pressy-paginator-content .pressy-prose p {
          break-inside: avoid;
          orphans: 3;
          widows: 3;
        }

        .pressy-paginator-content .pressy-prose h1,
        .pressy-paginator-content .pressy-prose h2,
        .pressy-paginator-content .pressy-prose h3 {
          break-after: avoid;
        }

        .pressy-paginator-content .pressy-prose img,
        .pressy-paginator-content .pressy-prose figure {
          break-inside: avoid;
        }

        .pressy-paginator-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
        }

        .pressy-page-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
        }

        .pressy-page-btn:hover:not(:disabled) {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-page-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .pressy-page-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          min-width: 120px;
        }

        .pressy-page-number {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .pressy-progress-bar {
          width: 100%;
          height: 3px;
          background: var(--color-bg-muted);
          border-radius: 1.5px;
          overflow: hidden;
        }

        .pressy-progress-fill {
          height: 100%;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  )
}
