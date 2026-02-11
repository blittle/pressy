export interface TOCItem {
  level: number
  text: string
  slug: string
}

export interface TableOfContentsProps {
  items: TOCItem[]
  onNavigate?: () => void
  activeSlug?: string
}

export function TableOfContents({ items, onNavigate, activeSlug }: TableOfContentsProps) {
  const handleClick = (slug: string) => {
    // Scroll to heading
    const element = document.getElementById(slug)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onNavigate?.()
  }

  return (
    <nav class="pressy-toc" aria-label="Table of contents">
      <h2 class="pressy-toc-title">Contents</h2>
      <ul class="pressy-toc-list">
        {items.map((item) => (
          <li
            key={item.slug}
            class={`pressy-toc-item pressy-toc-level-${item.level}`}
            data-active={activeSlug === item.slug}
          >
            <a
              href={`#${item.slug}`}
              onClick={(e) => {
                e.preventDefault()
                handleClick(item.slug)
              }}
              class="pressy-toc-link"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        .pressy-toc {
          font-size: var(--font-size-sm);
        }

        .pressy-toc-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--color-heading);
        }

        .pressy-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pressy-toc-item {
          margin-bottom: 0.5rem;
        }

        .pressy-toc-level-1 {
          padding-left: 0;
        }

        .pressy-toc-level-2 {
          padding-left: 1rem;
        }

        .pressy-toc-level-3 {
          padding-left: 2rem;
        }

        .pressy-toc-level-4 {
          padding-left: 3rem;
        }

        .pressy-toc-link {
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.15s;
          display: block;
          padding: 0.25rem 0;
        }

        .pressy-toc-link:hover {
          color: var(--color-text);
        }

        .pressy-toc-item[data-active="true"] .pressy-toc-link {
          color: var(--color-accent);
          font-weight: 500;
        }
      `}</style>
    </nav>
  )
}
