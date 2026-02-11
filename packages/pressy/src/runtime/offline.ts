import { signal } from '@preact/signals'

export const offlineStatus = signal<'online' | 'offline'>('online')
export const cacheProgress = signal<{ bookSlug: string; current: number; total: number } | null>(null)
export const cachedBooks = signal<Set<string>>(new Set())
export const swReady = signal<boolean>(false)

// Initialize offline detection
if (typeof window !== 'undefined') {
  offlineStatus.value = navigator.onLine ? 'online' : 'offline'

  window.addEventListener('online', () => {
    offlineStatus.value = 'online'
  })

  window.addEventListener('offline', () => {
    offlineStatus.value = 'offline'
  })
}

// Service Worker registration
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported')
    return null
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', handleSWMessage)

    // Mark SW as ready when controller is available
    if (navigator.serviceWorker.controller) {
      swReady.value = true
    } else {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        swReady.value = true
      })
    }

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing
      if (!newWorker) return

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'activated') {
          swReady.value = true
        }
      })
    })

    return registration
  } catch (err) {
    console.error('Service worker registration failed:', err)
    return null
  }
}

function handleSWMessage(event: MessageEvent) {
  const { type } = event.data

  if (type === 'CACHE_PROGRESS') {
    const { bookSlug, current, total } = event.data
    cacheProgress.value = { bookSlug, current, total }
  }

  if (type === 'CACHE_COMPLETE') {
    const { bookSlug } = event.data
    cacheProgress.value = null
    const newCached = new Set(cachedBooks.value)
    newCached.add(bookSlug)
    cachedBooks.value = newCached
  }

  if (type === 'CACHE_STATUS') {
    const { cached } = event.data as { cached: string[] }
    const newCached = new Set<string>()
    for (const url of cached) {
      const match = url.match(/\/books\/([^/]+)/)
      if (match) {
        newCached.add(match[1])
      }
    }
    cachedBooks.value = newCached
  }

  if (type === 'CACHE_CLEARED') {
    const { bookSlug } = event.data
    const newCached = new Set(cachedBooks.value)
    newCached.delete(bookSlug)
    cachedBooks.value = newCached
  }
}

// Download a book for offline reading
export async function downloadBookForOffline(
  bookSlug: string,
  chapterUrls: string[]
): Promise<boolean> {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    console.warn('Service worker not available')
    return false
  }

  // Build full URLs
  const urls = chapterUrls.map((url) =>
    url.startsWith('http') ? url : `${window.location.origin}${url}`
  )

  cacheProgress.value = { bookSlug, current: 0, total: urls.length }

  // Send message to service worker
  navigator.serviceWorker.controller.postMessage({
    type: 'CACHE_BOOK',
    bookSlug,
    urls,
  })

  return true
}

// Check if a book is available offline
export function isBookCached(bookSlug: string): boolean {
  return cachedBooks.value.has(bookSlug)
}

// Get cache status for URLs
export async function checkCacheStatus(urls: string[]): Promise<void> {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    return
  }

  navigator.serviceWorker.controller.postMessage({
    type: 'GET_CACHE_STATUS',
    urls: urls.map((url) =>
      url.startsWith('http') ? url : `${window.location.origin}${url}`
    ),
  })
}

// Clear cached book
export async function clearBookCache(bookSlug: string): Promise<boolean> {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    // Fallback to direct cache API
    try {
      const cache = await caches.open('pressy-offline-books')
      const keys = await cache.keys()

      for (const request of keys) {
        if (request.url.includes(`/books/${bookSlug}`)) {
          await cache.delete(request)
        }
      }

      const newCached = new Set(cachedBooks.value)
      newCached.delete(bookSlug)
      cachedBooks.value = newCached
      return true
    } catch (err) {
      console.error('Failed to clear cache:', err)
      return false
    }
  }

  // Prefer message-based approach so SW can coordinate
  navigator.serviceWorker.controller.postMessage({
    type: 'CLEAR_BOOK_CACHE',
    bookSlug,
  })
  return true
}
