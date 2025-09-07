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
‍
```css
/** :::: design tokens: Please don't change design tokens :::: */
--dig-gray-100: #333333;
--dig-gray-200: #373737;
--dig-gray-300: #3d3d3d;
--dig-gray-400: #464646;
--dig-gray-500: #767676;
--dig-gray-600: #cacaca;
--dig-gray-700: #ffffff;

--dig-color-mix-prose: #ffffff 35%;

--dig-color-mix-hover: #ffffff 10%;
--dig-color-mix-active: #ffffff 15%;

--dig-color-mix-light: #000000 90%;
--dig-color-mix-light-hover: #000000 85%;
--dig-color-mix-light-active: #000000 80%;

--dig-color-mix-gray: #000000;
```

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
