# Fashion Editorial - AI Coding Agent Instructions

## Project Overview

This is a high-end, editorial-style e-commerce homepage built as a **single-page React application** using Vite and Tailwind CSS. The project emphasizes minimalist luxury design with sophisticated typography, smooth animations, and accessibility-first interactions.

## Architecture & Design Philosophy

### Component Structure
- **Single-page layout** assembled in [src/App.jsx](../src/App.jsx) - no routing library
- **Flat component hierarchy** in `src/components/` - all components are at same level
- **No state management** - currently a static presentation layer (no cart, auth, or data fetching)
- Components: `Navbar`, `Hero`, `BrandStatement`, `Sidebar`, `ProductGrid`, `ProductCard`

### Design System (Custom Tailwind Config)

**Custom Colors** defined in [tailwind.config.js](../tailwind.config.js):
- `warm-white` (#F5F4F2) - primary background
- `charcoal` (#111111) - primary text
- `soft-gray` (#E6E6E6) - subtle backgrounds
- `muted-taupe` (#CFC8BE) - borders, secondary text
- `sunset-orange` (#F4A340) - accent/hover color

**Typography Scale** (responsive, clamp-based):
- `text-display`: 64-96px, bold, tight tracking - for hero headlines
- `text-section`: 32-40px, semi-bold - for section headings
- `text-body`: 18px - for body content
- `text-meta`: 14px - for metadata, counts

**Key Pattern**: Use clamp() for fluid typography that scales with viewport

### Component Patterns

**1. Hover Interactions** - Consistent pattern across all interactive elements:
```jsx
className="group-hover:scale-105 transition-transform duration-700"
className="hover:text-sunset-orange transition-colors"
```
- Use `group` for parent-triggered child animations (see [ProductCard.jsx](../src/components/ProductCard.jsx))
- Smooth, slow transitions (300-700ms) match editorial aesthetic

**2. Accessibility Requirements**:
- All interactive elements must have `focus-visible:ring-2` for keyboard navigation
- Use `aria-label` for icon-only buttons (see [Navbar.jsx](../src/components/Navbar.jsx))
- Include descriptive alt text for images
- Buttons need explicit focus states with ring offset

**3. Icon Usage**:
- Use `lucide-react` for all icons (Search, ShoppingBag, Heart, etc.)
- Standard size: `size={20} strokeWidth={1.5}`
- Icons in buttons should have hover color transitions

**4. Spacing & Layout**:
- Max container width: `max-w-[1600px]` with `mx-auto px-6`
- Grid system: 12-column grid (`grid-cols-12`) for complex layouts
- Use `aspect-[3/4]` for product images, `aspect-[16/10]` for hero images

## Development Workflow

### Commands
```bash
pnpm dev          # Start dev server on localhost:5173
pnpm build        # Production build to dist/
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
```

**Note**: Project uses `pnpm` (see [package.json](../package.json)) but npm also works

### ESLint Configuration
- **Flat config** format (modern ESLint 9.x) in [eslint.config.js](../eslint.config.js)
- Unused vars allowed if they match `^[A-Z_]` pattern (constants)
- React Hooks rules enforced via `eslint-plugin-react-hooks`

### Deployment
- Configured for **Vercel** with SPA fallback in [vercel.json](../vercel.json)
- `rewrites: [{ "source": "/(.*)", "destination": "/" }]` handles client-side navigation

## Key Conventions

1. **No PropTypes or TypeScript** - Project uses plain JSX without type checking
2. **Component exports**: Use `export default function ComponentName()` pattern
3. **Styling**: Tailwind utility classes only - no CSS modules or styled-components
4. **Images**: External URLs from Unsplash - no local image assets
5. **Sticky positioning**: Use `sticky top-28` for sidebar (accounts for navbar height)

## When Adding New Features

- **New components**: Place in `src/components/`, import in [src/App.jsx](../src/App.jsx)
- **Colors**: Use custom Tailwind colors from config - avoid arbitrary values like `bg-[#hex]`
- **Animations**: Add to Tailwind config if needed (see `animate-spin-slow` example in Hero)
- **Responsive**: Mobile-first approach - default styles for mobile, `md:` and `lg:` prefixes for larger screens

## Common Patterns to Follow

**Button Style** (primary CTA):
```jsx
<button className="px-12 py-4 border border-charcoal text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 rounded-sm">
```

**Product Card Container**:
```jsx
<div className="group cursor-pointer">
  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
    {/* Image with group-hover effects */}
  </div>
</div>
```

## What This Project Is NOT

- ❌ Not a multi-page application - no React Router
- ❌ Not connected to a backend - all data is hardcoded
- ❌ Not using TypeScript - plain JavaScript only
- ❌ Not using CSS-in-JS or Sass - pure Tailwind utilities
