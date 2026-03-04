

## Plan: Add 4th Hero Slide — "NirmanJobs"

### Summary
Add a new slide to the `slides` array in `HeroSection.tsx`. No other files or components need changes — the existing `HeroSlider`, `HeroContent`, `HeroStats`, and `SlideIndicators` all work dynamically based on the slides array.

### Changes

**File: `src/components/HeroSection.tsx`** (only file modified)

Add a 4th slide object after the existing 3rd slide (line 35):

```ts
{
  title: "Smart Hiring for Construction Industry",
  subtitle: "NirmanJobs – Connecting employers and skilled professionals across infrastructure, real estate, power, transportation, and industrial sectors through a modern digital recruitment platform.",
  cta: "Explore NirmanJobs",
  ctaAction: () => window.open("https://nirmanjobs.com/", "_blank"),
  bg: "bg-gradient-to-br from-zasta-green-900 via-zasta-gold-600 to-zasta-green-700",
},
```

### Technical Details

- **Primary button** ("Explore NirmanJobs"): Uses `window.open` with `_blank` to open the external link in a new tab, since the existing `ctaAction` pattern supports any callback function.
- **Secondary button** ("Work With Us"): Already rendered for all slides via `onWorkWithUs` — no change needed.
- **Statistics section**: `HeroStats` is shared across all slides — no change needed.
- **Slide indicators**: `SlideIndicators` uses `slides.length` dynamically — will automatically show 4 dots.
- **Auto-rotation timer**: Already uses `slides.length` — will cycle through 4 slides.
- **No existing slides are modified.** No other sections or pages are touched.

