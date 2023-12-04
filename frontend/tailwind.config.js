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
        condominios: {
          primary: '#3da9fc',
          'primary-content': '#fffffe',
          secondary: '#094067',
          accent: '#ef4565',
          neutral: '#d8eefe',
          tertiary: '#90b4ce',
          'base-100': '#fffffe',
          'base-200': '#5f6c7b',
          info: '#d8eefe',
          'info-content': '#094067',
          success: '#e7fef3',
          'success-content': '#094067',
          warning: '#ce6d00',
          'warning-content': '#fffffe',
          error: '#feeeef',
          'error-content': '#ef4565',
        },
      },
      'dark',
      'cupcake',
    ],
    darkTheme: 'condominios', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
