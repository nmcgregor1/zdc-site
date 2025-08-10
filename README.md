# Zynex Data Concepts — Modern Static Site

This repo contains a modern, vendor‑neutral marketing site for **ZDC** with: dark mode, reveal animations, and a multi‑step contact form.

## Deploy to GitHub Pages (Project Site)
1. Create a new GitHub repo (e.g., `zdc-site`).
2. Upload all files to the **root** of the repo (not inside a subfolder).
3. Go to **Settings → Pages**.
4. **Source**: Deploy from a branch → Branch: `main` → Folder: `/(root)` → Save.
5. Your site will publish at `https://<username>.github.io/<repo-name>/`.

> If you name your repo `<username>.github.io`, it will publish at the root domain and current links work as-is.

## Contact Form
- Open `contact.html` and replace the `action` URL (`https://formspree.io/f/XXXXXXXX`) with your real Formspree endpoint.

## Customize
- **Brand**: replace `assets/img/logo.svg` and adjust CSS variables at the top of `assets/css/styles.css`.
- **Content**: edit `index.html`, `about.html`, `contact.html`.
- **Animations**: remove the `.reveal` class if you want static sections.

## Features
- Responsive layout
- Sticky header & mobile menu
- Dark mode (persists via localStorage)
- Multi‑step contact form (vanilla JS)
- SEO basics: meta description + Open Graph image
- robots.txt + sitemap.xml

Generated: 2025-08-10
