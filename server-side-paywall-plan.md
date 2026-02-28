# Server-Side Paywall with Cloudflare Workers

## Context

PR #21 implements a client-side paywall using localStorage — trivially bypassable via DevTools. This plan replaces it with server-side enforcement using Cloudflare Pages Functions as middleware. Chapter HTML is never sent to unauthorized users. Payment verification happens server-to-server via Stripe webhooks, not client-side URL params.

The site stays fully static. A thin Cloudflare middleware intercepts requests, checks auth cookies, and blocks paid chapters before the static asset is served.

---

## Architecture Overview

```
User Request → Cloudflare Pages Function (_middleware.ts)
  ├─ /api/* routes       → Stripe checkout, webhook, auth callback
  ├─ Free chapter HTML   → Pass through to static assets
  ├─ Paid chapter + cookie valid → Pass through
  └─ Paid chapter + no cookie   → 302 redirect to /books/{slug}/?purchase=true
```

**Payment flow:**
1. User clicks "Purchase" on book page → `GET /api/checkout?book=SLUG`
2. Worker creates Stripe Checkout Session → redirects to Stripe
3. User pays → Stripe webhook `POST /api/stripe-webhook` → records purchase in KV
4. Stripe redirects user to `GET /api/auth/callback?session_id=xxx`
5. Worker verifies session with Stripe API, sets signed HttpOnly cookie
6. User redirected to first paid chapter

---

## Implementation Steps

### Step 1: Extend paywall types in pressy core

**File:** `packages/pressy/src/types.ts`

Add `price` (display string) and `stripeProductId` (Stripe Price ID) to `BookMetadata.paywall`. Add `'stripe'` to the `mode` union.

### Step 2: Emit `_pressy/manifest.json` during build

**File:** `packages/pressy/src/vite/plugin.ts` — in `pressy:build` plugin's `generateBundle` hook (line ~630)

After the existing `routeChunks` map is built, construct and emit a manifest:

```json
{
  "books": [{
    "slug": "moby-dick",
    "paywall": { "enabled": true, "previewChapters": 3, "price": "$9.99", "stripeProductId": "price_xxx" },
    "chapters": [
      { "slug": "preface", "order": 0 },
      { "slug": "loomings", "order": 1 }
    ]
  }]
}
```

Emit via `this.emitFile({ type: 'asset', fileName: '_pressy/manifest.json', source: ... })`.

### Step 3: Add purchase CTA to book landing page

**File:** `packages/pressy/src/runtime/client.tsx` — `renderBookPage()` function

When `book.metadata.paywall?.enabled` and `book.metadata.paywall?.price`, render a purchase link:
```html
<a href="/api/checkout?book={slug}" class="pressy-cta pressy-cta-secondary">
  Purchase — {price}
</a>
```

When `?purchase=true` is in the URL (user was redirected from a blocked chapter), show the purchase prompt more prominently.

### Step 4: Create `@pressy-pub/cloudflare` package

**New directory:** `packages/@pressy/cloudflare/`

Follow the `@pressy-pub/shopify` pattern (tsup, ESM, same structure).

```
packages/@pressy/cloudflare/
├── package.json          # deps: stripe
├── tsconfig.json
├── tsup.config.ts
└── src/
    ├── index.ts          # Exports: createPressyMiddleware, route handlers
    ├── middleware.ts      # Core middleware: manifest loading, URL matching, cookie check
    ├── auth.ts           # HMAC-SHA256 cookie signing/verification (Web Crypto API)
    ├── stripe.ts         # Stripe Checkout Session + webhook verification
    └── types.ts          # Env bindings, manifest types
```

**Key middleware logic** (`middleware.ts`):
1. Load `_pressy/manifest.json` via `context.env.ASSETS.fetch()` (cached in module scope)
2. Route `/api/*` requests to appropriate handlers
3. For chapter URLs matching `/books/{bookSlug}/{chapterSlug}/`:
   - Look up book in manifest
   - If chapter order >= previewChapters and no valid `pressy-auth-{bookSlug}` cookie → redirect 302
   - Otherwise → `context.next()` (serve static asset)
