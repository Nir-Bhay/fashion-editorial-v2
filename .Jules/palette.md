## 2026-01-20 - Sidebar Color Accessibility
**Learning:** Visual-only selection elements (like color swatches) were completely inaccessible to screen readers, missing both `aria-label` and textual representation.
**Action:** Always wrap visual-only selection options in objects containing human-readable labels, and apply them via `aria-label` and `title`.
