---
sidebar_position: 1
---

# Next.js

Install and configure The DIG for Next.js.

## Create project

```bash
npx create-next-app@latest
```

## Install Tailwind CSS with Next.js

### Install Tailwind CSS

Install `@tailwindcss/postcss` and its peer dependencies via npm.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

### Configure PostCSS Plugins

Create a `postcss.config.mjs` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### Import Tailwind CSS

Add an `@import tailwindcss` to `./app/globals.css` that imports Tailwind CSS.

```css
/* globals.css */
@import "tailwindcss";
```

## Initialize The DIG

Set up your project with The DIG configuration:

```bash
npx the-dig@latest init
```

This command will:

- Create a `.thedigrc.json` configuration file.
- Install necessary dependencies (`clsx`, `lucide-react`).
- Set up the basic project structure.

## Configure CSS

Configure your project's CSS with The DIG styles:

```bash
npx the-dig@latest config
```

This will update your global CSS file with The DIG styles and Tailwind CSS configuration.

## Add Components

You can now start adding components to your project.

```bash
npx the-dig@latest add Button
```
