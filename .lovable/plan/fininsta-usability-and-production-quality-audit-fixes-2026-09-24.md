# FININSTA usability and production-quality audit fixes

## Scope
- Preserve the existing FININSTA identity, colors, logo, content, and overall visual direction.
- Remove or disable development-only UI from production output.
- Standardize typography, spacing, controls, focus states, and section widths across all public pages.
- Simplify services into accessible category tabs and convert testimonials into a keyboard-friendly swipe carousel.
- Improve navigation, hero actions, calculators, eligibility results, forms, FAQ motion, footer content, and WhatsApp prominence.
- Optimize image loading, font loading, and layout stability without changing business logic.

## Implementation
1. Consolidate global design tokens around the requested 8-point spacing scale and exact type scale, using Poppins and Inter only.
2. Normalize primary, secondary, and icon button dimensions through the shared button component; constrain calculator CTAs on larger screens.
3. Refine shared shell and page sections for consistent desktop/mobile behavior, one floating WhatsApp action, one homepage hero WhatsApp action, and one footer WhatsApp action.
4. Add category tabs for services, an accessible swipe carousel for testimonials, animated FAQ disclosure, clearer calculator controls, and semantic labeled forms.
5. Remove duplicate WhatsApp actions from interior content while retaining contextual application actions where the audit explicitly requires them.
6. Verify production output at 320, 375, 390, 414, 768, 1024, and 1440 widths; check keyboard focus, overflow, console errors, and build diagnostics.

## Acceptance criteria
- No production development controls or overlays.
- Only the approved typography sizes are used in public-site code.
- Shared CTAs are 52px tall with consistent radius, padding, shadow, and interaction behavior.
- No horizontal overflow or clipped controls at the audited widths.
- Public routes remain search-ready and branded content remains unchanged.
