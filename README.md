# Courtney Quinn — Portfolio

Personal portfolio site for Courtney Quinn, full-stack software engineer.

Built with Next.js, TypeScript, and CSS Modules. No Tailwind. No component libraries.

**Live site:** [courtneyquinn.dev](https://courtneyquinn.dev/)

---

## Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | CSS Modules + CSS custom properties |
| **Animation** | Framer Motion |
| **Fonts** | Instrument Serif, DM Sans, Courier Prime |
| **Hosting** | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── resume/             # Resume route handler
│   └── work/
│       ├── wayfair/        # Wayfair case study
│       ├── keystroke/      # Keystroke case study
│       └── capstone/       # Capstone case study
├── components/             # All UI components
└── styles/                 # Global styles and design tokens

public/
├── images/                 # Project screenshots and headshot
└── resume.pdf              # Resume (served via /resume)
```

---

## Running Locally

```bash
git clone https://github.com/lemur-cpu/courtney-portfolio.git
cd courtney-portfolio
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

---

## Design

Cool ink editorial system: cool paper background, Instrument Serif display type, teal accent used structurally. Editorial grid, restrained motion. Light and dark mode supported.

```
Accent:     #1F6F6A
Background: #EEF0F2  (light)
Background: #121416  (dark)
```

Ruling: cream / terracotta / Cormorant Garamond is retired. See `docs/agents/specs/2026-11-01-cool-ink-visual-system.md`.

---

Built by [Courtney Quinn](https://github.com/lemur-cpu)
