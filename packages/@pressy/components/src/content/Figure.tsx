import { ComponentChildren } from 'preact'

interface FigureProps {
  src: string
  alt?: string
  caption?: string
  wide?: boolean
  children?: ComponentChildren
}

export function Figure({ src, alt, caption, wide, children }: FigureProps) {
  return (
    <figure class={`pressy-figure ${wide ? 'pressy-figure-wide' : ''}`}>
      <img src={src} alt={alt || caption || ''} loading="lazy" decoding="async" />
      {(caption || children) && (
        <figcaption class="pressy-figure-caption">{caption || children}</figcaption>
      )}

      <style>{`
        .pressy-figure {
          margin-block: 2em;
          margin-inline: 0;
        }

        .pressy-figure img {
          width: 100%;
          height: auto;
          border-radius: 0.5em;
        }

        .pressy-figure-caption {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 0.75em;
          font-style: italic;
        }

        .pressy-figure-wide {
          margin-inline: 0;
        }

        @media (min-width: 80ch) {
          .pressy-figure-wide {
            margin-inline: calc(-1 * ((100vw - 65ch) / 4));
            max-width: none;
          }
        }
      `}</style>
    </figure>
  )
}
