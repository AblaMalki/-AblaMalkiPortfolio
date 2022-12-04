/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abla: ['Abla Sans', 'sans-serif'],
      },
      colors: {
        primary: '#05AFF2',
        primaryAlt: '#28BFFB',
        titleColor: '#222828',
        textColor: '#BAC1C4',
        textColrAlt: '#E9EBEC',
        offWhite: '#F5F5F5',
        dark: '#16151A',
      },
      boxShadow: {
        shade: '0 8px 24px hsla(197, 96%, 48%, 0.25)',
      },
    },
  },
  plugins: [],
};
