import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'Flatland: A Romance of Many Dimensions',
    url: 'https://flatland.example.com',
    description: 'A classic mathematical fiction by Edwin A. Abbott',
    author: 'Edwin A. Abbott',
    language: 'en',
  },
  pagination: {
    defaultMode: 'paginated',
  },
  pwa: {
    enabled: true,
    shortName: 'Flatland',
    themeColor: '#1a1a1a',
    backgroundColor: '#ffffff',
    icon192: './content/icon-192.png',
    icon512: './content/icon-512.png',
  },
})
