# Hiskia.app

Personal site built with Hugo and a custom single-page design.

## Local development

```bash
hugo server --disableFastRender
```

## Production build

```bash
hugo --gc --minify
```

Cloudflare Pages should use:

- Build command: `hugo --gc --minify`
- Build output directory: `public`
- Environment variable: `HUGO_VERSION=0.152.2`
