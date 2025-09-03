---
sidebar_position: 1
---

# Theming

The `the-dig` package ships with a built-in theming system based on **CSS custom properties**.
It provides **light** and **dark** modes out of the box, and allows developers to **customize generic variables** while keeping design tokens consistent.

## Theme Structure

### Generic Variables (✅ Customizable)

These define your **backgrounds**, **prose (text)**, and **brand** colors.
They are stored as RGB triplets for flexible usage with `rgb()` or `rgba()`.

Example:

```css
--dig-background-primary: 245, 245, 245;
--dig-prose-primary: 12, 14, 16;
--dig-brand: 62, 136, 193;
```

You can safely override these in your project to apply your own branding.

### Design Tokens (🚫 Do Not Change)

Design tokens are **fixed color definitions** that ensure consistency across components and **must not be changed**.

## Light and Dark Modes

The theme switches based on the `data-theme` attribute on your `<html>` element.

```html
<!-- Light mode -->
<html data-theme="light">
  ...
</html>
<!-- Dark mode -->
<html data-theme="dark">
  ...
</html>
```

Each mode defines a complete set of variables:

- **Light Mode:** bright backgrounds, dark text.
- **Dark Mode:** dark backgrounds, light text.
