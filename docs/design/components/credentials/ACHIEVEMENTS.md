---
title: Achievements Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Achievements

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

# Achievements Component Specification

## Purpose

The Achievements section highlights milestones that validate the developer's growth beyond project work.

Unlike projects, which demonstrate engineering ability, achievements provide external proof of dedication, consistency, and excellence.

It should answer the visitor's question:

> "Has this engineer been recognized for their work?"

---

# Supports User Journey

This component supports:

- Stage 5 — Verification

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Achievements section must:

- Reinforce credibility.
- Showcase meaningful accomplishments.
- Provide verifiable evidence where possible.
- Remain concise and easy to scan.
- Encourage visitors to verify achievements.

---

# Layout

## Desktop Layout

Responsive card grid.

Each card contains:

Achievement Icon

↓

Achievement Title

↓

Organization

↓

Date

↓

Short Description

↓

Proof Button

Cards should maintain equal height for visual consistency.

---

## Tablet Layout

Two-column responsive grid.

Spacing decreases proportionally.

---

## Mobile Layout

Single-column cards.

Cards should span the available width.

---

# Content

Each achievement must contain:

## Achievement Title

Example

Hack2Skill National Finalist

---

## Organization

Example

Hack2Skill

---

## Date

Example

July 2026

---

## Description

Maximum

2 short paragraphs.

Describe:

- What the achievement represents.
- Why it matters.
- Scale of the achievement if relevant.

Avoid long stories.

---

## Proof

Each achievement should include one verification source.

Possible proof:

- Certificate
- Competition Result
- LinkedIn Post
- Official Website
- GitHub Repository
- Published Article

---

# Visual Hierarchy

Importance Order

1. Achievement Title
2. Organization
3. Description
4. Proof Button
5. Date

The title should immediately communicate the accomplishment.

---

# Interactions

Achievement Card

Hover

- Slight elevation
- Soft shadow
- Accent border

Proof Button

Hover

Background transition.

Click

Open proof in a new tab.

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

---

# Accessibility

The Achievements section must:

- Use semantic headings.
- Maintain sufficient contrast.
- Support keyboard navigation.
- Include descriptive labels for proof links.
- Respect reduced-motion preferences.

---

# Performance

Icons should be lightweight SVGs.

Images should be optimized.

Avoid unnecessary animations.

Cards should render immediately.

---

# Things We Intentionally Avoid

- Ranking achievements by importance visually.
- Trophy overload.
- Decorative badges.
- Long descriptions.
- Unverifiable claims.

Every listed achievement should be genuine and supported by evidence.

---

# Acceptance Criteria

✓ Achievements are easy to scan.

✓ Every achievement includes proof.

✓ Cards remain visually consistent.

✓ Visitors can verify accomplishments.

✓ Mobile layout remains readable.

---

# Future Improvements

Possible future enhancements include:

- Achievement filters.
- Timeline view.
- Featured achievement.
- Dynamic statistics.

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

Achievements serve as external validation of engineering capability.

While projects demonstrate skills, achievements provide additional credibility by showing recognition from organizations, competitions, or communities.

Trade-offs

Pros

- Builds trust.
- Adds credibility.
- Encourages verification.
- Supports the resume.

Cons

- Can become cluttered if every small accomplishment is included.

Decision

Only achievements that contribute meaningful professional value should be displayed.

Quality should always take priority over quantity.

---

# Implementation Notes

Suggested Component

Achievements.tsx

Suggested Folder

src/components/sections/

Dependencies

- Framer Motion
- Lucide Icons
- Next/Link

Expected Props

```ts
type Achievement = {
  id: string
  title: string
  organization: string
  date: string
  description: string
  proofUrl: string
  icon?: string
}
```

Reusable Parts

- AchievementCard
- ProofButton
- SectionHeading

The section should remain completely data-driven.

Adding a new achievement should require only updating the achievements data source.