# H&A NYC Electrician — Content Brief
**QuickFlip Sites | Build Log**  
Date: May 2026  
Prospect: https://www.bestnycelectricianmanhattan.com/  
Template: PipeMonkey-Redesign  
Reference site: https://ae-nyc-plumbing.vercel.app/contact-us (contact page layout)

---

## Source Material Summary

- **Business Name:** H&A NYC Electrician
- **Primary Phone:** (646) 351-0882
- **Secondary Phone:** (646) 798-4788 (WEST — not used in build; use primary only)
- **Address:** 40 Fulton Street, New York, NY 10038
- **Hours:** Mon–Sun, 24 Hours (no overtime charges)
- **Service Area:** All of Manhattan (full ZIP code list extracted from source site)
- **Social Media:** Facebook (HaNycElectrician), Twitter (nyc_electrician), Yelp (h-and-a-nyc-electrician-new-york)
- **License:** State of New York electrical contractor
- **Differentiators:** Free estimates with locked pricing, drug-tested techs, 24/7 no overtime, 5-star rated, residential + commercial + industrial capability

---

## Service Inventory (from source site)

Source site had significant duplication. Below is the de-duplicated inventory:

1. Residential Electrician
2. Commercial Electrician
3. 200 Amp Panel Upgrades
4. Home Rewires
5. Aluminum Wire Replacement
6. Knob and Tube Wiring Replacement
7. Cloth Insulated Wire Replacement
8. Electric Vehicle (EV) Charger Installation
9. Generator Installation
10. Electrical Circuit Installations
11. Lighting Installation Service
12. Ceiling Fan Installation
13. Landscaping Lighting Service
14. GFI Electrical Outlets
15. Grounding Electrical Service
16. Whole House Power Surge Protection
17. Home Safety Inspections
18. Electrical Troubleshooting
19. Smoke Detector Installation
20. Remodel and Renovation
21. Property Management Electrical Service
22. Service Calls

---

## Services Consolidated

The source site listed many services twice under slightly different names. Consolidations made:

| Consolidated Into | Removed Duplicates |
|---|---|
| 200 Amp Panel Upgrades | "Panel Upgrades" (generic) |
| Home Safety Inspections | "Free Home Safety Inspection" |
| Electrical Circuit Installations | "Electric Circuit Installation" |
| Grounding Electrical Service | "Ground Electrical Service" |
| Lighting Installation Service | "Light Installation Service" |
| Remodel and Renovation | "Renovation and Remodels" |
| Service Calls | "Services Calls" |
| Property Management Electrical Service | "Property Managers Electrical Service" |
| Whole House Power Surge Protection | "Power Surge Installation" |

**Not included as services:** "Free Over The Phone Help" and "Free Electrical Estimate" — treated as value props, not billable services. These are referenced in copy throughout the site instead.

---

## Pages Built & Content Decisions

### Homepage (app/page.tsx)
- Template structure unchanged: Hero → Announcements (How It Works) → Insights (Services accordion) → Testimonial → HomeCTA
- All copy rewritten for H&A NYC Electrician / electrical trade

### Hero.tsx
- Headline: "Manhattan's Licensed Electricians — Available 24/7"
- Subhead emphasizes panel upgrades, rewires, EV chargers, generators
- CTA: Call (646) 351-0882
- Video placeholder retained — [TODO: Replace with client video or image]

### Announcements.tsx (How It Works)
- 3-step process: Diagnose → Free Quote → Fix & Clean Up
- Buttons: Call (646) 351-0882 | See All Services

### Difference.tsx (Trust Stats)
- 24/7 — availability, no overtime
- 5★ — links to Yelp reviews
- Free — estimates, price locked before start

### Insights.tsx / AccordionItems.tsx
- 4 accordion services: Panel Upgrades | Home Rewires | EV Charger Installation | Electrical Troubleshooting

### Testimonial.tsx
- 3 placeholder reviews generated — all flagged with `// TODO: Replace with real review`

### HomeCTA.tsx
- Headline: "Electrical Problem? Call Now."
- Phone: (646) 351-0882

### About Us (data/channel/ha-nyc-electrician.tsx)
- Full channel data file written with extracted copy from prospect site
- Bio, services list, testimonial quote, emergency CTA all populated

### Contact Page (app/contact-us/page.tsx)
- Matches A&E NYC Plumbing layout
- **Expanded form:** `align-items: stretch` on grid + flex column on form + `flex: 1` on textarea wrapper so form fills full height of right column on desktop
- Service dropdown includes all 22 services
- Google Maps embed centered on Manhattan
- Address and hours populated from source site

