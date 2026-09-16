# Hostera

**Hotel operations, connected.**

Hostera is a hotel-operations product from **Grafo Verde**. It brings reservations, rooms, inventory, and guest access into one place so independent hotels, small chains, and hotel groups can work from the same operational picture.

This repository is the **public landing page** for that product: a static site in HTML, CSS, and JavaScript. It is not the Hostera admin application. The page is English by default and can switch to Spanish in place.

## What the page covers

- Product proposition and a dashboard preview of daily operations
- Paths by scale: independent hotel (Free), small chain (Professional), hotel group (Enterprise)
- Why operations break when information lives in different places
- Benefits (inventory, access) and a four-step setup flow
- Plan comparison, sales contact, team, FAQ, and terms

Live section links, language (EN/ES), and the terms page all stay on this static site.

## Plans (as presented on the page)

| Plan             | For                           | Next step            |
| ---------------- | ----------------------------- | -------------------- |
| **Free**         | One property, up to 10 rooms  | Start for free       |
| **Professional** | Chains with 2–5 locations     | Explore Professional |
| **Enterprise**   | Large or multinational groups | Talk to sales        |

## Run locally

Serve the project root (so `index.html`, `css/`, `js/`, and `public/` resolve together):

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

## Stack

- HTML, CSS, and JavaScript (no framework)
- In-page English/Spanish copy in `js/i18n.js`
- GSAP (CDN) for hero and scroll motion
- Git Flow (`main` / `develop`, releases tagged `v0.2.0` and later)

User stories for the landing page live in [`docs/user-stories.md`](docs/user-stories.md).

## License

MIT. See [LICENSE.md](LICENSE.md). Published by Grafo Verde.
