# Hostera

**Hotel operations, connected.**

Hostera is a hotel-operations product from **Grafo Verde**. It brings reservations, rooms, inventory, and guest access into one place so independent hotels, small chains, and hotel groups can work from the same operational picture.

This repository is the **public landing page** for that product: a static site in HTML, CSS, and JavaScript. It is not the Hostera admin application. The page is English by default and can switch to Spanish in place.

## What the page covers

- Product proposition and a dashboard preview of daily operations
- Paths by scale: independent hotel (Starter), small chain (Professional), hotel group (sales contact)
- Why operations break when information lives in different places
- Benefits (inventory, access) and a four-step setup flow
- Plan comparison, sales contact, team, FAQ, and terms

Section links, the language switch (EN/ES), the sales contact and the terms page stay on this static site. The sign-in link and the plan buttons open the Hostera web application at https://hostera-f4116.web.app/.

## Plans (as presented on the page)

| Plan             | For                           | Price                       | Next step            |
| ---------------- | ----------------------------- | --------------------------- | -------------------- |
| **Starter**      | One property, up to 10 rooms  | S/39 per property per month | Explore Starter      |
| **Professional** | Chains with 2 to 5 locations  | S/8 per room per month      | Explore Professional |
| **Hotel groups** | Larger operations             | Agreed with sales           | Talk to sales        |

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
- Git Flow (`main` / `develop`, releases tagged from `v0.1.0`)

User stories for the landing page live in [`docs/user-stories.md`](docs/user-stories.md).

## License

MIT. See [LICENSE.md](LICENSE.md). Published by Grafo Verde.
