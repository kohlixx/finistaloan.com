# FININSTA Premium Financial Services Platform

## Goal
Build a production-ready, conversion-focused financial services website for FININSTA with 15 public pages, interactive calculators, lead capture, WhatsApp and phone actions, an authenticated lead-management area, strong search metadata, and a polished mobile experience.

## Experience direction
- Create a custom premium fintech visual system using emerald, deep green, white, soft gray, and restrained gold accents.
- Use Montserrat for headings, Poppins for body copy, and Inter for financial figures.
- Combine a full-width family/homeownership hero image with refined glass surfaces, clear trust signals, subtle depth, and purposeful motion.
- Keep the experience fast and credible: restrained animation, accessible contrast, reduced-motion support, keyboard-friendly controls, and no distracting effects on touch devices.
- Add light/dark mode, sticky desktop navigation, glass mobile bottom navigation, WhatsApp/call actions, back-to-top, loading treatment, and responsive layouts.

## Public website
- Build shared site navigation, footer, mobile navigation, service menu, floating contact actions, theme control, and reusable conversion sections.
- Build `/` with the requested hero, trust statistics, service grid, “Why FININSTA,” EMI and eligibility calculators, document checklist, six-step process, banking partners, testimonials, FAQs, blog previews, and contact section.
- Build `/about` and `/contact` with FININSTA’s story, owner and service-area details, trust content, contact form, WhatsApp conversion path, and Delhi NCR map.
- Build 12 dedicated service pages:
  - `/loans/home-loan`
  - `/loans/plot-loan`
  - `/loans/plot-construction-loan`
  - `/loans/balance-transfer`
  - `/loans/top-up-loan`
  - `/loans/loan-against-property`
  - `/loans/od-dod-loan`
  - `/loans/personal-loan`
  - `/loans/business-loan`
  - `/loans/car-loan`
  - `/loans/used-car-loan`
  - `/investment-insurance`
- Give every service page distinct copy, benefits, indicative eligibility, document requirements, process, FAQs, relevant calculator defaults, and WhatsApp/application calls to action.
- Add supporting `/calculator` and `/blogs` experiences for navigation completeness without increasing the requested core 15-page count. The blog index will contain 20 structured SEO article templates with article detail routes.
- Add privacy and terms pages linked from the footer.

## Calculators and lead generation
- Build a live EMI calculator using the reducing-balance formula, with amount, annual interest, and tenure controls plus principal/interest visualization.
- Build an eligibility estimator using salary, age, employment type, city, requested amount, and current EMI, clearly labelled as an estimate rather than an approval promise.
- Validate all forms in the browser and on the server, include consent language, useful error/success states, and duplicate-submit protection.
- Send application, contact, and eligibility leads to the database with source, page, campaign parameters, selected service, timestamps, and status.
- Open a prefilled WhatsApp conversation to `+91 7827881951` after relevant actions; keep phone actions directly callable on mobile.
- Prepare document-upload interfaces with restricted file type/size validation and secure storage rules.

## Admin and data
- Enable Lovable Cloud for authentication, database, and document storage.
- Create protected administrator access with roles stored separately from user profiles and enforced server-side.
- Add `/admin` with summary metrics, lead-source and conversion charts, recent leads, loan/city breakdowns, and revenue-estimate inputs.
- Add lead search, filters, status workflow (New, Contacted, Documents Pending, Approved, Rejected, Disbursed), notes, document review, and CSV export.
- Create secure data structures for users/roles, leads, loan applications, documents, blogs, reviews, settings, notifications, and contact messages, with least-privilege access rules and explicit API grants.

## Images and brand assets
- Generate a cohesive set of original images: an Indian family/homeownership hero, service-category editorial images, testimonial portraits, and blog cover imagery.
- Use optimized responsive formats, explicit aspect ratios, lazy loading below the first viewport, and meaningful alternative text.
- Render partner names in a refined marquee without implying formal endorsements beyond the supplied business claim; use official logos only if suitable licensed assets are provided.

## Search, social, analytics, and PWA
- Add unique per-page title, description, Open Graph, Twitter card, canonical URL, and relevant keywords.
- Add Organization, LocalBusiness, Breadcrumb, Article, and page-specific FAQ structured data where appropriate.
- Generate `sitemap.xml`, maintain crawl-friendly `robots.txt`, use semantic headings, and keep service URLs descriptive.
- Add consent-aware hooks for GA4 and Meta Pixel: page views, lead submissions, calculator use, WhatsApp, phone, CTA clicks, scroll depth, and campaign attribution. Tracking IDs remain configuration values, never hardcoded placeholders.
- Add a web manifest, install metadata, icons, offline shell, and safe update behavior for PWA readiness.

## Technical approach
- Keep TanStack Start and Tailwind CSS v4; use the existing design-system controls and semantic color tokens.
- Add Motion for React for entrance/page transitions and GSAP only for the timeline/parallax sequences where it materially improves the result.
- Use shared content/data definitions to keep all service pages consistent while preserving unique SEO copy.
- Split calculators, blog details, admin charts, and image-heavy sections so the first page remains fast.
- Cap all generated blog pages and avoid unnecessary animation or pointer effects on mobile/reduced-motion devices.

## Verification
- Validate all 15 core pages and supporting routes at desktop and mobile sizes.
- Test the full real flow: calculator → application → stored lead → admin status update → CSV export.
- Verify authenticated access, role enforcement, upload restrictions, form validation, WhatsApp/phone links, theme persistence, navigation, metadata, structured data, sitemap, and PWA installability.
- Check current build diagnostics, browser errors, broken links, image loading, layout overlap, keyboard navigation, and key accessibility contrast/tap-target requirements before completion.

## Delivery order
1. Visual system, generated imagery, shared shell, navigation, and homepage.
2. Shared service-page framework and all 12 service/investment pages.
3. Calculators, forms, WhatsApp/phone actions, contact, blogs, policy pages, and SEO files.
4. Lovable Cloud schema, secure lead capture, uploads, and administrator dashboard.
5. Analytics hooks, PWA, animation refinement, responsive/accessibility testing, and end-to-end verification.
