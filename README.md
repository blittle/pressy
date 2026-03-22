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
- **Paywall** — optional gating via Stripe or email unlock
- **Static output** — builds to static HTML, deploy anywhere

## Install

```bash
npm install pressy @pressy-pub/components @pressy-pub/typography
```

| Package                                                                          | Description                                        |
| -------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`pressy`](https://www.npmjs.com/package/pressy)                                 | Core framework — Vite plugin, CLI, client runtime  |
| [`@pressy-pub/components`](https://www.npmjs.com/package/@pressy-pub/components) | Preact UI — Reader, Navigation, BookProgress, etc. |
| [`@pressy-pub/typography`](https://www.npmjs.com/package/@pressy-pub/typography) | CSS — prose styles, fluid type scale, themes |
| [`@pressy-pub/cloudflare`](https://www.npmjs.com/package/@pressy-pub/cloudflare) | Optional Cloudflare Workers middleware for server-side paywall |

## Quick Start

```bash
mkdir my-book && cd my-book
npm init -y
npm install pressy @pressy-pub/components @pressy-pub/typography
npx pressy init --title "My Book" --author "Your Name"
npx pressy dev
```

Or clone the repo and run an example:

```bash
git clone https://github.com/blittle/pressy.git && cd pressy
pnpm install
pnpm dev:flatland
```

## Project Structure

```
packages/
  pressy/                  # Core framework — Vite plugin, CLI, client runtime
  @pressy/components/      # @pressy-pub/components — Preact UI (Reader, Navigation, etc.)
  @pressy/typography/      # @pressy-pub/typography — CSS prose styles, fluid type, themes
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
import { defineConfig } from "pressy";

export default defineConfig({
  site: {
    title: "My Book",
    url: "https://mybook.example.com",
    author: "Your Name",
  },
  book: {
    slug: "my-book",
    title: "My Book",
    author: "Your Name",
    description: "A brief description",
    cover: "cover.jpg",        // optional, auto-detected if named cover.{jpg,png,svg}
    publishDate: "2025-01-15", // optional
    isbn: "978-0-000000-00-0", // optional
    language: "en",            // optional
  },
  pagination: {
    defaultMode: "paginated",
  },
});
```

To gate chapters behind a paywall, add a `paywall` block to the `book` config:

```ts
book: {
  slug: "my-book",
  title: "My Book",
  author: "Your Name",
  description: "A brief description",
  paywall: {
    enabled: true,
    previewChapters: 3,        // free chapters before the gate
    mode: "email",             // 'email' or 'stripe'
    // stripePriceId: "",      // required for mode: stripe
    // price: "$9.99",         // displayed to the reader
  },
},
```

### 3. Add content

```
content/
  books/
    my-book/
      cover.jpg            # Cover image (jpg, png, or svg)
      01-chapter-one.mdx  # Chapters (ordered by filename)
      02-chapter-two.mdx
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

# Export EPUB (all books)
npx pressy export-epub

# Export a specific book
npx pressy export-epub --book my-book
```

EPUB files are written to `<outDir>/epub/<slug>.epub` (default: `dist/epub/`). Use `--outDir` to override the output directory.

## Configuration

| Option | Description |
|---|---|
| `site.title` | Site/book title |
| `site.url` | Production URL |
| `site.description` | Site description (used in meta tags) |
| `site.author` | Author name |
| `site.language` | Language code (default: `"en"`) |
| `book` | Shorthand for a single book (equivalent to `books: [book]`) |
| `books` | Array of book configs — use when your project contains multiple books |
| `book.slug` / `books[].slug` | Directory name under `content/books/` |
| `book.title` | Book title |
| `book.author` | Book author |
| `book.description` | Book description |
| `book.cover` | Cover image filename (auto-detected if named `cover.{jpg,png,svg}`) |
| `book.publishDate` | Publication date |
| `book.isbn` | ISBN |
| `book.language` | Book language code |
| `book.paywall` | Paywall configuration (see above) |
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
| `components` | Path to a module exporting custom MDX components (object or function) |
| `outDir` | Build output directory (default: `"dist"`) |
| `contentDir` | Content directory (default: `"content"`) |
| `hooks` | Lifecycle hooks — `onBuildStart`, `onContentReady`, `onChapterProcessed`, `onBuildEnd` (reserved for future use) |

## MDX Components

| Component | Props | Description |
|---|---|---|
| `<Aside>` | `title?` | Sidebar/margin note. Floats right on wide screens. |
| `<Footnote>` | `id` | Inline footnote with popup tooltip. |
| `<Callout>` | `type?` `title?` | Highlighted block. Types: `note`, `tip`, `warning`, `important`. |
| `<Figure>` | `src` `alt?` `caption?` `wide?` | Image with caption. `wide` extends past prose width on large screens. |
| `<SceneBreak>` | `variant?` | Scene/section divider. Variants: `asterisks` (default), `line`, `ornament`. |

## Custom Components

You can add your own components or override the built-in ones. There are two approaches.

### Via config (recommended)

Point `components` in your config to a module that exports custom components:

```ts
// pressy.config.ts
export default defineConfig({
  site: { title: 'My Book', url: 'https://example.com' },
  components: './src/components.tsx',
})
```

The module can default-export either an **object** or a **function**:

```tsx
// src/components.tsx — object form (adds/overrides)
export default {
  // Brand-new component, usable as <VideoEmbed url="..." /> in MDX
  VideoEmbed: ({ url }: { url: string }) => (
    <iframe src={url} allowFullScreen style={{ width: '100%', aspectRatio: '16/9' }} />
  ),
  // Override how <a> tags render
  a: ({ href, children }: any) => (
    <a href={href} target="_blank" rel="noopener">{children}</a>
  ),
}
```

```tsx
// src/components.tsx — function form (wrap defaults)
import type { MDXComponents } from '@pressy-pub/components/content'

export default (defaults: MDXComponents) => ({
  Figure: (props: any) => (
    <div class="my-figure-wrapper">
      {defaults.Figure(props)}
    </div>
  ),
})
```

### Via runtime API

Call `setMDXComponents` before `hydrate()` in your entry point:

```ts
import { setMDXComponents } from '@pressy-pub/components/content'

setMDXComponents({
  Banner: ({ children }) => <div class="banner">{children}</div>,
})
```

| Function | Description |
|---|---|
| `setMDXComponents(components, options?)` | Register custom components. Merges by default; pass `{ merge: false }` to replace. |
| `resetMDXComponents()` | Remove all custom overrides, revert to defaults. |
| `useMDXComponents()` | Get the merged component map (defaults + custom). |
| `getDefaultMDXComponents()` | Get only the built-in defaults (unaffected by overrides). |

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
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap");

:root {
  --pressy-font-body: "Crimson Pro", Georgia, "Times New Roman", serif;
  --pressy-font-heading: "My Heading Font", system-ui, sans-serif;
  --pressy-font-mono: "Fira Code", monospace;
}
```

### Brand Colors

Override colors globally or per-theme. Values set on `:root` apply to all themes unless a more specific selector overrides them:

```css
:root {
  --pressy-color-accent: #6d28d9;
  --pressy-color-link: #7c3aed;
}

[data-theme="dark"] {
  --pressy-color-accent: #a78bfa;
  --pressy-color-link: #c4b5fd;
}

[data-theme="sepia"] {
  --pressy-color-accent: #92400e;
}
```

### Drop Caps

```css
:root {
  --pressy-dropcap-color: #8b5cf6;
  --pressy-dropcap-font-size: 4em;
}

[data-theme="dark"] {
  --pressy-dropcap-color: #a78bfa;
}
```

### Reading Layout

```css
:root {
  --pressy-prose-max-width: 70ch; /* default: 65ch */
  --pressy-prose-padding: 2rem; /* default: 1.5rem */
}
```

### All Available Tokens

Every token below can be prefixed with `--pressy-` and set in your `custom.css` to override the default. Scope overrides to `[data-theme="dark"]` or `[data-theme="sepia"]` for theme-specific values.

**Colors** — each theme provides its own defaults:

| Token                         | Light                 | Dark                    | Sepia                 | Purpose                                                 |
| ----------------------------- | --------------------- | ----------------------- | --------------------- | ------------------------------------------------------- |
| `--pressy-color-bg`           | `#ffffff`             | `#1a1a1a`               | `#f4ecd8`             | Page background                                         |
| `--pressy-color-bg-subtle`    | `#f8f9fa`             | `#242424`               | `#ebe3cf`             | Subtle background (table headers, hover states)         |
| `--pressy-color-bg-muted`     | `#e9ecef`             | `#2d2d2d`               | `#e2d9c5`             | Muted background (buttons, inputs)                      |
| `--pressy-color-text`         | `#212529`             | `#e0e0e0`               | `#433422`             | Body text                                               |
| `--pressy-color-text-muted`   | `#6c757d`             | `#a0a0a0`               | `#6b5a47`             | Secondary text                                          |
| `--pressy-color-heading`      | `#1a1a1a`             | `#ffffff`               | `#2d2418`             | Heading text                                            |
| `--pressy-color-accent`       | `#212529`             | `#e0e0e0`               | `#433422`             | Accent (progress bar, active borders, drop cap default) |
| `--pressy-color-link`         | `#0066cc`             | `#66b3ff`               | `#8b4513`             | Link text                                               |
| `--pressy-color-link-hover`   | `#004499`             | `#99ccff`               | `#a0522d`             | Link hover                                              |
| `--pressy-color-border`       | `#dee2e6`             | `#404040`               | `#d4c9b5`             | Borders and dividers                                    |
| `--pressy-color-code-bg`      | `#f1f3f5`             | `#2d2d2d`               | `#ebe3cf`             | Inline code and code block background                   |
| `--pressy-color-success`      | `#16a34a`             | `#86efac`               | `#15803d`             | Success states (offline cached indicator)               |
| `--pressy-color-danger`       | `#dc2626`             | `#fca5a5`               | `#b91c1c`             | Error/danger states (delete, offline, errors)           |
| `--pressy-color-overlay`      | `rgba(0,0,0,0.3)`     | `rgba(0,0,0,0.5)`       | `rgba(67,52,34,0.3)`  | Modal/drawer backdrop                                   |
| `--pressy-color-selection-bg` | `rgba(0,102,204,0.2)` | `rgba(102,179,255,0.3)` | `rgba(139,69,19,0.2)` | Text selection highlight                                |

**Shadows:**

| Token                | Purpose                         |
| -------------------- | ------------------------------- |
| `--pressy-shadow-sm` | Subtle shadow (footer)          |
| `--pressy-shadow-md` | Medium shadow (tooltips, menus) |
| `--pressy-shadow-lg` | Large shadow (drawers, modals)  |

**Typography:**

| Token                   | Default                           | Purpose             |
| ----------------------- | --------------------------------- | ------------------- |
| `--pressy-font-body`    | Georgia, 'Times New Roman', serif | Prose body font     |
| `--pressy-font-heading` | system-ui, sans-serif             | Heading and UI font |
| `--pressy-font-mono`    | 'SF Mono', monospace              | Code font           |

**Prose layout:**

| Token                        | Default      | Purpose                         |
| ---------------------------- | ------------ | ------------------------------- |
| `--pressy-prose-max-width`   | `65ch`       | Maximum width of prose content  |
| `--pressy-prose-padding`     | `1.5rem`     | Horizontal padding around prose |
| `--pressy-dropcap-color`     | accent color | Drop cap letter color           |
| `--pressy-dropcap-font-size` | `3.5em`      | Drop cap letter size            |

**Callout colors** (advanced — each theme has sensible defaults):

| Token                                                                | Purpose           |
| -------------------------------------------------------------------- | ----------------- |
| `--pressy-callout-note-bg`, `--pressy-callout-note-border`           | Note callout      |
| `--pressy-callout-tip-bg`, `--pressy-callout-tip-border`             | Tip callout       |
| `--pressy-callout-warning-bg`, `--pressy-callout-warning-border`     | Warning callout   |
| `--pressy-callout-important-bg`, `--pressy-callout-important-border` | Important callout |

### Example: Complete Custom Theme

See `examples/flatland/theme/custom.css` for a full working example.

## License

MIT
