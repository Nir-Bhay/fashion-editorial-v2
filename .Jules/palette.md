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
## 2026-04-17 - Transient UX Feedback with Screen Readers
**Learning:** When adding transient visual feedback (like an 'Added' checkmark that reverts after 2 seconds), pairing the visual change with an `aria-live="polite"` region is the most robust way to ensure screen reader users receive the feedback without focus being forcibly moved or the context completely wiped out. Simply swapping icons isn't enough.
**Action:** Next time I add temporary success states to buttons, always wrap the feedback text in an `aria-live` region and ensure a  properly clears the timeout to avoid memory leaks.
## 2025-01-20 - Transient UX Feedback with Screen Readers
**Learning:** When adding transient visual feedback (like an 'Added' checkmark that reverts after 2 seconds), pairing the visual change with an `aria-live="polite"` region ensures screen reader users receive the feedback without focus forcibly moving.
**Action:** Next time I add temporary success states to buttons, always wrap the feedback text in an `aria-live` region and ensure a `useEffect` properly clears the timeout to avoid memory leaks.
