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

const roles: Record<CalloutType, 'note' | 'alert'> = {
  note: 'note',
  tip: 'note',
  warning: 'alert',
  important: 'alert',
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  return (
    <div class={`pressy-callout pressy-callout-${type}`} role={roles[type]}>
      <div class="pressy-callout-header">
        <span class="pressy-callout-icon">{icons[type]}</span>
        <strong class="pressy-callout-title">{title || defaultTitles[type]}</strong>
      </div>
      <div class="pressy-callout-content">{children}</div>
    </div>
  )
}
