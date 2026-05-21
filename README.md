# Pulsemation

**Intelligent Automation as a Service** — A marketing website for a B2B automation startup, built with React, Three.js, and Tailwind CSS.

Pulsemation builds, deploys, and manages AI-powered automation workflows for modern teams. This repo is the company's single-page marketing site with immersive 3D visuals, performance-adaptive rendering, and PWA support.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion |
| Styling | Tailwind CSS 3 |
| Font | Inter (Google Fonts) |
| Service Worker | Custom cache-first SW (PWA) |
| Containerization | Docker + Nginx (multi-stage build) |

## Features

- **Immersive Hero** — Full-screen Three.js 3D scene with animated particle field and floating torus knot with glass material
- **Performance Adaptation** — A custom `usePerformance` hook detects device capabilities (CPU cores, RAM, mobile, reduced-motion preference) and adjusts particle counts, geometry complexity, and animations accordingly
- **Lazy-Loaded Sections** — Hero3D, Services, About, Contact, and Footer are code-split via `React.lazy()` for fast initial load
- **Hash-Based Sub-Pages** — Dedicated About, Careers, Privacy Policy, and Terms of Service pages accessible via URL hash (`#page/about`, `#page/privacy`, etc.)
- **Contact Form** — Sends submissions to an n8n webhook with animated success/error toast notifications
- **PWA Ready** — Service worker with cache-first strategy and web app manifest for installable experience
- **Responsive Design** — Mobile-first with hamburger navigation and adaptive layouts
- **Dockerized** — Multi-stage Dockerfile with Nginx for production deployment

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repo-url>
cd pulsemation
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server (default: `http://localhost:5173`).

### Build

```bash
npm run build
```

Produces an optimized production build in `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```
pulsemation/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite config with chunk splitting
├── tailwind.config.js          # Tailwind config with custom pulse palette
├── postcss.config.js           # PostCSS config (Tailwind + Autoprefixer)
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yml          # Docker Compose (exposes port 8081)
├── nginx.conf                  # Nginx config for SPA + caching
├── .env                        # Environment variables
├── public/
│   ├── favicon.jpg             # Favicon / app icon
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker (cache-first)
└── src/
    ├── main.jsx                # Entry point (SW registration, ReactDOM render)
    ├── App.jsx                 # Root component with hash-based routing
    ├── index.css               # Tailwind imports + custom styles
    ├── hooks/
    │   └── usePerformance.js   # Device capability detection hook
    └── components/
        ├── Navbar.jsx          # Fixed top nav with scroll-aware glass bg
        ├── Hero3D.jsx          # Full-screen 3D hero section
        ├── ParticleField.jsx   # Animated 3D particle system
        ├── FloatingGeometry.jsx # Rotating torus knot with glass material
        ├── Services.jsx        # Service offerings grid (4 cards)
        ├── About.jsx           # Company story, stats, process timeline
        ├── Contact.jsx         # Contact form → n8n webhook
        ├── Footer.jsx          # Footer with brand, links, contact, socials
        ├── AboutPage.jsx       # Dedicated about sub-page
        ├── CareersPage.jsx     # Careers sub-page
        ├── PrivacyPage.jsx     # Privacy policy sub-page
        └── TermsPage.jsx       # Terms of service sub-page
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_N8N_WEBHOOK_URL` | n8n webhook URL for contact form submissions |

Create a `.env` file in the project root:

```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/endpoint
```

## Performance Adaptation

The `usePerformance` hook classifies devices into three tiers based on `navigator.hardwareConcurrency`, `navigator.deviceMemory`, mobile detection, and `prefers-reduced-motion`:

| Tier | Criteria | Particles | Geometry | Environment | Orbit Controls |
|------|----------|-----------|----------|-------------|----------------|
| Low | ≤2 cores, ≤2 GB RAM, or mobile/reduced-motion | 300 | Low poly | Disabled | Disabled |
| Medium | 3-4 cores or 3-4 GB RAM | 800 | Medium | Enabled | Disabled |
| High | Everything else | 2000 | High poly | Enabled | Enabled |

## Deployment

### Docker

```bash
docker compose up --build
```

The site will be available at `http://localhost:8081`.

The Dockerfile uses a multi-stage build:
1. **Builder** — `node:20-slim` installs deps and runs `vite build`
2. **Production** — `nginx:1.27-alpine` serves the built assets with aggressive caching and SPA fallback

### Static Hosting

The `dist/` folder (produced by `npm run build`) contains purely static files and can be deployed to any static hosting provider (Netlify, Vercel, Cloudflare Pages, S3, etc.). Ensure SPA fallback is configured to serve `index.html` for all routes.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## PWA

The service worker (`public/sw.js`) uses a cache-first strategy:
- **Install:** Pre-caches `/` and `/index.html`
- **Activate:** Cleans old caches
- **Fetch:** Serves from cache first, falls back to network, updates cache

The service worker is only registered on devices with more than 2 CPU cores and more than 2 GB RAM to skip low-end devices.

## License

All rights reserved. This project is proprietary software owned by Pulsemation.

## Contact

- **Phone:** [+254780237794](tel:254780237794)
- **Email:** [pulsemationltd@gmail.com](mailto:pulsemationltd@gmail.com)
- **Founder:** Nehemiah Kibet
