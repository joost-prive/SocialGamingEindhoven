/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00FF87',
        'accent-dark': '#00CC6F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
