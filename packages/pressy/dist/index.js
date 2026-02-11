// ../../node_modules/.pnpm/tsup@8.5.1_typescript@5.9.3_yaml@2.8.2/node_modules/tsup/assets/esm_shims.js
import path from "path";
import { fileURLToPath } from "url";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/config.ts
function defineConfig(config) {
  return {
    pagination: {
      defaultMode: "scroll"
    },
    outDir: "dist",
    contentDir: "content",
    ...config
  };
}

// src/vite/plugin.ts
import { resolve, join } from "path";
import { existsSync, readFileSync } from "fs";
import fastGlob from "fast-glob";
import yaml from "yaml";
import matter2 from "gray-matter";

// src/mdx/processor.ts
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import matter from "gray-matter";
async function compileMDX(source, filePath) {
  const { content, data: frontmatter } = matter(source);
  const result = await compile(content, {
    jsx: true,
    jsxImportSource: "preact",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor-link"]
          }
        }
      ]
    ],
    development: process.env.NODE_ENV !== "production"
  });
  const code = `
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'preact/jsx-runtime';
import * as runtime from 'preact/jsx-runtime';
import { useMDXComponents } from '@pressy/components/content';

${result.value}

export const frontmatter = ${JSON.stringify(frontmatter)};
export default function MDXContent(props) {
  const components = useMDXComponents();
  return _MDXContent({ ...props, components });
}
`;
  return {
    code,
    map: null,
    frontmatter
  };
}

