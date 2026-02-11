/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

declare const self: ServiceWorkerGlobalScope

// Precache all static assets (injected by Vite plugin)
precacheAndRoute(self.__WB_MANIFEST)

// Clean up old caches
cleanupOutdatedCaches()

// Cache navigation requests with NetworkFirst strategy
registerRoute(
  new NavigationRoute(
    new NetworkFirst({
      cacheName: 'pressy-pages',
      networkTimeoutSeconds: 3,
    })
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

// Handle offline fallback
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

// Message handler for manual cache operations
self.addEventListener('message', async (event) => {
  if (event.data?.type === 'CACHE_BOOK') {
    const { urls } = event.data
    const cache = await caches.open('pressy-offline-books')

    for (const url of urls) {
      try {
        const response = await fetch(url)
        if (response.ok) {
          await cache.put(url, response)
        }
      } catch (err) {
        console.error(`Failed to cache ${url}:`, err)
      }
    }

    // Notify client that caching is complete
    event.source?.postMessage({ type: 'CACHE_COMPLETE', urls })
  }

  if (event.data?.type === 'GET_CACHE_STATUS') {
    const { urls } = event.data
    const cache = await caches.open('pressy-offline-books')
    const cached: string[] = []

    for (const url of urls) {
      const response = await cache.match(url)
      if (response) {
        cached.push(url)
      }
    }

    event.source?.postMessage({ type: 'CACHE_STATUS', cached })
  }
})
