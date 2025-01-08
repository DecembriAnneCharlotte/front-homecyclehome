/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1rem', 
        '2xl': '2rem', 
      },
      fontFamily: {
        rye: ['Rye', 'serif'],
      },
    },
  },
  plugins: [],
};
