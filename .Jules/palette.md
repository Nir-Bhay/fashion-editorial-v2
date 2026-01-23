# Palette's Journal

## 2024-05-24 - Accessibility in Color Filters
**Learning:** Icon-only buttons (like color swatches) are often implemented as empty divs or buttons with background colors, making them completely inaccessible to screen readers who only hear "button".
**Action:** Always map visual-only properties (like color classes) to semantic names and use them in `aria-label` and `title` attributes.
