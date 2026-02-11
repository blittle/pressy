import { useSignal, useComputed } from '@preact/signals'
import { useEffect } from 'preact/hooks'

export interface DownloadBookProps {
  bookSlug: string
  chapterUrls: string[]
  /** Reactive signal: set of cached book slugs */
  cachedBooks: { value: Set<string> }
  /** Reactive signal: current download progress or null */
  cacheProgress: { value: { bookSlug: string; current: number; total: number } | null }
  /** Called to start downloading the book */
  onDownload: (bookSlug: string, chapterUrls: string[]) => void
  /** Called to remove the cached book */
  onRemove: (bookSlug: string) => void
}

export function DownloadBook({
  bookSlug,
  chapterUrls,
  cachedBooks,
  cacheProgress,
  onDownload,
  onRemove,
}: DownloadBookProps) {
  const isCached = useComputed(() => cachedBooks.value.has(bookSlug))
  const isDownloading = useComputed(
    () => cacheProgress.value?.bookSlug === bookSlug
  )
  const progress = useComputed(() => {
    const p = cacheProgress.value
    if (!p || p.bookSlug !== bookSlug) return null
    return Math.round((p.current / p.total) * 100)
  })

  if (isCached.value) {
    return (
      <div class="pressy-download-book">
        <div class="pressy-download-status">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          <span>Available offline</span>
        </div>
        <button
          class="pressy-download-remove"
          onClick={() => onRemove(bookSlug)}
          aria-label="Remove offline copy"
        >
          Remove
        </button>

        <style>{STYLES}</style>
      </div>
    )
  }

  if (isDownloading.value) {
    return (
      <div class="pressy-download-book">
        <div class="pressy-download-progress">
          <div class="pressy-download-bar">
            <div
              class="pressy-download-bar-fill"
              style={{ width: `${progress.value || 0}%` }}
            />
          </div>
          <span class="pressy-download-percent">{progress.value || 0}%</span>
        </div>

        <style>{STYLES}</style>
      </div>
    )
  }

  return (
    <div class="pressy-download-book">
      <button
        class="pressy-download-btn"
        onClick={() => onDownload(bookSlug, chapterUrls)}
        aria-label="Download for offline reading"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
        <span>Download for offline</span>
      </button>

      <style>{STYLES}</style>
    </div>
  )
}

const STYLES = `
  .pressy-download-book {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
  }

  .pressy-download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-family: inherit;
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text, #1a1a1a);
    background: var(--color-bg-muted, #f5f5f5);
    border: 1px solid var(--color-border, #e5e5e5);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }

  .pressy-download-btn:hover {
    background: var(--color-bg-subtle, #eee);
    border-color: var(--color-text-muted, #999);
  }

  .pressy-download-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--font-size-sm, 0.875rem);
    color: #16a34a;
  }

  .pressy-download-remove {
    font-family: inherit;
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #666);
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
  }

  .pressy-download-remove:hover {
    color: var(--color-text, #1a1a1a);
  }

  .pressy-download-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    max-width: 300px;
  }

  .pressy-download-bar {
    flex: 1;
    height: 6px;
    background: var(--color-bg-muted, #f5f5f5);
    border-radius: 3px;
    overflow: hidden;
  }

  .pressy-download-bar-fill {
    height: 100%;
    background: var(--color-text, #1a1a1a);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .pressy-download-percent {
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-muted, #666);
    min-width: 3ch;
    text-align: right;
  }

  @media (prefers-color-scheme: dark) {
    .pressy-download-status {
      color: #86efac;
    }
  }
`
