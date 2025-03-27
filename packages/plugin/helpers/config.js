const colors = {
    "primary": "rgb(var(--dig-text-primary))",
    "secondary": "rgb(var(--dig-text-secondary))",
    "hint": "rgb(var(--dig-text-hint))",
    "inverse": "rgb(var(--dig-text-inverse))",
    "link": "rgb(var(--dig-text-link))",

    "brand": "rgb(var(--dig-brand))",
    "info": "rgb(var(--dig-info))",
    "success": "rgb(var(--dig-success))",
    "warning": "rgb(var(--dig-warning))",
    "danger": "rgb(var(--dig-danger))",
    "gray": "rgb(var(--dig-gray))",
};

const backgroundColor = {
    "primary": "rgb(var(--dig-bg-primary))",
    "secondary": "rgb(var(--dig-bg-secondary))",
    "dialog": "rgb(var(--dig-bg-dialog))",
    "inverse": "rgb(var(--dig-bg-inverse))",

    "brand": "rgb(var(--dig-brand))",
    "brand-light": "color-mix(in srgb, rgb(var(--dig-brand)), var(--dig-color-mix-light))",

    "info": "rgb(var(--dig-info))",
    "info-light": "color-mix(in srgb, rgb(var(--dig-info)), var(--dig-color-mix-light))",

    "success": "rgb(var(--dig-success))",
    "success-light": "color-mix(in srgb, rgb(var(--dig-success)), var(--dig-color-mix-light))",

    "warning": "rgb(var(--dig-warning))",
    "warning-light": "color-mix(in srgb, rgb(var(--dig-warning)), var(--dig-color-mix-light))",

    "danger": "rgb(var(--dig-danger))",
    "danger-light": "color-mix(in srgb, rgb(var(--dig-danger)), var(--dig-color-mix-light))",

    "gray": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 88%)",
    "gray-light": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 88%)",

    "gray-700": "rgb(var(--dig-gray))",
    "gray-600": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 25%)",
    "gray-500": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 65%)",
    "gray-400": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 88%)",
    "gray-300": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 92%)",
    "gray-200": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 95%)",
    "gray-100": "color-mix(in srgb, rgb(var(--dig-gray)), var(--dig-color-mix-gray) 97%)",

    "white": "rgba(255, 255, 255, 1)",
    "white-80": "rgba(255, 255, 255, 80%)",
    "white-48": "rgba(255, 255, 255, 48%)",
    "white-32": "rgba(255, 255, 255, 32%)",
    "white-24": "rgba(255, 255, 255, 24%)",
    "white-16": "rgba(255, 255, 255, 16%)",
    "white-12": "rgba(255, 255, 255, 12%)",
    "white-8": "rgba(255, 255, 255, 08%)",

    "black": "rgba(0, 0, 0, 1)",
    "black-80": "rgba(0, 0, 0, 80%)",
    "black-48": "rgba(0, 0, 0, 48%)",
    "black-32": "rgba(0, 0, 0, 32%)",
    "black-24": "rgba(0, 0, 0, 24%)",
    "black-16": "rgba(0, 0, 0, 16%)",
    "black-12": "rgba(0, 0, 0, 12%)",
    "black-8": "rgba(0, 0, 0, 08%)",
};

const borderColor = {};

module.exports = { colors, backgroundColor, borderColor };