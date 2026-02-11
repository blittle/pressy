// Typography package exports
// CSS files are imported directly via package exports

export const themes = ['light', 'dark', 'sepia'] as const
export type Theme = typeof themes[number]

export const defaultTheme: Theme = 'light'
