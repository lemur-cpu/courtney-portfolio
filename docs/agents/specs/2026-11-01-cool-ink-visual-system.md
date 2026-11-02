# Cool ink visual system

**Status:** Approved (portfolio design refresh 1A / 2A)  
**Date:** 2026-11-01 (America/Denver)

## Ruling

The prior warm cream + Cormorant Garamond + terracotta look is **retired**. Do not restore it under the “preserve existing site visual language” exception — that system was intentionally replaced to avoid a generic AI-portfolio aesthetic.

## Current system

| Token | Light | Dark |
|---|---|---|
| `--color-bg` | `#EEF0F2` | `#121416` |
| `--color-text` | `#1A1C1E` | `#E6E8EA` |
| `--color-accent` | `#1F6F6A` | `#4A9B94` |
| Display face | Instrument Serif (`--font-display` via next/font) | |
| Body / mono | DM Sans / Courier Prime | |

Accent is structural (focus rings, rules, CTA underlines) — not a filled “CTA pink” pill.

## Craft constraints

- CSS Modules + tokens only. No Tailwind / UI kits.
- Default: no decorative cards. Work items are flat (type + image + hairlines).
- No macOS traffic-light chrome on screenshots.
- Motion budget: hero clip-path reveal + one work-section entrance + functional modal/nav motion. Honor `prefers-reduced-motion`.
- Home: Hero → Selected Work → About snippet → Footer. Skills live on About only.
