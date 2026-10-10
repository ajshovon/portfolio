Personal portfolio for [shovon.me](https://shovon.me), built with [Astro](https://astro.build/) and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:7000](http://localhost:7000) with your browser to see the result. If the port is taken, Astro picks the next free one and prints it.

Pages live in `src/pages`, shared markup in `src/layouts` and `src/components`, and icons in `src/icons` as plain SVG files that are imported as components. Projects and social links are listed in `src/data`. Colors for both themes are CSS variables in `src/styles/global.css`. The link preview image is rendered from `design/og-image.html`; the command to regenerate it is at the top of that file.

## Scripts

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start the dev server                              |
| `npm run build` | Build the static site into `dist/`                |
| `npm start`     | Preview the built site locally                    |
| `npm run check` | Type-check the project with `astro check`         |
| `npm run knip`  | Find unused files, dependencies and exports       |

## Environment

Analytics are configured through environment variables that are read while building and baked into the generated HTML, so changing them means rebuilding. Copy `.env.example` to `.env` for local development.

| Variable                                               | Purpose                         |
| ------------------------------------------------------ | ------------------------------- |
| `UMAMI_ENABLED`, `UMAMI_URL`, `UMAMI_SITE_ID`          | Umami script URL and website id |
| `CLARITY_ENABLED`, `CLARITY_PROJECT_ID`                | Microsoft Clarity               |
| `GOOGLE_TAG_MANAGER_ENABLED`, `GOOGLE_TAG_MANAGER_ID`  | Google tag (gtag.js) id         |

Each integration is only injected when its `*_ENABLED` variable is exactly `true`.

## Deployment

The build output is plain static files, so any static host works. `Dockerfile` builds the site and serves it with nginx (config in `nginx/default.conf.template`), listening on `$PORT` (default 7000). The analytics variables are passed as build arguments:

```bash
docker build -t portfolio:latest --build-arg UMAMI_ENABLED=true --build-arg UMAMI_URL=... --build-arg UMAMI_SITE_ID=... .
docker run --rm -p 7000:7000 portfolio:latest
```

`.github/workflows/deploy.yml` builds that image with the analytics values taken from the repository's Actions variables of the same names, then ships it to the VPS.
