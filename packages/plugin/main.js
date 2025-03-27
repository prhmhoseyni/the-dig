const plugin = require("tailwindcss/plugin");
const { colors, backgroundColor, borderColor } = require("./helpers/config");
const generateTheme = require("./helpers/generate-theme");
const themes = require("./helpers/themes");

function DIG({ theme, config, addBase, addComponents, addUtilities }) {

    const options = config().dig || {};

    generateTheme({ options, themes, addBase });

    addBase({
        "h1": {
            fontSize: theme("fontSize.2xl"),
        },
        "h2": {
            fontSize: theme("fontSize.xl"),
        },
    });

    addComponents({
        ".card": {
            backgroundColor: theme("colors.white"),
            borderRadius: theme("borderRadius.lg"),
            padding: theme("spacing.6"),
            boxShadow: theme("boxShadow.xl"),
        },
        ".type": {
            backgroundColor: "#ff0000",
        },
    });

    addUtilities({
        ".content-auto": {
            contentVisibility: "auto",
        },
    });
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