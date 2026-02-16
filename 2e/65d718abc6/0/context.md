# Session Context

## User Prompts

### Prompt 1

Implement the following plan:

# Add PWA Install Button to Home Page

## Context

The home page has a "Start Reading" / "Continue Reading" CTA button. The user wants an "Install" button next to it that triggers the browser's PWA install prompt, so visitors can install the book as an app directly from the landing page.

## How `beforeinstallprompt` Works

The browser fires `beforeinstallprompt` when the site meets PWA installability criteria (manifest, service worker, HTTPS). We must:
1. Capture ...

### Prompt 2

Could we automatically download for offline usage if the user installs the app? So they don't have to click the icon in the footer?

### Prompt 3

Could we add to the top of the table of contents a link to the home page?

### Prompt 4

Did we break something on mobile for displaying the bottom footer on tap? I don't see anything showing up anymore on tap, `class="pressy-page-footer pressy-page-footer--visible"` properly gets set, but I don't see the actual content of the footer.

### Prompt 5

If I set the CSS manually in the browser to:

```
.pressy-page-footer--visible {
    transform: translateY(-58px);
    opacity: 1;
}
```

It does show up, but that breaks desktop

