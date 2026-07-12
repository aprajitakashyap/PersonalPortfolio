---
title: Hero Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Hero

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

# Hero Component Specification

## Purpose

The Hero section is the first meaningful interaction between the visitor and the portfolio.

It should immediately communicate professionalism, technical focus, and create curiosity to explore the projects.

The Hero should answer the visitor's first question:

> "Who is this engineer, and why should I keep exploring?"

---

# Supports User Journey

This component supports:

- Stage 1 — Arrival
- Stage 2 — First Impression

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Hero must:

- Create a memorable first impression.
- Introduce the developer clearly.
- Establish the portfolio's visual identity.
- Encourage visitors to explore projects.
- Balance personality with technical professionalism.

---

# Layout

Desktop Layout

Two-column layout.

Left Section

- Greeting
- Name
- Engineering Headline
- Short Introduction
- Primary CTA
- Secondary CTA

Right Section

- Professional photograph
- Subtle decorative background (optional)
- Calm visual composition

The overall layout should feel balanced with generous whitespace.

---

Tablet Layout

The image moves below the textual content.

Content remains centered.

Spacing should reduce naturally while preserving hierarchy.

---

Mobile Layout

Single-column layout.

Order:

1. Greeting
2. Name
3. Headline
4. Introduction
5. Buttons
6. Photograph

The Hero should remain visually clean and easy to scan.

---

# Content

The Hero should contain:

## Greeting

A short, welcoming line.

Example

"Hello, I'm"

---

## Name

The largest text element on the page.

Example

Aprajita Kashyap

---

## Engineering Headline

A concise statement describing what kind of engineer you are.

Example

Software Engineer building thoughtful digital experiences.

Avoid generic statements such as:

"I love coding."

---

## Introduction

Maximum:

2–3 short paragraphs.

Should communicate:

- current focus
- engineering interests
- passion for solving problems

Avoid long biographies.

---

## Primary CTA

Purpose

Encourage exploration.

Preferred Label

Explore Projects

---

## Secondary CTA

Purpose

Provide resume access.

Preferred Label

Resume

---

## Social Links

Include:

- GitHub
- LinkedIn
- Email

Icons should remain subtle.

---

# Profile Photograph

Requirements

- High quality.
- Professional.
- Neutral background.
- Natural lighting.
- Soft rounded corners.

The photograph should support the personal identity without dominating the Hero.

---

# Visual Hierarchy

Importance order

1. Name
2. Engineering Headline
3. Photograph
4. Primary CTA
5. Introduction
6. Secondary CTA
7. Social Links

The user's attention should naturally follow this order.

---

# Interactions

Buttons

Hover

- Slight elevation
- Soft background transition

Click

Immediate response.

---

Social Links

Hover

- Color transition
- Underline or icon emphasis

---

Photograph

Optional

Very subtle hover movement.

Avoid dramatic effects.

---

# Motion

Hero entrance animation

- Fade
- Slight upward movement

Animation duration

Approximately 300ms.

Content should appear sequentially:

Greeting

↓

Name

↓

Headline

↓

Introduction

↓

Buttons

↓

Photograph

Animation should never delay interaction.

---

# Accessibility

The Hero must:

- Use semantic headings.
- Maintain sufficient color contrast.
- Provide descriptive alt text for the photograph.
- Support keyboard navigation.
- Respect reduced-motion preferences.

---

# Performance

The Hero should:

- Optimize the profile image.
- Avoid heavy animations.
- Minimize layout shifts.
- Load immediately.

The Hero is the most important section for perceived performance.

---

# Things We Intentionally Avoid

- Auto-typing effects
- Rotating job titles
- Background videos
- Particle systems
- Neon colors
- Excessive gradients
- Long introduction paragraphs

---

# Acceptance Criteria

The Hero is complete when:

✓ The visitor understands who the developer is within five seconds.

✓ The Hero communicates professionalism.

✓ The primary CTA encourages project exploration.

✓ The photograph feels naturally integrated.

✓ The section remains responsive across all supported devices.

✓ Animations remain subtle and purposeful.

✓ The Hero establishes the visual identity of the portfolio.

---

# Future Improvements

Possible future enhancements include:

- Dynamic availability status.
- "Currently Exploring" section.
- Theme-aware profile photograph.
- Animated background illustration (only if it supports the overall design).

These enhancements are outside Version 1.0.

# Engineering Notes

Purpose

Explain why this component is designed this way.

Example

The Hero prioritizes clarity over visual complexity.

Research suggests recruiters spend only a few seconds evaluating a portfolio.

Therefore, the Hero immediately communicates:

- Identity
- Engineering Focus
- Call to Action

while delaying secondary information until later sections.

Trade-offs

Pros

- Fast understanding
- Better readability
- Stronger first impression

Cons

- Less space for storytelling

Decision

Storytelling will happen through project case studies instead of the Hero.