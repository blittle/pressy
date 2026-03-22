import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'Frankenstein; or, The Modern Prometheus',
    url: 'https://frankenstein.example.com',
    description: 'The classic Gothic novel by Mary Wollstonecraft Shelley',
    author: 'Mary Wollstonecraft Shelley',
    language: 'en',
  },
  book: {
    slug: 'frankenstein',
    title: 'Frankenstein; or, The Modern Prometheus',
    author: 'Mary Wollstonecraft Shelley',
    description:
      'Frankenstein is an 1818 Gothic novel by Mary Shelley. It tells the story of ' +
      'Victor Frankenstein, a young scientist who creates a sapient creature in an ' +
      'unorthodox experiment. Considered one of the first works of science fiction, ' +
      'the novel explores themes of ambition, creation, responsibility, and the ' +
      'consequences of playing God.',
    publishDate: '1818-01-01',
    language: 'en',
    cover: 'cover.svg',
    paywall: {
      enabled: false,
      previewChapters: 0,
    },
  },
  pagination: {
    defaultMode: 'paginated',
  },
  pwa: {
    enabled: true,
    shortName: 'Frankenstein',
    themeColor: '#1a1a1a',
    backgroundColor: '#f5f0e8',
  },
})
