const plugin = require("tailwindcss/plugin");

function DIG({ theme, config, addBase, addComponents, addUtilities }) {

    // console.log(">>>>>>>>>>>>>>>>", config()?.dig, config()?.dig?.something);

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
            backgroundColor: "#00ffff",
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
            colors: {
                brand: '#fff000'
            },
            backgroundColor: {},
            borderColor: {},
        },
    },
});