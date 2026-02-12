import { ComponentChildren } from 'preact'
import { useSignal } from '@preact/signals'

import { Navigation } from './Navigation.js'
import { TableOfContents } from './TableOfContents.js'
import { TextShare } from './TextShare.js'
import { ThemeSwitcher } from './ThemeSwitcher.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ReaderProps {
  children: ComponentChildren
  title: string
  bookTitle?: string
  chapterTitle?: string
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  toc?: Array<{ level: number; text: string; slug: string }>
  showDropCap?: boolean
}

export function Reader({
  children,
  title,
  bookTitle,
  chapterTitle,
  prevChapter,
  nextChapter,
  toc,
  showDropCap = true,
}: ReaderProps) {
  const showToc = useSignal(false)

  return (
    <div class="pressy-reader">
      {/* Header */}
      <header class="pressy-reader-header">
        <div class="pressy-reader-header-left">
          {bookTitle && (
            <span class="pressy-book-title">
              {bookTitle}
            </span>
          )}
        </div>

        <div class="pressy-reader-header-center">
          {chapterTitle && <span class="pressy-chapter-title">{chapterTitle}</span>}
        </div>

        <div class="pressy-reader-header-right">
          {toc && toc.length > 0 && (
            <button
              class="pressy-toc-toggle"
              onClick={() => (showToc.value = !showToc.value)}
              aria-label="Toggle table of contents"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" />
              </svg>
            </button>
          )}

          <ThemeSwitcher />
        </div>
      </header>

      {/* Table of Contents sidebar */}
      {showToc.value && toc && (
        <aside class="pressy-toc-sidebar">
          <TableOfContents items={toc} onNavigate={() => (showToc.value = false)} />
        </aside>
      )}

      {/* Main content */}
      <main class="pressy-reader-main">
        <article
          class={`pressy-prose ${showDropCap ? '' : 'no-drop-cap'}`}
          data-drop-cap={showDropCap}
        >
          {children}
        </article>
      </main>

      {/* Text selection share */}
      <TextShare />

      {/* Chapter navigation */}
      <Navigation prev={prevChapter} next={nextChapter} />

      {/* Offline status indicator */}
      <OfflineIndicator />

      <style>{`
        .pressy-reader {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .pressy-reader-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }

        .pressy-reader-header-left,
        .pressy-reader-header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pressy-reader-header-center {
          flex: 1;
          text-align: center;
        }

        .pressy-book-title {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .pressy-chapter-title {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .pressy-toc-toggle {
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

        .pressy-toc-toggle:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-toc-sidebar {
          position: fixed;
          top: 3.5rem;
          right: 0;
          width: 300px;
          max-width: 90vw;
          height: calc(100vh - 3.5rem);
          background: var(--color-bg);
          border-left: 1px solid var(--color-border);
          overflow-y: auto;
          padding: 1rem;
          z-index: 90;
        }

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `}</style>
    </div>
  )
}
