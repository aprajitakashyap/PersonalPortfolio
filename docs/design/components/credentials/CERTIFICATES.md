---
title: Certificates Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Certificates

related_documents:
  - ../../product/VISION.md
  - ../../product/PRODUCT_REQUIREMENTS.md
  - ../../product/USER_JOURNEY.md
  - ../DESIGN_SYSTEM.md
  - ../COLOR_SYSTEM.md
  - ../TYPOGRAPHY.md
  - ../SPACING.md
  - ../MOTION.md
---

# Certificates Component Specification

## Purpose

The Certificates section provides verifiable evidence of continuous learning and professional development.

Unlike projects, which demonstrate practical engineering skills, certificates validate formal learning from recognized organizations.

This section should answer the visitor's question:

> "Does this engineer continue learning beyond formal education?"

---

# Supports User Journey

This component supports:

- Stage 5 — Verification

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Certificates section must:

- Showcase meaningful certifications.
- Provide verification links.
- Maintain a clean visual presentation.
- Reinforce credibility.
- Avoid becoming the primary focus of the portfolio.

---

# Layout

## Desktop Layout

Responsive card grid.

Each card contains:

Certificate Thumbnail

↓

Certificate Title

↓

Issuing Organization

↓

Issue Date

↓

Credential ID (Optional)

↓

Verify Certificate Button

Cards should maintain equal height for consistency.

---

## Tablet Layout

Two-column grid.

Maintain proportional spacing.

---

## Mobile Layout

Single-column layout.

Cards occupy full width.

Touch interactions should remain comfortable.

---

# Content

Each certificate must include:

## Certificate Title

Example

AWS Certified Cloud Practitioner

---

## Issuing Organization

Example

Amazon Web Services

---

## Issue Date

Example

June 2026

---

## Credential ID (Optional)

Display only if publicly verifiable.

---

## Description

Maximum

2 short lines.

Should briefly explain what the certification represents.

Avoid copying the provider's course description.

---

## Verification Link

Each certificate must include one official verification source.

Possible verification methods:

- Official credential URL
- Credly Badge
- Google Credential
- Microsoft Learn
- Certificate PDF
- Organization verification portal

---

# Visual Hierarchy

Importance Order

1. Certificate Title

2. Issuing Organization

3. Verify Button

4. Issue Date

5. Description

Certificates should remain visually secondary to projects.

---

# Interactions

Certificate Card

Hover

- Slight elevation
- Soft shadow
- Accent border

Verify Button

Hover

Background transition.

Click

Open verification page in a new tab.

---

# Motion

Cards reveal while entering the viewport.

Animation

- Fade
- Slight upward movement

Duration

Approximately 250ms.

Hover animation

Approximately 200ms.

Animations should remain subtle.

---

# Accessibility

The Certificates section must:

- Use semantic headings.
- Support keyboard navigation.
- Maintain visible focus states.
- Include descriptive labels for verification links.
- Respect reduced-motion preferences.

---

# Performance

Certificate thumbnails should be optimized.

Lazy-load images where appropriate.

Avoid loading unnecessary assets.

Cards should render immediately.

---

# Things We Intentionally Avoid

- Displaying every certificate earned.
- Decorative ribbons or medals.
- Long descriptions.
- Low-quality certificate images.
- Unverified certificates.

Only certificates that strengthen the engineering profile should be included.

---

# Acceptance Criteria

✓ Certificates are easy to scan.

✓ Every certificate includes verification.

✓ Cards remain visually consistent.

✓ Mobile experience remains excellent.

✓ Certificates support—not replace—the projects.

---

# Future Improvements

Possible future enhancements include:

- Certificate categories.
- Search.
- Filters.
- Expiration reminders.
- Recently earned highlight.

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

Certificates demonstrate commitment to continuous learning.

However, they should never outweigh real engineering projects.

Projects remain the strongest evidence of technical ability.

Certificates provide supporting validation.

Trade-offs

Pros

- Adds credibility.
- Demonstrates learning mindset.
- Easy verification.
- Strengthens resume.

Cons

- Can become cluttered if too many are included.

Decision

Only certificates with meaningful professional value should be displayed.

Quality should always take priority over quantity.

---

# Implementation Notes

Suggested Component

Certificates.tsx

Suggested Folder

src/components/sections/

Dependencies

- Framer Motion
- Next/Image
- Next/Link
- Lucide React

Expected Props

```ts
type Certificate = {
  id: string
  title: string
  organization: string
  issueDate: string
  description: string
  thumbnail: string
  verificationUrl: string
  credentialId?: string
}
```

Reusable Parts

- CertificateCard
- VerifyButton
- SectionHeading

The section should remain completely data-driven.

Adding or removing certificates should only require updating the certificates data source.