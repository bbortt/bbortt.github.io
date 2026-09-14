# Website Redesign Plan — "Borter Labs" / Timon Borter

Status: **planning only** — nothing in this document has been implemented yet.
This file is written so another agent (or a future session) can execute the
work described here without further discovery/research.

## 1. Goals

1. Add a hero section on the homepage using `background.jpg` (the Devoxx
   Belgium speaker photo).
2. Rebrand the site as **"Borter Labs — Timon Borter Personal Website"**. The
   site represents both Timon personally and his Swiss sole
   proprietorship ("Einzelunternehmung") "Borter Labs", which exists mainly
   because of the [Snow-White](https://github.com/bbortt/snow-white) project.
3. Upgrade the `/projects` page: better layout, short description per
   project, refreshed project list (pulled from GitHub).
4. Give Snow-White its own dedicated page (`/snow-white`) since it's Timon's
   biggest and most promising project — with a summary + links out to the
   full docs site (https://timon-borter.ch/snow-white/) and the GitHub repo.

## 2. Open questions — confirm with Timon before/while implementing

Resolved:

- Employment: Timon is **still at PostFinance**, just no longer studying (his
  BFH thesis, dated 2023, was the last of that). Bio copy should read
  roughly: still working at PostFinance AG in Bern, no longer a student,
  and running Borter Labs / building Snow-White on the side. Don't imply
  Borter Labs/PostFinance are full-time-equivalent or in conflict — frame
  Borter Labs as his independent project/company alongside his day job.
- Talks in the bio: keep `About` short. Add one line identifying him as a
  conference speaker (e.g. "conference speaker" or "speaks at Devoxx and
  similar events") with a link to `/talks` for detail, rather than listing
  talks inline on the homepage.

Still open — don't guess, flag or ask:

- Confirm whether "Borter Labs" should also appear on his GitHub profile /
  `manifest.json` short name, or stay a website-only brand for now.
- Confirm the exact tagline for the hero (a draft is proposed below in
  section 6, but wording should be Timon's own voice).
- Confirm license/registration status of "Borter Labs" isn't a claim the
  website shouldn't make (e.g. avoid implying a registered trademark).

## 3. Current state (for reference)

- CRA + React 19 + react-router-dom 7 + Bootstrap 5, SCSS, Flow types.
- Homepage (`src/container/home/index.js`) renders `About`, `GithubStatus`,
  `Resume`, `MeFace` (an old personal photo,
  `src/assets/images/IMG_20190416_100232_1.jpg`) with no hero section.
- Header (`src/container/layout/header/index.js`) brand text is just
  `<h1>bbortt</h1>`.
- `public/index.html` `<title>` is `Timon Borter`, no meta description/OG
  tags, no canonical link.
- `public/manifest.json` `short_name` is `bbortt`.
- Routes are declared in `src/routes.js` (lazy-loaded containers) and nav
  links in `src/container/layout/header/index.js`.
- `/projects` (`src/container/projects/index.js`) already renders
  `Project` components with `title`/`link`/`description`/`detail` props —
  the data model is fine, it just needs a visual upgrade and refreshed
  content.
- Production deploy is via `.github/workflows/publish.yaml`, which runs
  `gh-pages -d build --cname timon-borter.ch` — the custom domain is already
  live, no CNAME file changes needed.

## 4. GitHub repo research (bbortt), for the Projects page refresh

Own, non-fork, non-archived repos (via `https://api.github.com/users/bbortt/repos`),
useful ones not already listed on `/projects`:

| Repo | Stars | Language | Description | Homepage |
|---|---|---|---|---|
| `event-planner` | 7 | Java | Event planning tool. | — |
| `spiritbound` | 0 | TypeScript | No description yet; SpacetimeDB TS quickstart-based project, actively being worked on (updated today). Very early stage. | — |
| `snow-white` | 0 | Java | Verify your API actually does what its OpenAPI spec promises — OpenAPI × OpenTelemetry coverage and quality gates, and a ground-truth guardrail for agentic development. | https://timon-borter.ch/snow-white/ |
| `devoxx-2025-citrus-openapi` | 0 | Java | Practical API Testing with OpenAPI and Citrus Framework (talk demo repo) | — |

Recommendations:
- Add **`event-planner`** to the "Projects I maintain" section with the
  description above.
- Leave **`spiritbound`** off the projects list for now (no description, too
  early-stage) — revisit once it has a README/description worth showing.
- `devoxx-2025-citrus-openapi` belongs with the existing Devoxx talk entries
  on `/talks`, not on `/projects` (it's a talk companion repo).
- Promote **`snow-white`** out of the plain list into a featured/highlighted
  card at the top of "Projects I maintain" that links to the new
  `/snow-white` page (in-app) in addition to GitHub.
- Everything else already on `/projects` (mat-datetimepicker, propeller,
  polling-swagger-ui, citrus, citrus-simulator, next.js, angular, owl,
  ngx-ace-editor-wrapper, next-redux-saga, tbme-tv) stays — descriptions are
  already accurate and don't need rewriting, only the visual container/card.

## 5. Snow-White content summary (for the new dedicated page)

Source: https://timon-borter.ch/snow-white/ and the GitHub repo description/topics.

- **Tagline**: "Which API endpoints are your tests actually exercising?"
- **Purpose**: Links OpenAPI specs with OpenTelemetry traces so teams can see
  which endpoints/parameters/responses are actually exercised by tests or
  production traffic — without modifying application code.
- **Why it matters now**: When both code and tests are AI-generated, a
  passing test suite no longer proves the two agree on the API contract.
  Snow-White acts as an independent "ground-truth guardrail."
- **Key features**:
  - Coverage dashboards (endpoints/parameters/responses).
  - Automated quality gates in CI/CD — CLI fails builds on coverage
    regressions.
  - Cloud-native: Helm install, event-driven microservices on Kafka, built
    for Kubernetes.
  - OpenTelemetry-native — no proprietary SDK; Spring Boot autoconfiguration
    + OpenAPI Generator plugin wire up linking attributes automatically.
  - Agentic development support: `--agentic` CLI mode emits JSON of
    under-covered paths/params for AI coding agents, paired with a Claude
    Code skill.
  - Five-step workflow: sync specs → ingest OTEL traces → correlate by
    service/API name+version → gate on thresholds → visualize.
- **Topics/keywords** (from GitHub): agentic-development, ai-coding-agents,
  api-testing, ci-cd, claude-code, contract-testing, kubernetes,
  microservices, observability, openapi, opentelemetry, quality-gate,
  spring-boot-kafka, test-coverage.
- **Links to use on the new page**: GitHub repo
  (https://github.com/bbortt/snow-white), full docs site
  (https://timon-borter.ch/snow-white/), and (if available) the Devoxx 2025
  talk (`devoxx-2025-citrus-openapi` / the Talks page entries) as related
  content.

## 6. Design direction

`background.jpg` is a black-and-white photo of Timon presenting on stage
at Devoxx Belgium (Citrus framework talk). Good hero material as-is.

Proposed approach (Timon should feel free to adjust to taste — this is a
starting point, not a mandate):

- **Hero section**: full-bleed `background.jpg` with a dark gradient overlay
  (e.g. `linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.75))`) so white
  text stays legible over the busy conference background. On top:
  - Small eyebrow label: "Borter Labs"
  - Large heading: "Timon Borter"
  - Subheading/tagline (draft, confirm wording with Timon): "Software
    engineer, conference speaker, and founder of Borter Labs — building
    Snow-White, an open-source ground-truth guardrail for API testing."
  - Two CTA buttons: "View Projects" (`/projects`) and "Snow-White"
    (`/snow-white`).
- **Color palette**: keep it simple — near-black (`#111111`) for the hero
  overlay/dark surfaces, a warm off-white (`#fafafa`) for content sections,
  and one accent color for links/buttons/badges. Suggest a cool blue/ice
  tone (e.g. `#3b82f6` or similar) to echo "Snow-White" without being
  literal; this is a free choice, not derived from any existing brand asset.
- **Typography**: current site-wide `Courier New` monospace is dated for
  body copy. Suggest a modern sans-serif (e.g. system font stack or
  `Inter`) for body text, optionally keeping a monospace accent for
  headings/labels as a nod to "programmer" identity. This is a nice-to-have,
  not required to satisfy the ask — call it out as optional in the PR if
  time-boxed.
- **Project cards**: replace the current plain `row`-based `Project`
  component layout with a card (border, padding, hover elevation) so the
  projects page reads less like a table and more like a modern showcase.
  Keep the existing grouping headings ("I maintain" / "I contribute to" /
  etc.) — they work well.

Timon has confirmed he wants the "modern upgrade" taken seriously — so
treat the visual/UX polish above as in scope, not optional, alongside the
standards work in section 6a below. Keep the result clean and readable:
generous whitespace, a clear type scale, restrained color use (one accent,
not a rainbow), and don't let the hero's photo/overlay reduce body-copy
legibility anywhere else on the site.

## 6a. Modern web standards / best practices — in scope

These were found during review and should be addressed as part of this
work, not treated as a separate future cleanup:

- **Fix the broken mobile nav (real bug).** `src/container/layout/header/index.js`
  uses Bootstrap 4 attributes (`data-toggle="collapse"`, `data-target=`),
  but the project is on Bootstrap 5 (needs `data-bs-toggle`/`data-bs-target`).
  Worse, Bootstrap's JS bundle is never imported anywhere — only
  `~bootstrap/dist/css/bootstrap.min.css` in `src/index.scss`. Result: the
  hamburger button currently does nothing on mobile. Fix by either
  importing Bootstrap's JS bundle (`bootstrap/dist/js/bootstrap.bundle.min`)
  and correcting the `data-bs-*` attributes, or implementing the collapse
  with plain React state (simpler, no jQuery-era globals, arguably more
  "modern" for a React app) — recommend the React-state approach.
- **SEO/social basics** (currently entirely missing): meta description,
  Open Graph (`og:title`, `og:description`, `og:image`, `og:url`,
  `og:type`), Twitter Card tags, `<link rel="canonical">`, `public/robots.txt`,
  and a basic `public/sitemap.xml` listing the known routes. Consider a
  small JSON-LD block (`Person` for Timon, optionally `Organization` for
  Borter Labs) on the homepage.
- **Accessibility**: use semantic landmarks (`<header>`, `<main>`, `<nav>`,
  `<footer>`) instead of generic `div`s where applicable; verify color
  contrast of hero text over `background.jpg` (test with the actual overlay
  opacity, both photo highlights and shadows); ensure visible
  `:focus-visible` states on nav links/buttons/cards; keep meaningful `alt`
  text on all images (the existing images already have decent alt text —
  keep that standard for anything new).
- **Performance**: this is why hero image compression (7.1) isn't optional
  — ship a responsive `<picture>` with a `.webp` source and `.jpg` fallback,
  sized appropriately (don't ship a 2500px-wide image to a 400px-wide mobile
  viewport); lazy-load below-the-fold images (e.g. the GitHub stats image
  on the homepage) with `loading="lazy"`.
- **Reduced motion**: if any hover/scroll animation is added (e.g. card
  elevation, hero fade-in), respect `prefers-reduced-motion: reduce`.
- **Dead dependency**: `web-vitals` is installed but never wired up
  (no `reportWebVitals` call anywhere). Either actually use it (e.g. log to
  console in dev, or send to an analytics endpoint if Timon wants one) or
  remove it — don't leave unused dependencies in `package.json`.
- **Stretch/optional** (nice-to-have, lower priority than the above):
  dark mode via `prefers-color-scheme` using CSS custom properties for the
  color palette; modernizing the favicon set (currently ~20 legacy PNG
  sizes from an old generator) down to a single SVG favicon + one maskable
  PNG for Android, per current best practice.

## 7. File-by-file task list

### 7.1 Asset move
- Move `background.jpg` (repo root) → `src/assets/images/hero-background.jpg`.
- Optional but recommended: compress/resize it (currently ~905 KB at
  2500×1384) before committing — e.g. re-export at ~1920px wide, quality
  ~75–80, and/or add a `.webp` variant with a `<picture>` fallback to `.jpg`.
  No image tooling is currently in the project; do this with an external
  tool/script, not a new runtime dependency, unless Timon wants one.

### 7.2 New Hero component
- New file: `src/components/home/hero.js` (+ `hero.scss`), Flow-typed like
  the sibling components in that folder.
- Renders the background image, overlay, heading, tagline, and CTA buttons
  described in section 6.
- Import and render at the top of `src/container/home/index.js`, above the
  existing `About`/`GithubStatus`/`Resume`/`MeFace` row.
- Decide whether `MeFace` (the old personal photo) stays on the homepage
  now that there's a hero photo, or moves/is removed — recommend keeping it
  further down the page (e.g. next to `About`) since it's a different,
  more informal photo; don't delete without checking with Timon.

### 7.3 Branding — header, footer, meta
- `src/container/layout/header/index.js`: change the brand markup from
  `<h1>bbortt</h1>` to something like:
  ```jsx
  <span className="navbar-brand-title">Borter Labs</span>
  <span className="navbar-brand-subtitle text-muted">Timon Borter</span>
  ```
  (exact markup/styling up to whoever implements — keep it a single
  `NavLink` to `/`.)
- `public/index.html`:
  - `<title>Borter Labs — Timon Borter</title>`
  - Add `<meta name="description" content="...">` (short pitch — personal +
    Borter Labs / Snow-White).
  - Add Open Graph tags (`og:title`, `og:description`, `og:image` pointing
    at a suitable static asset — could reuse the hero image or a cropped
    version, `og:url`).
- `public/manifest.json`: update `short_name`/`name` to reflect "Borter
  Labs" branding (confirm wording with Timon — see open questions).
- Footer (`src/container/layout/footer/index.js`): optionally add a small
  "Borter Labs" / Einzelunternehmung mention or copyright line — keep the
  existing "Hosted on GitHub Pages" credit.

### 7.4 Projects page upgrade
- `src/components/projects/project.js` / `project.scss`: restyle as a card
  (see section 6). Keep the same props (`title`, `description`, `link`,
  `detail`) so `src/container/projects/index.js` doesn't need prop changes.
- `src/container/projects/index.js`:
  - Add a featured Snow-White card at the top of "Projects I maintain"
    that links to the new in-app `/snow-white` page (use `react-router-dom`
    `Link`, not a plain `<a>`, so it's a client-side route) alongside/plus
    a GitHub link.
  - Add `event-planner` to "Projects I maintain" with the description from
    section 4.
  - Leave the rest of the list content as-is (already has descriptions).

### 7.5 New Snow-White page
- New route: `src/container/snow-white/index.js` (+ scss if needed).
- Add to `src/routes.js`:
  ```js
  const AsyncSnowWhite = React.lazy(() => import('./container/snow-white'));
  // ...
  { path: '/snow-white', element: <AsyncSnowWhite/> },
  ```
- Add a nav link in `src/container/layout/header/index.js` (placement:
  probably right after "Projects").
- Content: use section 5 above — tagline, purpose, "why it matters now",
  key features list, and links out to the GitHub repo and the full docs
  site (https://timon-borter.ch/snow-white/). Follow the existing
  page style used by `/talks` and `/publications` (heading + `text-muted`
  subheading, then sections) for visual consistency, or apply the modern
  redesign if the visual refresh is applied site-wide.

### 7.6 About section content
- Update `src/components/home/about.js`. Confirmed facts to use: Timon is
  still at PostFinance AG in Bern, no longer a student (BFH thesis was
  2023), and also runs Borter Labs / builds Snow-White. Draft direction:
  *"I work as a [role — confirm exact title with Timon] at PostFinance AG
  in Bern, and build Snow-White through my own company, Borter Labs, on
  the side."* Keep the existing light/self-deprecating tone
  ("Programmer, Open Source Enthusiast 🚀") rather than making it sound
  like a corporate bio.
- Add one short line/badge identifying him as a conference speaker, linking
  to `/talks` (e.g. "Conference speaker — see my talks") — don't duplicate
  talk details on the homepage.
- Still confirm with Timon: his exact current job title/role at PostFinance
  (not knowable from repo/GitHub data) before publishing the bio copy.

### 7.7 Mobile navigation fix
- Fix the broken navbar toggler described in section 6a — replace the
  Bootstrap 4 `data-toggle`/`data-target` attributes with either working
  Bootstrap 5 JS (import the bundle + use `data-bs-toggle`/`data-bs-target`)
  or a small React `useState`-driven collapse. Verify by resizing the
  browser to a mobile width and confirming the menu actually opens/closes.

### 7.8 SEO, accessibility, performance, cleanup
- Implement the section 6a checklist: meta description, OG/Twitter tags,
  canonical link, `robots.txt`, `sitemap.xml`, optional JSON-LD; semantic
  landmarks; contrast/focus-visible pass; responsive/lazy-loaded images;
  `prefers-reduced-motion` support for any new animation; resolve the
  unused `web-vitals` dependency (wire it up or remove it).

## 8. QA checklist before calling this done

- `pnpm run flow:check` passes (repo uses Flow types on all components).
- `pnpm run build` succeeds.
- `pnpm run serve` and manually check:
  - Homepage hero renders correctly at desktop and mobile widths, text
    stays legible over the image at all breakpoints.
  - **Mobile nav toggler actually opens/closes the menu** (this is
    currently broken — see 7.7 — don't skip verifying the fix).
  - Header brand + nav (including new "Snow-White" link) works, active-link
    styling still functions (`maybe-active-link.js`).
  - `/projects` renders the featured Snow-White card + new `event-planner`
    entry, all links work.
  - `/snow-white` route loads (including via direct URL / hard refresh,
    since this is a GitHub Pages SPA — verify router basename/404 handling
    still works for the new route the same way it does for existing ones).
  - `<title>`/meta description/OG tags show correctly in browser tab /
    view-source / a social share debugger.
  - Keyboard-only navigation: tab through nav, hero CTAs, and project
    cards — focus should always be visible.
  - Run a Lighthouse pass (Chrome DevTools) for Performance, Accessibility,
    Best Practices, SEO — aim for green/90+ across the board given the
    "modern standards" bar Timon set; the hero image is the biggest risk to
    the Performance score, hence 7.1's compression step.

## 9. Suggested implementation order

1. Asset move + compression (7.1).
2. Mobile nav fix (7.7) — small, independent, fixes a real bug.
3. Branding/meta + SEO basics (7.3, 7.8) — low risk, no visual dependencies.
4. Hero component (7.2).
5. Projects page upgrade (7.4).
6. Snow-White page + route + nav link (7.5).
7. About content update (7.6) — facts are now confirmed, safe to write.
8. Remaining accessibility/performance/cleanup items from 7.8.
9. Full QA pass (section 8), including Lighthouse.
