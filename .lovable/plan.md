## Goal
Add "Certifications" as a top-level nav item between "About Us" and "Services", and remove the now-redundant "Certifications" CTA button from the bottom of the About Us page. The `/certifications` page and route already exist and remain unchanged.

## Changes

### 1. `src/components/Header.tsx`
Insert a new entry into the `navItems` array between `About Us` and `Services`:
```ts
{ name: 'Certifications', path: '/certifications' },
```
This single array drives both the desktop nav and the mobile hamburger menu, and the header is already the sticky header (`fixed w-full z-50`). So the new item automatically appears in:
- Desktop navigation
- Mobile hamburger menu
- Sticky header

Spacing, typography, hover effects, transitions, active state (`bg-zasta-green-100 text-zasta-green-600`), and responsive behavior are inherited from the shared `navItems.map(...)` render — no style changes needed.

### 2. `src/pages/About.tsx`
Remove the "Certifications CTA" `<section>` (the block containing the green `Certifications` button that navigates to `/certifications`). Also clean up now-unused imports (`Button`, `useNavigate`, `Award`) and the `navigate` constant if no longer referenced elsewhere on the page.

## Not touched
- `src/pages/Certifications.tsx` — content, images, lightbox, animations preserved as-is.
- `src/App.tsx` — `/certifications` route already registered.
- Footer, other pages, tokens, global styles.

## Result
Nav order: Home | About Us | Certifications | Services | Careers | Contact — identical styling and behavior across desktop, mobile, and sticky states. Active highlight on `/certifications` matches other items.