### Service Areas (app/service-areas/page.tsx)
- 3 regions: Upper Manhattan | Midtown Manhattan | Lower Manhattan
- Full neighborhood list from source site ZIP code data

### FAQs (app/general-faqs/page.tsx)
- 8 FAQs generated — electrician-specific, NYC-focused
- Topics: licensing, overtime, estimates, panel upgrades, legacy wiring, multi-unit buildings, permits, GFI outlets

### Gallery (app/gallery/page.tsx)
- 4 placeholder items: Panel Upgrade | Home Rewire | EV Charger | Lighting
- All flagged [TODO: Replace with real photos]

### Blog (app/blog/page.tsx)
- 6 placeholder posts with realistic electrician/NYC titles
- All flagged [TODO: Link to full article]

### Privacy Policy (app/privacy-policy/page.tsx)
- Updated company name to H&A NYC Electrician
- Address and phone updated

---

## Navigation Changes

**Template default:** Home | Services | FAQs | Contact (4 items)  
**Built nav:** Home | Services | Service Areas | FAQs | Contact (5 items)  
**Reason:** Manhattan neighborhood coverage is a key differentiator — added Service Areas to nav.

---

## Copy Generation Log

The following content was generated (no equivalent on source site):

- All FAQ answers (source site had no FAQ section)
- Testimonial placeholder reviews (source site had no review quotes — only a link to Google)
- Blog post titles and excerpts (6 entries)
- Service area neighborhood descriptions (using ZIP codes from source site)
- Channel data learnMore section (expanded from thin source copy)
- Accordion step-by-step content for 4 services

All other copy was extracted or tightened from the source site.

---

## Social Icons in Footer

Three social channels implemented in `Footer.tsx`:
- **Facebook** — `icon-facebook` icomoon class → https://www.facebook.com/HaNycElectrician
- **Twitter/X** — `icon-twitter` icomoon class → https://twitter.com/nyc_electrician
- **Yelp** — inline SVG (no icomoon glyph available) → https://www.yelp.com/biz/h-and-a-nyc-electrician-new-york

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Hero video/image | `components/custom/Hero.tsx` | Replace NCCER video `<source src>` with real electrical job footage or photo |
| Announcements image | `components/custom/Announcements.tsx` | Replace `/images/IMG_9688...` backgroundImage with real team/job photo |
| Difference trust photo | `components/custom/Difference.tsx` | Replace `<VapeImage src>` with real job photo |
| Accordion images (×4) | `lib/constants/AccordionItems.tsx` | 4 service images — panel, rewire, EV charger, troubleshooting |
| About Us hero image | `data/channel/ha-nyc-electrician.tsx` → `hero.imageBg` | Job site or team photo |
| About Us flex feature image | `data/channel/ha-nyc-electrician.tsx` → `flexFeature.imageSrc` | Emergency CTA photo |
| Service detail hero | `app/craft-catalog/[slug]/page.tsx` → `PLACEHOLDER_BG` | One photo per service slug (or one good general electrical photo) |
| Gallery photos (×4) | `app/gallery/page.tsx` → `galleryItems[].image` | Real job photos |
| Contact page hero | `app/contact-us/page.tsx` → `<CraftHero bgImage>` | Real electrical job photo |
| Logo (header) | `/public/logos/logo-94.svg` | Replace with H&A logo |
| Logo (footer + nav) | `/public/logos/logo-long.svg` | Replace with H&A horizontal logo |
| Real testimonials | `components/custom/Testimonial.tsx` | Replace 3 placeholder reviews with real Google reviews |
| Contact form backend | `app/contact-us/page.tsx` | Wire up form action to JotForm, HubSpot, Gravity Forms, etc. |
| Google Maps embed | `app/contact-us/page.tsx` | Currently centered on Manhattan island — confirm or pin to exact address |
| Blog articles | `app/blog/page.tsx` | Replace placeholder posts with real content before publishing |
| Email address | Multiple files | No email found on source site — confirm and add if available |
| Secondary phone | `data/channel/ha-nyc-electrician.tsx` | WEST: (646) 798-4788 — confirm whether to use and where |

---

## TypeScript Safeguards Applied

All four known TS build issues from previous builds were proactively addressed:

1. **Named vs. default export** — `data/programs.tsx` exports both `export const programsData` AND `export default programsData` to satisfy any import style
2. **Empty array typing** — `partners: PartnerItem[]` explicitly typed even though empty
3. **CATEGORIES/DISCIPLINES** — retained in `crafts.ts` with `as const` (though unused by v2 filter-bar-removed client)
4. **PartnerItem field names** — confirmed `{ href, imgSrc, alt }` against `data/programs.tsx` type definition before use
