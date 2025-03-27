const plugin = require("tailwindcss/plugin");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("the-dig"),
    ],
    dig: {
        something: {}
    }
};

