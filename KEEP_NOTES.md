# STLGameDevSite — notes to keep before redesign

This file captures the only pieces you said you want to preserve while nuking layouts + SCSS:

- The 5 branding colors
- External links / integrations we may want again

(Everything below is extracted from the current Hugo layout + SCSS sources.)

## Branding palette (5 colors)

Source: `assets/scss/_stlgd.scss`

| Token | Hex |
|---|---|
| `$color-yellow` | `#F5E92F` |
| `$color-orange` | `#E48723` |
| `$color-purple` | `#D131D3` |
| `$color-blue` | `#142CA7` |
| `$color-green` | `#499272` |

Quick usage notes (from same file):

- `$primary`: `$color-orange`
- `$link-color-dark`: `$color-orange`
- `$link-hover-color-dark`: `$color-yellow`
- `$headings-color` / `$headings-color-dark`: `$color-purple`
- `$body-secondary-bg-dark`: `$color-blue`

## External links / integrations to remember

### Community / social

Source: `layouts/_default/home.html`

- Meetup: https://www.meetup.com/st-louis-game-developers/
- Discord invite: https://discord.com/invite/mTMKpre/
- Facebook group: https://www.facebook.com/groups/stlgamedev
- X/Twitter: https://x.com/stlgamedev
- Bluesky: https://bsky.app/profile/stlgame.dev
- Instagram: https://www.instagram.com/stlgamedev
- YouTube: https://www.youtube.com/@stlgamedeveloperco-op3742

### Other sites dropdown

Source: `layouts/_default/baseof.html`

- STLGameDev Roundups: https://roundup.stlgame.dev
- STL Gamejam: https://www.stlgamejam.com/

### Roundup subscription / Mailchimp

Source: `layouts/partials/latest-roundup.html`

- Past roundups: https://roundup.stlgame.dev
- Roundup JSON feed (used by JS): https://roundup.stlgame.dev/index.json
- Screenshot image source (GitHub raw):
  - https://raw.githubusercontent.com/AxolStudio/STLGameDevRoundUp/main/screenshots/issue-${issue}.png
- Mailchimp form action:
  - https://dev.us3.list-manage.com/subscribe/post?u=4b257a41c7f509a1c26ef99f0&id=c120d5d29b&f_id=004d1de2f0

### Google Analytics / Tag Manager

Source: `layouts/partials/ga.html`

- gtag loader: https://www.googletagmanager.com/gtag/js?id=G-5XLWRRPKEQ
- Measurement ID: `G-5XLWRRPKEQ`

### Fonts

Source: `layouts/partials/head/css.html`

- Google Fonts CSS:
  - https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap

### Repo link

Source: `layouts/directory/single.html`

- https://github.com/stlgamedev/STLGameDevSite

### Event RSVP deep links (Meetup)

Sources: `layouts/events/single.html`, `layouts/partials/next-event.html`

- Event links are constructed as:
  - https://www.meetup.com/st-louis-game-developers/events/<EVENT_ID>

---

## New site (space/alien) mockup notes

These are *forward-looking* notes for the new build.

## Asset handoff spec (put everything in `assets/images/spacestuff`)

Goal: you can drop in new art without changing code.

### Recommended export approach (best)

Export each parallax object as its own transparent image.

- Format:
  - Prefer **SVG** for clean vector shapes (planets, icons).
  - Prefer **WebP** (or PNG) with transparency for painterly / textured art.
- Trim the transparent bounds tight (avoid huge invisible padding).
- Use consistent naming (kebab case).

### File naming (examples)

- Background haze (optional):
  - `nebula-01.webp`
  - `nebula-02.webp`
- Parallax foreground objects:
  - `planet-01.webp`
  - `planet-ringed-01.webp`
  - `asteroid-01.webp`
  - `asteroid-02.webp`
  - `satellite-01.webp`
  - `ufo-01.webp`
- Mascots (temporary is fine):
  - `gamlien-left.webp`
  - `gamlien-right.webp`

### Optional (if you really want a single “space bits” sheet)

Provide:

- `space-bits.webp` (sprite sheet)
- `space-bits.json` with rectangles for each object:
  - `name`, `x`, `y`, `w`, `h` (and optionally an anchor)

This works, but is more code and more fiddly than individual exports.

### Placement rule of thumb

- Tiny stars: procedural / tiling (can be random)
- Planets: **strategic placement** (hand-positioned, not random)
- Small debris: light scatter with density limits


