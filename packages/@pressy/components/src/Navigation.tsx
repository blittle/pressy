export interface NavigationProps {
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
  basePath?: string
}

export function Navigation({ prev, next, basePath = '' }: NavigationProps) {
  if (!prev && !next) return null

  return (
    <nav class="pressy-navigation" aria-label="Chapter navigation">
      <div class="pressy-nav-inner">
        {prev ? (
          <a href={`${basePath}/${prev.slug}`} class="pressy-nav-link pressy-nav-prev">
            <span class="pressy-nav-direction">Previous</span>
            <span class="pressy-nav-title">{prev.title}</span>
          </a>
        ) : (
          <div class="pressy-nav-placeholder" />
        )}

        {next ? (
          <a href={`${basePath}/${next.slug}`} class="pressy-nav-link pressy-nav-next">
            <span class="pressy-nav-direction">Next</span>
            <span class="pressy-nav-title">{next.title}</span>
          </a>
        ) : (
          <div class="pressy-nav-placeholder" />
        )}
      </div>

      <style>{`
        .pressy-navigation {
          border-top: 1px solid var(--color-border);
          padding: 2rem 1.5rem;
          margin-top: 3rem;
        }

        .pressy-nav-inner {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          max-width: 65ch;
          margin: 0 auto;
        }

        .pressy-nav-link {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-decoration: none;
          padding: 1rem;
          border-radius: 0.5rem;
          transition: background 0.15s;
          max-width: 45%;
        }

        .pressy-nav-link:hover {
          background: var(--color-bg-subtle);
        }

        .pressy-nav-prev {
          align-items: flex-start;
        }

        .pressy-nav-next {
          align-items: flex-end;
          text-align: right;
        }

        .pressy-nav-direction {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pressy-nav-title {
          color: var(--color-text);
          font-weight: 500;
        }

        .pressy-nav-placeholder {
          flex: 1;
        }

        @media (max-width: 640px) {
          .pressy-nav-inner {
            flex-direction: column;
            gap: 1rem;
          }

          .pressy-nav-link {
            max-width: 100%;
          }

          .pressy-nav-next {
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </nav>
  )
}
