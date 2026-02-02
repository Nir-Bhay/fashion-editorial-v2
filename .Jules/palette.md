## 2024-05-22 - Sidebar Filter Accessibility
**Learning:** Visual-only filters (color swatches) and list-based navigation often lack semantic meaning and keyboard interaction in this codebase.
**Action:** Always refactor string-based filter arrays into object arrays to support `aria-label` and `title`. Convert non-interactive list items to `<button>` elements for keyboard accessibility.


