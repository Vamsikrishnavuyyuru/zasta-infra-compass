
## Goal
Add a "Certifications" CTA at the bottom of the About Us page (below Core Values) and a new `/certifications` route displaying certificate cards in a responsive grid with an image lightbox. No existing sections, styles, or routes are modified.

## Changes

### 1. `src/pages/About.tsx` (append only, non-destructive)
Add a new `<section>` after the Core Values section containing a centered CTA button:
- Uses existing shadcn `Button` component
- Green theme via existing `bg-zasta-green-600 hover:bg-zasta-green-700` classes (matches other buttons on the site)
- `useNavigate()` → `/certifications`
- Label: "Certifications" with a lucide `Award` icon
- Spacing consistent with adjacent sections (`py-16` / `py-20`)

### 2. `src/pages/Certifications.tsx` (new file)
Structure mirrors `About.tsx` / `Credentials.tsx` for visual consistency:
- Wrapped in `<Layout>` (same Header + Footer + floating buttons)
- `<SEO>` with title "Our Certifications — Zasta Group" and matching description
- Hero: `SectionHeaderWithCity` with:
  - Title: "Our Certifications"
  - Subtitle: "Our certifications demonstrate our commitment to quality, compliance, and industry standards."
- Grid section:
  - `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8` inside `container mx-auto px-4`
  - Each card uses shadcn `Card` with `hover:shadow-xl transition-shadow hover:-translate-y-1 transition-transform`
  - Card contents: placeholder image (`/placeholder.svg`), title, optional issuing authority
  - Clicking image opens shadcn `Dialog` (lightbox) showing a large version of the same image
- Placeholder data array of 6 certificate entries (title, issuer, image = `/placeholder.svg`) so images can be swapped later without layout changes

### 3. `src/App.tsx`
Add lazy import + route:
```tsx
const Certifications = lazy(() => import("./pages/Certifications"));
<Route path="/certifications" element={<Certifications />} />
```
Placed above the catch-all `*` route. No other routes touched.

## Not touched
Header, Footer, About sections (Story, Stats, Vision/Mission, Core Values), existing routes, existing styles, `index.css`, `tailwind.config.ts`.

## Technical notes
- Reuses existing shadcn `Dialog` for the lightbox — no new dependencies.
- All colors via existing `zasta-green-*` tokens; no hardcoded hex values.
- Fully responsive via Tailwind breakpoints already used elsewhere in the project.
