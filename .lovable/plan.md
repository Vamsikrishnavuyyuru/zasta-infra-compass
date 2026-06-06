## Plan: Verified Business (D-U-N-S) Footer Section + Credentials Page

### 1. Footer "Verified Business" section
**File:** `src/components/Footer.tsx`

Insert a new section directly above the existing copyright bar (above `border-t border-gray-800 mt-8 pt-8`).

Layout:
- Full-width band with subtle top border separator and `bg-gray-900` (matches footer).
- Centered card / inline group with:
  - Small shield-check icon (lucide `ShieldCheck` or `BadgeCheck`) in `zasta-green-400`.
  - Label: **"Verified Business Identity"** (white, semibold, tracking-wide).
  - Company name: **Zasta Enterprises Private Limited**.
  - D-U-N-S Number: **77-141-6338** rendered in a `font-mono` pill (`bg-white/5 border border-zasta-green-400/30 rounded-md px-3 py-1`), `select-all` so users can copy without breaking layout, `whitespace-nowrap` to prevent wrap.
  - Small `Info` icon next to the number wrapped in a shadcn `Tooltip` (already used in App via `TooltipProvider`) with the text: *"A D-U-N-S Number is a unique business identifier issued by Dun & Bradstreet and used globally to verify business entities."*
- Hover effects: pill gets `hover:border-zasta-green-400 hover:bg-white/10 transition-colors`; icon gains subtle scale on group hover.
- Responsive: `flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left`.

No changes to existing footer columns, social links, contact info, or copyright row.

### 2. Optional Company Credentials page
**New file:** `src/pages/Credentials.tsx` — wrapped in `<Layout>`, mirrors style of `Privacy.tsx` (Card-based, container, gray-50 background).

Sections (each a shadcn `Card` with a lucide icon header):
- **D-U-N-S Number** — `BadgeCheck` icon, number in mono pill, tooltip explanation.
- **Company Registration Details** — `Building2` icon, legal name, CIN/registration info (placeholder values the user can edit).
- **Certifications** — `Award` icon, lists existing references already mentioned in memory (D&B DUNS Registered) plus space for ISO etc.
- **Business Verification Information** — `ShieldCheck` icon, short statement on verification.
- **Contact Information** — `Phone`/`Mail`/`MapPin`, reuses values from `Footer.tsx` (`+91 8977731709`, `info@zastagroup.com`, Nizampet address).

**Route:** add `<Route path="/credentials" element={<Credentials />} />` in `src/App.tsx` (lazy-loaded like other pages), placed above the catch-all.

**Footer link:** add "Credentials" link in the Verified Business band ("View company credentials →") pointing to `/credentials`. No nav header changes (keeps existing structure intact).

### Technical notes
- All colors via existing tokens (`zasta-green-*`, `gray-*`) — no new tokens needed.
- Tooltip uses existing `TooltipProvider` already mounted in `App.tsx`.
- `select-all` + `whitespace-nowrap` + `font-mono` keep the DUNS number copy-friendly and prevent line breaks on small screens.
- No backend, no data model, no edits to Hero, Careers, or other sections. Existing functionality preserved.

### Files touched
- `src/components/Footer.tsx` (insert section above copyright row)
- `src/pages/Credentials.tsx` (new)
- `src/App.tsx` (one lazy import + one route)
