import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'Flatland: A Romance of Many Dimensions',
    url: 'https://flatland.example.com',
    description: 'A classic mathematical fiction by Edwin A. Abbott',
    author: 'Edwin A. Abbott',
    language: 'en',
  },
  books: [{
    slug: 'flatland',
    title: 'Flatland: A Romance of Many Dimensions',
    author: 'Edwin A. Abbott',
    description:
      'Flatland is an 1884 satirical novella by the English schoolmaster Edwin Abbott Abbott. ' +
      'Writing pseudonymously as "A Square", Abbott uses the fictional two-dimensional world ' +
      'of Flatland to offer pointed observations on the social hierarchy of Victorian culture.',
    publishDate: '1884-01-01',
    language: 'en',
    cover: 'cover.jpg',
    paywall: {
      enabled: false,
      previewChapters: 0,
    },
  }],
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
