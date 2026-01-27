# Palette's Journal

## 2026-01-24 - Accessibility Gaps in Visual Filters
**Learning:** Icon-only buttons (like color swatches) were implemented without labels, making them invisible to screen readers and confusing for keyboard users due to lack of focus states.
**Action:** Always refactor color/image lists to object arrays `{ name, value, class }` to ensure `aria-label` and `title` can be populated, and verify focus rings are visible against the button background.
