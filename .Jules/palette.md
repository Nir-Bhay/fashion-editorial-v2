## 2024-05-22 - Sidebar Filter Accessibility
**Learning:** Visual-only filters (color swatches) and list-based navigation often lack semantic meaning and keyboard interaction in this codebase.
**Action:** Always refactor string-based filter arrays into object arrays to support `aria-label` and `title`. Convert non-interactive list items to `<button>` elements for keyboard accessibility.

## 2024-05-23 - Sidebar Size Selection Accessibility
**Learning:** Size selection buttons (XS, S, etc.) lacked `aria-label` attributes and keyboard focus states, creating an inconsistent experience compared to Color filters.
**Action:** Ensure all interactive filter options, even text-based ones like sizes, include explicit `aria-label` attributes and consistent `focus-visible` styling to support keyboard navigation.
