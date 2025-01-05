/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'sans-serif'],
        chalkdustr: ['Chalkduster', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customColor: 'rgb(27, 67, 79)', // Custom color correctly placed
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
