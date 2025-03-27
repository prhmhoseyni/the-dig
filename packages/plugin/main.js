const plugin = require("tailwindcss/plugin");

const { colors, backgroundColor, borderColor } = require("./helpers/config");
const generateTheme = require("./helpers/generate-theme");
const themes = require("./helpers/themes");

const base = require("./dist/base") ?? {};
const components = require("./dist/components") ?? {};
const utilities = require("./dist/utilities") ?? {};

function DIG({ theme, config, addBase, addComponents, addUtilities }) {

    const options = config().dig || {};

    generateTheme({ options, themes, addBase });

    addBase(base);
    addComponents(components);
    addUtilities(utilities);
}

module.exports = plugin(DIG, {
    theme: {
        extend: {
            colors,
            backgroundColor,
            borderColor,
        },
    },
});