---
title: Project Gallery Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Project Gallery

related_documents:
  - ../../product/VISION.md
  - ../../product/PRODUCT_REQUIREMENTS.md
  - ../../product/USER_JOURNEY.md
  - ./ProjectCard.md
  - ../DESIGN_SYSTEM.md
  - ../COLOR_SYSTEM.md
  - ../TYPOGRAPHY.md
  - ../SPACING.md
  - ../MOTION.md
---

# Project Gallery Component Specification

## Purpose

The Project Gallery is the heart of the portfolio.

This section exists to encourage visitors to explore multiple engineering projects instead of stopping after the Featured Project.

The gallery should create curiosity while maintaining clarity and simplicity.

It should answer the visitor's question:

> "What else has this engineer built?"

---

# Supports User Journey

This component supports:

- Stage 3 — Curiosity
- Stage 4 — Evaluation

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Project Gallery must:

- Showcase multiple projects.
- Encourage exploration.
- Create an engaging browsing experience.
- Maintain focus on engineering work.
- Make project discovery effortless.

---

# Layout

## Desktop Layout

The Project Gallery occupies the full width of the content container.

Projects are displayed horizontally.

Vertical scrolling should control horizontal movement only while this section is active.

The gallery should remain pinned while the projects move horizontally.

At least two project cards should always be partially visible.

This encourages curiosity and communicates that more projects are available.

---

## Tablet Layout

Cards become slightly narrower.

Scrolling behaviour remains identical.

Spacing reduces proportionally.

---

## Mobile Layout

Horizontal scroll hijacking is disabled.

Users should swipe horizontally.

The interaction must remain natural for touch devices.

---

# Gallery Behaviour

The gallery should activate only when it enters the viewport.

While active:

Vertical scrolling

↓

Horizontal gallery movement

Once the final project is reached,

normal vertical scrolling resumes.

The transition should feel seamless.

---

# Project Order

Projects should appear in descending order of importance.

Recommended order:

1. Flagship Project

2. AI / ML Project

3. Full Stack Project

4. Backend Project

5. Frontend Project

6. Experimental Projects

Future projects should be easy to insert without changing the layout.

---

# Card Visibility

Cards should never completely fill the viewport.

The visitor should always see part of the next project.

Recommended width:

40–45% of viewport width.

This creates anticipation and encourages interaction.

---

# Section Content

The section should contain:

Section Label

Example

Projects

---

Section Heading

Example

Things I've Built

---

Optional Description

One short paragraph introducing the collection.

Avoid long explanations.

---

Gallery

Project Cards

---

Optional CTA

View All Projects

Only if future project count increases significantly.

---

# Visual Hierarchy

Importance Order

1. Active Project Card

2. Preview Video

3. Project Title

4. Section Heading

5. Remaining Cards

The active project should naturally attract attention without hiding the surrounding projects.

---

# Interactions

Gallery

Scrolling should feel smooth.

Avoid sudden acceleration.

---

Project Cards

Hover

- Elevation
- Video Preview
- Accent Border

Inactive Cards

Reduce opacity slightly.

Never blur.

---

Click

Immediately navigate to the Project Detail page.

No intermediate modals.

---

# Motion

Gallery Entry

Fade into view.

Pin section.

Begin horizontal translation.

Animation should feel directly tied to the user's scroll.

Avoid automated movement.

---

Card Hover

Image

↓

Muted looping preview video

Duration

Approximately 250ms.

---

# Accessibility

The gallery must:

- Remain keyboard accessible.
- Support focus navigation between cards.
- Provide descriptive labels.
- Respect reduced-motion preferences.
- Disable scroll-linked animations when necessary.

---

# Performance

Only load preview videos when required.

Images should load first.

Videos should:

- remain muted
- loop smoothly
- pause when inactive

Avoid loading every video simultaneously.

---

# Things We Intentionally Avoid

- Infinite carousels
- Auto-rotating projects
- Pagination
- Hidden navigation
- Heavy scroll libraries
- Scroll hijacking on mobile
- Project filtering in Version 1.0

---

# Acceptance Criteria

✓ Horizontal scrolling feels natural.

✓ Users always see multiple projects.

✓ Hover previews remain smooth.

✓ Project navigation is immediate.

✓ Mobile interaction feels native.

✓ Performance remains excellent.

✓ Projects remain the primary focus of the homepage.

---

# Future Improvements

Possible future enhancements include:

- Project categories
- Search
- Filters
- Sort by technology
- Recently Updated projects
- Featured collections

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

The Project Gallery is intentionally designed around exploration rather than presentation.

Seeing multiple projects simultaneously encourages users to browse naturally instead of feeling forced into a linear experience.

Trade-offs

Pros

- Higher engagement
- Better project discoverability
- Unique interaction
- Strong visual identity

Cons

- More complex implementation
- Requires careful responsive behaviour

Decision

Desktop uses scroll-controlled horizontal movement.

Mobile switches to native horizontal swipe to preserve usability.

---

# Implementation Notes

Suggested Component

ProjectGallery.tsx

Suggested Folder

src/components/sections/

Child Components

- ProjectCard
- SectionHeading

Dependencies

- Framer Motion
- Lenis (if smooth scrolling is enabled)
- Next/Image
- Next/Link

Expected Props

```ts
projects: Project[]
```

Project Model

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

- ProjectCard
- SectionHeading
- Technology Tags
- Hover Video Preview
- CTA Button

The gallery should remain completely data-driven.

Adding a new project should require only adding a new object to the projects data source.

No component logic should need modification.