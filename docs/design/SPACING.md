---
title: Spacing System
version: 1.0
status: Approved
owner: Aprajita Kashyap
last_updated: 2026-07-13

related_documents:
  - DESIGN_SYSTEM.md
  - TYPOGRAPHY.md
  - COLOR_SYSTEM.md
---

# Spacing System

## Purpose

This document defines the spacing system used throughout Portfolio 2026.

Consistent spacing creates rhythm, improves readability, and makes the interface feel premium.

Spacing should never feel random.

Every margin, padding, and gap should follow a predictable system.

---

# Design Philosophy

Whitespace is a design element.

It provides breathing room, improves readability, and directs the user's attention.

The portfolio should never feel crowded.

Projects should always have enough surrounding space to stand out.

---

# Base Spacing Unit

The portfolio uses an **8px spacing system**.

All spacing values should be multiples of 8 whenever practical.

Examples:

```

4px (micro adjustments only)

8px

16px

24px

32px

40px

48px

64px

80px

96px

120px

160px

```

Avoid arbitrary values unless a component specifically requires them.

---

# Layout Container

Maximum Content Width

1280px

Purpose

Keeps content readable on large displays while preventing layouts from becoming excessively wide.

---

Horizontal Page Padding

Desktop

64px

Laptop

48px

Tablet

32px

Mobile

20px

---

# Vertical Rhythm

Major Sections

120px

Examples

Hero

Projects

Experience

Contact

---

Subsections

64px

---

Cards

32px

---

Grouped Elements

24px

---

Related Elements

16px

---

Small UI Elements

8px

---

# Component Spacing

## Navigation

Top & Bottom Padding

24px

Navigation Item Gap

32px

Logo to Navigation

Flexible

---

## Hero Section

Top Padding

120px

Content Gap

64px

Text to Buttons

32px

Buttons Gap

16px

Photo to Content

80px

---

## Project Gallery

Section Title to Gallery

48px

Card Gap

32px

Preview to Title

24px

Title to Description

16px

Description to Tags

16px

---

## Project Detail Page

Section Gap

80px

Heading to Paragraph

24px

Paragraph to Image

32px

Image to Caption

16px

Architecture Diagram Gap

48px

---

## Timeline

Timeline Entries

40px

Content Gap

16px

---

## Contact

Heading to Description

24px

Description to Buttons

32px

Buttons Gap

16px

---

## Footer

Content Padding

48px

---

# Grid System

Desktop

12 Columns

---

Tablet

8 Columns

---

Mobile

4 Columns

---

Layouts should adapt to available space rather than simply shrinking.

---

# Responsive Behaviour

Spacing should decrease gradually on smaller devices.

Never remove whitespace completely.

Maintain comfortable reading and touch interaction.

---

# Content Width

Long-form reading should have a comfortable maximum width.

Project case studies should prioritize readability over using the full screen width.

Avoid paragraphs that stretch excessively across large displays.

---

# Alignment

Default Alignment

Left

Hero

May use centered alignment where appropriate.

Cards

Maintain consistent internal spacing.

---

# Things We Intentionally Avoid

- Random spacing values
- Inconsistent margins
- Crowded layouts
- Uneven card spacing
- Excessively narrow content
- Overly compressed mobile layouts

---

# Accessibility

Maintain sufficient spacing for:

- Touch targets
- Readability
- Keyboard focus
- Interactive components

Spacing should support usability, not only aesthetics.

---

# Acceptance Criteria

The spacing system is considered complete when:

✓ Every page follows the same spacing scale.

✓ Components feel visually balanced.

✓ Content remains readable on all screen sizes.

✓ The interface feels spacious without wasting space.

✓ Users can comfortably interact with all elements.
