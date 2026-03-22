/** Minimal CSS for EPUB readers — a subset of Pressy's typography styles. */
export const epubStyles = `/* Pressy EPUB Styles */
body {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
  margin: 1em;
  color: #1a1a1a;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.2;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

h1 { font-size: 1.8em; }
h2 { font-size: 1.4em; }
h3 { font-size: 1.2em; }

p {
  margin: 0.8em 0;
  text-indent: 1.5em;
}

p:first-child,
h1 + p, h2 + p, h3 + p, h4 + p,
blockquote p:first-child {
  text-indent: 0;
}

blockquote {
  margin: 1em 1.5em;
  font-style: italic;
}

a {
  color: #1a5276;
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
}

/* Aside */
.pressy-aside {
  margin: 1em 0;
  padding: 0.8em 1em;
  border-left: 3px solid #999;
  font-size: 0.9em;
}

.pressy-aside-title {
  display: block;
  margin-bottom: 0.3em;
}

/* Callout */
.pressy-callout {
  margin: 1em 0;
  padding: 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pressy-callout-header {
  margin-bottom: 0.4em;
}

.pressy-callout-warning {
  border-color: #e67e22;
}

.pressy-callout-important {
  border-color: #e74c3c;
}

/* Figure */
.pressy-figure {
  margin: 1.5em 0;
  text-align: center;
}

.pressy-figure img {
  max-width: 100%;
}

.pressy-figure-caption {
  font-size: 0.85em;
  font-style: italic;
  margin-top: 0.5em;
  color: #555;
}

/* Scene Break */
.pressy-scene-break {
  text-align: center;
  margin: 2em 0;
  font-size: 1.2em;
  letter-spacing: 0.5em;
}

.pressy-scene-break-line hr {
  border: none;
  border-top: 1px solid #999;
  width: 40%;
  margin: 0 auto;
}

/* Footnotes */
sup a {
  font-size: 0.75em;
  text-decoration: none;
  color: #1a5276;
}

.pressy-footnotes {
  margin-top: 2em;
  padding-top: 1em;
  border-top: 1px solid #ccc;
  font-size: 0.85em;
}

.pressy-footnote-item {
  margin: 0.5em 0;
}

/* Cover page */
.pressy-cover {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pressy-cover img {
  max-width: 100%;
  max-height: 80%;
}

/* Table of Contents */
.pressy-toc ol {
  list-style: none;
  padding: 0;
}

.pressy-toc li {
  margin: 0.5em 0;
}

.pressy-toc a {
  text-decoration: none;
  color: #1a1a1a;
}

table {
  border-collapse: collapse;
  margin: 1em 0;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
  padding: 0.5em;
  text-align: left;
}

th {
  font-weight: bold;
  background-color: #f5f5f5;
}

code {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9em;
  background-color: #f5f5f5;
  padding: 0.1em 0.3em;
}

pre {
  margin: 1em 0;
  padding: 0.8em;
  background-color: #f5f5f5;
  overflow-x: auto;
  font-size: 0.85em;
}

pre code {
  background: none;
  padding: 0;
}
`
