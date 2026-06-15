## Goal
Strip every reference to "Conqual" (name + the conqual.net link) from the site. Keep the underlying offering, but rename/describe it generically as our "Construction Quality Management Platform". No other content, layout, routing, or feature changes.

## Files to edit

### 1. `src/components/HeroSection.tsx` (Slide 2)
- Title: keep "Construction Quality Management Software"
- Subtitle: change `"Conqual - Advanced field quality control with 2000+ checklists"` → `"Advanced field quality control with 2000+ checklists"`
- CTA: change `"Discover Conqual"` → `"Explore Our Services"`
- ctaAction: change `window.open("https://www.conqual.net/", "_blank")` → `navigate("/services")`

### 2. `src/components/home/ServicesSection.tsx`
- Card title: `"Conqual Digital Suite"` → `"Construction Quality Management Platform"`
- Description text unchanged (no Conqual word in it).

### 3. `src/components/home/TestimonialsSection.tsx`
- Testimonial content: `"Conqual has revolutionized our quality control process..."` → `"Their construction quality management platform has revolutionized our quality control process with real-time monitoring capabilities."`

### 4. `src/pages/Services.tsx`
- Service title: `"Conqual Digital Suite"` → `"Construction Quality Management Platform"`
- `detailedDescription`: replace `"Our proprietary Conqual software revolutionizes..."` → `"Our proprietary construction quality management platform revolutionizes construction quality management with AI-powered analytics, comprehensive checklists, real-time monitoring, and detailed reporting capabilities for enhanced project oversight."`

### 5. `src/pages/About.tsx` (timeline 2024 entry)
- Title: `"Launched Conqual - Construction Quality Management Software"` → `"Launched Our Construction Quality Management Software"`
- Description: unchanged (already generic).

### 6. `mem://features/hero-section`
- Remove the Conqual external-link line so it's not reintroduced later.

## Out of scope
No changes to routing, other slides, other services, styles, components, SEO meta beyond the strings above, or any other page/feature.
