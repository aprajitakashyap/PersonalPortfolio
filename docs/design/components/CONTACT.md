---
title: Contact Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Contact

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

# Contact Component Specification

## Purpose

The Contact section is the final call-to-action of the portfolio.

After the visitor has explored the projects, experience, and achievements, this section should make it effortless to start a conversation.

The Contact section should feel personal, welcoming, and professional.

It should answer the visitor's question:

> "How can I reach this engineer?"

---

# Supports User Journey

This component supports:

- Stage 6 — Conversion

Reference:

`docs/product/USER_JOURNEY.md`

---

# Objectives

The Contact section must:

- Encourage meaningful conversations.
- Provide multiple contact methods.
- Maintain the premium design language.
- Minimize friction.
- End the portfolio on a memorable note.

---

# Layout

## Desktop Layout

Centered content.

Structure

Heading

↓

Short Introduction

↓

Social Links

↓

Primary CTA

↓

Availability Status (Optional)

Generous whitespace should surround the entire section.

---

## Tablet Layout

Maintain centered alignment.

Reduce spacing proportionally.

---

## Mobile Layout

Single-column layout.

Buttons become full width where appropriate.

Touch targets remain comfortable.

---

# Content

## Heading

Preferred Text

Let's Build Something Together.

The heading should feel inviting rather than sales-oriented.

---

## Introduction

Maximum

2 short paragraphs.

Example

Whether it's building scalable software, discussing engineering ideas, collaborating on exciting projects, or simply saying hello — I'd love to hear from you.

Avoid generic contact copy.

The tone should sound authentic.

---

## Contact Methods

Include

- GitHub
- LinkedIn
- Email

Optional

- Resume Download

Each item should include:

- Icon
- Label
- External Link

---

## Primary CTA

Preferred Label

Get In Touch

This should open the default email client.

---

## Availability Status (Optional)

Example

🟢 Currently Open to Opportunities

This should be easy to update in the future.

---

# Visual Hierarchy

Importance Order

1. Heading

2. Contact Button

3. Introduction

4. Social Links

5. Availability Status

The CTA should naturally attract attention without overwhelming the section.

---

# Interactions

Buttons

Hover

- Slight elevation
- Soft shadow
- Background transition

Social Links

Hover

- Accent color
- Underline animation
- Icon movement (subtle)

Click

Open external links in a new tab.

Email opens the default mail application.

---

# Motion

Section reveal

- Fade
- Slight upward movement

Duration

Approximately 250ms.

Hover

Approximately 200ms.

Animations should remain subtle.

---

# Accessibility

The Contact section must:

- Use semantic HTML.
- Support keyboard navigation.
- Maintain visible focus states.
- Include descriptive labels.
- Respect reduced-motion preferences.

---

# Performance

Icons should be SVGs.

Avoid heavy illustrations.

Links should respond immediately.

The section should load with the rest of the page.

---

# Things We Intentionally Avoid

- Large contact forms
- CAPTCHA
- Chat widgets
- Auto-playing animations
- Excessive decorative graphics

The goal is simplicity.

---

# Acceptance Criteria

✓ Visitors immediately understand how to contact the developer.

✓ Every link works correctly.

✓ Mobile interactions feel natural.

✓ Keyboard navigation functions properly.

✓ The section feels welcoming and professional.

---

# Future Improvements

Possible future enhancements include:

- Contact Form
- Calendar Booking
- Availability Calendar
- Downloadable vCard
- Social Presence Indicators

These enhancements are outside Version 1.0.

---

# Engineering Notes

Purpose

The Contact section exists to convert interest into action.

Instead of ending the portfolio abruptly, it provides a clear and welcoming path for recruiters, collaborators, and potential employers to reach out.

Trade-offs

Pros

- Low friction.
- Easy to maintain.
- Fast loading.
- Clear conversion path.

Cons

- No structured message collection.

Decision

Version 1.0 prioritizes direct communication through trusted platforms rather than maintaining a backend contact form.

---

# Implementation Notes

Suggested Component

Contact.tsx

Suggested Folder

src/components/sections/

Dependencies

- Lucide React
- Next/Link
- Framer Motion

Expected Props

```ts
type ContactProps = {
  github: string
  linkedin: string
  email: string
  resumeUrl?: string
  availability?: string
}
```

Reusable Parts

- SocialLink
- PrimaryButton
- SectionHeading
- StatusBadge

The Contact section should remain completely data-driven.

Updating links or availability should only require modifying a configuration file rather than changing the component logic.