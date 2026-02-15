# Book Pagination Research

## The Problem

Chapters as the unit of authorship work well. But dumping an entire chapter as a scrollable page is a poor reading experience — it's hard to find your place, there's no sense of progress within a chapter, and it doesn't feel like reading a book.

We need to automatically divide chapter content into pages. The key tensions:

1. **Screen sizes vary** — page 5 on a tablet is different content than page 5 on a phone
2. **Text scaling** — should we normalize text size to make pages consistent, or accept per-device variation?
3. **Automatic vs manual** — should the framework split pages, or should authors mark page breaks in MDX?

## How the Industry Does It

Every major web-based ebook reader (Kindle Cloud Reader, Google Play Books, Kobo, Apple Books) uses the same core technique: **CSS Multi-Column Layout**. This is the proven, battle-tested approach.

### CSS Multi-Column Pagination (Recommended)

The idea is simple:

1. Put chapter content in a container with `column-width` equal to the viewport width and a fixed `height` (100vh)
2. The browser automatically reflows content into horizontal columns — each column is one "page"
3. Set `overflow: hidden` to show only the current column
4. Navigate by shifting the visible area with `translateX()` or `scrollLeft`

```css
.chapter-content {
  column-width: 100vw;
  column-fill: auto;
  column-gap: 0;
  height: 100vh;
  overflow: hidden;
}
```

```js
// Calculate total pages
const totalPages = Math.ceil(el.scrollWidth / el.clientWidth)

// Navigate to page N
el.scrollLeft = pageNumber * el.clientWidth
```

**Who uses this:** Epub.js, Readium CSS (powers Kobo), Foliate-js, Kindle Cloud Reader, Apple Books.

**Pros:**
- The browser layout engine does the hard work of splitting content
- Good browser support (CSS Multi-Column works everywhere)
- Content reflows automatically — text, inline images, etc. flow naturally
- Industry standard, battle-tested