4. All other requests → pass through

**Cookie auth** (`auth.ts`):
- Format: `pressy-auth-{bookSlug}=base64url(payload).base64url(hmac)`
- Payload: `{ book, email, purchasedAt, sessionId }`
- Signed with `COOKIE_SECRET` env var via `crypto.subtle` HMAC-SHA256
- Attributes: `HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=31536000`

**Stripe routes:**
- `GET /api/checkout?book=SLUG` — Create Checkout Session, redirect to Stripe
- `POST /api/stripe-webhook` — Verify signature, record purchase in KV
- `GET /api/auth/callback?session_id=xxx` — Verify session paid, set cookie, redirect to book
- `GET /api/auth/status?book=SLUG` — Return `{ authorized: bool }` (for client-side Reader)

### Step 5: Client-side paywall gate for Reader navigation

**File:** `packages/pressy/src/runtime/client.tsx` — `ChapterReaderWithProgress`

On mount, if `paywall.enabled`, call `fetch('/api/auth/status?book=SLUG')` to check authorization. Pass the result to the Reader.

**File:** `packages/@pressy/components/src/reader/PaginatedReader.tsx` — preload effect (line ~464)

Before calling `loader()` for the next chapter, check if it's beyond `previewChapters` and user is unauthorized. If blocked, show a paywall overlay instead of loading content. The existing `.catch()` on line 507 already handles failed dynamic imports gracefully.

**Note on JS bundle blocking:** v1 does NOT block JS asset bundles server-side. Compiled JSX in chapter bundles is not human-readable prose. The server blocks HTML pages; the client blocks Reader navigation. This is sufficient for casual users. JS bundle blocking can be added in v2 using the manifest's chapter-to-asset mapping.

### Step 6: Service worker & offline paywall awareness

The current SW and offline features assume all chapters are freely accessible. With a server-side paywall, several things break and need fixing.

**Problems:**
- Precache manifest (`plugin.ts:792-827`) lists ALL chapter HTML — paid chapters return 302 from the middleware, so Workbox silently skips them (non-200), but the entries shouldn't be there at all
- `appinstalled` handler (`client.tsx:833-840`) auto-downloads ALL chapters for ALL books — paid chapter fetches get blocked
- "Download for Offline" sends ALL chapter URLs via `CACHE_BOOK` postMessage — same issue
- After purchase, nothing triggers re-caching of now-accessible paid chapters
- If the SW somehow cached a redirect response, it would serve that stale response forever

**Changes needed:**

#### 6a. Exclude paid chapters from precache manifest

**File:** `packages/pressy/src/vite/plugin.ts` — precache manifest construction (~line 792)

When iterating routes to build `precacheEntries`, skip chapter routes where `chapter.order >= book.paywall.previewChapters`. This prevents the SW install from even trying to fetch paid chapter URLs.

```
for (const route of routes) {
  // Skip paid chapter HTML from precache
  if (route.type === 'chapter' && route.book?.metadata.paywall?.enabled) {
    const chapterIdx = route.book.chapters.findIndex(c => c.slug === route.content?.slug)
    if (chapterIdx >= (route.book.metadata.paywall.previewChapters || 0)) continue
  }
  // ... existing precache entry logic
}
```

#### 6b. Make offline download paywall-aware

**File:** `packages/pressy/src/runtime/client.tsx`

Modify `offlineProps.chapterUrls` passed to the Reader — only include free chapters when the user hasn't purchased:

```
chapterUrls: book.chapters
  .filter((ch, i) => !book.metadata.paywall?.enabled || isAuthorized || i < (book.metadata.paywall?.previewChapters || 0))
  .map(ch => `${basePath}/books/${book.slug}/${ch.slug}`)
```

Modify the `appinstalled` handler similarly — only auto-cache free chapters for paywalled books.

#### 6c. Post-purchase cache refresh

