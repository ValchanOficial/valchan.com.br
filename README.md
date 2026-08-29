# Valchan — Personal Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/baaac451-3bf0-4d9a-b3e3-19f82deae099/deploy-status)](https://app.netlify.com/sites/valchan/deploys)
![GitHub](https://img.shields.io/github/license/ValchanOficial/valchan.com.br)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/25908a2caea04764b4397f7d0fab66ce)](https://www.codacy.com/gh/ValchanOficial/valchan.com.br/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ValchanOficial/valchan.com.br&utm_campaign=Badge_Grade)
[![Twitter Follow](https://img.shields.io/twitter/follow/ValchanOficial?style=social)](https://twitter.com/ValchanOficial)

Personal website and blog of **Valéria Padilha de Vargas** — a technology-loving
developer who constantly seeks knowledge. Built with Gatsby, the site combines a
single-page portfolio with a Markdown-driven blog written mostly in Brazilian
Portuguese.

🔗 **Live site:** [valchan.com.br](https://valchan.com.br) · 📡 **RSS:** [/rss.xml](https://valchan.com.br/rss.xml)

## Features

- **Portfolio landing page** composed of independent sections (about,
  experiences, projects, recommendations, blog highlights, contact).
- **Markdown blog** with paginated listing (6 posts per page), previous/next
  navigation and recommended posts.
- **Full-text search** powered by Algolia, indexed at build time.
- **Comments** on posts via [Chirpy](https://chirpy.dev).
- **Newsletter** subscription through Mailchimp.
- **Syntax highlighting** for code snippets with PrismJS.
- **PWA-ready**: web manifest, maskable icons and offline support.
- **SEO & discoverability**: sitemap, RSS feed and per-page meta tags.
- **Security headers** declared in `gatsby-config.js` (CSP in report-only mode,
  plus `Permissions-Policy`).

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Gatsby 5](https://www.gatsbyjs.com/), [React 18](https://react.dev/), [GraphQL](https://graphql.org/) |
| Styling | [styled-components](https://styled-components.com/), [styled-media-query](https://github.com/morajabi/styled-media-query), [Google Fonts](https://fonts.google.com/) |
| Content | [Markdown](https://daringfireball.net/projects/markdown/), `gatsby-transformer-remark`, [PrismJS](https://prismjs.com/) |
| Search | [Algolia](https://www.algolia.com/) + [React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/) |
| Motion & UI | [React Spring](https://www.react-spring.dev/), [AutoAnimate](https://auto-animate.formkit.com/), [Keen Slider](https://keen-slider.io/), [React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/), [React Icons](https://react-icons.github.io/react-icons/) |
| Engagement | [Chirpy](https://chirpy.dev) (comments), Mailchimp (newsletter) |
| Hosting | [Netlify](https://www.netlify.com/) via `gatsby-adapter-netlify` |
| Illustrations | [Web illustrations by Storyset](https://storyset.com/web) |

## Getting started

### Prerequisites

- **Node.js 24 LTS** (see `.nvmrc`; the `engines` field accepts `>=24.20 <26`)
- **Yarn 4** — enable it with `corepack enable`, the version is pinned by the
  `packageManager` field

### Installation

```bash
git clone https://github.com/ValchanOficial/valchan.com.br.git
cd valchan.com.br
corepack enable
yarn install
```

### Environment variables

Copy `env.example` to `.env` and fill in your Algolia credentials:

```bash
cp env.example .env
```

| Variable | Description |
| --- | --- |
| `GATSBY_ALGOLIA_APP_ID` | Algolia application ID |
| `ALGOLIA_ADMIN_KEY` | Admin key used to push the index during build (server-side only) |
| `GATSBY_ALGOLIA_SEARCH_KEY` | Search-only key exposed to the browser |
| `GATSBY_ALGOLIA_INDEX_NAME` | Name of the index that stores the posts |

Variables prefixed with `GATSBY_` are inlined into the client bundle, so never
put the admin key behind that prefix. The site builds without these values, but
the search page will not return results.

### Running locally

```bash
yarn dev
```

The development server is available at [http://localhost:8000](http://localhost:8000)
and the GraphQL explorer at [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

## Available scripts

| Script | Description |
| --- | --- |
| `yarn dev` / `yarn start` / `yarn develop` | Start the development server on `0.0.0.0:8000` |
| `yarn build` | Clean the cache and generate the production build in `public/` |
| `yarn serve` | Serve the production build locally |
| `yarn format` | Format `js`, `jsx`, `json` and `md` files with Prettier |
| `yarn clean` | Remove the Gatsby cache and `node_modules/` |

## Running with Docker

```bash
docker-compose up --build
```

The container exposes the development server on
[http://localhost:8000](http://localhost:8000) and mounts the project as a
volume, so local edits trigger a rebuild. Dependencies are installed with
`yarn install --immutable`, which fails the build whenever the lockfile diverges
from `package.json`.

## Project structure

```text
posts/                 Blog posts in Markdown, named YYYY-MM-DD-slug.md
src/
  components/          Reusable UI components
  sections/            Landing page sections
  pages/               index, search and 404 routes
  templates/           blog-post and blog-list (paginated) templates
  styles/              Global styles and CSS reset
  utils/               Helpers and the Algolia indexing queries
static/                Files copied as-is (images, icons, PDFs, robots.txt)
gatsby-config.js       Plugins, site metadata and HTTP headers
gatsby-node.js         Slug creation and dynamic page generation
```

## Writing a new post

1. Create a file in `posts/` following the `YYYY-MM-DD-slug.md` convention. The
   date prefix is stripped when the URL is generated, so
   `posts/2025-03-15-mcp.md` becomes `/mcp/`.
2. Add the frontmatter:

   ```markdown
   ---
   date: 2025-03-15
   title: "Post title"
   description: "Short summary used in listings, meta tags and the RSS feed."
   category: "category"
   image: '/assets/img/cover.jpg'
   ---

   Post content in Markdown.
   ```

3. Place cover images and other assets under `static/assets/img/` and reference
   them with absolute paths, as in the example above.

New posts are picked up automatically: pages, pagination, the RSS feed, the
sitemap and the Algolia index are all generated from the Markdown files at build
time.

## Deployment

The site is hosted on Netlify and built through `gatsby-adapter-netlify`, which
translates the headers declared in `gatsby-config.js` into Netlify
configuration. The build command is `yarn build` and the publish directory is
`public/`; both are configured in the Netlify site settings, along with the
Algolia environment variables needed to refresh the search index on each deploy.

## Contributing

Bug reports and suggestions are welcome through the
[issue tracker](https://github.com/ValchanOficial/valchan.com.br/issues). Run
`yarn format` before opening a pull request.

## License

Distributed under the [MIT License](LICENSE).
