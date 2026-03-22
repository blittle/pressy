interface SceneBreakProps {
  variant?: 'asterisks' | 'line' | 'ornament'
}

export function SceneBreak({ variant = 'asterisks' }: SceneBreakProps) {
  return (
    <div class={`pressy-scene-break pressy-scene-break-${variant}`} role="separator">
      {variant === 'asterisks' && <span>* * *</span>}
      {variant === 'ornament' && <span>❧</span>}
    </div>
  )
}