// src/vite/plugin.ts
var VIRTUAL_MODULE_ID = "virtual:pressy";
var RESOLVED_VIRTUAL_MODULE_ID = "\0" + VIRTUAL_MODULE_ID;
function pressyPlugin(config) {
  let root;
  let contentDir;
  let manifest = { books: [], articles: [] };
  let routes = [];
  const contentDiscovery = {
    async discoverContent() {
      const books = await this.discoverBooks();
      const articles = await this.discoverArticles();
      return { books, articles };
    },
    async discoverBooks() {
      const booksDir = join(contentDir, "books");
      if (!existsSync(booksDir)) return [];
      const bookDirs = await fastGlob("*", {
        cwd: booksDir,
        onlyDirectories: true
      });
      const books = [];
      for (const bookSlug of bookDirs) {
        const bookPath = join(booksDir, bookSlug);
        const metadataPath = join(bookPath, "_book.yaml");
        if (!existsSync(metadataPath)) continue;
        const metadataContent = readFileSync(metadataPath, "utf-8");
        const metadata = yaml.parse(metadataContent);
        const chapterFiles = await fastGlob("*.mdx", {
          cwd: bookPath,
          ignore: ["_*.mdx"]
        });
        const chapters = chapterFiles.map((file) => {
          const match = file.match(/^(\d+)-(.+)\.mdx$/);
          if (!match) return null;
          const order = parseInt(match[1], 10);
          const slug = match[2];
          const filePath = join(bookPath, file);
          const content = readFileSync(filePath, "utf-8");
          const { data } = matter2(content);
          return {
            slug,
            title: data.title || slug.replace(/-/g, " "),
            order,
            filePath,
            wordCount: content.split(/\s+/).length,
            readingTime: Math.ceil(content.split(/\s+/).length / 200)
          };
        }).filter((c) => c !== null).sort((a, b) => a.order - b.order);
        const coverPath = existsSync(join(bookPath, "cover.jpg")) ? join(bookPath, "cover.jpg") : existsSync(join(bookPath, "cover.png")) ? join(bookPath, "cover.png") : void 0;
        books.push({
          slug: bookSlug,
          metadata,
          chapters,
          basePath: bookPath,
          coverPath
        });
      }
      return books;
    },
    async discoverArticles() {
      const articlesDir = join(contentDir, "articles");
      if (!existsSync(articlesDir)) return [];
      const articleDirs = await fastGlob("*", {
        cwd: articlesDir,
        onlyDirectories: true
      });
      const articles = [];
      for (const articleSlug of articleDirs) {
        const articlePath = join(articlesDir, articleSlug);
        const metadataPath = join(articlePath, "_article.yaml");
        const indexPath = join(articlePath, "index.mdx");
        if (!existsSync(indexPath)) continue;
        let metadata;
        if (existsSync(metadataPath)) {
          metadata = yaml.parse(readFileSync(metadataPath, "utf-8"));
        } else {
          const content2 = readFileSync(indexPath, "utf-8");
          const { data } = matter2(content2);
          metadata = data;
        }
        const content = readFileSync(indexPath, "utf-8");
        articles.push({
          slug: articleSlug,
          metadata,
          filePath: indexPath,
          basePath: articlePath,
          wordCount: content.split(/\s+/).length,
          readingTime: Math.ceil(content.split(/\s+/).length / 200)
        });
      }
      return articles;
    }
  };
  function generateRoutes(manifest2) {
    const routes2 = [
      { path: "/", type: "home" },
      { path: "/books", type: "books" },
      { path: "/articles", type: "articles" }
    ];
    for (const book of manifest2.books) {
      routes2.push({
        path: `/books/${book.slug}`,
        type: "book",
        content: book
      });
      for (const chapter of book.chapters) {
        routes2.push({
          path: `/books/${book.slug}/${chapter.slug}`,
          type: "chapter",
          content: chapter,
          book
        });
      }
    }
    for (const article of manifest2.articles) {
      routes2.push({
        path: `/articles/${article.slug}`,
        type: "article",
        content: article
      });
    }
    return routes2;
  }
  function generateHTML(route) {
    const title = getRouteTitle(route, config);
    const description = getRouteDescription(route, config);
    return `<!DOCTYPE html>
<html lang="${config.site.language || "en"}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="stylesheet" href="/@pressy/typography/prose.css">
  <link rel="stylesheet" href="/@pressy/typography/fluid.css">
  <link rel="stylesheet" href="/@pressy/typography/themes/light.css" id="theme-light">
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#ffffff">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/@pressy/client"></script>
  <script type="module">
    import { hydrate } from '/@pressy/client';
    hydrate(${JSON.stringify({ route: route.path, manifest })});
  </script>
</body>
</html>`;
  }
  function getRouteTitle(route, config2) {
    switch (route.type) {
      case "home":
        return config2.site.title;
      case "books":
        return `Books | ${config2.site.title}`;
      case "articles":
        return `Articles | ${config2.site.title}`;
      case "book":
        return `${route.content.metadata.title} | ${config2.site.title}`;
      case "chapter":
        return `${route.content.title} | ${route.book?.metadata.title} | ${config2.site.title}`;
      case "article":
        return `${route.content.metadata.title} | ${config2.site.title}`;
      default:
        return config2.site.title;
    }
  }
  function getRouteDescription(route, config2) {
    switch (route.type) {
      case "book":
        return route.content.metadata.description || "";
      case "article":
        return route.content.metadata.description || "";
      default:
        return config2.site.description || "";
    }
  }
  return [
    {
      name: "pressy:config",
      configResolved(resolvedConfig) {
        root = resolvedConfig.root;
        contentDir = resolve(root, config.contentDir || "content");
      }
    },
    {
      name: "pressy:content",
      async buildStart() {
        manifest = await contentDiscovery.discoverContent();
        routes = generateRoutes(manifest);
      },
      resolveId(id) {
        if (id === VIRTUAL_MODULE_ID) {
          return RESOLVED_VIRTUAL_MODULE_ID;
        }
        if (id === "/@pressy/client") {
          return resolve(__dirname, "../runtime/client.js");
        }
        if (id.startsWith("/@pressy/typography/")) {
          const cssFile = id.replace("/@pressy/typography/", "");
          return { id: `@pressy/typography/${cssFile}`, external: false };
        }
      },
      load(id) {
        if (id === RESOLVED_VIRTUAL_MODULE_ID) {
          return `export const manifest = ${JSON.stringify(manifest)};
export const routes = ${JSON.stringify(routes)};
export const config = ${JSON.stringify(config)};`;
        }
      }
    },
    {
      name: "pressy:mdx",
      async transform(code, id) {
        if (!id.endsWith(".mdx")) return null;
        const result = await compileMDX(code, id);
        return {
          code: result.code,
          map: result.map
        };
      }
    },
    {
      name: "pressy:html",
      configureServer(server) {
        return () => {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url || "/";
            const route = routes.find((r) => r.path === url);
            if (route) {
              const html = generateHTML(route);
              const transformed = await server.transformIndexHtml(url, html);
              res.setHeader("Content-Type", "text/html");
              res.end(transformed);
              return;
            }
            next();
          });
        };
      }
    },
    {
      name: "pressy:build",
      async generateBundle(_, bundle) {
        for (const route of routes) {
          const html = generateHTML(route);
          const fileName = route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`;
          this.emitFile({
            type: "asset",
            fileName,
            source: html
          });
        }
        const webManifest = {
          name: config.site.title,
          short_name: config.site.title,
          description: config.site.description,
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/icon-192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icon-512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        };
        this.emitFile({
          type: "asset",
          fileName: "manifest.webmanifest",
          source: JSON.stringify(webManifest, null, 2)
        });
      }
    }
  ];
}
export {
  defineConfig,
  pressyPlugin
};
//# sourceMappingURL=index.js.map