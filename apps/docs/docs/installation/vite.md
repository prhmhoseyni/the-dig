---
sidebar_position: 2
---

# Vite.js

Install and configure The DIG for Vite.js.

## Create project

```bash
npm create vite@latest my-project
cd my-project
```

## Install Tailwind CSS with Vite.js

### Install Tailwind CSS

Install `tailwindcss` and `@tailwindcss/vite` via npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configure the Vite plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration (`vite.config.ts`).

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### Import Tailwind CSS

Add an `@import tailwindcss` to your CSS file that imports Tailwind CSS.

```css
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
