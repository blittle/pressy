import { ComponentChildren, ComponentType } from 'preact'
import { useState, useEffect, useRef, useCallback } from 'preact/hooks'

import { Navigation } from './Navigation.js'
import { TextShare } from './TextShare.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ProgressData {
  page: number
  totalPages: number
  scrollPosition: number
}

export interface ChapterMapData {
  chapterMap: Record<string, () => Promise<{ default: ComponentType<{ components?: Record<string, unknown> }> }>>
  chapterOrder: string[]
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
  initialContent?: ComponentType<{ components?: Record<string, unknown> }>
  chapterMapData?: ChapterMapData
  currentChapterSlug?: string
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>
  bookBasePath?: string
  onChapterChange?: (slug: string, page: number, totalPages: number) => void
  mdxComponents?: Record<string, unknown>
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
  initialContent,
  chapterMapData,
  currentChapterSlug,
  allChapters,
  bookBasePath,
  onChapterChange,
  mdxComponents,
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

interface LoadedChapter {
  slug: string
  title: string
  Content: ComponentType<{ components?: Record<string, unknown> }>
}

interface ChapterPageRange {
  slug: string
  startPage: number
  endPage: number
}

interface PaginatedReaderProps {
  children: ComponentChildren
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap: boolean
  onSaveProgress?: (data: ProgressData) => void
  onRestoreProgress?: () => Promise<ProgressData | null>
  bookProgressPercent?: number
  initialContent?: ComponentType<{ components?: Record<string, unknown> }>
  chapterMapData?: ChapterMapData
  currentChapterSlug?: string
  allChapters?: Array<{ slug: string; title: string; wordCount?: number }>
  bookBasePath?: string
  onChapterChange?: (slug: string, page: number, totalPages: number) => void
  mdxComponents?: Record<string, unknown>
}

function ChapterDivider({ title }: { title: string }) {
  return (
    <div class="pressy-chapter-divider">
      <h2 class="pressy-chapter-divider-title">{title}</h2>
    </div>
  )
}

function PaginatedReader({
  children,
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
  const containerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const articleRef = useRef<HTMLElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const hasRestoredRef = useRef(false)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Multi-chapter state
  const [loadedChapters, setLoadedChapters] = useState<LoadedChapter[]>([])
  const [chapterRanges, setChapterRanges] = useState<ChapterPageRange[]>([])
  const [activeChapterSlug, setActiveChapterSlug] = useState(currentChapterSlug || '')
  const preloadingRef = useRef<Set<string>>(new Set())

  // Whether we're in multi-chapter mode
  const isMultiChapter = !!(chapterMapData && initialContent && currentChapterSlug && allChapters)

  // Initialize loaded chapters
  useEffect(() => {
    if (isMultiChapter && initialContent && currentChapterSlug) {
      const chapterInfo = allChapters!.find(ch => ch.slug === currentChapterSlug)
      setLoadedChapters([{
        slug: currentChapterSlug,
        title: chapterInfo?.title || currentChapterSlug,
        Content: initialContent,
      }])
      setActiveChapterSlug(currentChapterSlug)
    }
  }, []) // Only on mount

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

  // Build page-to-chapter map after recalculating pages
  const updateChapterRanges = useCallback(() => {
    if (!isMultiChapter) return
    const article = articleRef.current
    const viewport = viewportRef.current
    if (!article || !viewport) return

    const viewportWidth = viewport.clientWidth
    if (viewportWidth === 0) return

    const sections = article.querySelectorAll('.pressy-chapter-section')
    const ranges: ChapterPageRange[] = []

    sections.forEach((section) => {
      const slug = section.getAttribute('data-chapter-slug') || ''
      const sectionLeft = (section as HTMLElement).offsetLeft
      const sectionWidth = (section as HTMLElement).scrollWidth
      const startPage = Math.floor(sectionLeft / viewportWidth)
      const endPage = Math.max(startPage, Math.ceil((sectionLeft + sectionWidth) / viewportWidth) - 1)
      ranges.push({ slug, startPage, endPage })
    })

    setChapterRanges(ranges)
  }, [isMultiChapter])

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

    // Update chapter ranges for multi-chapter mode
    updateChapterRanges()
  }, [updateChapterRanges])

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

