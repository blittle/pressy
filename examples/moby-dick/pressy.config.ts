import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'Moby-Dick; or, The Whale',
    url: 'https://mobydick.pwalibrary.app',
    description: 'The classic American novel by Herman Melville',
    author: 'Herman Melville',
    language: 'en',
  },
  book: {
    slug: 'moby-dick',
    title: 'Moby-Dick; or, The Whale',
    author: 'Herman Melville',
    description:
      'Moby-Dick is an 1851 novel by American writer Herman Melville. The book is the ' +
      'sailor Ishmael\'s narrative of the obsessive quest of Ahab, captain of the whaling ' +
      'ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on ' +
      'the ship\'s previous voyage bit off Ahab\'s leg at the knee. A contribution to the ' +
      'literature of the American Renaissance, Moby-Dick was published to mixed reviews, ' +
      'was a commercial failure, and was out of print at the time of the author\'s death ' +
      'in 1891. It is now considered one of the great American novels.',
    cover: 'cover.webp',
    publishDate: '1851-10-18',
    language: 'en',
    paywall: {
      enabled: true,
      previewChapters: 3,
      price: '$9.99',
      stripePriceId: 'price_1T4ocU2dQHTmJq5nyoaWMPti',
      mode: 'stripe',
    },
  },
  pagination: {
    defaultMode: 'paginated',
  },
  pwa: {
    enabled: true,
    shortName: 'Moby-Dick',
    themeColor: '#1a1a1a',
    backgroundColor: '#f0f4f8',
    icon192: './content/icon-192.png',
    icon512: './content/icon-512.png',
    favicon: './content/favicon.png',
  },
})
