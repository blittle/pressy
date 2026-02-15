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

**Recommendation for Pressy:** Accept that page numbers differ per device. Show page numbers relative to the chapter (e.g., "Page 3 of 12") and use **percentage-based progress** for the overall book position. This is what most readers do and what users expect from digital books.

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

### Phase 4: Polish

1. **`<PageBreak />` component** — For author-defined forced breaks
2. **Spread mode** — Two-column layout on wide screens (like an open book)
3. **Reading mode toggle** — Let users switch between paginated and scroll mode
4. **Font size adjustment** — Let users change font size (recalculates pages)

## What This Means for the Current Codebase

The config already has `pagination.defaultMode: 'scroll' | 'paginated'` and the Flatland example sets `defaultMode: 'paginated'`. The `ReadingProgress` type already has a `page` field. The scaffolding is there — the actual pagination rendering in the `Reader` component needs to be built.

Key files to modify:
- `packages/@pressy/components/src/Reader.tsx` — add paginated mode with CSS columns
- `packages/@pressy/typography/src/prose.css` — add break rules for content elements
- `packages/pressy/src/runtime/client.tsx` — wire up page navigation, save/restore progress
- `packages/@pressy/components/src/content/` — add `PageBreak` component

No changes needed to the chapter/content data model. Chapters remain the authoring unit; pages are a rendering concern.
