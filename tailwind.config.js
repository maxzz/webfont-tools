const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.zinc,
                secondary: colors.green,
            },
            gridTemplateColumns: {
                'fluid': 'repeat(auto-fit, minmax(6rem, 1fr))',
            },
        },
    },
    plugins: [],
};
