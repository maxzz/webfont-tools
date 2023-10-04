const colors = require("tailwindcss/colors");
const shadcnColors = require("./tailwind/colors");
console.log('shadcnColors', shadcnColors);

const qq = {
    primary: colors.zinc,
    secondary: colors.green,
    ...shadcnColors.colors,
}
console.log('qq', qq);

/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.zinc,
                secondary: colors.green,
                ...shadcnColors.colors,
            },
            gridTemplateColumns: {
                'fluid': 'repeat(auto-fit, minmax(6rem, 1fr))',
            },
        },
    },
    plugins: [],
};
