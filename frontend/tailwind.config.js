/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3da9fc',
          secondary: '#90b4ce',
          tertiary: '#ef4565',
          stroke: '#094067', // headline, stroke
          neutral: '#d8eefe', // light blue background
          gray: '#5f6c7b',
          'base-100': '#fffffe',
        },
      },
      'dark',
      'cupcake',
    ],
    darkTheme: 'mytheme', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
