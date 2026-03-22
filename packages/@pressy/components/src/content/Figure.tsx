import { ComponentChildren } from 'preact'

interface FigureProps {
  src: string
  alt?: string
  caption?: string
  wide?: boolean
  children?: ComponentChildren
}

export function Figure({ src, alt, caption, wide, children }: FigureProps) {
  // Plain img when used as a simple image replacement (no caption)
  if (!caption && !children) {
    return <img src={src} alt={alt || ''} loading="lazy" decoding="async" />
  }

  const classes = ['pressy-figure', wide && 'pressy-figure-wide'].filter(Boolean).join(' ')

  return (
    <figure class={classes}>
      <img src={src} alt={alt || caption || ''} loading="lazy" decoding="async" />
      <figcaption class="pressy-figure-caption">{caption || children}</figcaption>
    </figure>
  )
}
