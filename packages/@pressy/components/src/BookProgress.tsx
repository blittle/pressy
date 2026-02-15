import { useState, useEffect } from 'preact/hooks'

export interface ChapterProgressInfo {
  slug: string
  title: string
  order: number
  wordCount: number
  page: number
  totalPages: number
}

export interface BookProgressProps {
  bookSlug: string
  chapters: Array<{
    slug: string
    title: string
    order: number
    wordCount?: number
  }>
  basePath: string
  loadAllProgress: () => Promise<
    Array<{ chapterSlug: string; page: number; totalPages: number }>
  >
}

export function BookProgress({
  chapters,
  basePath,
  bookSlug,
  loadAllProgress,
}: BookProgressProps) {
  const [progressMap, setProgressMap] = useState<
    Map<string, { page: number; totalPages: number }>
  >(new Map())

  useEffect(() => {
    loadAllProgress().then((allProgress) => {
      const chapterSlugs = new Set(chapters.map((ch) => ch.slug))
      const map = new Map<string, { page: number; totalPages: number }>()
      for (const p of allProgress) {
        if (chapterSlugs.has(p.chapterSlug)) {
          map.set(p.chapterSlug, { page: p.page, totalPages: p.totalPages })
        }
      }
      setProgressMap(map)
    })
  }, [chapters, loadAllProgress])

  // Calculate overall book progress based on word counts
  const totalWords = chapters.reduce((sum, ch) => sum + (ch.wordCount || 0), 0)
  let wordsRead = 0
  let chaptersCompleted = 0
  let chaptersStarted = 0

  for (const ch of chapters) {
    const progress = progressMap.get(ch.slug)
    if (!progress) continue

    const chapterWords = ch.wordCount || 0
    if (progress.totalPages > 0 && progress.page >= progress.totalPages - 1) {
      // Chapter completed
      wordsRead += chapterWords
      chaptersCompleted++
      chaptersStarted++
    } else if (progress.page > 0 && progress.totalPages > 0) {
      // Chapter in progress — estimate words read from page proportion
      wordsRead += (progress.page / progress.totalPages) * chapterWords
      chaptersStarted++
    }
  }

  const overallPercent = totalWords > 0 ? (wordsRead / totalWords) * 100 : 0
  const hasAnyProgress = chaptersStarted > 0

  return (
    <div class="pressy-book-progress-section">
      {hasAnyProgress && (
        <div class="pressy-overall-progress">
          <div class="pressy-overall-progress-bar">
            <div
              class="pressy-overall-progress-fill"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
          <div class="pressy-overall-progress-text">
            {Math.round(overallPercent)}% complete
            <span class="pressy-overall-progress-detail">
              {chaptersCompleted} of {chapters.length} chapters
            </span>
          </div>
        </div>
      )}

      <nav class="pressy-chapter-list">
        {chapters.map((ch) => {
          const progress = progressMap.get(ch.slug)
          const isCompleted =
            progress &&
            progress.totalPages > 0 &&
            progress.page >= progress.totalPages - 1
          const isStarted = progress && progress.page > 0 && !isCompleted

          return (
            <a
              href={`${basePath}/books/${bookSlug}/${ch.slug}`}
              class={`pressy-chapter-link ${isCompleted ? 'pressy-chapter--completed' : ''} ${isStarted ? 'pressy-chapter--started' : ''}`}
            >
              <span class="pressy-chapter-order">{ch.order}.</span>
              <span class="pressy-chapter-title">{ch.title}</span>
              {isCompleted && (
                <span class="pressy-chapter-badge pressy-chapter-badge--done">
                  Done
                </span>
              )}
              {isStarted && progress && (
                <span class="pressy-chapter-badge pressy-chapter-badge--reading">
                  p.{progress.page + 1}/{progress.totalPages}
                </span>
              )}
            </a>
          )
        })}
      </nav>

      <style>{BOOK_PROGRESS_STYLES}</style>
    </div>
  )
}

const BOOK_PROGRESS_STYLES = `
  .pressy-overall-progress {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border-radius: 0.5rem;
  }

  .pressy-overall-progress-bar {
    height: 4px;
    background: var(--color-border, #dee2e6);
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .pressy-overall-progress-fill {
    height: 100%;
    background: var(--color-accent, #212529);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  .pressy-overall-progress-text {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #6c757d);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pressy-overall-progress-detail {
    opacity: 0.7;
  }

  .pressy-chapter-link {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: var(--color-text, #1a1a1a);
    border-radius: 0.5rem;
    transition: background 0.15s;
  }

  .pressy-chapter-link:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }

  .pressy-chapter--completed {
    opacity: 0.7;
  }

  .pressy-chapter-title {
    flex: 1;
  }

  .pressy-chapter-badge {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;
  }

  .pressy-chapter-badge--done {
    background: var(--color-accent, #212529);
    color: var(--color-bg, #fff);
  }

  .pressy-chapter-badge--reading {
    background: var(--color-bg-subtle, #f5f5f5);
    color: var(--color-text-muted, #6c757d);
    border: 1px solid var(--color-border, #dee2e6);
  }
`
