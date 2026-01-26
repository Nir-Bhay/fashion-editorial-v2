## 2026-01-22 - Accessible Color Swatches
**Learning:** Visual-only elements like color swatches are invisible to screen readers without explicit labels. Sighted users also benefit from tooltips to clarify ambiguous colors.
**Action:** Always wrap color selection divs in buttons with `aria-label` and `title` attributes. Use objects to store color data (name + class) instead of just class strings.