**File:** `packages/pressy/src/runtime/client.tsx`

After the auth callback redirects the user back and the client detects authorization (via `/api/auth/status`), trigger a SW cache update for the newly accessible chapters:

1. Client calls `navigator.serviceWorker.controller.postMessage({ type: 'CACHE_BOOK', bookSlug, urls: paidChapterUrls })`
2. The SW's existing `CACHE_BOOK` handler fetches these URLs — now the auth cookie is present, so the middleware serves the real HTML
3. Update `cachedBooks` signal so the UI reflects the new state

This can be a new helper `refreshBookCache(bookSlug, allChapterUrls)` called when `isAuthorized` transitions from false to true.

#### 6d. SW: validate cached responses

**File:** `packages/pressy/src/runtime/sw.ts` — `CACHE_BOOK` handler (~line 123)

The existing handler already checks `response.ok` before calling `cache.put()`, so redirect responses (302) won't be cached. No change needed here, but add a safety check: if a cached response for a chapter URL is a redirect or non-HTML content type, evict it.

Add to the book cache routing (~line 55):
```
const cached = await bookCache.match(params.request)
if (cached) {
  // Don't serve stale paywall redirects
  if (cached.status !== 200) { bookCache.delete(params.request); }
  else { return cached; }
}
```

#### 6e. Include paywall metadata in SW precache context

The `_pressy/manifest.json` should also be precached so the SW itself can reference paywall rules if needed for future cache validation logic. Add it to the precache entries alongside `offline.html`.

### Step 7: KV storage

**Namespace:** `PRESSY_KV` (created via `wrangler kv:namespace create PRESSY_KV`)

| Key | Value | TTL |
|---|---|---|
| `purchase:{email}:{bookSlug}` | `{ sessionId, email, bookSlug, amount, purchasedAt }` | 5 years |

Also support a "recover purchase" flow: user enters email → look up KV → re-issue cookie.

### Step 8: Author project setup

Author adds to their book project:

**`functions/_middleware.ts`** (2 lines):
```ts
import { createPressyMiddleware } from '@pressy-pub/cloudflare'
export const onRequest = createPressyMiddleware()
```

**`wrangler.toml`**:
```toml
name = "my-book"
compatibility_date = "2024-01-01"

[[kv_namespaces]]
binding = "PRESSY_KV"
id = "xxx"
```

**Secrets** (set via `wrangler secret put`): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `COOKIE_SECRET`

**`_book.yaml`**:
```yaml
paywall:
  enabled: true
  previewChapters: 3
  price: "$9.99"
  stripeProductId: price_xxx
```

**Deploy:** `pressy build && wrangler pages deploy dist`

---

## Testing

1. **Unit tests** (Vitest): Cookie signing/verification round-trip, URL matching regex, manifest parsing, free vs paid chapter determination
2. **Build manifest test**: Extend `tests/build.test.ts` — verify `dist/_pressy/manifest.json` exists with correct structure after build
3. **Integration tests** (Miniflare): Full middleware flow with mock Stripe API — free chapters pass through, paid chapters blocked, cookies work
4. **E2E** (Playwright + Miniflare): Purchase flow end-to-end, client-side Reader paywall gate at chapter boundary

---

## Key Files to Modify

- `packages/pressy/src/types.ts` — Add `price`, `stripeProductId` to paywall type
- `packages/pressy/src/vite/plugin.ts` — Emit `_pressy/manifest.json` in `generateBundle` (~line 630)
- `packages/pressy/src/runtime/client.tsx` — Purchase CTA on book page, auth status check in ChapterReaderWithProgress
- `packages/@pressy/components/src/reader/PaginatedReader.tsx` — Paywall gate in preload effect (~line 464)
- `packages/pressy/src/runtime/sw.ts` — Validate cached responses aren't stale redirects (~line 55)
- `packages/pressy/src/runtime/offline.ts` — No code changes, but `chapterUrls` input changes
- `packages/@pressy/cloudflare/` — New package (all files)
