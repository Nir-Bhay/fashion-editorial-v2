## 2024-05-01 - Native Tooltips and Dynamic Aria-Labels
**Learning:** Icon-only buttons benefit greatly from `title` attributes to provide native tooltips for sighted users. Additionally, any visual notification states (like an unread dot on a cart icon) must be explicitly communicated to assistive technologies by updating the element's `aria-label` (e.g., from 'Cart' to 'Cart with items').
**Action:** Always complement `aria-label` with `title` on icon-only interactive elements, and ensure `aria-label` text accurately reflects any dynamic visual indicators.
