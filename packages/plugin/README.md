# The DIG

**The Dig** is a powerful Tailwind CSS plugin designed specifically for building modern Persian (Farsi) web interfaces with ease. It provides a set of utilities and components that are optimized for RTL layouts and Persian typography, making it easier to create beautiful and consistent designs.

## 🚀 Features

- **RTL Support**: Built-in support for right-to-left (RTL) layouts, perfect for Persian language websites.
- **Custom Typography**: Tailored Persian fonts and typography settings to give your site a beautiful and unique look.
- **Pre-designed Components**: A set of responsive, customizable components like buttons, cards, and forms that match Persian design aesthetics.
- **Color Palettes**: Special Persian-inspired color schemes that fit perfectly with your projects.

## 📦 Installation

Install the `the-dig` package via NPM:

```bash
npm install the-dig --save-dev
```

## 🔧 Setup

Add `the-dig` to your Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {
    plugins: [require("the-dig")],
}

```

Then, make sure to include the Tailwind CSS directives in your main stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can customize your application theme:

```javascript
// tailwind.config.js
module.exports = {
    plugins: [require("the-dig")],
    dig: {
        darkMode: "class", // "class" or "auto"
        themes: {
            light: {
                "brand": "#1685C5",
            },
            dark: {
                "brand": "#092C44",
            },
        },
    },
};
```


## 🧩 Usage
Start building your Persian interfaces using our utility classes and components:

```html
<h1 class="text-heading1 underline">
    سلام، این یک متن نمونه است!
</h1>

```

## 📘 Documentation
Check out the **[full documentation](https://github.com/prhmhoseyni/the-dig)** for detailed information on all the available utilities, components, and customization options.

## 🤝 Contribution
We welcome contributions! If you want to help improve The DIG, please check out our Contributing Guide to get started.

## 📄 License
The DIG is open-source software licensed under the MIT License.