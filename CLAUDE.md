# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Single-page marketing site for **SOS Technology** — a Next.js 16 + React 19 + Tailwind CSS v4 app. The entire page is assembled in `app/page.tsx` as a sequence of section components from `app/components/`.

**Sections (in order):** Navbar → Hero → ClientLogos → WhyUs → Services → WorkMethodology → Portfolio → Testimonial → Metrics → Contact → Footer

**Fonts:** Manrope (`font-headline`) for display/headlines, Inter (`font-body`) for UI/body — loaded via `next/font/google` and exposed as CSS variables in `layout.tsx`. Material Symbols Outlined icon font loaded via Google Fonts `<link>` in `<head>`.

**Styling:** Tailwind v4 with a custom `@theme` block in `globals.css`. All design tokens (colors, fonts, radii) are defined there. The `dark` class is hardcoded on `<html>` — no light mode.

## Design System ("The Neon Monolith")

Defined in `DESIGN.md`. Key rules to follow:

- **Palette:** Background `#050505`, surface `#0a0a0a`, primary neon green `#8eff71`, primary gradient to `#2ff801` at 135°
- **No borders for sectioning** — use background color shifts between sections instead of 1px lines
- **No pure black** (`#000000`) — use `bg-background` (`#050505`) or `bg-surface`
- **No large border radii** — stick to `rounded` (`0.125rem`) or `rounded-lg` (`0.25rem`)
- **No black drop shadows** — use tonal shifts or primary-tinted glows (`blur-[32px]` at 8% primary opacity)
- **Typography scale:** `display-lg` / `headline-lg` in Manrope tight letter-spacing (`-0.04em`); body in Inter; labels in Inter ALL CAPS with `tracking-widest`
- **Glassmorphism:** `.glass-card` utility class (defined in `globals.css`) for floating/overlay elements
- **Utility classes** available in `globals.css`: `.glass-card`, `.text-gradient`, `.technical-line`, `.dashboard-grid`, `.hero-pattern`, `.scanline`
- **Interactive cards:** hover lifts 4px (`-translate-y-1`) and shifts background to brighter surface tone
- **Button primary:** neon green background, dark text, `rounded`, hover bloom (outer glow using `shadow-[0_0_12px_theme(colors.primary)]`)
