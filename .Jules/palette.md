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

## 2026-01-26 - Transient Visual Feedback Accessibility
**Learning:** Temporary visual states (like "Added to cart" checkmarks that revert after a timeout) can be completely missed by screen reader users if they aren't explicitly announced.
**Action:** When adding transient visual feedback, complement it with an `aria-live="polite"` region (e.g., `<div aria-live="polite" className="sr-only">`) to announce the state change textually. Also, ensure timeouts are cleaned up in `useEffect` to prevent memory leaks on unmount.

## 2026-01-26 - Focus Visible on Stretched Links
**Learning:** Applying `focus-visible` ring utilities to a parent card container when the actual focusable element is a stretched link (`after:absolute after:inset-0`) often results in inconsistent or missing focus outlines because the parent isn't receiving focus, the child is.
**Action:** Apply `focus-visible` styling directly to the pseudo-element of the focused link (e.g., `focus-visible:after:ring-2 after:rounded-xl`) to ensure the focus ring accurately outlines the clickable area and respects border radius.
