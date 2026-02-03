# VectaShield Color Reference Guide

This document tracks all locations where accent colors are defined for easy modification.

---

## Current Color Variables (index.css :root)

| Variable | Current Value | Description |
|----------|---------------|-------------|
| `--accent-primary` | `#DC143C` | Crimson red - gradient start color |
| `--accent-secondary` | `#B8860B` | Dark goldenrod (metallic gold) - gradient end color |

**Location:** `src/src/index.css` (lines 54-55)

---

## Gradient Text Classes

### `.gradient-text` and `.gradient-text-name`
- **File:** `src/src/index.css` (lines 170-190)
- **Gradient:** `linear-gradient(120deg, var(--accent-primary) 0%, var(--accent-secondary) 57%)`
- **Direction:** 120 degrees
- **Stops:** Start color at 0%, End color at 57%

**Used in:**
- `src/src/pages/HomePage.jsx` - Main headings ("Engineering The Future", "Services", CTA)
- `src/src/pages/AboutPage.jsx` - Page title, section titles
- `src/src/pages/ContactPage.jsx` - Page title
- `src/src/components/layout/Header.jsx` - Logo text (gradient-text-name)
- `src/src/components/layout/Footer.jsx` - Footer branding
- `src/src/components/EngineerCard.jsx` - Team member roles

---

## Neon Border Classes

### `.neon-border`, `.light .neon-border`, `.dark .neon-border`
- **File:** `src/src/index.css` (lines 262-281)
- **Gradient:** `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` (default/light)
- **Dark mode:** `linear-gradient(120deg, var(--accent-primary) 0%, var(--accent-secondary) 57%)`

**Used in:**
- `src/src/pages/HomePage.jsx` - "Get Started" and "Forge Your Solutions" buttons
- `src/src/components/layout/Header.jsx` - Contact button
- `src/src/components/SubmitForm.jsx` - Submit button
- `src/src/components/EngineerCard.jsx` - Card borders

---

## Glow Effects

### `.glow-blue`
- **File:** `src/src/index.css` (line 157-159)
- **Value:** `box-shadow: 0 0 30px var(--accent-secondary)`

**Used in:**
- `src/src/pages/HomePage.jsx` - Floating circles around main image
- `src/src/components/ServiceCard.jsx` - Icon container glow

### `.pulse-glow` Keyframes
- **File:** `src/src/index.css` (lines 291-307)
- **Animation:** Alternates between primary and secondary accent colors

---

## Component-Specific Colors

### ServiceCard Icon
- **File:** `src/src/components/ServiceCard.jsx` (line 16)
- **Class:** `text-accent-secondary`

### HomePage Main Circle
- **File:** `src/src/pages/HomePage.jsx` (line 148)
- **Class:** `bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/30`

---

## Tailwind Config Colors

- **File:** `src/tailwind.config.js` (lines 60-63)
- Defines Tailwind utility classes that reference CSS variables:
  - `accent-primary` -> `var(--accent-primary)`
  - `accent-secondary` -> `var(--accent-secondary)`

---

## Quick Color Change Checklist

To change the color scheme, update these locations:

1. **CSS Variables** (`src/src/index.css` lines 54-55):
   ```css
   --accent-primary: #HEXVALUE;
   --accent-secondary: #HEXVALUE;
   ```

2. **Gradient percentages** (if needed):
   - `.gradient-text` (line 174): `57%`
   - `.gradient-text-name` (line 185): `57%`
   - `.dark .neon-border` (line 279): `57%`

---

## Color History

| Date | Primary Color | Secondary Color | Notes |
|------|---------------|-----------------|-------|
| Original | `#e55d32` (red-orange) | `#fdb209` (yellow-orange) | Original site colors |
| Update 1 | `#9333EA` (neon purple) | `#D4AF37` (gold) | Too yellow/pee-like |
| Update 2 | `#561B55` (dark plum) | `#DC143C` (crimson) | Purple too dark |
| Update 3 | `#7B2D8E` (medium purple) | `#C41E3A` (cardinal red) | Red too pink |
| Update 4 | `#7B2D8E` (medium purple) | `#22fbfe` (cyan) | Blue to purple |
| Update 5 | `#DC143C` (crimson) | `#B8860B` (dark goldenrod) | Red to metallic gold |
| Update 6 | `#DC143C` (crimson) | `#BF953F` (old gold) | Current - warmer gold |

---

## Button Styles

### `.btn-primary`
- **Background:** Gradient from crimson to gold
- **Text:** White
- **Use for:** Main CTAs (Get Started, Forge Your Solution, Forge Ahead)

### `.btn-secondary`
- **Background:** Solid gold (#BF953F)
- **Text:** Dark (#1a1a2e)
- **Use for:** Secondary actions (Learn More)

### `.btn-outline`
- **Background:** Transparent
- **Border:** Gold
- **Text:** Gold
- **Use for:** Tertiary actions

### `.btn-ghost`
- **Background:** Semi-transparent white
- **Border:** Subtle white
- **Text:** White
- **Use for:** Minimal emphasis actions

---

## Navigation Styles

### `.nav-link`
- **Default:** 70% white opacity
- **Hover:** Gold color with underline animation
- **Active:** Gold color, bold, full underline
