import { defineConfig } from 'pressy'

export default defineConfig({
  site: {
    title: 'Frankenstein; or, The Modern Prometheus',
    url: 'https://frankenstein.example.com',
    description: 'The classic Gothic novel by Mary Wollstonecraft Shelley',
    author: 'Mary Wollstonecraft Shelley',
    language: 'en',
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
