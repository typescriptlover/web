const tailwindColors = require('tailwindcss/colors');
const colors = require('./tailwind.colors');

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      fontFamily: {
         inter: [
            'Inter var',
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
         ],
         karla: [
            'Karla',
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
         ],
      },
      extend: {
         colors: {
            ...tailwindColors,
            ...colors,
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
