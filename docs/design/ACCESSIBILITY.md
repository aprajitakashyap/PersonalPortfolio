---
title: Accessibility Guidelines
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

related_documents:
  - DESIGN_SYSTEM.md
  - COLOR_SYSTEM.md
  - TYPOGRAPHY.md
  - MOTION.md
---

# Accessibility Guidelines

## Purpose

This document defines the accessibility standards for Portfolio 2026.

Accessibility is considered a core product requirement rather than an optional enhancement.

The portfolio should remain usable, understandable, and navigable for as many users as possible.

---

# Accessibility Philosophy

Good accessibility creates a better experience for everyone.

Accessibility should be integrated into every design and engineering decision from the beginning instead of being added later.

The goal is to create an interface that is:

- Inclusive
- Readable
- Keyboard friendly
- Responsive
- Predictable

---

# Accessibility Goals

The portfolio should:

- Support keyboard-only navigation.
- Maintain sufficient color contrast.
- Provide meaningful focus indicators.
- Use semantic HTML.
- Respect reduced-motion preferences.
- Remain usable on different screen sizes.
- Avoid interactions that rely only on one sense.

---

# Keyboard Navigation

Every interactive element must be reachable using the keyboard.

Users should be able to:

- Navigate the entire website.
- Open project pages.
- Activate buttons.
- Access links.
- Submit forms.

The navigation order should remain logical.

---

# Focus States

Every interactive component must display a visible focus state.

Focus indicators should:

- Be easy to notice.
- Match the design language.
- Never be removed.

Avoid hiding focus outlines without providing an accessible replacement.

---

# Semantic HTML

Use semantic HTML whenever possible.

Preferred elements include:

- header
- nav
- main
- section
- article
- aside
- footer
- button

Avoid replacing semantic elements with generic containers unless necessary.

---

# Images

Every meaningful image must include descriptive alternative text.

Decorative images should not interrupt screen readers.

Project preview videos should include descriptive labels where appropriate.

---

# Typography

Typography should remain readable on all supported devices.

Avoid:

- Extremely small text
- Low-contrast text
- Excessively long line lengths

Maintain comfortable reading widths.

---

# Color Contrast

Text should maintain sufficient contrast against backgrounds.

Interactive elements should never rely only on color to communicate state.

Examples:

Good

- Color + underline
- Color + icon
- Color + border

Avoid

- Color alone

---

# Motion Accessibility

Respect the user's operating system preference for reduced motion.

When reduced motion is enabled:

- Disable entrance animations.
- Disable parallax.
- Disable unnecessary transitions.
- Preserve essential interaction feedback.

The website should remain fully usable.

---

# Forms

Every input must include:

- Visible label
- Placeholder (optional, not a replacement for labels)
- Keyboard support
- Clear error messaging

Future contact forms should follow these rules.

---

# Touch Targets

Buttons and interactive elements should provide comfortable touch targets.

Avoid placing interactive elements too close together.

Spacing should reduce accidental taps on mobile devices.

---

# Responsive Accessibility

The portfolio should remain accessible across:

- Desktop
- Laptop
- Tablet
- Mobile

Content should reflow naturally instead of requiring horizontal scrolling.

---

# Error Prevention

Future interactive components should:

- Prevent accidental actions.
- Provide clear feedback.
- Allow recovery where appropriate.

---

# Performance

Accessibility should not negatively impact performance.

Prefer lightweight, semantic solutions over unnecessary JavaScript.

---

# Accessibility Checklist

Every page should satisfy the following:

✓ Keyboard accessible

✓ Semantic HTML

✓ Visible focus indicators

✓ Sufficient color contrast

✓ Responsive layout

✓ Readable typography

✓ Descriptive alternative text

✓ Reduced motion support

✓ Logical heading hierarchy

✓ Clear interactive states

---

# Things We Intentionally Avoid

- Hidden focus indicators
- Auto-playing audio
- Flashing animations
- Motion that causes discomfort
- Low-contrast text
- Hover-only interactions

---

# Acceptance Criteria

The accessibility system is considered complete when:

✓ Every major interaction works with the keyboard.

✓ Reading remains comfortable across devices.

✓ Motion respects user preferences.

✓ Interactive elements clearly communicate their state.

✓ Accessibility is maintained without compromising the overall design.