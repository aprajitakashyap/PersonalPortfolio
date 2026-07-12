---
title: Motion System
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

related_documents:
  - DESIGN_SYSTEM.md
  - SPACING.md
  - COMPONENT_SPECIFICATIONS.md
---

# Motion System

## Purpose

This document defines the motion language used throughout Portfolio 2026.

Motion should improve usability by providing feedback, continuity, and context.

Animations should never become the primary attraction.

The user should notice the experience, not the animation itself.

---

# Motion Philosophy

Motion exists to:

- communicate interaction
- guide attention
- improve navigation
- provide visual continuity

Motion should never:

- delay the user
- distract from projects
- feel excessive
- reduce performance

---

# Motion Principles

## 1. Fast

Interactions should feel immediate.

Users should never wait for animations to complete.

---

## 2. Natural

Movement should mimic natural acceleration and deceleration.

Avoid robotic or linear motion.

---

## 3. Purposeful

Every animation must answer one question:

**Why does this animation exist?**

If no clear answer exists, the animation should not be implemented.

---

## 4. Consistent

Buttons, cards, navigation, and page transitions should all follow the same motion language.

---

# Motion Tokens

## Micro Interaction

Duration

150ms

Usage

- Button hover
- Icon hover
- Link hover

---

## Standard Interaction

Duration

200ms

Usage

- Card hover
- Border transition
- Shadow transition

---

## Component Transition

Duration

300ms

Usage

- Navigation
- Drawer
- Hero image reveal
- Section animations

---

## Large Transition

Duration

450ms

Usage

- Page entrance
- Loader completion
- Large layout changes

---

## Scroll Animation

Duration

Based on scroll velocity.

Never block scrolling.

---

# Easing

Primary

ease-out

Used for most interactions.

---

Secondary

ease-in-out

Used for larger layout transitions.

---

Linear

Only for infinite marquee animations.

---

# Hover Behaviour

Buttons

- Slight background transition
- Slight elevation
- Cursor feedback

---

Cards

- Soft elevation
- Slight border emphasis
- Optional 2–4px upward movement
- Smooth image/video transition

---

Links

- Color transition
- Underline animation (optional)
- Maintain readability

---

Project Cards

Hover should:

- Transition from static image to muted looping preview video
- Slightly elevate the active card
- Reduce emphasis on inactive cards
- Maintain smooth performance

Hover should never:

- Rotate dramatically
- Bounce
- Zoom aggressively

---

# Navigation

Navigation should remain stable.

On scroll:

- Background blur may increase
- Shadow may appear subtly
- Position remains fixed

Avoid noticeable movement.

---

# Hero

The Hero section may include:

- Soft fade-in
- Slight upward entrance
- Sequential appearance of content

Animation should complete quickly.

The user should never wait before interacting.

---

# Section Reveal

Sections may reveal as they enter the viewport.

Preferred animation:

- Fade
- Translate Y (small distance)

Avoid:

- Large slide-ins
- Spin
- Flip
- Bounce

---

# Page Transitions

Navigation between pages should feel immediate.

Transition duration

250–350ms

Page transitions should:

- preserve orientation
- avoid disorienting effects
- maintain responsiveness

---

# Loader

The loader should:

- reinforce brand identity
- appear only when necessary
- disappear immediately once content is ready

Avoid long branded intros.

Target duration:

Under 1 second whenever possible.

---

# Tech Marquee

Continuous horizontal movement.

Constant speed.

No acceleration.

No sudden pauses.

Should remain subtle.

---

# Reduced Motion

Respect the user's operating system preference.

When reduced motion is enabled:

- Disable entrance animations
- Disable parallax
- Disable unnecessary transforms
- Preserve usability

Essential transitions may remain.

---

# Performance

Animation should never reduce scrolling performance.

Prefer GPU-accelerated properties.

Animate:

- opacity
- transform

Avoid animating:

- width
- height
- top
- left

whenever possible.

---

# Things We Intentionally Avoid

- Bounce animations
- Elastic effects
- Long cinematic intros
- Overlapping animations
- Constant floating elements
- Animation loops without purpose

---

# Acceptance Criteria

The motion system is complete when:

✓ Motion feels natural.

✓ Animations remain subtle.

✓ Interactions provide meaningful feedback.

✓ Performance remains smooth.

✓ Projects continue to be the visual focus.

✓ Motion enhances usability instead of distracting from it.
