/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            textShadow: {
                'outline': '2px 2px 0 rgba(241, 245, 249, 1), -2px -2px 0 rgba(241, 245, 249, 1), 2px -2px 0 rgba(241, 245, 249, 1), -2px 2px 0 rgba(241, 245, 249, 1)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow-outline': {
                    textShadow: '2px 2px 0 rgba(241, 245, 249, 1), -2px -2px 0 rgba(241, 245, 249, 1), 2px -2px 0 rgba(241, 245, 249, 1), -2px 2px 0 rgba(241, 245, 249, 1)',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
