## 2024-05-22 - Sidebar Filter Accessibility
**Learning:** Visual-only filters (color swatches) and list-based navigation often lack semantic meaning and keyboard interaction in this codebase.
**Action:** Always refactor string-based filter arrays into object arrays to support `aria-label` and `title`. Convert non-interactive list items to `<button>` elements for keyboard accessibility.

## 2024-05-23 - Interactive Element Focus States
**Learning:** Default browser focus rings are often suppressed or invisible on custom-styled buttons (like size selectors and icon buttons), making keyboard navigation impossible.
**Action:** Systematically add `focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal` (or appropriate color) to all interactive elements to ensure visibility without affecting mouse users.
