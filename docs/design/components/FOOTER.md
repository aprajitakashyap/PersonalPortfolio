---
title: Footer Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Footer

related_documents:
  - ../../product/VISION.md
  - ../DESIGN_SYSTEM.md
---

# Footer Component Specification

## Purpose

The Footer concludes the portfolio experience.

Rather than acting as a traditional website footer, it should provide a calm and memorable ending that reinforces the developer's identity.

It should leave the visitor with a positive final impression.

---

# Supports User Journey

This component supports:

- Stage 6 — Conversion

---

# Objectives

The Footer must:

- Conclude the portfolio gracefully.
- Reinforce branding.
- Provide quick navigation.
- Maintain simplicity.

---

# Layout

Centered layout.

Content order:

Logo

↓

Made with ❤️ by Aprajita Kashyap

↓

GitHub

LinkedIn

Email

↓

Copyright

---

# Content

## Brand

AK.

---

## Signature

Preferred Text

Made with ❤️ by Aprajita Kashyap

---

## Social Links

GitHub

LinkedIn

Email

---

## Copyright

Current Year

Example

© 2026 Aprajita Kashyap

---

# Visual Hierarchy

1. Signature

2. Social Links

3. Copyright

---

# Interactions

Links

Hover

Accent color transition.

Underline animation.

---

# Motion

Simple fade-in.

Hover duration

200ms.

---

# Accessibility

Semantic footer.

Keyboard navigation.

Visible focus states.

---

# Performance

No unnecessary JavaScript.

SVG icons.

---

# Things We Intentionally Avoid

Large footers.

Multiple columns.

Site maps.

Newsletter forms.

---

# Acceptance Criteria

✓ Minimal.

✓ Elegant.

✓ Responsive.

✓ Accessible.

---

# Future Improvements

Visitor counter.

GitHub contribution graph.

Now Playing widget.

Outside Version 1.0.

---

# Engineering Notes

The footer should quietly conclude the portfolio.

Its purpose is not navigation but leaving a memorable final impression.

---

# Implementation Notes

Suggested Component

Footer.tsx

Folder

src/components/layout/

Dependencies

Lucide React

Next Link

Reusable

SocialLink

FooterSignature