import { ComponentChildren } from 'preact'

import { Navigation } from './Navigation.js'
import { TextShare } from './TextShare.js'
import { OfflineIndicator } from './OfflineIndicator.js'

export interface ReaderProps {
  children: ComponentChildren
  title: string
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  showDropCap?: boolean
}

export function Reader({
  children,
  prevChapter,
  nextChapter,
  showDropCap = true,
}: ReaderProps) {
  return (
    <div class="pressy-reader">
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

        .pressy-reader-main {
          flex: 1;
          padding: 2rem 0;
        }
      `}</style>
    </div>
  )
}
