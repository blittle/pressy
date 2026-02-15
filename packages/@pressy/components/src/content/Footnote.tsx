import { ComponentChildren } from 'preact'
import { useSignal } from '@preact/signals'

interface FootnoteProps {
  id: string | number
  children: ComponentChildren
}

export function Footnote({ id, children }: FootnoteProps) {
  const isOpen = useSignal(false)

  return (
    <span class="pressy-footnote-wrapper">
      <button
        class="pressy-footnote-ref"
        onClick={() => (isOpen.value = !isOpen.value)}
        aria-describedby={`footnote-${id}`}
        aria-expanded={isOpen.value}
      >
        {id}
      </button>

      {isOpen.value && (
        <span class="pressy-footnote-content" id={`footnote-${id}`} role="tooltip">
          {children}
          <button
            class="pressy-footnote-close"
            onClick={() => (isOpen.value = false)}
            aria-label="Close footnote"
          >
            ×
          </button>
        </span>
      )}

      <style>{`
        .pressy-footnote-wrapper {
          position: relative;
          display: inline;
        }

        .pressy-footnote-ref {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 1.25em;
          height: 1.25em;
          padding: 0 0.25em;
          font-size: 0.75em;
          font-weight: 600;
          color: var(--color-accent);
          background: var(--color-bg-subtle);
          border: none;
          border-radius: 0.25em;
          cursor: pointer;
          vertical-align: super;
          line-height: 1;
          transition: background 0.15s;
        }

        .pressy-footnote-ref:hover {
          background: var(--color-bg-muted);
        }

        .pressy-footnote-content {
          position: absolute;
          bottom: calc(100% + 0.5em);
          left: 0;
          z-index: 30;
          display: block;
          padding: 0.5em 2em 0.5em 0.75em;
          font-size: var(--font-size-sm);
          background: var(--color-bg-subtle);
          border-radius: 0.375em;
          border: 1px solid var(--color-border);
          width: 300px;
          max-width: 80vw;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .pressy-footnote-close {
          position: absolute;
          top: 0.25em;
          right: 0.25em;
          width: 1.5em;
          height: 1.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1em;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 0.25em;
        }

        .pressy-footnote-close:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }
      `}</style>
    </span>
  )
}
