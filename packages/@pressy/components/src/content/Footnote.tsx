import { ComponentChildren } from 'preact'
import { useSignal } from '@preact/signals'
import { useEffect, useRef } from 'preact/hooks'

interface FootnoteProps {
  id: string | number
  children: ComponentChildren
}

export function Footnote({ id, children }: FootnoteProps) {
  const isOpen = useSignal(false)
  const wrapperRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isOpen.value) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        isOpen.value = false
      }
    }

    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        isOpen.value = false
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isOpen.value])

  return (
    <span class="pressy-footnote-wrapper" ref={wrapperRef}>
      <button
        class="pressy-footnote-ref"
        onClick={() => (isOpen.value = !isOpen.value)}
        aria-describedby={`footnote-${id}`}
        aria-expanded={isOpen.value}
      >
        {id}
      </button>

      <span
        class="pressy-footnote-content"
        id={`footnote-${id}`}
        role="tooltip"
        hidden={!isOpen.value}
      >
        {children}
        <button
          class="pressy-footnote-close"
          onClick={() => (isOpen.value = false)}
          aria-label="Close footnote"
        >
          ×
        </button>
      </span>
    </span>
  )
}
