/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-radial': {
          background: 'radial-gradient(50% 50% at 50% 50%, #D5F3FF 0%, #51B4E8 99.99%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