  // Recalculate when loaded chapters change
  useEffect(() => {
    if (loadedChapters.length > 0) {
      // Delay to let new content render
      const timer = setTimeout(recalculatePages, 50)
      return () => clearTimeout(timer)
    }
  }, [loadedChapters.length, recalculatePages])

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
  }, [recalculatePages, loadedChapters.length])

  // Check ?page=last query param for backward navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('page') === 'last' && totalPages > 1) {
      setCurrentPage(totalPages - 1)
      hasRestoredRef.current = true
      // Clean up the URL
      const url = new URL(window.location.href)
      url.searchParams.delete('page')
      history.replaceState(null, '', url.pathname)
    }
  }, [totalPages])

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

  // Preload next chapter when within 2 pages of chapter end
  useEffect(() => {
    if (!isMultiChapter || !chapterMapData || chapterRanges.length === 0) return

    const activeRange = chapterRanges.find(r => r.slug === activeChapterSlug)
    if (!activeRange) return

    const pagesFromEnd = activeRange.endPage - currentPage
    if (pagesFromEnd > 2) return

    // Find the next chapter to preload
    const { chapterOrder, chapterMap } = chapterMapData
    const lastLoadedSlug = loadedChapters[loadedChapters.length - 1]?.slug
    const lastLoadedIdx = chapterOrder.indexOf(lastLoadedSlug)
    if (lastLoadedIdx === -1 || lastLoadedIdx >= chapterOrder.length - 1) return

    const nextSlug = chapterOrder[lastLoadedIdx + 1]
    if (preloadingRef.current.has(nextSlug)) return
    if (loadedChapters.some(ch => ch.slug === nextSlug)) return

    preloadingRef.current.add(nextSlug)

    const loader = chapterMap[nextSlug]
    if (!loader) return

    loader().then((mod) => {
      const Content = mod.default
      const chapterInfo = allChapters!.find(ch => ch.slug === nextSlug)
      setLoadedChapters(prev => {
        if (prev.some(ch => ch.slug === nextSlug)) return prev
        return [...prev, {
          slug: nextSlug,
          title: chapterInfo?.title || nextSlug,
          Content,
        }]
      })
    }).catch(() => {
      // Dynamic import failed — will fall back to full-page navigation
      preloadingRef.current.delete(nextSlug)
    })
  }, [currentPage, activeChapterSlug, chapterRanges, isMultiChapter, chapterMapData, loadedChapters, allChapters])

  // Detect chapter boundary crossings and update URL / active chapter
  useEffect(() => {
    if (!isMultiChapter || chapterRanges.length === 0 || !bookBasePath) return

    const currentRange = chapterRanges.find(
      r => currentPage >= r.startPage && currentPage <= r.endPage
    )
    if (!currentRange || currentRange.slug === activeChapterSlug) return

    const prevSlug = activeChapterSlug
    setActiveChapterSlug(currentRange.slug)

    // Update URL
    const newPath = `${bookBasePath}/${currentRange.slug}`
    history.replaceState(null, '', newPath)

    // Update document title
    const chapterInfo = allChapters?.find(ch => ch.slug === currentRange.slug)
    if (chapterInfo) {
      document.title = document.title.replace(/^[^|]+/, chapterInfo.title + ' ')
    }

    // Notify parent about chapter change (saves progress for the chapter being left)
    if (onChapterChange && prevSlug) {
      const prevRange = chapterRanges.find(r => r.slug === prevSlug)
      if (prevRange) {
        const prevTotalPages = prevRange.endPage - prevRange.startPage + 1
        onChapterChange(prevSlug, prevTotalPages - 1, prevTotalPages)
      }
    }
  }, [currentPage, chapterRanges, activeChapterSlug, isMultiChapter, bookBasePath, allChapters, onChapterChange])

  // Save progress when page changes (debounced) — save relative to active chapter
  useEffect(() => {
    if (!onSaveProgress || !hasRestoredRef.current) return

    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      if (isMultiChapter && chapterRanges.length > 0) {
        const activeRange = chapterRanges.find(r => r.slug === activeChapterSlug)
        if (activeRange) {
          const chapterPage = currentPage - activeRange.startPage
          const chapterTotalPages = activeRange.endPage - activeRange.startPage + 1
          onSaveProgress({
            page: chapterPage,
            totalPages: chapterTotalPages,
            scrollPosition: 0,
          })
        }
      } else {
        onSaveProgress({
          page: currentPage,
          totalPages,
          scrollPosition: 0,
        })
      }
    }, 300)

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    }
  }, [currentPage, totalPages, onSaveProgress, isMultiChapter, chapterRanges, activeChapterSlug])

  // Save progress on page unload
  useEffect(() => {
    if (!onSaveProgress) return

    const handleUnload = () => {
      if (isMultiChapter && chapterRanges.length > 0) {
        const activeRange = chapterRanges.find(r => r.slug === activeChapterSlug)
        if (activeRange) {
          const chapterPage = currentPage - activeRange.startPage
          const chapterTotalPages = activeRange.endPage - activeRange.startPage + 1
          onSaveProgress({
            page: chapterPage,
            totalPages: chapterTotalPages,
            scrollPosition: 0,
          })
        }
      } else {
        onSaveProgress({
          page: currentPage,
          totalPages,
          scrollPosition: 0,
        })
      }
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [currentPage, totalPages, onSaveProgress, isMultiChapter, chapterRanges, activeChapterSlug])

  // Determine the effective last chapter slug for rubber-band / next chapter hint
  const effectiveNextChapter = (() => {
    if (!isMultiChapter || !chapterMapData) return nextChapter
    const { chapterOrder } = chapterMapData
    const lastLoadedSlug = loadedChapters[loadedChapters.length - 1]?.slug
    const lastLoadedIdx = chapterOrder.indexOf(lastLoadedSlug)
    // If we haven't loaded the last chapter in the book yet, no next chapter hint needed
    // (preloading will seamlessly add the next chapter)
    if (lastLoadedIdx < chapterOrder.length - 1) return undefined
    // All chapters loaded — navigate to book table of contents
    if (bookBasePath) return { slug: bookBasePath, title: 'Table of Contents' }
    return nextChapter
  })()

  // Determine the effective prev chapter for backward navigation
  const effectivePrevChapter = (() => {
    if (!isMultiChapter || !chapterMapData) return prevChapter
    const { chapterOrder } = chapterMapData
    const firstLoadedSlug = loadedChapters[0]?.slug
    const firstLoadedIdx = chapterOrder.indexOf(firstLoadedSlug)
    // If the first loaded chapter is the first chapter of the book
    if (firstLoadedIdx <= 0) return prevChapter
    // There's a previous chapter in the book — navigate to it via page load
    const prevSlug = chapterOrder[firstLoadedIdx - 1]
    const prevInfo = allChapters?.find(ch => ch.slug === prevSlug)
    return {
      slug: `${bookBasePath}/${prevSlug}?page=last`,
      title: prevInfo?.title || prevSlug,
    }
  })()

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
      if (effectiveNextChapter) {
        window.location.href = effectiveNextChapter.slug
      }
      return
    }
    goToPage(currentPage + 1)
  }, [currentPage, totalPages, effectiveNextChapter, goToPage])

  const goPrev = useCallback(() => {
    if (currentPage <= 0) {
      // At the first page — navigate to prev chapter if available
      if (effectivePrevChapter) {
        window.location.href = effectivePrevChapter.slug
      }
      return
    }
    goToPage(currentPage - 1)
  }, [currentPage, effectivePrevChapter, goToPage])

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

  // Touch swipe navigation with drag tracking, velocity detection, and rubber-band.
  // Listeners attach to the outer container (not the viewport) so they capture
  // touches that land on sibling elements like the tap-zone overlays.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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
        if (dx > 40 && atStart && effectivePrevChapter) {
          setChapterHint('prev')
        } else if (dx < -40 && atEnd && effectiveNextChapter) {
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
      if (atEnd && dx < -chapterThreshold && effectiveNextChapter) {
        setIsDragging(false)
        setDragOffset(0)
        setChapterHint(null)
        window.location.href = effectiveNextChapter.slug
        return
      }
      if (atStart && dx > chapterThreshold && effectivePrevChapter) {
        setIsDragging(false)
        setDragOffset(0)
        setChapterHint(null)
        window.location.href = effectivePrevChapter.slug
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

    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    container.addEventListener('touchcancel', onTouchCancel, { passive: true })

    return () => {
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [currentPage, totalPages, goNext, goPrev, effectiveNextChapter, effectivePrevChapter])

  // Compute per-chapter page indicator values
  const chapterPageInfo = (() => {
    if (!isMultiChapter || chapterRanges.length === 0) {
      return { chapterPage: currentPage, chapterTotalPages: totalPages }
    }
    const activeRange = chapterRanges.find(r => r.slug === activeChapterSlug)
    if (!activeRange) {
      return { chapterPage: currentPage, chapterTotalPages: totalPages }
    }
    return {
      chapterPage: currentPage - activeRange.startPage,
      chapterTotalPages: activeRange.endPage - activeRange.startPage + 1,
    }
  })()

  const progressPercent = chapterPageInfo.chapterTotalPages > 1
    ? ((chapterPageInfo.chapterPage + 1) / chapterPageInfo.chapterTotalPages) * 100
    : 100

  // Render content — either multi-chapter sections or single-chapter children
  const renderContent = () => {
    if (isMultiChapter && loadedChapters.length > 0) {
      return loadedChapters.map((ch) => (
        <section key={ch.slug} class="pressy-chapter-section" data-chapter-slug={ch.slug}>
          <ChapterDivider title={ch.title} />
          <ch.Content components={mdxComponents || {}} />
        </section>
      ))
    }
    return children
  }

  return (
    <div class="pressy-reader pressy-reader--paginated" ref={containerRef}>
      {/* Paginated content viewport */}
      <div class="pressy-paginated-viewport" ref={viewportRef}>
        <article
          ref={articleRef}
          class={`pressy-prose pressy-prose--paginated ${showDropCap ? '' : 'no-drop-cap'}`}
          data-drop-cap={showDropCap}
        >
          {renderContent()}
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
      {chapterHint === 'prev' && effectivePrevChapter && (
        <div class="pressy-chapter-hint pressy-chapter-hint--prev" aria-live="polite">
          <span class="pressy-chapter-hint-arrow">{'\u2190'}</span>
          <span class="pressy-chapter-hint-text">{effectivePrevChapter.title}</span>
        </div>
      )}
      {chapterHint === 'next' && effectiveNextChapter && (
        <div class="pressy-chapter-hint pressy-chapter-hint--next" aria-live="polite">
          <span class="pressy-chapter-hint-text">{effectiveNextChapter.title}</span>
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
          <span>Page {chapterPageInfo.chapterPage + 1} of {chapterPageInfo.chapterTotalPages}</span>
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
`
