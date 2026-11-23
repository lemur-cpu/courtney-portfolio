# Agent instructions — courtney-portfolio

Personal portfolio for Courtney Quinn. Next.js App Router, TypeScript, CSS Modules, Framer Motion. No Tailwind. No component libraries. Live site: https://courtneyquinn.dev/

This file is the source of truth for agents in this repo. Account-level workflow lives in Cursor User Rules and the `engineering-workflow` skill. Stack-specific facts live here.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # required before calling the work done
```

There is no unit-test script yet. Do not add a test runner unless the change needs one. UI changes are verified in the browser against the local dev server.

## Layout

```
src/app/           routes (about, work case studies, resume)
src/components/    UI
src/styles/        global styles and design tokens
public/            images, resume.pdf
```

Import with `@/` as in `tsconfig.json`.

## Coding

- Strict TypeScript. Semicolons. `const` over `let`. Explicit return types on exported functions.
- camelCase identifiers. PascalCase components.
- Keep the editorial design: CSS Modules, existing tokens, restrained motion. Don't introduce Tailwind or a component library.
- Light and dark mode must both work for visual changes.
- Fail fast. Don't swallow errors in resume or image paths.

## Git and PRs

See `.cursor/rules/git-and-prs.mdc`. Conventional commits. Explicit `git add <path>`. Never `git add -A`. Never force-push. Never merge PRs. Never use the `cursor/` branch prefix; rename Cloud Agent branches before opening a PR.

## Testing

- `npm run lint` and `npm run build` must pass for the files you touched.
- Exercise the changed page in the browser: click, type, navigate. A screenshot is not verification. Check light and dark. Check mobile and desktop if layout changed.

## learn!

After a correction, say `learn!` and add a 1-to-4-sentence learning to the Learnings section of the most relevant file under `.cursor/rules/`, or to `docs/agents/learnings/`.
