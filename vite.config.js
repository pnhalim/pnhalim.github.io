import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(projectRoot, 'src')
const publicDir = path.resolve(projectRoot, 'public')

function htmlInputs(dir, acc = {}) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      htmlInputs(full, acc)
    } else if (entry.name.endsWith('.html')) {
      const rel = path.relative(root, full).replace(/\.html$/, '')
      acc[rel] = full
    }
  }
  return acc
}

function rewriteExtensionless(req, baseDir) {
  const raw = req.url ?? ''
  const queryIndex = raw.indexOf('?')
  const pathname = queryIndex === -1 ? raw : raw.slice(0, queryIndex)
  const search = queryIndex === -1 ? '' : raw.slice(queryIndex)
  if (!pathname || pathname.endsWith('/') || path.extname(pathname)) return
  const file = path.join(baseDir, pathname.replace(/^\/+/, '') + '.html')
  if (fs.existsSync(file)) req.url = `${pathname}.html${search}`
}

function newSiteAssets() {
  const hrefFor = (htmlFile, assetName) => {
    const relativePath = path.relative(path.dirname(htmlFile), path.join(root, assetName))
    return relativePath.split(path.sep).join('/')
  }

  return {
    name: 'new-site-assets',
    transformIndexHtml: {
      order: 'pre',
      handler(_html, ctx) {
        if (ctx.filename.split(path.sep).includes('v1')) return
        return {
          tags: [
            {
              tag: 'link',
              attrs: { rel: 'stylesheet', href: hrefFor(ctx.filename, 'site.css') },
              injectTo: 'head',
            },
            {
              tag: 'script',
              attrs: { type: 'module', src: hrefFor(ctx.filename, 'site.js') },
              injectTo: 'head',
            },
          ],
        }
      },
    },
  }
}

function extensionlessHtml() {
  return {
    name: 'extensionless-html',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteExtensionless(req, root)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteExtensionless(req, path.resolve(projectRoot, 'dist'))
        next()
      })
    },
  }
}

export default defineConfig({
  root,
  publicDir,
  appType: 'mpa',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs(root),
    },
  },
  plugins: [newSiteAssets(), tailwindcss(), extensionlessHtml()],
})
