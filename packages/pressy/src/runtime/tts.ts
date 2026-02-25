import { signal } from '@preact/signals'
import { render, type ComponentType, h } from 'preact'

// ── Signals ─────────────────────────────────────────────────

export const ttsSupported = signal<boolean>(false)
export const ttsPlaying = signal<boolean>(false)
export const ttsChapterSlug = signal<string>('')
export const ttsParagraphIndex = signal<number>(0)
export const ttsTotalParagraphs = signal<number>(0)
export const ttsRate = signal<number>(1.0)
export const ttsChapterIndex = signal<number>(0)

// ── Persistence keys ────────────────────────────────────────

const RATE_KEY = 'pressy-tts-rate'
const POSITION_KEY = 'pressy-tts-position'

// ── Module-level state ──────────────────────────────────────

let currentBookSlug = ''
let currentAllChapters: Array<{ slug: string; title: string }> = []
let currentChapterMap: Record<string, () => Promise<{ default: ComponentType<{ components?: Record<string, unknown> }> }>> = {}
let currentMdxComponents: Record<string, unknown> = {}
let currentChunks: string[] = []
let stopping = false
let keepAliveInterval: ReturnType<typeof setInterval> | null = null

// ── Init ────────────────────────────────────────────────────

export function initTTS(): void {
  ttsSupported.value = typeof window !== 'undefined' && 'speechSynthesis' in window

  if (!ttsSupported.value) return

  // Restore rate preference
  try {
    const savedRate = localStorage.getItem(RATE_KEY)
    if (savedRate) {
      const rate = parseFloat(savedRate)
      if (!isNaN(rate) && rate >= 0.5 && rate <= 2.0) {
        ttsRate.value = rate
      }
    }
  } catch {}

  // Clean up speech on page unload
  window.addEventListener('beforeunload', () => {
    if (ttsPlaying.value) {
      saveListeningPosition()
      speechSynthesis.cancel()
    }
  })

  // Pause/resume on visibility change
  document.addEventListener('visibilitychange', () => {
    if (!ttsPlaying.value) return
    if (document.hidden) {
      // Save position in case we get killed in background
      saveListeningPosition()
    }
  })
}

// ── Persistence ─────────────────────────────────────────────

function saveListeningPosition(): void {
  if (!currentBookSlug || !ttsChapterSlug.value) return
  try {
    localStorage.setItem(POSITION_KEY, JSON.stringify({
      bookSlug: currentBookSlug,
      chapterSlug: ttsChapterSlug.value,
      paragraphIndex: ttsParagraphIndex.value,
    }))
  } catch {}
}

export function getListeningPosition(): { bookSlug: string; chapterSlug: string; paragraphIndex: number } | null {
  try {
    const saved = localStorage.getItem(POSITION_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (parsed.bookSlug && parsed.chapterSlug && typeof parsed.paragraphIndex === 'number') {
        return parsed
      }
    }
  } catch {}
  return null
}

// ── Text extraction ─────────────────────────────────────────

const SKIP_SELECTORS = [
  'style', 'script', 'svg', 'button', 'nav',
  '.pressy-footnote-ref',
  '.pressy-footnote-content',
  '.pressy-footnote-close',
  '.pressy-chapter-divider',
  '[aria-hidden="true"]',
].join(', ')

const BLOCK_TAGS = new Set([
  'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'LI', 'BLOCKQUOTE', 'FIGCAPTION', 'TD', 'TH',
])

export function extractTextFromDOM(container: Element): string[] {
  const paragraphs: string[] = []

  function walk(node: Node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element
      if (el.matches(SKIP_SELECTORS)) return

      if (BLOCK_TAGS.has(el.tagName)) {
        const text = el.textContent?.trim()
        if (text) paragraphs.push(text)
        return
      }
    }

    for (const child of Array.from(node.childNodes)) {
      walk(child)
    }
  }

  walk(container)
  return paragraphs
}

// ── Sentence splitting ───────────────────────────────────────

function splitIntoSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by whitespace.
  // Handles common abbreviations (Mr., Mrs., Dr., etc.) by not splitting there.
  const result: string[] = []
  // Match sentences: non-empty text ending with .!? (possibly followed by quotes)
  const matches = text.match(/[^.!?]*(?:[.!?]+["'\u201D\u2019)}\]]*\s*)/g)
  if (!matches) return text.trim() ? [text.trim()] : []

  let current = ''
  for (const match of matches) {
    current += match
    const trimmed = current.trim()
    // Only split if we have a reasonable sentence (more than a few characters)
    if (trimmed.length > 2) {
      result.push(trimmed)
      current = ''
    }
  }
  // Pick up any remaining text
  const remaining = current.trim()
  if (remaining) {
    if (result.length > 0) {
      // Append short trailing text to the last sentence
      result[result.length - 1] += ' ' + remaining
    } else {
      result.push(remaining)
    }
  }

  return result.filter(Boolean)
}

function paragraphsToChunks(paragraphs: string[]): string[] {
  const chunks: string[] = []
  for (const para of paragraphs) {
    const sentences = splitIntoSentences(para)
    chunks.push(...sentences)
  }
  return chunks
}

// ── Chapter loading ─────────────────────────────────────────

async function loadChapterText(slug: string): Promise<string[]> {
  const loader = currentChapterMap[slug]
  if (!loader) return []

  const mod = await loader()
  const Content = mod.default

  // Create hidden container and render MDX.
  // Note: do NOT set aria-hidden on this element — extractTextFromDOM
  // skips [aria-hidden="true"] and would return zero paragraphs.
  const hidden = document.createElement('div')
  hidden.style.position = 'absolute'
  hidden.style.left = '-9999px'
  hidden.style.visibility = 'hidden'
  document.body.appendChild(hidden)

  render(h(Content, { components: currentMdxComponents }), hidden)

  const paragraphs = extractTextFromDOM(hidden)

  // Cleanup
  render(null, hidden)
  document.body.removeChild(hidden)

  // Split paragraphs into sentence-level chunks for fine-grained progress
  return paragraphsToChunks(paragraphs)
}

// ── Speech ──────────────────────────────────────────────────

function startKeepAlive() {
  stopKeepAlive()
  keepAliveInterval = setInterval(() => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause()
      speechSynthesis.resume()
    }
  }, 10000)
}

