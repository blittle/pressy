# Plan: Flesh Out Flatland Example

## Context

The Pressy framework packages are all implemented, but the `examples/flatland/` directory is minimal — just a preface chapter. We need a complete working example that exercises the framework's features: multiple chapters with navigation, MDX components (Aside, Footnote, Figure, Callout, SceneBreak), an article, and theme customization.

The plan specifies using *Flatland* by Edwin A. Abbott (public domain, Project Gutenberg) as test content.

## What Already Exists

- `examples/flatland/package.json` — deps on pressy, @pressy/components, @pressy/typography
- `examples/flatland/pressy.config.ts` — configured for paginated mode
- `examples/flatland/content/books/flatland/_book.yaml` — book metadata (paywall disabled)
- `examples/flatland/content/books/flatland/00-preface.mdx` — one chapter using `<Aside>`
- `examples/flatland/theme/` — empty directory

## Plan

### 1. Add Flatland chapters (Part I: This World)

Create ~6 chapters from Part I of Flatland, each using several MDX components to exercise the framework. Content sourced from Project Gutenberg (public domain).

Files to create:
- `content/books/flatland/01-of-the-nature-of-flatland.mdx` — Ch 1, uses `<Aside>`, `<Callout>`
- `content/books/flatland/02-of-the-climate-and-houses.mdx` — Ch 2, uses `<Footnote>`, `<SceneBreak>`
- `content/books/flatland/03-concerning-the-inhabitants.mdx` — Ch 3, uses `<Aside>`, `<Footnote>`
- `content/books/flatland/04-concerning-the-women.mdx` — Ch 4, uses `<Callout type="warning">`, `<SceneBreak>`
- `content/books/flatland/05-of-our-methods-of-recognizing.mdx` — Ch 5, uses `<Footnote>`, `<Aside>`
- `content/books/flatland/06-of-recognition-by-sight.mdx` — Ch 6, uses `<Callout type="tip">`, `<SceneBreak>`

Each chapter will have:
- Proper frontmatter with `title`
- An h1 matching the title
- Authentic Flatland text adapted to MDX
- 2-3 MDX component usages woven naturally into the content

### 2. Add Part II intro chapter

- `content/books/flatland/07-concerning-a-stranger.mdx` — Start of Part II, uses `<Callout type="important">`, `<Aside>`, demonstrates a part transition

### 3. Add an article example

Create `content/articles/about-flatland/` to demonstrate the articles feature:
- `_article.yaml` — article metadata with tags
- `index.mdx` — a short "About This Edition" article using `<Callout>` and `<Footnote>`

### 4. Add theme customization

- `theme/custom.css` — minimal custom CSS showing how to override typography defaults (e.g., custom drop cap color, a custom font import)

### 5. Add a placeholder cover

- `content/books/flatland/cover.svg` — a simple SVG cover image (geometric shapes fitting the Flatland theme)

## Files to Create/Modify

| File | Action |
|------|--------|
| `examples/flatland/content/books/flatland/01-of-the-nature-of-flatland.mdx` | Create |
| `examples/flatland/content/books/flatland/02-of-the-climate-and-houses.mdx` | Create |
| `examples/flatland/content/books/flatland/03-concerning-the-inhabitants.mdx` | Create |
| `examples/flatland/content/books/flatland/04-concerning-the-women.mdx` | Create |
| `examples/flatland/content/books/flatland/05-of-our-methods-of-recognizing.mdx` | Create |
| `examples/flatland/content/books/flatland/06-of-recognition-by-sight.mdx` | Create |
| `examples/flatland/content/books/flatland/07-concerning-a-stranger.mdx` | Create |
| `examples/flatland/content/books/flatland/cover.svg` | Create |
| `examples/flatland/content/articles/about-flatland/_article.yaml` | Create |
| `examples/flatland/content/articles/about-flatland/index.mdx` | Create |
| `examples/flatland/theme/custom.css` | Create |

## Verification

1. Run `pnpm install` from the monorepo root
2. Run `pnpm --filter flatland-example dev` to start the dev server
3. Verify:
   - Home page lists the book and article
   - Book page shows all 8 chapters (preface + 7)
   - Chapter navigation (prev/next) works
   - MDX components render (Aside, Footnote, Callout, SceneBreak)
   - Paginated mode works (configured as default)
   - Theme switcher works
   - Article page renders
   - Custom theme CSS applies