**Cons:**
- CSS fragmentation support is incomplete (`break-after: avoid` doesn't work in Safari/Firefox as of 2025)
- Large documents can cause layout performance issues
- Page numbers are inherently different per device

### Other Approaches Considered

| Approach | Verdict |
|----------|---------|
| **JavaScript DOM walking** — measure elements one-by-one, split when container overflows | More complex, 40% slower in Chrome/Firefox, but 6x faster in WebKit. Main advantage: can paginate async (show first page instantly). Worth considering as a fallback. |
| **CSS Scroll Snap** | Not a pagination mechanism on its own — it only handles the snapping/transition behavior. Best used *on top of* CSS columns for smooth page-turn feel. |
| **Text scaling (viewport units)** | Accessibility disaster. Locks users out of controlling font size. Even with perfect scaling, different rendering engines produce different layouts. Not viable. |
| **Author-defined page breaks only** | Not sufficient alone. Useful for "start chapter on new page" or "keep this figure together," but you still need automatic pagination for the content between breaks. |
| **Google Play Books approach** — split HTML into separate per-page documents | Over-engineered and fragile. Breaks CSS features like `::first-letter` drop caps because the DOM structure changes. |

## The Page Number Question

**Consistent page numbers across devices are impossible with reflowable content.** Every approach produces different page counts on different viewport/font-size combinations. The industry has accepted this:

| Strategy | Used By | Trade-off |
|----------|---------|-----------|
| **"Locations"** (~128 bytes each) | Kindle | Device-independent position, but abstract number |
| **Percentage progress** | Most readers | Simple, coarse, works everywhere |
| **Publisher page-list** (maps to print) | EPUB 3 | Requires publisher effort, position within "page" is approximate |
| **Per-device page numbers** | Kobo, Apple Books | Pages are per-chapter, numbers change with settings |

**Recommendation for Pressy:** Accept that page numbers differ per device. Show page numbers relative to the chapter (e.g., "Page 3 of 12") and use **word-count-based progress** for the overall book position. This is what most readers do and what users expect from digital books.

### Global Progress via Word Count

Page numbers are device-specific, but word counts are fixed at build time. This gives us an accurate, device-independent global progress indicator:

```
words_completed = sum of word counts for all finished chapters
words_in_current = (current_page / total_pages) × current_chapter_word_count
progress = (words_completed + words_in_current) / total_book_word_count
```

Someone on a phone and someone on a desktop both see "27% through the book" even though the phone shows "page 14 of 22" and the desktop shows "page 6 of 9" in the same chapter. This is how Kindle's "locations" and percentages work — character-count based, not page-based.

**UI:**
- **Per-chapter**: "Page 5 of 12" — device-specific, useful for local orientation within a chapter
- **Global**: thin progress bar or "27%" — word-count based, consistent everywhere

These serve different purposes: per-chapter tells you "how much is left in this section," global tells you "how much is left in the book."

## Seamless Chapter Transitions

### The Problem

Currently Pressy is an MPA — each chapter is a separate HTML page with its own JS bundle. Clicking "next chapter" triggers a full page reload. This is fine for a website but breaks the reading flow. In real reading apps (Kindle, Apple Books, Kobo), chapter boundaries are invisible — you just keep turning pages.

### Approach: Preload + Append (Forward), Prefetch + Navigate (Backward)

CSS column pagination makes forward transitions elegant. When you append more content to the column container, the browser creates more columns (pages). The reader never notices the chapter boundary.

#### Forward (turning past the last page of a chapter)

This is the common case — the reader just keeps swiping. It should be invisible.

1. When the reader reaches the last ~2 pages of a chapter, dynamically `import()` the next chapter's MDX module
2. Render it and append to the column container, with a chapter divider/title element between them
3. CSS columns recalculate — total pages increase, but the current page position doesn't shift
4. The reader keeps swiping and flows right into the next chapter's content

When the reader crosses a chapter boundary:
- Update the URL via `history.replaceState()` (no page reload)
- Update the chapter indicator in the UI
- Save reading progress for the completed chapter
- Start tracking progress in the new chapter

#### Backward (swiping back before page 1)

This is harder because CSS columns flow left-to-right — prepending content would shift everything. The pragmatic solution: **prefetch the previous chapter into the browser cache, then do a fast cached navigation.** It won't be perfectly seamless, but it's a rare path and a ~50ms cached page load is good enough. Apple Books has a similar brief pause going backward.

### Architecture Change: Dynamic Chapter Imports

The key change: chapter MDX modules need to be **dynamically importable**, not baked into per-route HTML pages.

```
Current:  Each route → separate HTML → separate JS bundle with MDX baked in
              chapter-1.html → chapter-1.js (includes MDX content)
              chapter-2.html → chapter-2.js (includes MDX content)

Proposed: Each route → shared reader shell → dynamically imports chapter content
              chapter-1.html → reader.js + import("./chapters/chapter-1.js")
                                          + preload("./chapters/chapter-2.js")
```

The Vite plugin would need to:
1. Generate chapter content as **code-split chunks** (dynamic `import()` targets)
2. Include a **chapter manifest** in the reader shell listing all chapter module paths
3. The reader shell handles pagination, chapter loading, and URL updates

This is a natural evolution — the reader becomes a lightweight SPA within the MPA. Each chapter's HTML page still works as a standalone entry point (good for SEO, direct links, offline), but once the reader is active, subsequent chapters load client-side.

### Chapter Transition Summary

| Direction | Behavior | Mechanism |
|-----------|----------|-----------|
| **Forward** | Seamless — reader doesn't notice | Preload + append next chapter to column container via dynamic `import()` |
| **Backward** | Near-instant — brief flash | Prefetch previous chapter HTML into cache, fast cached navigation |
| **URL** | Updates without reload | `history.replaceState()` as reader crosses chapter boundary |
| **Progress** | Per-chapter pages + global % | Page indicator updates; word-count progress bar is continuous |
| **Initial load** | MPA — each chapter URL works standalone | Direct links, SEO, offline all work |
| **Subsequent chapters** | SPA-like — no page reload | Dynamic `import()` of code-split chapter modules |

## Should Authors Define Page Breaks?

**No, not as the primary mechanism.** But authors should be able to provide *hints*:

### Automatic (framework handles it)
- The framework paginates chapter content using CSS columns
- This is invisible to the author — they just write their chapter content
- Handles all screen sizes automatically

### Author hints (optional)
Authors can use CSS break properties via MDX components or class names for specific cases:

- **`<PageBreak />`** — force a page break (rare, but useful for "Part II" title pages)
- **`break-inside: avoid`** on `<Figure>`, `<Callout>`, code blocks — keep them together on one page
- **Scene breaks (`<SceneBreak />`)** — natural break points where a page break is acceptable

These hints work *with* the automatic pagination, not instead of it. The framework should apply `break-inside: avoid` automatically to figures and code blocks by default.

## Recommended Implementation Plan

### Phase 1: Core CSS Column Pagination

Update the `Reader` component to support paginated mode:

1. **Paginated container** — Wrap chapter content in a container with CSS column layout
2. **Page counting** — After render, calculate `scrollWidth / clientWidth` = total pages
3. **Navigation** — Left/right swipe, arrow keys, tap edges to turn pages
4. **Page indicator** — "Page 3 of 12" at the bottom
5. **Progress bar** — thin bar showing position within chapter

Key implementation details:
- Use `ResizeObserver` to recalculate page count on viewport changes
- Debounce recalculation during resize
- Cache page count per chapter + viewport size in localStorage
- Apply `break-inside: avoid` to figures, code blocks, callouts, asides by default
- Use `column-gap` for margins between pages

### Phase 2: Reading Progress

1. **Save position** — Store current chapter + page in IndexedDB (already have `ReadingProgress` type)
2. **Restore position** — On chapter load, restore last page
3. **Chapter progress** — Show which chapters have been started/completed on the book page
4. **Overall progress** — Percentage through the book based on word counts

### Phase 3: Navigation & Transitions

1. **Smooth page turns** — CSS `transition` on `translateX` for page-turn animation
2. **Swipe gestures** — Touch event handling for mobile
3. **Keyboard navigation** — Left/Right arrow keys
4. **Tap zones** — Tap left/right third of screen to turn pages
5. **CSS Scroll Snap** — Optional enhancement for native-feeling swipe

### Phase 4: Seamless Chapter Transitions

Refactor from full-page chapter navigation to dynamic in-reader chapter loading.

1. **Code-split chapter modules** — Update Vite plugin to generate chapter content as dynamic `import()` targets instead of baking them into per-route JS bundles
2. **Chapter manifest** — Generate a manifest listing all chapter module paths, embedded in the reader shell
3. **Forward preloading** — When reader is ~2 pages from end of chapter, dynamically import the next chapter's MDX module and append its rendered content to the column container
4. **Chapter boundary handling** — Update URL via `history.replaceState()`, update chapter indicator, save progress for completed chapter
5. **Backward navigation** — Prefetch previous chapter HTML into browser cache; on swipe-back past page 1, do a fast cached navigation
6. **Global progress bar** — Word-count-based progress across the entire book (device-independent), shown alongside per-chapter page numbers

### Phase 5: Polish

1. **`<PageBreak />` component** — For author-defined forced breaks
2. **Spread mode** — Two-column layout on wide screens (like an open book)
3. **Reading mode toggle** — Let users switch between paginated and scroll mode
4. **Font size adjustment** — Let users change font size (recalculates pages)

## What This Means for the Current Codebase

The config already has `pagination.defaultMode: 'scroll' | 'paginated'` and the Flatland example sets `defaultMode: 'paginated'`. The `ReadingProgress` type already has a `page` field. The scaffolding is there — the actual pagination rendering in the `Reader` component needs to be built.

Key files to modify:
- `packages/@pressy/components/src/Reader.tsx` — add paginated mode with CSS columns
- `packages/@pressy/typography/src/prose.css` — add break rules for content elements
- `packages/pressy/src/runtime/client.tsx` — wire up page navigation, save/restore progress, chapter preloading, `replaceState` URL updates
- `packages/@pressy/components/src/content/` — add `PageBreak` component
- `packages/pressy/src/vite/plugin.ts` — refactor to generate code-split chapter modules and a chapter manifest (Phase 4)
- `packages/@pressy/components/src/Navigation.tsx` — replace prev/next links with in-reader chapter loading trigger (Phase 4)
- `packages/pressy/src/runtime/sw.ts` — update offline caching strategy to cache chapter modules in addition to full HTML pages (Phase 4)

No changes needed to the chapter/content data model. Chapters remain the authoring unit; pages are a rendering concern. The Vite plugin changes (Phase 4) affect how chapter content is bundled and loaded at runtime, but the source format stays the same.
