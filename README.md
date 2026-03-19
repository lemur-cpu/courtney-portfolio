# Courtney Quinn — Portfolio

Personal portfolio site for Courtney Quinn, full-stack software engineer.

Built with Next.js, TypeScript, and CSS Modules. No Tailwind. No component libraries.

**Live site:** [courtneyquinn.dev](https://courtneyquinn.dev) ← update this once deployed

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS custom properties
- **Animation:** Framer Motion
- **Fonts:** Cormorant Garamond, DM Sans, Courier Prime
- **Hosting:** GitHub Pages / Vercel

## Project structure

src/
  app/                  — pages and routes
    work/[slug]/        — case study pages
    about/              — about page
    resume/             — resume route handler
  components/           — all UI components
  styles/               — global styles and design tokens

public/
  images/               — project screenshots and headshot
  resume.pdf            — resume (served via /resume route)

## Running locally

git clone https://github.com/lemur-cpu/courtney-portfolio.git
cd courtney-portfolio
npm install
npm run dev

Open localhost:3000.

## Design

Direction C from a planned design system: warm neutral palette, Cormorant Garamond display type, editorial grid, restrained motion. Light and dark mode supported.

Accent color: #C9857A  
Background: #F2EEE8 (light) / #141412 (dark)

---

Built by Courtney Quinn
