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
        darkMode: "auto",
    },
};

