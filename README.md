# Pressy

A web framework for self-publishing books and articles. Write in MDX, get a paginated reader with offline support, theme switching, and progress tracking.

## Features

- **Paginated reader** — CSS multi-column layout with swipe gestures, keyboard navigation, and smooth page transitions
- **Seamless chapter transitions** — chapters preload and flow together without full-page navigation
- **MDX content** — write chapters in MDX with built-in components (Aside, Footnote, Callout, Figure, SceneBreak)
- **Themes** — Light, Dark, Sepia, and System (follows OS preference), switchable from the reader
- **Fluid typography** — responsive font sizing with reader-adjustable scale (80%–150%)
- **Reading progress** — per-chapter and book-wide progress saved to IndexedDB
- **PWA / Offline** — service worker support, download books for offline reading
- **Shopify integration** — optional paywall via Shopify Storefront API
- **Static output** — builds to static HTML, deploy anywhere

## Quick Start

```bash
# Clone and install
git clone <repo-url> && cd pressy
pnpm install

# Run the Flatland example
pnpm dev:flatland
```

## Project Structure

```
packages/
  pressy/                  # Core framework — Vite plugin, CLI, client runtime
  @pressy/components/      # Preact UI — Reader, Navigation, BookProgress, etc.
  @pressy/typography/      # CSS — prose styles, fluid type scale, themes
  @pressy/shopify/         # Shopify Storefront API integration

examples/
  flatland/                # Full example using Flatland by Edwin A. Abbott
  frankenstein/            # Example using Frankenstein by Mary Shelley
```

## Creating a Book

### 1. Set up your project

```bash
mkdir my-book && cd my-book
pnpm init
pnpm add pressy @pressy/components @pressy/typography
```

### 2. Configure

Create `pressy.config.ts`:

```ts
import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'My Book',
    url: 'https://mybook.example.com',
    author: 'Your Name',
  },
  pagination: {
    defaultMode: 'paginated',
  },
})
```

### 3. Add content

```
content/
  books/
    my-book/
      _book.yaml          # Book metadata
      01-chapter-one.mdx  # Chapters (ordered by filename)
      02-chapter-two.mdx
  articles/               # Optional standalone articles
    my-article/
      _article.yaml
      index.mdx
```

`_book.yaml`:

```yaml
title: My Book
author: Your Name
description: A brief description
```

### 4. Write chapters in MDX

```mdx
---
title: Chapter One
---

# Chapter One

Regular prose works as expected.

<Aside title="A Note">
  Asides appear as pull-quotes or margin notes.
</Aside>

This has a footnote<Footnote id="1">Footnote content here.</Footnote> inline.

<Callout type="tip" title="Writing Tip">
  Use callouts to highlight key information.
</Callout>

<SceneBreak />

A new scene begins after the break.
```

### 5. Dev and build

```bash
# Development server
pnpm pressy dev

# Production build (static HTML)
pnpm pressy build
```

## Configuration

| Option | Description |
|---|---|
| `site.title` | Site/book title |
| `site.url` | Production URL |
| `site.author` | Author name |
| `site.language` | Language code (default: `"en"`) |
| `pagination.defaultMode` | `"paginated"` or `"scroll"` (default: `"scroll"`) |
| `pwa.enabled` | Enable PWA/offline support (default: `true`) |
| `pwa.shortName` | App name on home screen |
| `pwa.themeColor` | Browser chrome color |
| `outDir` | Build output directory (default: `"dist"`) |
| `contentDir` | Content directory (default: `"content"`) |

## MDX Components

| Component | Description |
|---|---|
| `<Aside>` | Sidebar/margin note |
| `<Footnote id="n">` | Inline footnote with popup |
| `<Callout type="note\|tip\|warning\|important">` | Highlighted block |
| `<Figure src="" alt="" caption="">` | Image with caption |
| `<SceneBreak variant="asterisks">` | Scene/section divider |

## Themes

Pressy ships with three themes plus system auto-detection:

- **Light** — clean white background
- **Dark** — reduced eye strain for low light
- **Sepia** — warm paper tones for extended reading
- **System** — follows OS light/dark preference

Themes are applied via `data-theme` on `<html>` and use CSS custom properties. Override any variable in a custom theme file.

## License

MIT
