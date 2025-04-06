/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                pinar: "var(--font-pinar)",
                vazirmatn: "var(--font-vazirmatn)",
                geist: "var(--font-geist)",
            },
        },
    },
    plugins: [],
};
