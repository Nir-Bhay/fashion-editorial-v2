## 2024-05-22 - Sidebar Filter Accessibility
**Learning:** Visual-only filters (color swatches) and list-based navigation often lack semantic meaning and keyboard interaction in this codebase.
**Action:** Always refactor string-based filter arrays into object arrays to support `aria-label` and `title`. Convert non-interactive list items to `<button>` elements for keyboard accessibility.

## 2026-01-24 - Navbar Icon Buttons
**Learning:** Icon-only buttons are frequently left without `aria-label` in this codebase, making them invisible to screen readers. Also, corruption in these files can be subtle (missing closing tags).
**Action:** When working on navigation components, always verify icon buttons have accessible names and ensure component syntax integrity.

## 2026-01-26 - Skip Link Navigation
**Learning:** Fixed navigation bars overlay content, so skip links must use z-index > 50 and absolute positioning to be visible when focused.
**Action:** Implement "Skip to content" links with `z-[60]` and `focus:absolute` to ensure they appear above sticky headers. Add `tabIndex="-1"` to the target container to fix focus management bugs.

## 2026-01-26 - Clickable Card Pattern
**Learning:** When making an entire card clickable using a stretched link (`after:absolute after:inset-0`), any nested interactive elements (like buttons) must be explicitly positioned (e.g., `relative`) and z-indexed higher than the link overlay to remain clickable.
**Action:** Use `z-10` for the card link overlay and `z-20` for nested actions. Ensure the card container is `relative` or `article`.
## 2026-04-25 - Transient Success State Accessibility
**Learning:** Relying solely on changing the 'aria-label' on a button when its state temporarily changes (like an 'Added' success state) is unreliable for screen readers. Using an `aria-live="polite"` visually hidden region that dynamically inserts text (e.g. '${product.name} added to cart') provides a much more robust and understandable experience for screen reader users.
**Action:** Use an `aria-live` region combined with `setTimeout` (managed carefully via `useEffect` with proper cleanup) to reliably announce transient success states to assistive technologies without interrupting the user's flow.
## 2026-05-09 - Icon-Only Button Accessibility
**Learning:** When using icon-only buttons with visual state indicators (like a red dot for a non-empty cart), it is critical to not only pair `aria-label` with `title` for sighted users on hover, but also explicitly reflect the state in the `aria-label` itself (e.g., changing 'Cart' to 'Cart with items') so screen readers are informed. Decorative indicator elements should receive `aria-hidden="true"`.
**Action:** Always evaluate parent `aria-label`s for state changes when implementing transient visual notification indicators on icon-only buttons.
