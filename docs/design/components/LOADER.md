---
title: Loader Component Specification
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

component: Loader

related_documents:
  - ../MOTION.md
---

# Loader Component Specification

## Purpose

Provide a subtle branded loading experience while the application initializes.

The loader should never delay interaction unnecessarily.

---

# Supports User Journey

Pre-arrival.

---

# Objectives

The Loader must:

- Reinforce branding.
- Feel premium.
- Finish quickly.
- Avoid frustration.

---

# Layout

Centered.

Display

AK.

↓

Thin progress bar.

---

# Behaviour

Show only during application initialization.

Maximum visible duration

800ms.

Disappear immediately when ready.

---

# Motion

Fade in.

Progress animation.

Fade out.

Duration

250–300ms.

---

# Accessibility

Respect reduced-motion preferences.

Do not trap keyboard focus.

---

# Performance

Lightweight.

No video.

No heavy animation libraries.

---

# Things We Intentionally Avoid

Long branded intros.

Progress percentages.

Spinners.

Blocking interaction.

---

# Acceptance Criteria

✓ Fast.

✓ Smooth.

✓ Branded.

✓ Doesn't delay content.

---

# Future Improvements

Page transition loader.

Dynamic loading states.

Outside Version 1.0.

---

# Engineering Notes

The loader exists only to improve perceived quality.

If the application loads instantly, the loader should not be forced to appear.

---

# Implementation Notes

Suggested Component

Loader.tsx

Folder

src/components/ui/

Dependencies

Framer Motion

Expected Props

```ts
type LoaderProps = {
  isLoading: boolean
}
```

Reusable

Logo

ProgressBar