import { useSignal } from '@preact/signals'
import { useRef, useEffect } from 'preact/hooks'

export function TextShare() {
  const isVisible = useSignal(false)
  const position = useSignal({ x: 0, y: 0 })
  const selectedText = useSignal('')
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection()
      if (!selection || selection.isCollapsed) {
        isVisible.value = false
        return
      }

      const text = selection.toString().trim()
      if (text.length < 5) {
        isVisible.value = false
        return
      }

      selectedText.value = text

      // Position the share button above the selection
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()

      position.value = {
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      }
      isVisible.value = true
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    document.addEventListener('mouseup', handleSelectionChange)

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
      document.removeEventListener('mouseup', handleSelectionChange)
    }
  }, [])

  const generateShareUrl = () => {
    // Use Text Fragments API for direct linking
    const encodedText = encodeURIComponent(selectedText.value)
    const url = new URL(window.location.href)
    url.hash = `:~:text=${encodedText}`
    return url.toString()
  }

  const handleShare = async () => {
    const url = generateShareUrl()
    const text = `"${selectedText.value}"`

    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          text,
          url,
        })
        isVisible.value = false
        return
      } catch (err) {
        // User cancelled or share failed, fall through to clipboard
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`)
      // Show copied feedback
      if (buttonRef.current) {
        buttonRef.current.classList.add('copied')
        setTimeout(() => {
          buttonRef.current?.classList.remove('copied')
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  }

  const handleCopyLink = async () => {
    const url = generateShareUrl()
    try {
      await navigator.clipboard.writeText(url)
      if (buttonRef.current) {
        buttonRef.current.classList.add('copied')
        setTimeout(() => {
          buttonRef.current?.classList.remove('copied')
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  if (!isVisible.value) return null

  return (
    <div
      ref={buttonRef}
      class="pressy-text-share"
      style={{
        left: `${position.value.x}px`,
        top: `${position.value.y}px`,
      }}
    >
      <button
        class="pressy-share-btn"
        onClick={handleShare}
        aria-label="Share selected text"
        title="Share quote"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
        </svg>
      </button>

      <button
        class="pressy-copy-link-btn"
        onClick={handleCopyLink}
        aria-label="Copy link to selected text"
        title="Copy link"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
        </svg>
      </button>

      <style>{`
        .pressy-text-share {
          position: fixed;
          transform: translate(-50%, -100%);
          display: flex;
          gap: 0.25rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.25rem;
          box-shadow: var(--shadow-md);
          z-index: 1000;
        }

        .pressy-text-share::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid var(--color-bg);
        }

        .pressy-share-btn,
        .pressy-copy-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border: none;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          border-radius: 0.25rem;
          transition: background 0.15s, color 0.15s;
        }

        .pressy-share-btn:hover,
        .pressy-copy-link-btn:hover {
          background: var(--color-bg-muted);
          color: var(--color-text);
        }

        .pressy-text-share.copied .pressy-copy-link-btn {
          color: var(--color-accent);
        }
      `}</style>
    </div>
  )
}
