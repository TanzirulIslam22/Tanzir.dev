<p align="center">
  <img src="public/projects/terminal.png" alt="Tanzir.dev hero screenshot" width="100%" />
</p>

<h1 align="center">Tanzir.dev</h1>

<p align="center">
  Personal portfolio of <strong>Tanzirul Islam</strong> — a MERN + AI full-stack developer.
  A dark, editorial-style one-pager built with Next.js, Tailwind CSS and Framer Motion.
</p>

<p align="center">
  <a href="https://tanzirul-islam.vercel.app">Live demo →</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framer" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## Features

- **Editorial dark design** — warm black background with cream accents, outline typography and a grain overlay
- **Animated preloader** — letter-by-letter name reveal with a progress bar
- **Custom cursor** — spring-following dot and ring on fine-pointer devices
- **Hero section** — masked word reveal, rotating role words and a 3D-tilt terminal card
- **Sections** — About, Skills, Selected Work, Experiments, Services and Contact
- **Scroll-triggered animations** with Framer Motion, honoring `prefers-reduced-motion`
- **Fully responsive** with a mobile menu, and accessible markup
- **Real project screenshots** generated from hand-built HTML mockups (`tools/mockups/`)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Language:** TypeScript
- **Icons:** lucide-react
- **Fonts:** Syne (display) + Manrope (sans) via `next/font`

## Project Structure

```
.
├── app/                  # Pages, layout, global styles
│   ├── globals.css       # Design tokens, utilities, keyframes
│   ├── layout.tsx        # Root layout + metadata
│   ├── base.tsx          # Font loading wrapper
│   └── page.tsx          # Home page composition
├── components/           # Navbar, Hero, sections, Preloader, Cursor, Footer...
│   └── sections/         # About, Skills, Projects, Experiments, Services, Contact
├── lib/                  # Content data + animation helpers
├── public/               # Screenshots, resume.pdf, robots.txt
└── tools/mockups/        # HTML sources for generated screenshots
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production build

```bash
npm run build
npm run start
```

### Type check

```bash
npm run typecheck
```

### Smoke test

```bash
npm run build && npm run start
npm run smoke
```

## Content

All copy lives in `lib/data.ts` — profile, stats, hero words, skills, projects, services and social links. Edit it to customize the site.

## Deployment

Deployed on Vercel:

```bash
vercel --prod
```

## License

[MIT](LICENSE)
