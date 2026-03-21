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
- **Paywall** — optional gating via Shopify, Stripe, or email unlock
- **Static output** — builds to static HTML, deploy anywhere

## Install

```bash
npm install pressy @pressy-pub/components @pressy-pub/typography
```

| Package | Description |
|---|---|
| [`pressy`](https://www.npmjs.com/package/pressy) | Core framework — Vite plugin, CLI, client runtime |
| [`@pressy-pub/components`](https://www.npmjs.com/package/@pressy-pub/components) | Preact UI — Reader, Navigation, BookProgress, etc. |
| [`@pressy-pub/typography`](https://www.npmjs.com/package/@pressy-pub/typography) | CSS — prose styles, fluid type scale, themes |
| [`@pressy-pub/shopify`](https://www.npmjs.com/package/@pressy-pub/shopify) | Optional Shopify Storefront API integration |
| [`@pressy-pub/cloudflare`](https://www.npmjs.com/package/@pressy-pub/cloudflare) | Optional Cloudflare Workers middleware for server-side paywall |

## Quick Start

```bash
mkdir my-book && cd my-book
npm init -y
npm install pressy @pressy-pub/components @pressy-pub/typography
npx pressy dev
```

Or clone the repo and run an example:

```bash
git clone <repo-url> && cd pressy
pnpm install
pnpm dev:flatland
```

## Project Structure

```
packages/
  pressy/                  # Core framework — Vite plugin, CLI, client runtime
  @pressy/components/      # @pressy-pub/components — Preact UI (Reader, Navigation, etc.)
  @pressy/typography/      # @pressy-pub/typography — CSS prose styles, fluid type, themes
  @pressy/shopify/         # @pressy-pub/shopify — Shopify Storefront API integration
  @pressy/cloudflare/      # @pressy-pub/cloudflare — Cloudflare Workers paywall middleware

examples/
  flatland/                # Flatland by Edwin A. Abbott
  frankenstein/            # Frankenstein by Mary Shelley
  moby-dick/              # Moby-Dick by Herman Melville
```

> **Note:** The directory names under `@pressy/` differ from the published npm package names (`@pressy-pub/*`).

## Creating a Book

### 1. Set up your project

```bash
mkdir my-book && cd my-book
npm init -y
npm install pressy @pressy-pub/components @pressy-pub/typography
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
      cover.jpg            # Cover image (jpg, png, or svg)
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
cover: cover.jpg          # optional, auto-detected if named cover.{jpg,png,svg}
publishDate: '2025-01-15' # optional
isbn: '978-0-000000-00-0' # optional
language: en              # optional
```

To gate chapters behind a paywall, add a `paywall` block:

```yaml
title: My Book
author: Your Name
description: A brief description
paywall:
  enabled: true
  previewChapters: 3       # free chapters before the gate
  mode: email              # 'email', 'shopify', or 'stripe'
  # shopifyProductId: ''   # required for mode: shopify
  # stripePriceId: ''      # required for mode: stripe
  # price: '$9.99'         # displayed to the reader
```

`_article.yaml`:

```yaml
title: About This Project
author: Your Name
description: A standalone article   # optional
publishDate: '2025-01-15'           # optional
tags: [writing, tutorial]           # optional
cover: hero.jpg                     # optional
```

### 4. Write chapters in MDX

```mdx
---
title: Chapter One
---

# Chapter One

Regular prose works as expected.

<Aside title="A Note">
  Asides appear as pull-quotes or margin notes on wide screens.
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
npx pressy dev

# Production build (static HTML)
npx pressy build
```

## Configuration

| Option | Description |
|---|---|
| `site.title` | Site/book title |
| `site.url` | Production URL |
| `site.description` | Site description (used in meta tags) |
| `site.author` | Author name |
| `site.language` | Language code (default: `"en"`) |
| `pagination.defaultMode` | `"paginated"` or `"scroll"` (default: `"scroll"`) |
| `pwa.enabled` | Enable PWA/offline support (default: `true`) |
| `pwa.shortName` | App name on home screen |
| `pwa.themeColor` | Browser chrome color (default: `"#ffffff"`) |
| `pwa.backgroundColor` | Splash screen background color (default: `"#ffffff"`) |
| `pwa.display` | `"standalone"`, `"minimal-ui"`, `"fullscreen"`, or `"browser"` (default: `"standalone"`) |
| `pwa.icon` | Path to app icon (used for both 192x192 and 512x512) |
| `pwa.icon192` | Path to 192x192 icon (overrides `pwa.icon`) |
| `pwa.icon512` | Path to 512x512 icon (overrides `pwa.icon`) |
| `pwa.favicon` | Path to favicon (falls back to `icon192`, then `icon`) |
| `outDir` | Build output directory (default: `"dist"`) |
| `contentDir` | Content directory (default: `"content"`) |

## MDX Components

| Component | Props | Description |
|---|---|---|
| `<Aside>` | `title?` | Sidebar/margin note. Floats right on wide screens. |
| `<Footnote>` | `id` | Inline footnote with popup tooltip. |
| `<Callout>` | `type?` `title?` | Highlighted block. Types: `note`, `tip`, `warning`, `important`. |
| `<Figure>` | `src` `alt?` `caption?` `wide?` | Image with caption. `wide` extends past prose width on large screens. |
| `<SceneBreak>` | `variant?` | Scene/section divider. Variants: `asterisks` (default), `line`, `ornament`. |

## Themes

Pressy ships with three themes plus system auto-detection:

- **Light** — clean white background
- **Dark** — reduced eye strain for low light
- **Sepia** — warm paper tones for extended reading
- **System** — follows OS light/dark preference

Themes are applied via `data-theme` on `<html>` and use CSS custom properties. Override any variable in a custom theme file.

## License

MIT
