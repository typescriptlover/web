const tailwindColors = require('tailwindcss/colors');
const colors = require('./tailwind.colors');

const fallbackFonts = (font) => [
   font,
   'system-ui',
   '-apple-system',
   'BlinkMacSystemFont',
   'Segoe UI',
   'Roboto',
   'Helvetica Neue',
   'Arial',
   'Noto Sans',
   'sans-serif',
   'Apple Color Emoji',
   'Segoe UI Emoji',
   'Segoe UI Symbol',
   'Noto Color Emoji',
];

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      fontFamily: {
         inter: fallbackFonts('Inter var'),
         karla: fallbackFonts('Karla'),
      },
      extend: {
         colors: {
            ...tailwindColors,
            ...colors,
         },
         keyframes: {
            wave: {
               '0%, 100%': { transform: 'rotate(-6deg)' },
               '50%': { transform: 'rotate(6deg)' },
            },
         },
         animation: {
            wave: 'wave 1s ease-in-out infinite',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
