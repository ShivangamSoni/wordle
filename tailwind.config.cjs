/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: "class",
    safelist: [
        // Dynamically used by RainbowCharacters Component
        {
            pattern:
                /text-(emerald|violet|amber|sky|red|rose|cyan|fuchsia|rose|blue)-(400|600)/,
        },
    ],
};
