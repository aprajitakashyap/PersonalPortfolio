---
title: Experience Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Experience

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

# Experience Component Specification

## Purpose

The Experience section communicates the developer's professional journey, technical growth, and practical engineering exposure.

Rather than acting as a resume, this section should tell the story of continuous learning and increasing responsibility.

It should answer the visitor's question:

> "Where has this engineer applied their skills?"

---

# Supports User Journey

This component supports:

- Stage 4 — Evaluation
- Stage 5 — Verification

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Experience section must:

- Present professional experience clearly.
- Highlight engineering contributions.
- Demonstrate technical growth.
- Remain easy to scan.
- Encourage visitors to explore related projects.

---

# Layout

## Desktop Layout

Vertical timeline.

Each experience entry should contain:

Timeline Indicator

↓

Role & Company

↓

Duration

↓

Summary

↓

Key Contributions

↓

Technologies Used

↓

Related Project (Optional)

Alternate entries should remain visually aligned for readability.

---

## Tablet Layout

Timeline remains vertical.

Reduce spacing proportionally.

---

## Mobile Layout

Single-column timeline.

Timeline indicator moves to the left.

Maintain comfortable reading width.

---

# Content

Each experience entry must include:

## Role

Example

Software Engineering Intern

---

## Organization

Example

XYZ Technologies

---

## Duration

Example

May 2026 – July 2026

---

## Summary

Maximum

2–3 short paragraphs.

Should describe:

- Overall responsibility
- Team context
- Engineering domain

Avoid copying resume bullet points.

---

## Key Contributions

Maximum

4–5 concise bullet points.

Focus on impact rather than task lists.

Examples

- Improved API response time.
- Built reusable UI components.
- Reduced deployment time.
- Optimized database queries.

---

## Technologies

Display only technologies actually used.

Recommended maximum:

6 technologies.

---

## Related Project (Optional)

If an experience directly relates to a portfolio project, provide a link to the project case study.

---

# Visual Hierarchy

Importance Order

1. Role
2. Company
3. Duration
4. Key Contributions
5. Technologies
6. Related Project

The timeline should be easy to scan within one minute.

---

# Interactions

Timeline Cards

Hover

- Slight elevation.
- Soft shadow.
- Accent border.

Related Project

Hover

Underline.

Click

Navigate to the corresponding project page.

---

# Motion

Timeline entries reveal as they enter the viewport.

Animation

- Fade
- Slight upward movement

Duration

Approximately 250ms.

Avoid dramatic stagger animations.

---

# Accessibility

The Experience section must:

- Use semantic headings.
- Maintain readable contrast.
- Support keyboard navigation.
- Respect reduced-motion preferences.

---

# Performance

Timeline animations should remain lightweight.

Avoid unnecessary JavaScript.

Content should render immediately.

---

# Things We Intentionally Avoid

- Resume-style paragraphs.
- Long company descriptions.
- Company logos larger than role titles.
- Excessive technology badges.
- Decorative timeline graphics.

---

# Acceptance Criteria

✓ Timeline remains easy to scan.

✓ Engineering contributions are clear.

✓ Technical growth is visible.

✓ Related projects are easily accessible.

✓ Mobile experience remains readable.

---

# Future Improvements

Possible future enhancements include:

- Expandable experience entries.
- Recommendation letters.
- Team size information.
- Project impact metrics.

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

Recruiters often compare experience with projects.

This section should provide credibility while allowing projects to remain the primary evidence of engineering ability.

Trade-offs

Pros

- Easy scanning.
- Better storytelling.
- Professional presentation.
- Connects work experience to projects.

Cons

- Less detailed than a resume.

Decision

Detailed responsibilities belong in the resume.

The portfolio should highlight engineering impact rather than every assigned task.

---

# Implementation Notes

Suggested Component

Experience.tsx

Suggested Folder

src/components/sections/

Dependencies

- Framer Motion
- Lucide Icons

Expected Props

```ts
type Experience = {
  id: string
  role: string
  company: string
  duration: string
  summary: string
 contributions: string[]
  technologies: string[]
  relatedProject?: string
}
```

Reusable Parts

- TimelineItem
- TechnologyTag
- SectionHeading
- TimelineConnector

The Experience section should remain completely data-driven.

Adding a new experience should require only updating the experience data source.