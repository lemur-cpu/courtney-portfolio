# Courtney Quinn — Portfolio

Personal portfolio site for Courtney Quinn, full-stack software engineer.

Built with Next.js, TypeScript, and CSS Modules. No Tailwind. No component libraries.

**Live site:** [courtney-portfolio-peach.vercel.app](https://courtney-portfolio-peach.vercel.app/)

---

## Stack

| | |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | CSS Modules + CSS custom properties |
| **Animation** | Framer Motion |
| **Fonts** | Cormorant Garamond, DM Sans, Courier Prime |
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

Warm neutral palette, Cormorant Garamond display type, editorial grid, restrained motion. Light and dark mode supported.

```
Accent:     #C9857A
Background: #F2EEE8  (light)
Background: #141412  (dark)
```

---

Built by [Courtney Quinn](https://github.com/lemur-cpu)
