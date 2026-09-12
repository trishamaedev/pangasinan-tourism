# PANGASINAN — Discover the Beauty Beyond the Horizon

**Project Title:** Pangasinan-tourism
**Student Name:** Tababa, Trisha Mae R.
**Selected Framework:** React (Vite)

**Live Website:** [GitHub Pages URL]

A four-page tourism website for Pangasinan, Philippines, built with React + Vite.

## Pages

- **Home** — hero, province introduction, and three featured destination cards
- **Hundred Islands National Park** — Famous For / Location / Description / Gallery / Why Visit
- **Cape Bolinao Lighthouse** — Famous For / Location / Description / Gallery / Historical Significance
- **Balungao Hot Spring** — Famous For / Location / Description / Gallery / Why Visit

Navigation between pages uses a small built-in hash router (`src/App.jsx`) rather
than an external routing library, so the project has no dependencies beyond
React itself.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static `dist/`
folder you can deploy anywhere.

## Content & data

All destination copy, hero images, and gallery items live in one place:
`src/data/destinations.js`. Each page (`src/pages/HundredIslands.jsx`,
`BolinaoLighthouse.jsx`, `BalungaoHotSpring.jsx`) is a thin wrapper around the
shared `src/pages/DestinationPage.jsx` template, so editing copy or adding a
gallery photo never requires touching layout code.

## Images

- **Hundred Islands** — real photography, bundled locally in
  `src/assets/images/`.
- **Cape Bolinao Lighthouse** — real photographs sourced from Wikimedia
  Commons (CC BY‑SA), hot‑linked by URL in `destinations.js`. For production,
  download these, credit the photographers per the CC BY‑SA license, and
  serve them from `src/assets/images/` instead of hot‑linking.
- **Balungao Hot Spring** — no freely‑licensed photograph of the actual
  thermal pools could be found, so this page currently shows a labelled
  placeholder in the gallery (matching the pattern the rest of the project
  already used for missing photos). Drop real, licensed photos into
  `src/assets/images/` with the filenames listed in
  `src/data/destinations.js` (e.g. `hot-spring-pools.jpg`) and set the
  corresponding `src` in that file to replace them.

## Structure

```
src/
  components/   Navbar, Footer, Hero, TextSection, LocationSection,
                Gallery, ExploreMore, FeaturedCard, icons
  pages/        Home, DestinationPage (shared template),
                HundredIslands, BolinaoLighthouse, BalungaoHotSpring
  data/         destinations.js — all destination content
  assets/       local images
```
