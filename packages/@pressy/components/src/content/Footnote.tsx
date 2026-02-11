import { ComponentChildren } from 'preact'
import { useSignal } from '@preact/signals'

interface FootnoteProps {
  id: string | number
  children: ComponentChildren
}

export function Footnote({ id, children }: FootnoteProps) {
  const isOpen = useSignal(false)

  return (
    <>
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
          display: inline-block;
          position: relative;
          margin-left: 0.5em;
          padding: 0.5em 2em 0.5em 0.75em;
          font-size: var(--font-size-sm);
          background: var(--color-bg-subtle);
          border-radius: 0.375em;
          border: 1px solid var(--color-border);
          max-width: 300px;
          vertical-align: baseline;
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
    </>
  )
}
