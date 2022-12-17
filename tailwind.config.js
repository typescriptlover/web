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
         typography: (theme) => ({
            DEFAULT: {
               css: {
                  color: theme('colors.zinc.300'),
                  code: {
                     '@apply font-medium bg-base-900 text-white py-1 px-1.5 rounded-md':
                        '',
                  },
                  'code::before': {
                     content: '""',
                  },
                  'code::after': {
                     content: '""',
                  },
                  blockquote: {
                     '@apply text-base border-base-700': '',
                  },
                  'blockquote p:first-of-type::before': {
                     content: '',
                  },
                  'blockquote p:first-of-type::after': {
                     content: '',
                  },
               },
            },
         }),
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require('@tailwindcss/typography')],
};
