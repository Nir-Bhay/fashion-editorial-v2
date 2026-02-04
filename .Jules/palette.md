## 2024-05-22 - Sidebar Filter Accessibility
**Learning:** Visual-only filters (color swatches) and list-based navigation often lack semantic meaning and keyboard interaction in this codebase.
**Action:** Always refactor string-based filter arrays into object arrays to support `aria-label` and `title`. Convert non-interactive list items to `<button>` elements for keyboard accessibility.

## 2026-01-24 - Navbar Icon Buttons
**Learning:** Icon-only buttons are frequently left without `aria-label` in this codebase, making them invisible to screen readers. Also, corruption in these files can be subtle (missing closing tags).
**Action:** When working on navigation components, always verify icon buttons have accessible names and ensure component syntax integrity.

## 2026-01-26 - Skip Link Navigation
**Learning:** Fixed navigation bars overlay content, so skip links must use z-index > 50 and absolute positioning to be visible when focused.
**Action:** Implement "Skip to content" links with `z-[60]` and `focus:absolute` to ensure they appear above sticky headers. Add `tabIndex="-1"` to the target container to fix focus management bugs.

## 2026-01-27 - Card Link Stacking Contexts
**Learning:** When implementing the "Card Link" pattern (link covering the card), careful z-index management is required. `z-index: 0` on a relative child container creates a local stacking context that can trap nested interactive elements (like buttons) below the overlay, making them unclickable.
**Action:** Avoid `z-0` on container elements inside cards. Ensure nested interactive buttons have a z-index higher than the overlay (e.g., `z-20` vs `z-10`) and share the same stacking context where possible.
