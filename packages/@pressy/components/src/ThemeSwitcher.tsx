import { useSignal } from '@preact/signals'

const themes = ['light', 'dark', 'sepia'] as const
type Theme = typeof themes[number]

export function ThemeSwitcher() {
  const isOpen = useSignal(false)
  const currentTheme = useSignal<Theme>(
    (typeof localStorage !== 'undefined'
      ? (localStorage.getItem('pressy-theme') as Theme)
      : 'light') || 'light'
  )

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('pressy-theme', theme)
    isOpen.value = false
  }

  const themeIcons: Record<Theme, string> = {
    light: '☀️',
    dark: '🌙',
    sepia: '📜',
  }

  const themeLabels: Record<Theme, string> = {
    light: 'Light',
    dark: 'Dark',
    sepia: 'Sepia',
  }

  return (
    <div class="pressy-theme-switcher">
      <button
        class="pressy-theme-toggle"
        onClick={() => (isOpen.value = !isOpen.value)}
        aria-label="Change theme"
        aria-expanded={isOpen.value}
      >
        <span class="pressy-theme-icon">{themeIcons[currentTheme.value]}</span>
      </button>

      {isOpen.value && (
        <div class="pressy-theme-menu" role="menu">
          {themes.map((theme) => (
            <button
              key={theme}
              class="pressy-theme-option"
              onClick={() => setTheme(theme)}
              role="menuitem"
              data-active={currentTheme.value === theme}
            >
              <span class="pressy-theme-icon">{themeIcons[theme]}</span>
              <span class="pressy-theme-label">{themeLabels[theme]}</span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        .pressy-theme-switcher {
          position: relative;
        }

        .pressy-theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 0.5rem;
          transition: background 0.15s;
          font-size: 1.25rem;
        }

        .pressy-theme-toggle:hover {
          background: var(--color-bg-muted);
        }

        .pressy-theme-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          box-shadow: var(--shadow-md);
          overflow: hidden;
          z-index: 100;
        }

        .pressy-theme-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          color: var(--color-text);
          transition: background 0.15s;
        }

        .pressy-theme-option:hover {
          background: var(--color-bg-subtle);
        }

        .pressy-theme-option[data-active="true"] {
          background: var(--color-bg-muted);
          font-weight: 500;
        }

        .pressy-theme-label {
          font-size: var(--font-size-sm);
        }
      `}</style>
    </div>
  )
}
