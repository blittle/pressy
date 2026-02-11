/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute, NavigationRoute, Route } from 'workbox-routing'
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare const self: ServiceWorkerGlobalScope

const OFFLINE_CACHE = 'pressy-offline'
const OFFLINE_URL = '/offline.html'
const BOOK_CACHE = 'pressy-offline-books'

// Precache all static assets (injected by build tool)
precacheAndRoute(self.__WB_MANIFEST)

// Clean up old caches
cleanupOutdatedCaches()

// Cache the offline fallback page on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then((cache) => cache.add(OFFLINE_URL))
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// Navigation: NetworkFirst with offline fallback
const navigationHandler = new NetworkFirst({
  cacheName: 'pressy-pages',
  networkTimeoutSeconds: 3,
})

registerRoute(
  new NavigationRoute(async (params) => {
    try {
      return await navigationHandler.handle(params)
    } catch {
      // Network failed and not in cache — serve offline fallback
      const cache = await caches.open(OFFLINE_CACHE)
      const fallback = await cache.match(OFFLINE_URL)
      return fallback || Response.error()
    }
  })
)

// Offline-cached book chapters: try the book cache first,
// then fall through to the normal navigation handler
registerRoute(
  new Route(
    ({ request, url }) =>
      request.mode === 'navigate' && url.pathname.match(/^\/books\/[^/]+\/[^/]+/),
    async (params) => {
      // Check offline book cache first
      const bookCache = await caches.open(BOOK_CACHE)
      const cached = await bookCache.match(params.request)
      if (cached) return cached

      // Fall through to network
      try {
        return await navigationHandler.handle(params)
      } catch {
        const cache = await caches.open(OFFLINE_CACHE)
        const fallback = await cache.match(OFFLINE_URL)
        return fallback || Response.error()
      }
    }
  )
)

// Cache images with CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'pressy-images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
      }),
    ],
  })
)

// Cache fonts with CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'pressy-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
      }),
    ],
  })
)

// Cache CSS and JS with StaleWhileRevalidate
registerRoute(
  ({ request }) =>
    request.destination === 'style' || request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'pressy-static',
  })
)

// Message handler for manual cache operations
self.addEventListener('message', async (event) => {
  if (event.data?.type === 'CACHE_BOOK') {
    const { bookSlug, urls } = event.data
    const cache = await caches.open(BOOK_CACHE)
    let completed = 0

    for (const url of urls) {
      try {
        const response = await fetch(url)
        if (response.ok) {
          await cache.put(url, response)
        }
      } catch (err) {
        console.error(`Failed to cache ${url}:`, err)
      }

      completed++
      // Report progress back to client
      event.source?.postMessage({
        type: 'CACHE_PROGRESS',
        bookSlug,
        current: completed,
        total: urls.length,
      })
    }

    // Notify client that caching is complete
    event.source?.postMessage({ type: 'CACHE_COMPLETE', bookSlug, urls })
  }

  if (event.data?.type === 'GET_CACHE_STATUS') {
    const { urls } = event.data
    const cache = await caches.open(BOOK_CACHE)
    const cached: string[] = []

    for (const url of urls) {
      const response = await cache.match(url)
      if (response) {
        cached.push(url)
      }
    }

    event.source?.postMessage({ type: 'CACHE_STATUS', cached })
  }

  if (event.data?.type === 'CLEAR_BOOK_CACHE') {
    const { bookSlug } = event.data
    const cache = await caches.open(BOOK_CACHE)
    const keys = await cache.keys()

    for (const request of keys) {
      if (request.url.includes(`/books/${bookSlug}`)) {
        await cache.delete(request)
      }
    }

    event.source?.postMessage({ type: 'CACHE_CLEARED', bookSlug })
  }

  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
