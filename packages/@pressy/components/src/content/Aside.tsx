import { ComponentChildren } from 'preact'

interface AsideProps {
  children: ComponentChildren
  title?: string
}

export function Aside({ children, title }: AsideProps) {
  return (
    <aside class="pressy-aside">
      {title && <strong class="pressy-aside-title">{title}</strong>}
      <div class="pressy-aside-content">{children}</div>
    </aside>
  )
}
