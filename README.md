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

## Customizing Look & Feel

Create a `theme/custom.css` file in your project root. Pressy auto-discovers it and loads it after the built-in styles, so your overrides take precedence.

### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  --pressy-font-body: 'Crimson Pro', Georgia, 'Times New Roman', serif;
  --pressy-font-heading: 'My Heading Font', system-ui, sans-serif;
  --pressy-font-mono: 'Fira Code', monospace;
}
```

### Brand Colors

Override colors globally or per-theme. Values set on `:root` apply to all themes unless a more specific selector overrides them:

```css
:root {
  --pressy-color-accent: #6d28d9;
  --pressy-color-link: #7c3aed;
}

[data-theme='dark'] {
  --pressy-color-accent: #a78bfa;
  --pressy-color-link: #c4b5fd;
}

[data-theme='sepia'] {
  --pressy-color-accent: #92400e;
}
```

### Drop Caps

```css
:root {
  --pressy-dropcap-color: #8b5cf6;
  --pressy-dropcap-font-size: 4em;
}

[data-theme='dark'] {
  --pressy-dropcap-color: #a78bfa;
}
```

### Reading Layout

```css
:root {
  --pressy-prose-max-width: 70ch;   /* default: 65ch */
  --pressy-prose-padding: 2rem;     /* default: 1.5rem */
}
```

### All Available Tokens

Every token below can be prefixed with `--pressy-` and set in your `custom.css` to override the default. Scope overrides to `[data-theme="dark"]` or `[data-theme="sepia"]` for theme-specific values.

**Colors** — each theme provides its own defaults:

| Token | Light | Dark | Sepia | Purpose |
|---|---|---|---|---|
| `--pressy-color-bg` | `#ffffff` | `#1a1a1a` | `#f4ecd8` | Page background |
| `--pressy-color-bg-subtle` | `#f8f9fa` | `#242424` | `#ebe3cf` | Subtle background (table headers, hover states) |
| `--pressy-color-bg-muted` | `#e9ecef` | `#2d2d2d` | `#e2d9c5` | Muted background (buttons, inputs) |
| `--pressy-color-text` | `#212529` | `#e0e0e0` | `#433422` | Body text |
| `--pressy-color-text-muted` | `#6c757d` | `#a0a0a0` | `#6b5a47` | Secondary text |
| `--pressy-color-heading` | `#1a1a1a` | `#ffffff` | `#2d2418` | Heading text |
| `--pressy-color-accent` | `#212529` | `#e0e0e0` | `#433422` | Accent (progress bar, active borders, drop cap default) |
| `--pressy-color-link` | `#0066cc` | `#66b3ff` | `#8b4513` | Link text |
| `--pressy-color-link-hover` | `#004499` | `#99ccff` | `#a0522d` | Link hover |
| `--pressy-color-border` | `#dee2e6` | `#404040` | `#d4c9b5` | Borders and dividers |
| `--pressy-color-code-bg` | `#f1f3f5` | `#2d2d2d` | `#ebe3cf` | Inline code and code block background |
| `--pressy-color-success` | `#16a34a` | `#86efac` | `#15803d` | Success states (offline cached indicator) |
| `--pressy-color-danger` | `#dc2626` | `#fca5a5` | `#b91c1c` | Error/danger states (delete, offline, errors) |
| `--pressy-color-overlay` | `rgba(0,0,0,0.3)` | `rgba(0,0,0,0.5)` | `rgba(67,52,34,0.3)` | Modal/drawer backdrop |
| `--pressy-color-selection-bg` | `rgba(0,102,204,0.2)` | `rgba(102,179,255,0.3)` | `rgba(139,69,19,0.2)` | Text selection highlight |

**Shadows:**

| Token | Purpose |
|---|---|
| `--pressy-shadow-sm` | Subtle shadow (footer) |
| `--pressy-shadow-md` | Medium shadow (tooltips, menus) |
| `--pressy-shadow-lg` | Large shadow (drawers, modals) |

**Typography:**

| Token | Default | Purpose |
|---|---|---|
| `--pressy-font-body` | Georgia, 'Times New Roman', serif | Prose body font |
| `--pressy-font-heading` | system-ui, sans-serif | Heading and UI font |
| `--pressy-font-mono` | 'SF Mono', monospace | Code font |

**Prose layout:**

| Token | Default | Purpose |
|---|---|---|
| `--pressy-prose-max-width` | `65ch` | Maximum width of prose content |
| `--pressy-prose-padding` | `1.5rem` | Horizontal padding around prose |
| `--pressy-dropcap-color` | accent color | Drop cap letter color |
| `--pressy-dropcap-font-size` | `3.5em` | Drop cap letter size |

**Callout colors** (advanced — each theme has sensible defaults):

| Token | Purpose |
|---|---|
| `--pressy-callout-note-bg`, `--pressy-callout-note-border` | Note callout |
| `--pressy-callout-tip-bg`, `--pressy-callout-tip-border` | Tip callout |
| `--pressy-callout-warning-bg`, `--pressy-callout-warning-border` | Warning callout |
| `--pressy-callout-important-bg`, `--pressy-callout-important-border` | Important callout |

### Example: Complete Custom Theme

See `examples/flatland/theme/custom.css` for a full working example.

## License

MIT
