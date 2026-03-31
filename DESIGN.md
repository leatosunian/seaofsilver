# Design System Specification: High-End Digital Engineering

## 1. Overview & Creative North Star: "The Neon Monolith"

This design system is built to position SOS Technology not just as a service provider, but as a high-end engineering laboratory. The Creative North Star is **"The Neon Monolith"**—an aesthetic defined by deep, architectural voids (darkness) punctuated by hyper-precise, luminescent data points (neon).

To move beyond "generic dark mode," we reject standard grey-box layouts. Instead, we utilize **intentional asymmetry** and **tonal depth**. Large, high-contrast typography acts as a structural element, while glassmorphism creates a sense of sophisticated machinery. The goal is a UI that feels like a premium terminal: authoritative, fast, and bleeding-edge.

---

## 2. Color Theory & Surface Architecture

The palette is anchored in `#0e0e0e` (Surface), providing a canvas where the `primary` neon green (#8eff71) feels like it’s emitting actual light.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. We define boundaries through **Background Color Shifts**. 
*   **Hero Section:** `surface` (#0e0e0e).
*   **Features Grid:** `surface-container-low` (#131313).
*   **Nested Cards:** `surface-container` (#1a1919).
This creates a seamless, "molded" look rather than a fragmented grid.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of smoked glass.
*   **Base:** `surface-dim` (#0e0e0e)
*   **Sectioning:** `surface-container-low` (#131313)
*   **Content Cards:** `surface-container-highest` (#262626)
*   **Floating Modals:** `surface-bright` (#2c2c2c) with 80% opacity and `backdrop-filter: blur(12px)`.

### Signature Textures: The "Lume" Gradient
For primary CTAs and high-impact hero elements, do not use flat colors. Apply a subtle linear gradient:
*   **From:** `primary` (#8eff71)
*   **To:** `primary_container` (#2ff801) at a 135-degree angle.
This adds "soul" and prevents the neon from looking like a flat CSS asset.

---

## 3. Typography: The Editorial Voice

We utilize a pairing of **Manrope** (Display/Headlines) and **Inter** (UI/Body) to balance technical precision with premium editorial flair.

*   **Display (Manrope):** Used for "Billboard" moments. Tighten letter-spacing (-0.04em) to create a dense, high-impact block of text.
*   **Headline (Manrope):** Use `headline-lg` (2rem) for section titles. Ensure these are always `on_surface` (Pure White) to maximize contrast against the dark void.
*   **Body (Inter):** All body text should use `body-lg` or `body-md`. For secondary information, use `on_surface_variant` (#adaaaa) to prevent visual fatigue.
*   **Labels (Inter):** Use `label-md` in **ALL CAPS** with +0.1em letter spacing for a "technical readout" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

We move away from Material shadows in favor of **Tonal Stacking**.

*   **The Layering Principle:** To "lift" a card, place a `surface_container_highest` element on a `surface_dim` background. The delta in luminance creates an optical lift more sophisticated than a drop shadow.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, use a large blur (32px) with 8% opacity of the `primary` color. This mimics the green light "leaking" onto the surface below.
*   **The "Ghost Border" Fallback:** For interactive inputs, use a "Ghost Border": `outline_variant` (#484847) at **20% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_container_low` at 70% opacity with a `backdrop-blur(20px)` for navigation bars. This allows content to bleed through as the user scrolls, maintaining a sense of space.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** `primary` background with `on_primary` (dark green) text. Radius: `md` (0.375rem). No border. Hover state: `primary_dim` with a 4px "bloom" (outer glow).
*   **Secondary:** Ghost style. Transparent background, `primary` Ghost Border (20% opacity), `primary` text.
*   **Tertiary:** `on_surface` text, no background. Use for low-priority actions like "Cancel."

### Cards & Lists
*   **Strict Rule:** No divider lines. Use `spacing-8` (2rem) to separate list items or subtle background shifts (`surface-container-low` vs `surface-container`).
*   **Interactive Cards:** On hover, transition the background from `surface-container` to `surface-bright` and shift the element 4px upwards.

### Input Fields
*   **State:** Default state uses `surface_container_highest` with a bottom-only "Ghost Border."
*   **Focus State:** The border animates to a full perimeter using the `primary` neon color, and the label moves to `primary` color.

### Data Chips
*   Small, sharp-edged (`sm` radius: 0.125rem). Background: `secondary_container` (#006d2f) with `on_secondary_fixed` text. This provides a "military-spec" tech look.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place a large `display-lg` headline on the left with significant white space (`spacing-24`) on the right to create an avant-garde layout.
*   **Embrace the Void:** Use the `surface` (#0e0e0e) background generously. Padding should be larger than you think is necessary (`spacing-16` or `spacing-20`).
*   **Focus on Micro-Interactions:** Buttons should feel "energized"—use fast transitions (150ms) for hover states.

### Don't:
*   **No Pure Black:** Never use #000000 for main surfaces; it kills the depth. Use the `surface` token (#0e0e0e).
*   **No High-Contrast Grids:** Avoid 1px white or grey borders. They make the UI look like a spreadsheet.
*   **No Rounded Corners:** Avoid `full` or `xl` radii unless it’s a specific brand asset. Stick to `sm` and `md` to maintain the "Software Factory" edge.
*   **No Generic Shadows:** Never use high-opacity black shadows. They look "dirty" on a dark theme. Use tonal shifts or tinted glows.