---
title: Project Card Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Project Card

related_documents:
  - ../../product/VISION.md
  - ../../product/PRODUCT_REQUIREMENTS.md
  - ../../product/USER_JOURNEY.md
  - ./ProjectGallery.md
  - ../DESIGN_SYSTEM.md
  - ../COLOR_SYSTEM.md
  - ../TYPOGRAPHY.md
  - ../SPACING.md
  - ../MOTION.md
---

# Project Card Component Specification

## Purpose

The Project Card represents a single engineering project within the Project Gallery.

It should immediately communicate what the project is while encouraging visitors to open the complete case study.

Every Project Card should feel interactive without becoming distracting.

The card should answer the visitor's question:

> "What is this project, and why should I click it?"

---

# Supports User Journey

This component supports:

- Stage 3 — Curiosity
- Stage 4 — Evaluation

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Project Card must:

- Present one project clearly.
- Encourage exploration.
- Preview the project visually.
- Maintain consistency across all projects.
- Scale for future projects without redesign.

---

# Layout

## Desktop Layout

Top

Project Cover Image

↓

Project Preview Video (Hover)

↓

Project Title

↓

Short Description

↓

Technology Tags

↓

Quick Actions

---

## Tablet Layout

Maintain the same layout.

Reduce card width proportionally.

---

## Mobile Layout

Single-column.

Cards become swipe-friendly.

Touch interactions replace hover interactions.

---

# Content

Each Project Card must contain:

## Cover Image

Static project preview.

Displayed by default.

---

## Hover Preview

Muted looping video.

Appears smoothly on hover.

Image fades out.

Video fades in.

---

## Project Title

Largest text inside the card.

Maximum:

Two lines.

---

## Description

Maximum:

Two short lines.

Purpose:

Explain the project in plain language.

Avoid implementation details.

---

## Technology Tags

Display only primary technologies.

Recommended maximum:

4 tags.

Example

- Next.js
- Spring Boot
- PostgreSQL
- Docker

Avoid displaying every technology used.

---

## Quick Actions

Include:

- View Project
- GitHub

Icons remain subtle.

---

# Visual Hierarchy

Importance Order

1. Preview Image / Video

2. Project Title

3. View Project CTA

4. Description

5. Technology Tags

6. GitHub

The preview should always attract attention first.

---

# Interactions

## Hover

Project Image

↓

Looping Preview Video

↓

Slight Elevation

↓

Accent Border

↓

Cursor Feedback

Hover should feel smooth.

Avoid exaggerated scaling.

---

## Click

Clicking anywhere on the card should open the Project Detail page.

GitHub button should open the repository directly.

---

# Motion

Hover Transition

Image

↓

Video

Duration

250ms

Elevation

Approximately 2–4px

Border transition

200ms

No bounce animations.

No rotation.

No dramatic zoom.

---

# Accessibility

The Project Card must:

- Be fully keyboard accessible.
- Support Enter key activation.
- Include descriptive image alt text.
- Provide accessible labels for all links.
- Respect reduced-motion preferences.

---

# Performance

Images should load first.

Videos should:

- Lazy load.
- Remain muted.
- Pause when inactive.

Only the hovered card should play its preview.

Avoid loading every preview simultaneously.

---

# Things We Intentionally Avoid

- Large technology lists
- Multiple CTA buttons
- Hover-only information
- Decorative overlays
- Auto-playing videos
- Long project summaries

---

# Acceptance Criteria

✓ Cover image loads immediately.

✓ Hover preview remains smooth.

✓ Clicking anywhere opens the project.

✓ GitHub remains separately accessible.

✓ Card remains fully responsive.

✓ Performance remains excellent.

✓ Card is reusable without modification.

---

# Future Improvements

Possible future enhancements include:

- Project Status
- Featured Badge
- Completion Date
- Live Visitors
- Performance Metrics
- AI-generated Summary

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

The Project Card is designed to maximize curiosity while minimizing cognitive load.

Visitors should understand the essence of a project within a few seconds.

Instead of displaying excessive information, the card acts as an invitation to explore the complete engineering case study.

Trade-offs

Pros

- Clean presentation.
- Fast scanning.
- Highly reusable.
- Easy maintenance.

Cons

- Limited space for storytelling.

Decision

Detailed explanations belong on the dedicated Project Detail page.

The Project Card should remain concise and visually engaging.

---

# Implementation Notes

Suggested Component

ProjectCard.tsx

Suggested Folder

src/components/ui/

Dependencies

- Next/Image
- Next/Link
- Framer Motion

Expected Props

```ts
type ProjectCardProps = {
  project: Project
}
```

Project Interface

```ts
type Project = {
  id: string
  title: string
  slug: string
  summary: string
  technologies: string[]
  coverImage: string
  previewVideo: string
  githubUrl: string
  liveUrl?: string
  featured: boolean
}
```

Reusable Parts

- TechnologyTag
- HoverVideo
- CTA Button
- Image Container

The Project Card must remain completely data-driven.

Creating a new project should only require adding a new Project object without modifying the component itself.