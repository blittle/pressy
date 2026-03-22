/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact'

// EPUB-friendly static implementations of MDX components.
// These produce simple HTML with no hooks, signals, or interactivity.
// Used with preact-render-to-string for EPUB XHTML generation.

// Module-level footnote collector — reset before each chapter render.
let _collectedFootnotes: Array<{ id: string | number; children: ComponentChildren }> = []

export function resetFootnotes() {
  _collectedFootnotes = []
}

export function getCollectedFootnotes() {
  return _collectedFootnotes
}

interface AsideProps {
  children: ComponentChildren
  title?: string
}

export function Aside({ children, title }: AsideProps) {
  return (
    <aside class="pressy-aside">
      {title && <strong class="pressy-aside-title">{title}</strong>}
      <div class="pressy-aside-content">{children}</div>
    </aside>
  )
}

type CalloutType = 'note' | 'tip' | 'warning' | 'important'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ComponentChildren
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
        <strong class="pressy-callout-title">{title || defaultTitles[type]}</strong>
      </div>
      <div class="pressy-callout-content">{children}</div>
    </div>
  )
}

interface FigureProps {
  src: string
  alt?: string
  caption?: string
  wide?: boolean
  children?: ComponentChildren
}

export function Figure({ src, alt, caption, wide, children }: FigureProps) {
  if (!caption && !children) {
    return <img src={src} alt={alt || ''} />
  }

  const classes = ['pressy-figure', wide && 'pressy-figure-wide'].filter(Boolean).join(' ')

  return (
    <figure class={classes}>
      <img src={src} alt={alt || caption || ''} />
      <figcaption class="pressy-figure-caption">{caption || children}</figcaption>
    </figure>
  )
}

interface FootnoteProps {
  id: string | number
  children: ComponentChildren
}

export function Footnote({ id, children }: FootnoteProps) {
  _collectedFootnotes.push({ id, children })
  return (
    <sup>
      <a href={`#fn-${id}`} id={`fnref-${id}`}>[{id}]</a>
    </sup>
  )
}

interface SceneBreakProps {
  variant?: 'asterisks' | 'line' | 'ornament'
}

export function SceneBreak({ variant = 'asterisks' }: SceneBreakProps) {
  return (
    <div class={`pressy-scene-break pressy-scene-break-${variant}`}>
      {variant === 'asterisks' && <span>* * *</span>}
      {variant === 'line' && <hr />}
      {variant === 'ornament' && <span>&#10087;</span>}
    </div>
  )
}

/** All EPUB components as a map suitable for MDX rendering */
export const epubComponents = {
  Aside,
  Callout,
  Figure,
  Footnote,
  SceneBreak,
}
