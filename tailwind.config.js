/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C853',
        secondary: '#6FBF4D',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

