/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      colors: {
        accent: 'rgba(3,85,25,1)',
        second: 'rgba(161,124,2,1)',
      },
      fontFamily: {
        kode: ['"Kode Mono"', 'monospace'],
      },
      backgroundImage: {
        primary:
          'linear-gradient(90deg, rgba(3,85,25,1) 0%, rgba(161,124,2,1) 100%);',
        error:
          'linear-gradient(117deg, rgba(54,0,24,1) 0%, rgba(161,26,2,1) 100%);',
      },
      dropShadow: {
        white: '0 2px 1px rgba(250, 250, 250, 0.6)',
        'white-1/2': '0 0 5px rgba(250, 250, 250, 0.3)',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg) ' },
          to: { transform: 'rotate(360deg) ' },
        },
        '-rotate': {
          from: { transform: 'rotate(360deg) translate(-50%,-50%)' },
          to: { transform: 'rotate(0deg) translate(-50%,-50%)' },
        },
      },
      animation: {
        rotateBigSpinner: 'rotate 1900ms linear infinite',
        rotateSmallSpinner: '-rotate 900ms linear infinite',
      },
    },
  },
  plugins: [],
};
