interface SceneBreakProps {
  variant?: 'asterisks' | 'line' | 'ornament'
}

export function SceneBreak({ variant = 'asterisks' }: SceneBreakProps) {
  return (
    <div class={`pressy-scene-break pressy-scene-break-${variant}`} role="separator">
      {variant === 'asterisks' && <span>* * *</span>}
      {variant === 'ornament' && <span>❧</span>}

      <style>{`
        .pressy-scene-break {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-block: 3em;
          color: var(--color-text-muted);
        }

        .pressy-scene-break-asterisks span {
          letter-spacing: 0.5em;
          font-size: 1.25em;
        }

        .pressy-scene-break-line {
          width: 100%;
          max-width: 10ch;
          height: 1px;
          background: var(--color-border);
        }

        .pressy-scene-break-ornament span {
          font-size: 1.5em;
        }
      `}</style>
    </div>
  )
}
