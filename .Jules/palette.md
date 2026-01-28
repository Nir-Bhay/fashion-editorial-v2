## 2026-01-01 - Accessible Color Filters
**Learning:** Visual-only selectors (like color dots) are completely invisible to screen readers without accessible names. They also lack affordance for color-blind users who might not distinguish "Muted Taupe" from "Grey".
**Action:** Always wrap visual choices in objects with a `name` property and map it to `aria-label` and `title` attributes.