function stopKeepAlive() {
  if (keepAliveInterval !== null) {
    clearInterval(keepAliveInterval)
    keepAliveInterval = null
  }
}

function speakChunks(chunks: string[], startIndex: number): void {
  if (!ttsPlaying.value || stopping) return

  if (startIndex >= chunks.length) {
    advanceToNextChapter()
    return
  }

  const utterance = new SpeechSynthesisUtterance(chunks[startIndex])
  utterance.rate = ttsRate.value

  utterance.onend = () => {
    if (!ttsPlaying.value || stopping) return
    ttsParagraphIndex.value = startIndex + 1
    saveListeningPosition()
    speakChunks(chunks, startIndex + 1)
  }

  utterance.onerror = (e) => {
    if (e.error === 'canceled' || e.error === 'interrupted') return
    if (ttsPlaying.value && !stopping) {
      ttsParagraphIndex.value = startIndex + 1
      speakChunks(chunks, startIndex + 1)
    }
  }

  speechSynthesis.speak(utterance)
}

function advanceToNextChapter(): void {
  const currentIdx = currentAllChapters.findIndex(ch => ch.slug === ttsChapterSlug.value)
  if (currentIdx < 0 || currentIdx >= currentAllChapters.length - 1) {
    // End of book
    stopListening()
    return
  }

  const nextChapter = currentAllChapters[currentIdx + 1]
  ttsChapterSlug.value = nextChapter.slug
  ttsChapterIndex.value = currentIdx + 1
  ttsParagraphIndex.value = 0
  saveListeningPosition()

  // Announce chapter title, then read its content
  const titleUtterance = new SpeechSynthesisUtterance(nextChapter.title)
  titleUtterance.rate = ttsRate.value
  titleUtterance.onend = () => {
    if (!ttsPlaying.value || stopping) return
    loadAndSpeakChapter(nextChapter.slug)
  }
  titleUtterance.onerror = () => {
    if (ttsPlaying.value && !stopping) {
      loadAndSpeakChapter(nextChapter.slug)
    }
  }
  speechSynthesis.speak(titleUtterance)
}

async function loadAndSpeakChapter(slug: string): Promise<void> {
  if (!ttsPlaying.value || stopping) return

  currentChunks = await loadChapterText(slug)
  ttsTotalParagraphs.value = currentChunks.length

  if (currentChunks.length === 0) {
    advanceToNextChapter()
    return
  }

  speakChunks(currentChunks, ttsParagraphIndex.value)
}

// ── Public API ──────────────────────────────────────────────

export function startListening(options: {
  bookSlug: string
  chapterSlug: string
  paragraphIndex?: number
  allChapters: Array<{ slug: string; title: string }>
  chapterMap: Record<string, () => Promise<{ default: ComponentType<{ components?: Record<string, unknown> }> }>>
  mdxComponents: Record<string, unknown>
}): void {
  if (!ttsSupported.value) return

  // Cancel any current speech
  stopping = true
  speechSynthesis.cancel()
  stopping = false

  // Set up module state
  currentBookSlug = options.bookSlug
  currentAllChapters = options.allChapters
  currentChapterMap = options.chapterMap
  currentMdxComponents = options.mdxComponents

  const chapterIdx = currentAllChapters.findIndex(ch => ch.slug === options.chapterSlug)
  ttsChapterSlug.value = options.chapterSlug
  ttsChapterIndex.value = chapterIdx >= 0 ? chapterIdx : 0
  ttsParagraphIndex.value = options.paragraphIndex || 0
  ttsPlaying.value = true

  startKeepAlive()

  // Go straight to chapter content — chapter titles are only announced
  // when transitioning between chapters (in advanceToNextChapter).
  loadAndSpeakChapter(options.chapterSlug)
}

export function stopListening(): void {
  // Save position FIRST, then set stopping flag to prevent race conditions
  // where speechSynthesis.cancel() triggers onend/onerror callbacks that
  // would advance the index before we save.
  saveListeningPosition()
  stopping = true
  ttsPlaying.value = false
  speechSynthesis.cancel()
  stopping = false
  stopKeepAlive()
}

export function setTTSRate(rate: number): void {
  const clamped = Math.max(0.5, Math.min(2.0, rate))
  ttsRate.value = clamped
  try {
    localStorage.setItem(RATE_KEY, String(clamped))
  } catch {}

  // If currently speaking, restart from current position with new rate
  if (ttsPlaying.value) {
    stopping = true
    speechSynthesis.cancel()
    stopping = false
    speakChunks(currentChunks, ttsParagraphIndex.value)
  }
}
