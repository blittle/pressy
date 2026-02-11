import { get, set, del } from 'idb-keyval'
import type { UnlockData } from './types.js'

const UNLOCKS_PREFIX = 'pressy-unlock-'

export async function unlockContent(
  bookSlug: string,
  data?: { orderId?: string; email?: string }
): Promise<void> {
  const unlockData: UnlockData = {
    bookSlug,
    orderId: data?.orderId,
    email: data?.email,
    unlockedAt: Date.now(),
  }

  // Store in IndexedDB
  await set(`${UNLOCKS_PREFIX}${bookSlug}`, unlockData)

  // Also store in localStorage for quick sync checks
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(`${UNLOCKS_PREFIX}${bookSlug}`, JSON.stringify(unlockData))
  }
}

export async function isContentUnlocked(bookSlug: string): Promise<boolean> {
  // Quick check localStorage first
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(`${UNLOCKS_PREFIX}${bookSlug}`)
    if (stored) return true
  }

  // Check IndexedDB
  try {
    const data = await get<UnlockData>(`${UNLOCKS_PREFIX}${bookSlug}`)
    return !!data
  } catch {
    return false
  }
}

export async function getUnlockData(bookSlug: string): Promise<UnlockData | null> {
  try {
    const data = await get<UnlockData>(`${UNLOCKS_PREFIX}${bookSlug}`)
    return data || null
  } catch {
    return null
  }
}

export async function revokeUnlock(bookSlug: string): Promise<void> {
  await del(`${UNLOCKS_PREFIX}${bookSlug}`)

  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(`${UNLOCKS_PREFIX}${bookSlug}`)
  }
}

export async function verifyPurchase(
  bookSlug: string,
  orderId: string
): Promise<boolean> {
  // In a production environment, this would verify with your backend
  // which would check with Shopify's API
  const unlockData = await getUnlockData(bookSlug)

  if (!unlockData) return false
  if (!unlockData.orderId) return false

  return unlockData.orderId === orderId
}

// Check URL params for checkout return and auto-unlock
export async function handleCheckoutReturn(): Promise<{
  unlocked: boolean
  bookSlug?: string
}> {
  if (typeof window === 'undefined') {
    return { unlocked: false }
  }

  const params = new URLSearchParams(window.location.search)
  const checkoutSuccess = params.get('checkout_success')
  const bookSlug = params.get('book')
  const orderId = params.get('order_id')

  if (checkoutSuccess === 'true' && bookSlug) {
    await unlockContent(bookSlug, { orderId: orderId || undefined })

    // Clean up URL params
    const url = new URL(window.location.href)
    url.searchParams.delete('checkout_success')
    url.searchParams.delete('book')
    url.searchParams.delete('order_id')
    window.history.replaceState({}, '', url.toString())

    return { unlocked: true, bookSlug }
  }

  return { unlocked: false }
}
