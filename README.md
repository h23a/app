# hiskia.app

Personal site built with Hugo Extended and a custom single-page design.

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

## Notes

- Source files live in `content/`, `layouts/`, `assets/`, and `static/`.
- Generated output (`public/`, `resources/_gen/`, `.hugo_build.lock`) is ignored.
- Resume, social links, and metadata are configured in `hugo.toml`.
