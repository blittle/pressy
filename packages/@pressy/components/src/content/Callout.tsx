import { ComponentChildren } from 'preact'

type CalloutType = 'note' | 'tip' | 'warning' | 'important'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ComponentChildren
}

const icons: Record<CalloutType, string> = {
  note: '\u{1F4DD}',
  tip: '\u{1F4A1}',
  warning: '\u{26A0}\u{FE0F}',
  important: '\u{2757}',
}

const defaultTitles: Record<CalloutType, string> = {
  note: 'Note',
  tip: 'Tip',
  warning: 'Warning',
  important: 'Important',
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  return (
    <div class={`pressy-callout pressy-callout-${type}`}>
      <div class="pressy-callout-header">
        <span class="pressy-callout-icon">{icons[type]}</span>
        <strong class="pressy-callout-title">{title || defaultTitles[type]}</strong>
      </div>
      <div class="pressy-callout-content">{children}</div>

      <style>{`
        .pressy-callout {
          border-radius: 0.5em;
          padding: 1em 1.25em;
          margin-block: 1.5em;
        }

        .pressy-callout-note {
          background: var(--color-callout-note-bg);
          border: 1px solid var(--color-callout-note-border);
        }

        .pressy-callout-tip {
          background: var(--color-callout-tip-bg);
          border: 1px solid var(--color-callout-tip-border);
        }

        .pressy-callout-warning {
          background: var(--color-callout-warning-bg);
          border: 1px solid var(--color-callout-warning-border);
        }

        .pressy-callout-important {
          background: var(--color-callout-important-bg);
          border: 1px solid var(--color-callout-important-border);
        }

        .pressy-callout-header {
          display: flex;
          align-items: center;
          gap: 0.5em;
          margin-bottom: 0.5em;
        }

        .pressy-callout-icon {
          font-size: 1.25em;
        }

        .pressy-callout-title {
          font-weight: 600;
        }

        .pressy-callout-content {
          font-size: var(--font-size-sm);
          line-height: 1.5;
        }

        .pressy-callout-content p:first-child {
          margin-top: 0;
        }

        .pressy-callout-content p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
