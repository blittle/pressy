// Minimal static file server for E2E tests
import { createServer } from 'http'
import { readFileSync, existsSync, statSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const DIST = join(__dirname, '../../examples/flatland/dist')
const PORT = process.env.PORT || 4173

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
}

const server = createServer((req, res) => {
  let pathname = req.url.split('?')[0]

  // Try exact file, then index.html in directory
  let filePath = join(DIST, pathname)
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html')
  }
  if (!existsSync(filePath)) {
    res.writeHead(404)
    res.end('Not Found')
    return
  }

  const ext = extname(filePath)
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
  res.end(readFileSync(filePath))
})

server.listen(PORT, () => {
  console.log(`Serving ${DIST} on http://localhost:${PORT}`)
})
