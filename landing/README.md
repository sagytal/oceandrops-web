# Ocean Drops Landing (`oceandrops-web`)

This folder contains a static-first, Cloudflare-ready landing site for `oceandrops.app`.

## Why `oceandrops-web`

`oceandrops-web` is explicit and durable:

- `oceandrops` keeps product identity consistent with the app.
- `web` clearly separates marketing/public web from app code and backend logic.
- The name scales for future web surfaces (docs, changelog, status, legal pages) without mixing concerns.

## Recommended repository structure

```text
oceandrops-web/
  landing/
    index.html
    styles.css
    app.js
    content.js
    favicon.svg
    .gitignore
    README.md
```

## Initialization steps for the new repo

1. Create and clone the new repository:
   - `git clone git@github.com:<your-org>/oceandrops-web.git`
2. Copy this `landing` folder into the repo root.
3. Initialize commit history:
   - `git add .`
   - `git commit -m "Create launch-ready Ocean Drops landing site"`
4. Push:
   - `git push -u origin main`

## Local development

This site is static HTML/CSS/JS. No build pipeline is required.

Options:

- Open `landing/index.html` directly in a browser.
- Or run a local static server:
  - `python3 -m http.server 4173` (inside `landing`)

## Content updates

- Update latest release and updates feed in `landing/content.js`.
- Styling and visual system lives in `landing/styles.css`.
- Page structure and copy live in `landing/index.html`.

## Cloudflare Pages deployment

- **Framework preset:** None
- **Build command:** _(leave empty)_
- **Build output directory:** `landing`

For a custom domain:

1. In Cloudflare Pages, open project settings.
2. Go to **Custom domains** and add `oceandrops.app`.
3. Follow DNS instructions shown by Cloudflare (typically CNAME or flattened record).
4. Add `www.oceandrops.app` and configure redirect to apex if desired.
