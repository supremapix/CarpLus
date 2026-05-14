/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59c00',
        dark: '#000000',
        surface: '#1A1A1A',
        accent: '#f59c00',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
