## 2026-01-26 - Accessible Color Filters
**Learning:** Visual-only elements like color swatches are completely invisible to screen readers without explicit labels. The initial codebase used CSS classes for colors without any text equivalent.
**Action:** When implementing visual choices (colors, patterns), always include an accessible name (via `aria-label`) and visible tooltip (via `title`) so all users know what they are selecting.
