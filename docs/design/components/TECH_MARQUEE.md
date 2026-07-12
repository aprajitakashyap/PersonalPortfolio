---
title: Tech Marquee Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Tech Marquee

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

# Tech Marquee Component Specification

## Purpose

The Tech Marquee communicates the developer's technical ecosystem without requiring a dedicated "Skills" section.

Instead of presenting technologies as isolated badges, the marquee subtly reinforces the engineering stack used across projects.

It should answer the visitor's question:

> "What technologies does this engineer work with?"

without interrupting the browsing experience.

---

# Supports User Journey

This component supports:

- Stage 3 — Curiosity
- Stage 4 — Evaluation

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Tech Marquee must:

- Showcase technologies naturally.
- Reinforce engineering identity.
- Maintain visual rhythm between sections.
- Avoid becoming the visual focus.

---

# Layout

## Desktop Layout

Single horizontal row.

Infinite scrolling from right to left.

Centered vertically.

Full-width container.

---

## Tablet Layout

Maintain identical behaviour.

Reduce typography slightly.

---

## Mobile Layout

Maintain identical behaviour.

Reduce spacing between items.

Keep scrolling speed consistent.

---

# Content

The marquee should contain technologies actually used within the portfolio projects.

Example Technologies

- Java
- Spring Boot
- React
- Next.js
- TypeScript
- Angular
- Node.js
- Express.js
- PostgreSQL
- MongoDB
- Firebase
- Docker
- Git
- GitHub
- REST APIs
- GraphQL
- AWS
- OpenAI API
- Python
- TensorFlow
- MediaPipe

Future technologies should be added only after they are used in real projects.

Avoid listing technologies solely for visual appeal.

---

# Visual Hierarchy

The marquee should remain visually secondary.

Projects should continue to receive the most attention.

Typography should be smaller than section headings.

Spacing should create an airy, elegant rhythm.

---

# Behaviour

The marquee continuously scrolls from right to left.

Scrolling should:

- Never pause.
- Never reverse direction.
- Never accelerate.
- Never distract.

The movement should feel almost ambient.

---

# Interactions

Hover

Desktop

Hovering pauses the marquee.

This allows visitors to comfortably read technologies.

---

Touch Devices

No pause behaviour.

Scrolling continues naturally.

---

# Motion

Animation Type

Infinite linear movement.

Duration

Approximately 25–40 seconds per complete loop.

The speed should feel calm.

Use seamless looping.

No visible jumps when restarting.

---

# Accessibility

The marquee must:

- Remain readable.
- Maintain sufficient contrast.
- Respect reduced-motion preferences.
- Stop animating if the user requests reduced motion.

When reduced motion is enabled:

Display the technologies as a wrapped responsive list.

---

# Performance

Animation should use GPU-friendly transforms.

Avoid JavaScript-based animation where CSS can achieve the same result.

Duplicate the technology list to achieve seamless looping instead of recalculating positions.

---

# Things We Intentionally Avoid

- Giant typography.
- Technology logos.
- Flashing colors.
- Random ordering.
- Multiple rows.
- Vertical scrolling.
- Decorative icons.

---

# Acceptance Criteria

✓ Technologies remain readable.

✓ Animation is smooth.

✓ Loop is seamless.

✓ Hover pause works correctly.

✓ Reduced-motion fallback is available.

✓ The marquee complements rather than dominates the page.

---

# Future Improvements

Possible future enhancements include:

- Dynamic technology list generated from project metadata.
- Category-based marquees.
- Theme-aware styling.

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

The Tech Marquee replaces the traditional "Skills" section.

Instead of asking visitors to read a long list of technologies, the portfolio gently communicates the developer's ecosystem while they continue exploring projects.

Trade-offs

Pros

- Cleaner homepage.
- Better visual rhythm.
- Less repetitive than a skills grid.
- Reinforces project credibility.

Cons

- Technologies are less immediately searchable.

Decision

Engineering ability should be demonstrated primarily through projects.

The Tech Marquee exists only to reinforce those projects, not replace them.

---

# Implementation Notes

Suggested Component

TechMarquee.tsx

Suggested Folder

src/components/sections/

Dependencies

- CSS Keyframes (preferred)
- Framer Motion (only if additional control is required)

Expected Props

```ts
type TechMarqueeProps = {
  technologies: string[]
}
```

Example Data

```ts
const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "OpenAI",
]
```

Reusable Parts

- Technology Item
- Marquee Track

The marquee should remain fully data-driven.

Adding or removing technologies should only require updating the data source.

No component logic should need modification.